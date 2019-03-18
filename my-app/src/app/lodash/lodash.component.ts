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
    // this.cloneDeep();
    // this.omit();
    // this.pick();
    // this.forEach();
    // this.curry();
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
    // Math.floor(Math.random() * (max - min)) + min;
    _.random(min,max);
    _.random(min,max,true);
  }

  //深度克隆JavaScript对象 
  public cloneDeep() {
    let o = {a:1,b:2};
    let o1 = JSON.parse(JSON.stringify(o));
    let o2 = _.cloneDeep(o);
    this.print(o === o2);

    // let f = {
    //   fun: function() {
    //     console.log('F');
    //   }
    // }
    // let f1 = JSON.parse(JSON.stringify(f));
    // let f2 = _.cloneDeep(f);
    // console.log(f1);
    // console.log(f2);
  }

  //去掉对象的某些属性 (提交表单时有些字段不要提交)
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
    let newO = _.omit(o,delArr)
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

  public print(val) {
    if(typeof(val) === 'object'){
      this.array.push(JSON.stringify(val));
    }else {
      this.array.push(_.toString(val));
    }
  }

}
