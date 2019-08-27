---
title: "ssh秘钥的生成"
date: "2019-08-09"
permalink: "ssh_key_create"
---
:::tip
在使用SSH链接的git项目中，SSH密钥允许您在计算机和git服务器之间建立安全连接。
尽量一台电脑使用一个秘钥.git的账户和 生成秘钥的帐号名无关
:::

## 1.检查是否存在SSH秘钥
__linux 的秘钥 同样是这样可以通用—__
.pub文件 是公钥，另外一个是 私钥
```sh
# windows命令
type %userprofile%\.ssh\id_rsa.pub //查看秘钥
```
或者打开 C:\Users\Administrator\.ssh 找.pub文件

## 2.运行命令生成SSH秘钥
```sh
# windows命令
ssh-keygen -t rsa -C "email@example.com" //生成秘钥
```
会输出以下提示,默认保存为 C:\Users\Administrator/.ssh/id_rsa。
若自定义，或者添加多个（重复会生成失败）输入新名字即可
```sh
$>:ssh-keygen -t rsa -C "email@example.com"
$>:Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Administrator/.ssh/id_rsa):id_rsa_github
```
::: warning
注意：
如果不是采用默认的配置，需要在想要生成的目录下，执行生成秘钥命令
:::
## linux信任秘钥的修改
```js
~/.ssh/authorized_keys 这个目录下的添加或者修改就行了
```
