---
title: "nginx"
date: "2019-09-02"
permalink: "nginx"
---
## nginx操作
### 定位nginx
服务器上有多个nginx,定位当前正在运行的Nginx的配置文件
```sh
ps  -ef | grep nginx  #查看当前运行的nginx的位置
#1,查看nginx的PID，以常用的80端口为例：
netstat -anop | grep 0.0.0.0:80
#2,通过相应的进程ID(比如：4562）查询当前运行的nginx路径：
　ll  /proc/4562/exe
#3. 获取到nginx的执行路径后，使用-t参数即可获取该进程对应的配置文件路径
/usr/local/nginx/sbin/nginx -t
#输出以下
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
```
### nginx命令
linux nginx启动 重启 关闭命令：
>以下命令均要在响应目录下运行或者全路径下
home/odin/nginx/sbin/nginx -s reload #修改配置后重新加载生效

```sh
# 启动操作 要启动的nginx 的sbin目录下
  ./nginx -s reload #修改配置后重新加载生效
  #启动操作 -c参数指定了要加载的nginx配置文件路径
  ./nginx -c /usr/local/nginx/conf/nginx.conf
#重新打开日志文件
  ./nginx -s reopen
#测试nginx配置文件是否正确
  ./nginx -t -c /path/to/nginx.conf
#停止nginx
  nginx -s stop #快速停止nginx
  quit #完整有序的停止nginx
#其他的停止nginx 方式：找到进程发送信号方式
  #步骤1,查询nginx主进程号
  ps -ef | grep nginx
  #步骤2：发送信号
  kill -QUIT 16391  #从容停止Nginx：
  kill -TERM 16391 #快速停止Nginx：
  kill -9 16391 #强制停止Nginx：
```

## linux 下常用命令

### 操作文件夹
1,添加文件夹  
>mkdir(make directories)  
语　　法：mkdir [-p][--help][--version][-m <目录属性>][目录名称]
补充说明：mkdir可建立目录并同时设置目录的权限。  
参　　数：
  -m<目录属性>或–mode<目录属性>   建立目录时同时设置目录的权限。
  -p或–parents   若所要建立目录的上层目录目前尚未建立，则会一并建立上层目录。

```sh
#创建文件夹 test
mkdir test
```

### 操作文件
1,新建,删除,修改文件

2,上传和下载
```sh
#上传
rz
#下载
sz `文件名`
```
