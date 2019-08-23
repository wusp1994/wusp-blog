---
title: "git常用操作"
date: "2019-08-12"
permalink: "git_steps"
---
>本篇记录了一些git常用操作的命令集合
::: warning
git命令需要在git项目的目录下运行命令(windows下shift+右键此处打开命令)
:::
## Git回滚到某个commit

:::warning
不推荐====> 回退命令 git reset --hard   
推荐=====>  git checkout -b bugfix commitID 在某次提交上新建分支，修复bug完成，分支合并
:::
推荐
```sh

git checkout -b bugfix commitID
# 分支修复bug,修复完成后，切回主干分支合并就行了
git checkout master #切换到主干上
git merge bugfix    #合并bug的分支到主干
```

不推荐
```sh
$ git reset --hard HEAD^         #回退到上个版本
$ git reset --hard HEAD~3        #回退到前3次提交之前，以此类推，回退到n次提交之前
$ git reset --hard commit_id     #退到/进到 指定commit的sha码

#强推到远程：
$ git push origin HEAD --force
```

## 拉取远程分支到本地
```sh
#情况一：目前本地还没拉代码，直接拉分支代码
git clone -b <branchName> git@gitlab.yopoint.vip:ac/YoPointSwift.git
#情况二：本地已经拉取了代码，想拉取远程某一分支的代码到本地
git checkout -b ac_branch origin/ac_branch #当前分支上创建一个分支，拉取远程到本地（方式一）
  # 如果报错 git fetch 同步仓库
git fetch origin ac_branch:ac_branch  #拉取远程分支到本地(方式二)
```
## git本地文件夹的删除和添加
```sh
#windows命令
rm -r hello.py  #删除。注：文件和文件夹 都可以用 tab 键补全路径
git add .       #添加到本地git
git commit -m 'remove hello.py'  #提交到本地git
```
## git删除远程仓库的文件
>git删除远程仓库的文件,Bing用.gitignore忽略提交此文件
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

## branch基本操作
```sh
#查看分支
git branch -v #（查看本地库中的所有分支）
git fetch  #会把远程服务器上所有的更新都拉取下来
git branch -a #(查看所有分支)
#创建分支
git branch dev #(创建一个新的分支)
git checkout dev #（切换分支）
git checkout -b new_branch #合并命令
 git checkout -b new_branch <tagName>/<commit id> #新建某个tag或者commit版本的新分支
# 拉取远程分支到本地
  #情况一：目前本地还没拉代码，直接拉分支代码
git clone -b <branchName> git@gitlab.yopoint.vip:ac/YoPointSwift.git
  #情况二：本地已经拉取了代码，想拉取远程某一分支的代码到本地
git checkout -b ac_branch origin/ac_branch #当前分支上创建一个分支，拉取远程到本地（方式一）

#删除分支
git branch -d Chapater8 #删除本地分支
git push origin --delete Chapater6   #删除远程分支Chapater6

```
