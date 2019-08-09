const {
    markdownConf,
    themeConf,
    localesConf,
} = require('./config/')

module.exports = {
    port:8200,
    locales: localesConf,
    markdown: markdownConf,
    themeConfig: themeConf,
    plugins:[
        require('./plugins/my-router'),
        require('./plugins/my-loader'),
        require('vuepress-plugin-viewer'),
        '@vuepress/back-to-top',
        [
            '@vuepress/google-analytics', { 'ga': 'UA-124601890-1' }
        ],
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: "发现页面有新内容",
                    buttonText: "刷新"
                }
            }
        ],
    ]
    
}