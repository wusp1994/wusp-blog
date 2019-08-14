const sidebarConfig = require('./sidebarConfig')
const navConfig = require('./navConfig')
// console.log(sidebarConfig,"=====sidebarConfig")

module.exports = {
    //Git 仓库地址
    repo: 'wusp1994/wusp-blog',
    navbar: true,
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '更新于',
    //自动生成
    sidebar:sidebarConfig,
    //顶部导航
    nav:navConfig,
    //显示所有页面的标题链接
    displayAllHeaders: false
};
