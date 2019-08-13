//配置整个博客站点的所有侧边栏
const tools = require('../../utils/tools')

/**
 * 侧边栏的配置（顺序无所谓）
 * utils.getSidebar('Java基础', filehelper.getFileName(docs+"/Java/Basic/"), false),
 */
module.exports = {
    // 文件夹名称: sidebar 对象。两边的路径一定要对应
    "/Git实战手册/": tools.getSidebar('Git实战手册', tools.getFileName(tools.docsPath + "/Git实战手册/"), true),
    "/ES6/": tools.getSidebar('ES6', tools.getFileName(tools.docsPath + "/ES6/"), true),

    // 一定要放在最后！！！
    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
    // '/': [''] // 此处选择禁用
}
