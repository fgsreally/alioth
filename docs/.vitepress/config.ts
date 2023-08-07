import { defineConfig } from 'vitepress'
const ogDescription = '完全自定义的无头低代码方案'

const base = process.env.NODE_ENV === 'production' ? '/alioth/' : ''

export default defineConfig({
  title: '玉衡',
  description: ogDescription,
  base,
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.ico` }],

  ],

  // vue: {
  //   reactivityTransform: true,
  // },
  lastUpdated: true,
  themeConfig: {
    logo: '/alioth.png',
    editLink: {
      pattern: 'https://github.com/fgsreally/alioth/tree/master/docs/:path',
      text: '编辑本页',
    },
    lastUpdatedText: '最近更新时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/fgsreally/alioth' }],

    footer: {
      message: 'Released the MIT License.',
    },

    nav: [
      { text: '指南', link: '/guide/quick-start', activeMatch: '/guide/' },
      {
        text: 'API',
        link: '/api/helper',
        activeMatch: '/api/',
      },
      // { text: '常见问题', link: '/question/', activeMatch: '/question/' },
      // { text: '框架封装', link: '/pack/', activeMatch: '/pack/' },

    ],

    sidebar: {
      '/': [
        {
          text: '设计思路',
          collapsed: true,
          items: [
            {
              text: '开始之前',
              link: '/why/index',
            },
            {
              text: '从哪儿开始',
              link: '/why/question',
            },
            {
              text: '特性',
              link: '/why/feature',
            },

            {
              text: '自定义',
              link: '/why/custom',
            },
          ],
        },
        {
          text: '入门',
          collapsed: false,
          items: [

            {
              text: '快速上手',
              link: '/guide/quick-start',
            },
          ],
        },

        {
          text: '指南',
          collapsed: false,
          items: [
            {
              text: '注册器',
              link: '/guide/register',
            },
            {
              text: '预设',
              link: '/guide/preset',
            },
            {
              text: '部署',
              link: '/guide/deploy',
            },

          ],
        },

      ],
      '/api/': [
        {
          text: '主应用',
          collapsible: true,
          items: [
            {
              text: 'alioth',
              link: '/api/main',
            },

            {
              text: '生命周期',
              link: '/api/lifecycle',
            },

            {
              text: 'vue',
              link: '/api/vue',
            },
          ],
        },
        {
          text: '子应用',
          collapsible: true,
          items: [
            {
              text: 'helper',
              link: '/api/helper',
            },
            {
              text: 'vite',
              link: '/api/vite',
            },
            {
              text: 'webpack',
              link: '/api/webpack',
            },

          ],
        },
      ],
      '/question': [],
      '/pack/': [

      ],
    },
  },
})
