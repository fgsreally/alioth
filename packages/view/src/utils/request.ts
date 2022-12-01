import { debounce } from 'lodash-es'

export function updateDependence(dependence: string[]) {
  fetch('/__yuheng_context', {
    method: 'POST',
    body: JSON.stringify(dependence),
  }).catch(() => {
    ElMessage.warning('依赖更新失败')
  })
}

const fetchCode = debounce((page: string, code: string) => {
  fetch('/__yuheng_code', {
    method: 'POST',
    body: JSON.stringify({
      pageName: page,
      code,
    }),
  })
}, 4000)

export function updatePageCode(page: string, code: string) {
  fetchCode(page, code)
}
