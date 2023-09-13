export function useDocumentClick(cb: (e?: MouseEvent) => void) {
  onMounted(() => {
    document.addEventListener('click', cb)
  })
  onBeforeMount(() => {
    document.removeEventListener('click', cb)
  })
}
