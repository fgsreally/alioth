export function getQuery(key: string) {
  return new URLSearchParams(location.search).get(key)
}
