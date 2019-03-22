import {
  Component,
  OnInit
} from '@angular/core';
import * as _ from "lodash";
import * as Collect from "collect.js";
import lodashArray from "lodash/array";
import lodashObject from "lodash/object";
import lodashMath from "lodash/math";
import lodashString from "lodash/string";
import lodashCollection from "lodash/collection";
import lodashFunction from "lodash/function";
import { del } from 'selenium-webdriver/http';


@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.css']
})
export class LodashComponent implements OnInit {

  public array: Array<any> = [];
  public msg: any;

  constructor() {}

  ngOnInit() {
    // this.test();
    // this.times();
    // this.random(1,10);
    // this.cloneDeep();
    // this.omit();
    // this.pick();
    // this.forEach();
    // this.chain();
    this.lazy();
  }

  public test() {
    // console.log(_);
    // console.log(lodashArray);
    // console.log(lodashObject);
    // console.log(lodashString);
    // console.log(lodashMath);
    // console.log(lodashCollection);
    // console.log(lodashFunction);
    // console.log(Collect);
  }

  //N次循环
  public times() {
    for(let i = 0;i < 5;i++) {
      // console.log(i);
    }
    let that = this;
    _.times(5,function(i){
      that.print(i);
    })
  }

  //在指定范围内获取一个随机值 
  public random(min: number,max: number) {
    // Math.floor(Math.random() * (max - min + 1)) + min;
    this.print(_.random(min,max));
    this.print(_.random(min,max,true));//生成随机的浮点数
  }

  //深度克隆JavaScript对象
  public cloneDeep() {
    let o = {a:1,b:2};
    let o1 = _.cloneDeep(o);
    this.print(o === o1);

    // let f = {
    //   fun: function() {
    //     console.log('F');
    //   }
    // }
    // let f1 = JSON.parse(JSON.stringify(f));  //对象中的属性值不能是函数
    // let f2 = _.cloneDeep(f);
    // console.log(f1);
    // console.log(f2);
  }

  //筛选属性  去掉对象的某些属性
  public omit() {
    let o = {
      a: 1,
      b: 2,
      c: 3,
      d: 'D',
      e: 'E',
      f: 'F'
    }
    // delete o.a
    let delArr = ['a','b','c'];
    // delArr.forEach((key) => {
    //   delete o[key];
    // })
    let newO = _.omit(o,delArr);// 可以使用数组或字符串的方式筛选对象的属性，并且最终会返回一个新的对象，中间执行筛选时不会对旧对象产生影响。
    this.print(newO);
    this.print(o);
  }

  //从某个对象中选择部分属性组成新的对象 (只提交某些字段)
  public pick() {
    let o = {
      a : 'useful',
      b : 'useless'
    }
    let newO = _.pick(o,['a']);
    this.print(newO);
  }

  //遍历循环(数组，对象) 数组的key是元素的下标，当传入的是对象的时候，key是属性，value是值
  public forEach() {
    let that = this;
    _([1, 2]).forEach((value) => {
        that.print(value);
    });
    _.forEach([1, 2] , (value, key) => {
      that.print('key: ' + key + '; value: ' + value);
    });
    _.forEach({a:1,b:2}, (value,key) => {
      that.print('key: ' + key + '; value: ' + value);
    })
  }


  
  //链式调用 
  public chain() {
    // drop: 创建一个切片数组，去除array前面的n个元素
    // head: 获取数组 array 的第一个元素。
    let array = [0,1,2,3,4];
    let newAry = _(array).drop(2).head();
    this.print(newAry);
  }




  //lodash的惰性计算
  public lazy() {
    //filter: 遍历 collection（集合）元素,返回符合条件的所有元素的数组
    //take: 创建一个数组，从array数组的起始元素开始提取n个元素。

    function priceFilter(x) {
      return function(item) { return item.price < x; };
    }
    let gems = [
        { name: 'A', price: 4 },
        { name: 'B', price: 15 },
        { name: 'C', price: 20},
        { name: 'D', price: 7  },
        { name: 'E', price: 3 },
        { name: 'F', price: 13 },
        { name: 'G', price: 2 },
        { name: 'H', price: 20 }
    ];
      
    let chosen = _(gems).filter(priceFilter(10)).take(3).value();

    console.log(chosen);

  }




  public print(val) {
    if(typeof(val) === 'object'){
      this.array.push(JSON.stringify(val));
    }else {
      this.array.push(_.toString(val));
    }
  }

}
