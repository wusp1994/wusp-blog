---
title: "async函数"
date: "2019-08-27"
permalink: "async function"
---
## 什么是 Async/Await？
>ES7:  async/await语法：针对generator的封装，当前最常用的异步语法，nodejs koa2 完全使用该语法。

用同步的方式处理异步操作的一种解决方案。  

Async - 定义异步函数 `(async function someName(){...})`

- 必返回一个promise对象，如果异步函数中返回的是其他对象，async会通过Promise.resolve将其
封装为一个promise对象。
- Async函数内部可以使用 await，用来暂停(只有跟promise时候才会阻塞)当前函数的执行。


Await - 暂停异步函数的执行 `var result = await someAsyncCall() `

- 当使用后面跟Promise对象时，`await`等待Promise完成，并返回Promise的结果
- `await` 后面跟**正常表达式(不是promise)会立即执行**
- await 只能用在 async 函数中。


## 使用async 处理异步任务
案例一：async函数获取请求
>axios 请求返回的是一个promise 对象，为异步操作.当请求完成后往下执行，
>await 返回promise结果，代替回调和promise,完成异步操作。

```js
function login (){ 
	return new Promise()
}
async handleLogin(){
    let res = await login();
}
```

案例二：async函数读取文件，nodeJs 中读取多个文件为异步操作
```js
const fs = require("fs");
const read = function(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
};

//基于上面的async的特点，我们会用到异常捕获机制，
//学过java的都知道，java中有异常捕获try...catch...
async function readByAsync(){
  let a1;
      let a2;
      let a3;
      try{
          a1 = await read('1.txt');
          a2 = await read('2.txt');
          a3 = await read('3.txt');
      }catch(e){
          //TODO handle the exception
      }
      console.log(a1);
      console.log(a2);
      console.log(a3);
}
readByAsync();
```
对比 回调和 promise 更为简便
