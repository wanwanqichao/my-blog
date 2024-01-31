import { defineConfig } from 'vitepress'
import useNav from './useNav'
import useSidebar from './useSidebar'
export default defineConfig({
    lang: 'en-US',
    title: '码路芽子', // 博客的标题
    description: 'mlyz 的个人博客', // 博客的介绍
    base: '/myBlog/',
    lastUpdated: true,
    cleanUrls: true,
    // head: [
    // ['meta', { name: 'theme-color', content: '#3c8772' }],
    // [
    // 'script',
    // {
    // src: 'https://cdn.usefathom.com/script.js',
    // 'data-site': 'AZBRSFGG',
    // 'data-spa': 'auto',
    // defer: ''
    // }
    // ]
    // ],
    themeConfig: {
        logo: "/images/logo.png", // 页面上显示的logo
        nav: useNav(),
        sidebar: useSidebar(),
        // search: {
        //     provider: 'algolia',
        //     options: {
        //         appId: '你的appid',
        //         apiKey: '你的APIkey，注意是搜索的key',
        //         indexName: '你的indexName',
        //     }
        // },
        algolia: {
            apiKey: '改成你自己的 apiKey 值',
            indexName: '改成你自己的 indexName 值',
            appId: '改成你自己的 appId 值'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/wanwanqichao/myBlog" }], // 可以连接到 github
    },
})