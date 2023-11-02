import { defineConfig } from 'vitepress'
const ogDescription = '完全自定义的无头低代码方案'

const base = process.env.NODE_ENV === 'production' ? '/alioth/' : ''

export default defineConfig({
  title: '玉衡',
  description: ogDescription,
  base,
  head: [
    ['link', { rel: 'icon', href: `${base}alioth.png` }],

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
      { text: '指南', link: '/core/intro', activeMatch: '/core/' },
      // {
      //   text: 'API',
      //   link: '/api/helper',
      //   activeMatch: '/api/',
      // },
      // { text: '常见问题', link: '/question/', activeMatch: '/question/' },
      // { text: '框架封装', link: '/pack/', activeMatch: '/pack/' },

    ],

    sidebar: {

      '/': [
        {
          text: '核心',
          collapsed: true,
          items: [
            {
              text: '介绍',
              link: '/core/intro',
            },
            {
              text: '核心',
              link: '/core/core',
            },
            {
              text: '节点',
              link: '/core/node',
            },
            {
              text: '预设',
              link: '/core/preset',
            },
            {
              text: '功能模块',
              link: '/core/function',
            },
            {
              text: '渲染引擎',
              link: '/core/engine',
            },
            {
              text: 'phecda-vue',
              link: '/core/phecda-vue',
            },
            {
              text: '部署',
              link: '/core/deploy',
            },
          ],
        },
        {
          text: '案例',
          collapsed: false,
          items: [
            {
              text: '看见须知',
              link: '/example/must-know',
            },
            {
              text: '快速上手',
              link: '/example/quick-start',
            },
            {
              text: '预设',
              link: '/example/preset',
            },
            {
              text: '功能模块',
              link: '/example/function',
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
      '/blog': [
        {
          text: '设计思路',
          collapsed: true,
          items: [
            {
              text: '开始之前',
              link: '/blog/index',
            },
            {
              text: '从哪儿开始',
              link: '/blog/question',
            },
            {
              text: '特性',
              link: '/blog/feature',
            },

            {
              text: '自定义',
              link: '/blog/custom',
            },
            {
              text: '自定义平台',
              link: '/blog/platform',
            },
            {
              text: '进展',
              link: '/blog/changelog',
            },
          ],
        },
      ],

    },
  },
})
