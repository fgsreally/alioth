export function getQuery(key: string) {
  return new URLSearchParams(location.href.split('?')[1] || '').get(key)
}
