import colors from 'colors'

export function log(content: string, color = 'green', prefix = 'Alioth') {
  //
  // @ts-expect-error miss types
  // eslint-disable-next-line no-console
  console.log(colors[color](`[${prefix}]: ${content}`))
}
