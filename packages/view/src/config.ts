import type { Container } from '@/engine/init'

export const YUHENG_CONFIG = {
  addBlock: undefined,
  register: undefined,
  renderer: undefined,
  code: undefined,
  presets: [] as string[],
  container: {} as Partial<Container>,
  previewConfig: [
    {
      'key': 'local',
      'type': 'preview',
      'label': '本地组件',
      'container-width': '210px',
      'container-height': '310px',
      'width': 180,
      'height': 280,

    }, {
      key: 'lib',
      type: 'text',
      label: '库组件',
    },

  ] as {
    key: string
    type: string
    label: string
    [other: string]: any
  }[],
}
