import { Button } from './components/ui/button'
import { Input } from '@/components/ui/input'

export const shadcn_btn = {
  alioth: 'widget',
  data: {
    category: 'shadcn',
    key: 'shadcn_button',
    component: Button,
    meta: {
      props: {
        text: {
          _component: 'Input',
          _formItem: { label: '文字' },
        },
      },
      events: {
        onClick: {
          _component: 'Input',
          _formItem: { label: '绑定事件' },
        },
      },
    },
  },

}

export const shadcn_input = {
  alioth: 'widget',
  data: {
    category: 'shadcn',
    key: 'shadcn_input',
    component: Input,
    meta: {
      props: {
        text: {
          _component: 'Input',
          _formItem: { label: '文字' },
        },
      },
      events: {
        onClick: {
          _component: 'Input',
          _formItem: { label: '绑定事件' },
        },
      },
    },
  },

}
