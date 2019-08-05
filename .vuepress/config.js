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
    ]
    
}