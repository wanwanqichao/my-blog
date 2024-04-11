import { defineConfig } from 'vitepress'
import nav from './router/useNav'
import sidebar from './router/useSidebar'
export default defineConfig({
    lang: 'en-US',
    title: 'Tom的博客',
    description: '这是tom的博客',
    base: '/',
    srcDir: 'src',
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['meta', { name: 'theme-color', content: '#3c8772' }],
        [
            'script',
            {
                src: 'https://cdn.usefathom.com/script.js',
                'data-site': 'AZBRSFGG',
                'data-spa': 'auto',
                defer: ''
            }
        ]
    ],
    themeConfig: {
        logo: "/images/logo.png",
        nav,
        sidebar,
        outlineTitle: '本页目录',
        darkModeSwitchLabel: '切换主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            message: '万有引力',
            copyright: 'Copyright © 2019-present tom'
        },
        // search: {
        //     provider: 'algolia',
        //     options: {
        //         appId: '你的appid',
        //         apiKey: '你的APIkey，注意是搜索的key',
        //         indexName: '你的indexName',
        //     }
        // },
        algolia: {
            apiKey: '4WK17UP3BB',
            indexName: '27558fb63f6d718038f9021fc6c8a11d',
            appId: 'wanwanqichaoio'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/wanwanqichao/myBlog" }],
    },
    markdown: {
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        }
    }
})