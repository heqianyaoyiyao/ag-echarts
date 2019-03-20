## 简介
Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库。它内部封装了诸多对字符串、数组、对象等常见数据类型的处理函数。
类似的还有Underscore.js和Lazy.js

##模块组成
- Array，适用于数组类型，比如填充数据、查找元素、数组分片等操作
- Collection，适用于数组和对象类型，部分适用于字符串，比如分组、查找、过滤等操作
- Function，适用于函数类型，比如节流、延迟、缓存、设置钩子等操作
- Lang，普遍适用于各种类型，常用于执行类型判断和类型转换
- Math，适用于数值类型，常用于执行数学运算
- Number，适用于生成随机数，比较数值与数值区间的关系
- Object，适用于对象类型，常用于对象的创建、扩展、类型转换、检索、集合等操作
- Seq，常用于创建链式调用，提高执行性能（惰性计算）
- String，适用于字符串类型

## 安装
- script标签   
	1. 直接下载下来引入 `<script src="lodash.js"></script>`
	2. 使用cdn	`<script src="https://cdn.bootcss.com/lodash.js/4.17.12-pre/lodash.core.min.js"></script>`
- NPM安装   
	1. $ npm i --save lodash
	2. $ npm i --save @types/lodash(typescript)

## 使用
	1. script标签： _ 符号
	2. var _ = require('lodash');    	var lodashArray = require('lodash/array');
	3. import * as _ from "lodash";		import lodashArray from "lodash/array";
	4. 语法： _.方法名（参数）;

##性能

Lodash 提高执行速度的思路：Lazy Evaluation（惰性计算）

惰性求值（Lazy Evaluation），又译为惰性计算、懒惰求值，它的目的是要最小化计算机要做的工作。
惰性求值中的参数直到需要时才会进行计算。这种程序实际上是从末尾开始反向执行的。它会判断自己需要返回什么，并继续向后执行来确定要这样做需要哪些值

从若干个球中取出前三个面值小于 10 的球。

![avatar](https://user-gold-cdn.xitu.io/2018/5/31/163b3fda4f502087?imageslim)

第一步是从所有的球中取出所有面值小于 10 的球，第二步是从上一步的结果取三个球。

![avatar](https://user-gold-cdn.xitu.io/2018/5/31/163b3fda1d04f2e7?imageslim)

- _(gems)拿到数据集，缓存起来
- 遇到filter方法，先记下
- 遇到take方法，先记下
- 遇到value方法（触发执行），看下要求：要取出3个数，price<10
- 使用filter方法里的判断方法对数据进行逐个过滤




