---
title: "Promise"
date: "2019-08-27"
permalink: "Promise"
---
## 前言
异步：同时进行多种操作。  
------  优点：性能好，效率高，一段代码阻塞，不会影响其他代码。   
------  缺点：写书看起来复杂，回调地狱。

缺点比如说：页面获取数据且层层依赖，如下代码层层嵌套，极度复杂的时候不好维护
```js
ajax('/banners', function (banner_data){
  ajax('/hotItems', function (hotitem_data){
    ajax('/slides', function (slide_data){
      ajax('/slides', function (slide_data){

      }, function (){
        alert('读取失败');
      });
    }, function (){
      alert('读取失败');
    });
  }, function (){
    alert('读取失败');
  });
}, function (){
  alert('读取失败');
});
```

同步：同时只能做一件事。  
------  优点：复杂代码看起来也会有条理，易读   
------  缺点：性能差，容易造成代码阻塞

优点：还是如上例子,易于维护，但是前面执行完才能有下面的。
```js
let banner_data=ajax_async('/banners');
let hotitem_data=ajax_async('/hotItems');
let slide_data=ajax_async('/slides');
let banner_data=ajax_async('/banners');
```

所以出现了Promise 用同步一样的方式，来书写异步代码

```js
Promise.all([$.ajax(),$ajax()]).then(res=>{
    //对了
},err=>{
  //错了
})

```


## `Promise`的含义
##### `promise 用同步（书写方便）的方式写异步代码（性能好），集成异步和同步的优点，是异步编程的一种解决方案,解决了回调地狱问题.`

`Promise`对象的两个特点:  
- 1)对象的状态不受外界影响.Promise 对象代表了一个异步操作,有三种状态:`pending` (进行中).`fulfilled`(已成功) 和 `rejected`(已失败). 只有异步操作的结果,可以决定当前状态是哪一种状态,任何其他操作都无法改变这个状态.promise的英文  承诺  就 代表这个意思.

- 2)一旦状态改变,就不会再变,任何时候都可以得到这个结果. `Promise` 对象的状态改变,只有两种可能:`pending`(进行中)->`fulfilled`(已成功)  `pending`(进行中)->`rejected`(已失败).只要着两种情况发生了,状态就凝固了,不会再变了,会一直保持这个结果,这时 就称为 resolved (已定型).
与事件不同的是:如果改变已经发生了,再怎么 对 Promiese 对象添加回调函数,也会立即得到这个结果.事件则是,错过了再去监听,得到的结果是不同的.  

优点:  
- 1,同步（书写方便）的方式写异步代码（性能好）,避免层层嵌套的回调函数.
- 2,Promise 对象提供统一的接口,使得控制异步操作更加容易.
缺点:  
- 1,无法取消 `Promise` 一旦建立就会立即执行,无法中途取消.
- 2,如果不设置回调函数,`Promise`内部抛出的错误,不会反应到外部.
- 3,当处于 `pending` 状态时,无法得知目前进展打牌哪一个阶段,(刚开始还是即将完成)

如果某些事件不断反复发生,一般来说,使用 Stream 模式比 部署 Promise 更好.


## `Promise`的基本用法
ES6 规定，`Promise`对象是一个构造函数，用来生成Promise实例。
下面代码创造了一个Promise实例。
```js
//创造了一个Promise实例
const promise = new Promise(function (resolve, reject) {
  //.... some code

  if(/* 异步操作成功*/){
    resolve(value);
  }else{
    reject(error);
  }
})
```
`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。这两个参数都是函数，由 JavaScript 引擎提供，不用自己部署。
`resolve`函数的作用是,将`Promise`对象的状态从"未完成" 变成 "成功"(即从 pending 变为 resolved),在异步操作成功时调用,并将异步操作结果,作为参数传递出去.
`reject`函数的作用是.将`Promise`对象的状态从"未完成" 变成 "失败"(即从 pending 变为 rejected ),在异步操作失败时调用,并将异步报出的错误,作为参数传递出去.
### .then()
`Promise`实例生成以后,可以用then方法分别制定`resolved`状态和`rejected`状态的回调函数.
```js
promise.then(function(value){
  //success  
},function(error){
  // failure
})
```
`then`方法可以接受两个回调函数作为参数.
第一个回调函数是 `Promise`对象的状态变为 `resolved`时调用,
第二回调函数是`Promise`对象的状态变为`rejected`时调用.
其中第二个函数是可选的.这两个函数都接收`Promise`对象传出的值作为参考.

以下举例
```js
function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,ms,"done");
  });
}
timeout(100).then((value)=>{
  console.log(value,"=========");//done =========
})
```
上面的代码. timeout()返回一个 promise 实例,表示一段时间以后才会发生的结果.过了指定时间(参数`ms`)以后,`Promise` 实例的状态变为 `resolved` ,就会触发 `then` 方法绑定的回调函数.

### .all()
高版本的jquery已经对promise进行了封装
```JS
Promise.all([
  $.ajax({url:'data/arr.txt',dataType:'json'}),
  $.ajax({url:'data/json.txt',dataType:'json'})
]).then(res=>{
  //取值时候按顺序取值
  let [arr,json] = res;
},err=>{
  console.log(err)
})
```
:::warning  
同时读取几个ajax数据可用。但是步骤读取数据依赖前一步数据，就需要用到generator
:::
### 特点一:Promise 新建后就会立即执行
```js
let promise = new Promise(function(resolve,reject){
  console.log("Promise.")
  resolve();
})
promise.then(function(value){
  console.log("resolved.");
})

console.log("Hi!");
// Promise
// Hi!
// resolved
```
上面代码中,Promise 新建后就会立即执行,所以首先输出的是 "Promise.". 而then 方法指定的回调函数,将在当前脚本所有同步任务执行完 才会执行,所以 "resolved." 最后输出.

## 案例
1,异步加载图片
```js
function loadImageAsync(url){
  return new Promise(function(resolve,reject){
      const image = new Image();

      image.onload = function(){
        resolve(image);
      }

      image.onerror = function(){
        reject(new Error("Could not load image at" + url));
      }

      image.src = url;
      console.log()
  })
}
```

>以上代码,使用`promise`包装了 一个 图片 加载的异步操作. 如果加载成功,就调用 resolve 方法,否则 就调用 reject 方法.

2,promise 对象实现的 Ajax 操作
```js
/**
对XMLHttpRequest 对象的封装,用于发出一个针对 JSON 数据的 HTTP 请求,并返回一个 Promise 对象,.
*/
const getJSON = function(url){
  const promise = new Promise(function(resolve,reject){
    const handler = function(){
      if(this.readyState !== 4){
        return;
      }
      if(this.status === 200){
        resolve(this.response);
      }else{
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET",url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept","applicaction/json");
    client.send();
  })
  return promise;
};

getJSON("/posts.json").then(function(json){
  console.log("Contents:" + json);

},function(error){
  console.error("出错了",error);
})
```
在getJSON()内部中,resolve() 和reject() 调用时,都带有参数,他们的参数会被传递给回调函数.
reject()的参数 通常是 Error 对象的实例,表示抛出的错误;resolve()的参数除了正常值,还可能是另一个Promise 实例.
比如
```js
```
