---
title: "git常用操作"
date: "2019-08-12"
permalink: "git_steps"
---
>本篇记录了一些git常用操作的命令集合
::: warning
git命令需要在git项目的目录下运行命令(windows下shift+右键此处打开命令)
:::
### (1)git本地文件夹的删除和添加
```sh
#windows命令
rm -r hello.py  #删除。注：文件和文件夹 都可以用 tab 键补全路径
git add .       #添加到本地git
git commit -m 'remove hello.py'  #提交到本地git
```
### （2）git删除远程仓库的文件并用.gitignore忽略提交此文件
我向远程仓库提交了target目录，发现没必要提交target目录。
```sh
#windows命令
git rm -r --cached target      #删除本地缓存
git commit -m "delete target/"  #提交到本地git   
git push origin master   #推送到远端 master分支

vi .gitignore  #1，新增或者修改文件.gitignore，2，输入 target/，3，保存退出 1,esc  2,:wq
#添加到本地，提交到本地并推送远端
git add .gitignore
git commit -m "write .gitignore"
git push origin master
```

### （3）branch基本操作
```sh
#查看分支
git branch -v #（查看本地库中的所有分支）
git fetch  #会把远程服务器上所有的更新都拉取下来
git branch -a #(查看所有分支)
#创建分支
git branch dev #(创建一个新的分支)
git checkout dev #（切换分支）
#删除分支
git branch -d Chapater8 #删除本地分支
git push origin --delete Chapater6   #删除远程分支Chapater6
```
### （3）tag标签的常用操作
```sh
#新建标签(打标签)，默认打在当前分支的最新提交的commit上的
git tag v1.0.0 #新建标签，默认打在当前分支的最新提交的commit上的
git tag -a v1.0.0 -m "blablabla..." #指定标签信息

#打标签到某个commit上
git log --pretty=oneline --abbrev-commit  #查看提交历史
git tag v1.0.0 <版本号>   #标签打在某次提交上

#查看标签
git tag

#查看标签信息
git show <tagname>
```
#### 操作标签，（ 本地删除，远程删除，推送到远端 ）
```sh
#删除标签
git tag -d v0.1 #删除一个本地标签；

#远程删除（本地删除，再远端删除）
git tag -d v0.9 #删除一个本地标签；
git push origin :refs/tags/v0.9 #从远程删除。删除命令也是push，但是格式需要是这样

#推送远端
git push origin <tagname> #推送一个本地标签
git push origin --tags    #推送全部未推送过的本地标签
```
