---
title: "generator函数"
date: "2019-08-27"
permalink: "generator"
---
## generator是什么？
>generator是异步操作的方式之一。
>
>无法像普通函数一样调用，需要使用 generator 对象的next()启动，   
>
>- 第一次使用next()相当于启动整个generator函数的开关，  
- 接下来使用一次，相当于触发一次 yield 向后走

>ES6以前：
>
>​			回调函数（callback ）: nodejs express 中常用，ajax 中常用。
>
>ES6:  
>
>promise 对象：nodejs 最早有 bluebird,（promise的雏形），axios中常用。
>
>generator函数：nodejs koa框架使用率很高。



|异步操作方式|适用场景|
|-|-|
|generator|带逻辑的异步,简易程度 generator>回调>promise|
|promise|没有依赖逻辑的异步，一次性获取很多数据|
|回调|处理逻辑异步操作比promise好用点，传统方式|

### 基础用法

 使用yield：暂停函数，等待next()触发
 ```js
 //多种声明方式
 // function *show()
 function* show() {
     alert('1')

     yield;

     alert('2')
   }

   let step = show();
   step.next();//首次调用相当于启动
   step.next();//相当于第一个yield

   console.log(step)
 ```

### yield传参
>在next(param)中传参，函数中通过赋值 yield 接收

```js
function* show() {
  alert('1')

  let a = yield ;
  console.log('show a',a)//获得第一个next()传参 [1,2,3]
  let b = yield ;
  console.log('show b',b)//获得第二个next()传参 [4,5,6]

  alert('2')
}

let step = show();
let obj = {a:[1,2,3],b:[4,5,6]}
step.next();//首次启动,传参直接通过函数参数传递
step.next(obj.a);//相当于第一个yield
step.next(obj.b);//相当于第二个yield
```

### yield返回
>yield返回通过 yield + 返回值；方式返回。  
通过 赋值 gengerator对象的next() 调用获取返回值

```js
function* show() {
      alert('1')

      yield 'yield1';

      yield 'yield2';

      alert('2')
    }

    //无法像普通函数一样调用，需要使用 generator 对象的next()
    let step = show();
    let res1 = step.next();//首次启动
    let res2 = step.next();//第一个yield
    let res3 = step.next();//第二个yield

    //done 表示是否全部完成
    console.log(res1,'首次启动') //{value:'yield1',done:false}
    console.log(res2,'第一个yield')//{value:'yield2',done:false}
    console.log(res3,'第二个yield')//{value:undefined,done:true}
```

### generator应用
//多个ajax之间有依赖，逻辑判断
```js

// json.txt: {
//   "user":"wusp",
//   "pass":1234
// }
  /**
   * 使用封装函数 runner(),能直接获取 yield 返回的ajax中响应内容
   */
  runner( function* show() {

    let json = yield $.ajax({url : '../data/json.txt',dataType:"json"});//获得第一个next()传参
    let user = json.user;
    let pass = json.pass;

    console.log(json)

    if(user === "wusp" && pass === 1234){
      let text = yield $.ajax({url : '../data/text.txt',dataType:"json"});
      alert(text)
    }else{
      alert("用户名不对")
    }
  });

  function runner(_gen){
    return new Promise((resolve, reject)=>{
      var gen=_gen();

      _next();
      function _next(_last_res){
        var res=gen.next(_last_res);

        if(!res.done){
          var obj=res.value;

          if(obj.then){
            obj.then((res)=>{
              _next(res);
            }, (err)=>{
              reject(err);
            });
          }else if(typeof obj=='function'){
            if(obj.constructor.toString().startsWith('function GeneratorFunction()')){
              runner(obj).then(res=>_next(res), reject);
            }else{
              _next(obj());
            }
          }else{
            _next(obj);
          }
        }else{
          resolve(res.value);
        }
      }
    });
  }

```
