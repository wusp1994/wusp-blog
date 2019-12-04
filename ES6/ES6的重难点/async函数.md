---
title: "async函数"
date: "2019-08-27"
permalink: "async function"
---
## 什么是 Async/Await？
用同步的方式处理异步操作的一种解决方案。
Async - 定义异步函数 `(async function someName(){...})`

- 自动把函数转换为 Promise,必返回一个promise对象，即使你返回的是其他对象。
- 当调用异步函数时，函数返回值会被 resolve 处理
- 异步函数内部可以使用 await

Await - 暂停异步函数的执行 (var result = await someAsyncCall();)

- 当使用后面跟Promise对象时，`await`等待Promise完成，并返回Promise的结果
- `await` 后面跟正常表达式会立即执行
- await只能用在 async 函数中


## 使用async 处理异步任务

案例：async函数读取文件，nodeJs 中读取多个文件为异步操作
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

//基于上面的async的特点，我们会用到异常捕获机制，学过java的都知道，java中有异常捕获try...catch...
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
