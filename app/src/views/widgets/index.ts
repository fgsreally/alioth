import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import D from './D.vue'
export function addWiget() {
  const registerWidget = window.$alioth_widget
  registerWidget({
    category: 'text',
    key: 'test2',
    component: markRaw(B),
    meta: {
      props: {
        modelValue: {
          _component: 'Input',
          _formItem: { label: '绑定数据' },

        },
      },
      events: {
        onClick: {
          _component: 'Input',
          _formItem: { label: '绑定事件' },
        },
      },
      meta: {
        props: [{
          name: 'modelValue',
          type: 'string',
          required: false,
          description: '这是个测试组件',
        }],
        slots: ['default'],
        events: [

        ],
      },
    },
  })

  // registerWidget('local', 'dialog', 'mask', [ElDialog, C], { isFixed: true })
}
