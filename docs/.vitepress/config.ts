import { defineConfig } from 'vitepress'
export default defineConfig({
  title: '码路芽子', // 博客的标题
  description: 'mlyz 的个人博客', // 博客的介绍
  base: '/blog/', // 如果想用 https://mlyz.wdy.github.io/blog/ 访问，那么这句话必填
  themeConfig: {
    logo: "/images/logo.png", // 页面上显示的logo
    nav: [
      { text: "vue", link: "/articles/vue/上传素材到COS" },
      { text: "uniapp", link: "/articles/uniapp/一键登录" },
      {
        text: '博客文档',
        items: [
          { text: 'JavaScript 核心系列', link: '/articles/javaScript-core/构造函数、原型、原型链' },
          { text: '其他', link: '/articles/other/nvm管理node' },
        ]
      }
    ],
    sidebar: { // 侧边栏，可以分组
      "/articles/vue/": [
        {
          text: "基础",
          items: [
          ],
        },
        {
          text: "代码段",
          items: [
            {
              text: "上传素材到COS",
              link: "/articles/vue/上传素材到COS",
            },
            {
              text: "文件下载",
              link: "/articles/vue/文件下载",
            },
          ],
        },
      ],
      "/articles/uniapp/": [
        {
          text: "基础",
          items: [
          ],
        },
        {
          text: "代码段",
          items: [
            {
              text: "一键登录",
              link: "/articles/uniapp/一键登录",
            }
          ],
        },
      ],
      "/articles/javaScript-core/": [
        {
          text: "基础",
          items: [
            {
              text: "1. 构造函数、原型、原型链",
              link: "/articles/javaScript-core/构造函数、原型、原型链",
            },
            {
              text: "2. 执行上下文和执行上下文栈",
              link: "/articles/javaScript-core/执行上下文和执行上下文栈",
            },
            {
              text: "3. this的指向",
              link: "/articles/javaScript-core/this的指向",
            },
          ],
        },
      ],
    },
    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: '...',
    //     apiKey: '...',
    //     indexName: '...'
    //   }
    // },
    // algolia: {
    //   apiKey: '改成你自己的 apiKey 值',
    //   indexName: '改成你自己的 indexName 值',
    //   appId: '改成你自己的 appId 值'
    // },
    // lastUpdated: true,
    socialLinks: [{ icon: "github", link: "https://github.com/wanwanqichao/myBlog" }], // 可以连接到 github
  },
})
