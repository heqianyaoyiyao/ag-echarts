import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
// import * as Collect from "collect.js";
import lodashArray from "lodash/array";
import lodashObject from "lodash/object";
import lodashMath from "lodash/math";
import lodashString from "lodash/string";
import lodashCollection from "lodash/collection";
import lodashFunction from "lodash/function";


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
//   demo_html = require('!!html-loader!./basic.component.html');
//   demo_ts = require('!!raw-loader!./basic.component.ts');

  options: any;

  constructor() { }

  ngOnInit() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };
    this.test();
  }

  public test() {
    console.log(_);
    console.log(lodashArray);
    console.log(lodashObject);
    console.log(lodashString);
    console.log(lodashMath);
    console.log(lodashCollection);
    console.log(lodashFunction);
    // console.log(Collect);
  }

}