---
title: "npm相关"
date: "2019-12-04"
permalink: "npm"
---
## npm install
**npm install --save 、--save-dev 、-D、-S 的区别与NODE_ENV的配置**
 下列用 <==> 表示等价于

 ```sh
 #使用 `npm i` 安装package.json里的依赖时，两部分的包都会pull下来
npm i <==> npm install

#项目（运行时、发布到生产环境时）依赖；例：antd , element,react...
npm i --save <packname>  <==> -S

#工程构建（开发时、“打包”时）依赖 ；例：xxx-cli , less-loader , babel-loader...
npm i --save-dev <packname>  <==> -D

#仅会拉取dependencies中的依赖
npm i --prod <=> npm i --production

npm run start <=> npm start # 对应"scripts"里的"start"命令
```

对应关系如下（至于我们啥时候用--save、啥时候用--save-dev 感觉是个规范问题，用反了项目一样可以跑起来（对于安装依赖正确时），但会给其他看你项目的人带来误解、可能会导致一些bug的出现，还有一些配置的错乱等）

![Alt text](./npmImg/page.jpg)

#### package.json=>script命令中设置
设置NODE_DEV=production时 //仅会拉取dependencies中的依赖 (注意等号两边没空格)
```sh
#window => cmd ：
set NODE_ENV=production && xxxx

# mac => shell  :
NODE_ENV=production 空格 xxxx
```
