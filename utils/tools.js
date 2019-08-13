
/**
 * 获取一个目录下的所有文件名
 * 使用方法：var filehelper = require('./getFilenames.js')
 * filehelper.getFileName("/Users/fangzheng/JavaDev/blog/docs/BigData/Flume/")
 */

//fs模块(系统内置模块 主要用来操作文件)
const fs = require('fs');
// 排除检查的文件
const path = require("path");
//执行一次dirname 将目录定位到docs的上级目录，也就是博客根目录 _dirname: 当前模块的目录名。
const rootPath = path.dirname(__dirname);//wusp-blog 目录
let excludes = ['.DS_Store'];

module.exports = {
    //文档存放 目录
    docsPath:rootPath,
    /**
     * @description 获取一个目录下的所有文件名
     * @param rPath 需要获取文件名称的文件夹
     * @returns {Array}
     */
    getFileName : function(rPath){
        let fileNames = [];
        // readdirSync 同步读取文件
        fs.readdirSync(rPath).forEach(file =>{
            if(excludes.indexOf(file) < 0){
                let fullPath = rPath + "/" + file;
                // statSync 同步读取文件信息 直接返回文件信息数组
                let fileInfo = fs.statSync(fullPath)
                if(fileInfo.isFile()){
                    if(file === "README.md"){
                        file = '';
                    }else{
                        file = file.replace('.md','');
                    }
                    fileNames.push(file);
                }
            }
        })
        // console.log(fileNames,"====children-array");
        fileNames.sort();//排序
        return fileNames;
    },
    /**
     * 将传递的一些参数，转换成.vuepress需要的 侧边栏对象格式
     * @param title      标题
     * @param children   子导航
     * @param collapsable 是否可折叠(上下折叠)
     * @param sidebarDepth 嵌套的标题链接深度
     */
    getSidebar : function(title,children = [''], collapsable = true, sidebarDepth = 3) {
        let arr = [];
        arr.push({
            title,
            children,
            collapsable,
            sidebarDepth
        })
        return arr;
    }
}
