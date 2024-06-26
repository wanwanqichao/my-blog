import { defineConfig } from 'vitepress'
// import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import nav from './router/useNav'
import sidebar from './router/useSidebar'
export default defineConfig({
    lang: 'en-US',
    title: 'Tom的博客',
    description: '这是tom的博客',
    base: '/my-blog/',
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
        outline: [2, 4],
        outlineTitle: '大纲',
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
        search: {
            provider: 'algolia',
            options: {
                apiKey: '27558fb63f6d718038f9021fc6c8a11d',
                indexName: 'wanwanqichaoio',
                appId: '4WK17UP3BB'
            }
        },
        // algolia: {
        //     apiKey: '27558fb63f6d718038f9021fc6c8a11d',
        //     indexName: 'wanwanqichaoio',
        //     appId: '4WK17UP3BB'
        // },
        socialLinks: [{ icon: "github", link: "https://github.com/wanwanqichao/myBlog" }],
    },
    vite: {
        plugins: [
            // vue(),
            // AutoImport({
            //   imports: [
            //         'vue',
            //         'vue-router',
            //     'pinia',
            //     {
            //       'naive-ui': [
            //         'useDialog',
            //         'useMessage',
            //         'useNotification',
            //         'useLoadingBar'
            //       ]
            //     }
            //   ]
            // }),
            // Components({
            //   resolvers: [NaiveUiResolver()]
            // })
          ]
    },
    markdown: {
        image: {
            // 默认禁用图片懒加载
            lazyLoading: true
        }
    }
})
