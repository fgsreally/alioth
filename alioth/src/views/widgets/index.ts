import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import D from './D.vue'
export function init() {
  if (!import.meta.env.DEV)
    return
  const registerWidget = window.$alioth_registerWidget
  registerWidget('lib', 'test2', markRaw(B), {
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
  })

  registerWidget('helper', 'border', markRaw(C), {
    select: false,

    meta: {
      // show: false,
      props: [],
      slots: [],

    },
  })

  registerWidget('lib', 'test3', D, {
    props: {
      config: {
        _component: 'FormConf',

      },
    },
    meta: {

      slots: [],
    },
  })

  // registerWidget('local', 'dialog', 'mask', [ElDialog, C], { isFixed: true })
}
