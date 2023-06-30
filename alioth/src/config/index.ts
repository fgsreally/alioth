export const presets: Record<string, string[]> = {
  'element-plus': import.meta.env.DEV
    ? [
        'http://localhost:4001/widget.mjs',
        'http://localhost:4001/view.mjs',
        'http://localhost:4001/style.css',
      ]
    : [],
}
