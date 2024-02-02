export const nav = [
    {
        text: '随笔', link: '/life'
    },
    {
        text: "开发记录", items: [
            { text: 'vue', link: "/devRecord/vue/" },
            { text: 'react', link: '/devRecord/react/' },
            { text: '原生js', link: '/devRecord/js/'  },
            { text: '其他', link: '/devRecord/other/' },
        ]
    },
    {
        text: '待看好文', items: [
            { text: 'vue', link: '/article/vue/' },
            { text: 'react', link: '/article/react/' },
            { text: '原生js', link: '/article/js/' },
            { text: '其他', link: '/article/other/' },
        ]
    },
    {
        text: '收藏夹', items: [
            { text: 'vue', link: '/favorite/vue/' },
            { text: 'react', link: '/favorite/react/' },
            { text: '原生js', link: '/favorite/js/' },
            { text: '其他', link: '/favorite/other/' },
        ]
    },
    {
        text: '做好饭', link: '/cook/index'
    },
]