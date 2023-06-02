import { setCDN, setWasm } from 'shiki'
import MarkdownIt from 'markdown-it'
import { highlightLinePlugin } from './plugins/highlightLine'
import { highlight } from './highlight'
let md: MarkdownIt
export async function initMD() {
  if (md)
    return md
  setCDN('https://unpkg.com/shiki/')
  const res = await fetch('https://unpkg.com/shiki/dist/onig.wasm')
  const buffer = await res.arrayBuffer()
  setWasm(buffer)
  md = MarkdownIt({
    html: true,
    linkify: true,
    highlight:

            (await highlight()),

  })
  md.use(highlightLinePlugin)
  return md
}
