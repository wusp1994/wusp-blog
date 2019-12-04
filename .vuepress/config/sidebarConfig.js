//配置整个博客站点的所有侧边栏
const tools = require('../../utils/tools')

/**
 * 侧边栏的配置（顺序无所谓）
 * utils.getSidebar('Java基础', filehelper.getFileName(docs+"/Java/Basic/"), false),
 */
module.exports = {
    // 文件夹名称: sidebar 对象。两边的路径一定要对应
    "/Git实战手册/": [tools.getSidebar('Git实战手册', tools.getFileName(tools.docsPath + "/Git实战手册"), true)],
    "/ES6/": [
        tools.getSidebar('数据类型', tools.formatSidebarChildren(tools.docsPath + "/ES6/数据类型"), true),
        tools.getSidebar('数组', tools.formatSidebarChildren(tools.docsPath + "/ES6/数组"), true),
        tools.getSidebar('对象', tools.formatSidebarChildren(tools.docsPath + "/ES6/对象"), true),
        tools.getSidebar('函数', tools.formatSidebarChildren(tools.docsPath + "/ES6/函数"), true),
        tools.getSidebar('ES6的重难点', tools.formatSidebarChildren(tools.docsPath + "/ES6/ES6的重难点"), true)
    ],
    "/服务器相关/": [
        tools.getSidebar('nginx', tools.formatSidebarChildren(tools.docsPath + "/服务器相关/nginx"), true),
    ],
    "/nodeJs/": [
        tools.getSidebar('基础知识', tools.formatSidebarChildren(tools.docsPath + "/nodeJS/基础知识"), true),
    ],
    // 一定要放在最后！！！
    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
    // '/': [''] // 此处选择禁用
}
