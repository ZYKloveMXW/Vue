# 遇到的坑

## 1.嵌套路由不是那种你想象的那种，它不是一个页面中点击子模块跳转到另外一个页面，而是在你这个页面中有和路由出口，它渲染在那里

## 2.那种跳转页面加载圈圈的效果可以用全局守卫来做

## 3.获取对象的key/value可用(for .. in ..)

## 4.获取Map迭代器之类里面的key/value可用forEach(value,key) /注意顺序

## 5.临时存储数据可用sessionStore/localStorage

## 6.keep-alive的生命周期
### 当引入keep-alive的时候，页面第一次进入，子的触发顺序created-> mounted-> activated，退出时触发deactivated。当再次进入（前进或者后退）时，只触发activated

## vue? data中如果用数组存值,不能通过直接赋值来更改视图，必须要用splice之类的api(性能划不来)
