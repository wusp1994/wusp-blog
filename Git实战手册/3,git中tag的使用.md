---
title: "git中tag的使用"
date: "2019-08-12"
permalink: "git_tag"
---

## tag标签的常用操作
(打tag ，查看tag， 查看tag详细信息)
```sh
#新建标签(打标签)，默认打在当前分支的最新提交的commit上的
git tag v1.0.0 #新建标签，默认打在当前分支的最新提交的commit上的
git tag -a v1.0.0 -m "blablabla..." #指定标签信息

#打标签到某个commit上
git log --pretty=oneline --abbrev-commit  #查看提交历史
git tag v1.0.0 <版本号>   #标签打在某次提交上

#新建tag 版本的新分支
git checkout -b bugfix <tagName>

#查看标签
git tag

#查看标签信息
git show <tagname>
```

## 操作标签
（ 本地删除，远程删除，推送到远端 ）
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

## 根据tag回退版本修改bug
步骤如下  
```sh

#新建tag 版本的新分支
git checkout -b bugfix <tagName>

# 分支修复bug,修复完成后，切回主干分支合并就行了
git checkout master #切换到主干上
git merge bugfix    #合并bug的分支到主干
```
