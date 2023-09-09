export function download(fileName: string, content: string) {
  const blob = new Blob([content])
  const saveLink = document.createElement('a')
  saveLink.href = URL.createObjectURL(blob)
  saveLink.download = fileName
  saveLink.click()
  URL.revokeObjectURL(saveLink.href)
}
