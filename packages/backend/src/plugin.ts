import { Plugin } from 'vite';
import axios from "axios";
import URL from "url";
import colors from "colors";
import { isRelative, isRemoteEntry, isCdn, ESM_SH_URL } from './utils';
export function remoteBundle(isBundleless: boolean = false): Plugin {
  let REMOTE_PREFIX = "/@virtual:remote-bundle/";

  return {
    name: "remote-bundle",
    enforce: "pre",
    resolveId: (id, i) => {

      if (isBundleless && !isRelative(id) && !isCdn(id) && !isRemoteEntry(id)) {
        return `${ESM_SH_URL}*${id}}`
      }

      if (i && i.startsWith(REMOTE_PREFIX) && isRelative(id)) {
        id = URL.resolve(i.replace(REMOTE_PREFIX, ""), id);
      }
      if (id.startsWith("view:http")) {
        return REMOTE_PREFIX + id.slice(5);
      }
    },
    async load(id: string) {
      try {
        if (id.startsWith(REMOTE_PREFIX)) {
          let url = id.replace(REMOTE_PREFIX, "");
          try {
            let { data: code } = await axios.get(url);

            return code;
          } catch (e) {
            console.warn(
              colors.yellow(`${url} was not found returns an empty module`)
            );
            return "";
          }
        }
      } catch (e) {
        throw new Error(`${id}`);
      }
    },
  };
}
