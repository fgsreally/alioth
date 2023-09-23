import colors from 'colors'

export function log(content: string, color = 'green') {
  // eslint-disable-next-line no-console
  console.log(colors[color](`[Alioth]: ${content}`))
}
