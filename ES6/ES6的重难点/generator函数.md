---
title: "generator函数"
date: "2019-08-27"
permalink: "generator"
---
## generator是什么？
>generator是异步操作的方式之一。无法像普通函数一样调用，需要使用 generator 对象的next()启动，   
- 第一次使用next()相当于启动整个generator函数的开关，  
- 接下来使用一次，相当于触发一次 yield 向后走

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
