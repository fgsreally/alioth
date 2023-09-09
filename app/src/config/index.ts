export const presets: Record<string, string[]> = {
  'element-plus': import.meta.env.DEV
    ? [
        'http://localhost:4001/index.mjs',
        'http://localhost:4001/style.css',
      ]
    : [],
}

export enum ERROR_EVENT {
  FILTER = 'FILTER',
  PROPS = 'PROPS',
}
