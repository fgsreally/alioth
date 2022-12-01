export type LoadPkg =
  | {
      type: "JS";
      category: "component" | "module";
      isLocal: boolean;
      url: string; //for remote
      isShare?: boolean;

      key: string;
      imports: string;
      version?: string;
      label?: string;
    }
  | {
      type: "assets";
      isLocal: boolean;
      isShare?: boolean;
      url: string;
      version?: string;
      label?: string;
    };

export type viewServices = { [key in string]: string };
