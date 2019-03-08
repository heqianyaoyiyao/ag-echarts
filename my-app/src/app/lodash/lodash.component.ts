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

  constructor() {}

  ngOnInit() {
    this.test();
    this.xunhuan();
    this.cloneDeep();
    this.omit();
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

  //循环
  public xunhuan() {
    for(let i = 0;i < 5;i++) {
      // console.log(i);
    }
    _.times(5,function(i){
      // console.log(i);
    })
  }

  //在指定范围内获取一个随机值 
  public random(min: number,max: number) {
    Math.floor(Math.random() * (max - min)) + min;
    _.random(min,max);
    _.random(min,max,true);
  }

  //深度克隆JavaScript对象 
  public cloneDeep() {
    let o = {a:1,b:2};
    let o1 = JSON.parse(JSON.stringify(o));

    let o2 = _.cloneDeep(o);
    // console.log(o === o2);  // false
  }

  //去掉对象的某些属性 
  public omit() {
    let o = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 'string'
    }
    // delete o.a
    let delArr = ['a','b','c'];
    // delArr.forEach((key) => {
    //   delete o[key];
    // })
    let newO = _.omit(o,delArr)
    console.log(newO);
    console.log(o);
  }

  //从某个对象中选择部分属性组成新的对象 
  public pick() {
    
  }

}
