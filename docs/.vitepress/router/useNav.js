const getFirstlink = url => {
    const [level1, levle2] = url.split('/')
    const modules = require(`./sidebar/${level1}/${levle2}.js`)
    return modules.default[0].items[0].link
}

export default [
    {
        text: '随笔', link: '/life/index'
    },
    {
        text: "开发记录", items: [
            { text: 'vue', link: getFirstlink("devRecord/vue/") },
            { text: 'react', link: getFirstlink('devRecord/react/') },
            { text: '原生js', link: getFirstlink('devRecord/javaScript/')  },
            { text: '其他', link: getFirstlink('devRecord/other/') },
        ]
    },
    {
        text: '待看好文', items: [
            { text: 'vue', link: getFirstlink('articles/vue/') },
            { text: 'react', link: getFirstlink('articles/react/') },
            { text: '原生js', link: getFirstlink('articles/javaScript/') },
            { text: '其他', link: getFirstlink('articles/other/') },
        ]
    },
    {
        text: '收藏夹', items: [
            { text: 'vue', link: getFirstlink('favorite/vue/') },
            { text: 'react', link: getFirstlink('favorite/react/') },
            { text: '原生js', link: getFirstlink('favorite/javaScript/') },
            { text: '其他', link: getFirstlink('favorite/other/') },
        ]
    },
    {
        text: '做好饭', link: '/cook/index'
    },
]