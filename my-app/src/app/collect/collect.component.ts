import {
    Component,
    OnInit
  } from '@angular/core';
  import * as _ from "lodash";
  import * as Collect from "collect.js";
  
  
  @Component({
    selector: 'app-lodash',
    templateUrl: './lodash.component.html',
    styleUrls: ['./lodash.component.css']
  })
  export class CollectComponent implements OnInit {
  
    constructor() {}
  
    ngOnInit() {
      this.test();
    }
  
    public test() {
      console.log(Collect);
    }
  
    public clone(item) {
      if (!item) {
        return item;
      } // null, undefined values check
  
      var types = [Number, String, Boolean],
        result;
  
      // normalizing primitives if someone did new String('aaa'), or new Number('444');
      types.forEach(function (type) {
        if (item instanceof type) {
          result = type(item);
        }
      });
  
      if (typeof result == "undefined") {
        if (Object.prototype.toString.call(item) === "[object Array]") {
          result = [];
          item.forEach(function (child, index, array) {
            result[index] = this.clone(child);
          });
        } else if (typeof item == "object") {
          // testing that this is DOM
          if (item.nodeType && typeof item.cloneNode == "function") {
            result = item.cloneNode(true);
          } else if (!item.prototype) { // check that this is a literal
            if (item instanceof Date) {
              result = new Date(item);
            } else {
              // it is an object literal
              result = {};
              for (var i in item) {
                result[i] = this.clone(item[i]);
              }
            }
          } else {
            // depending what you would like here,
            // just keep the reference, or create new object
            if (false && item.constructor) {
              // would not advice to do that, reason? Read below
              result = new item.constructor();
            } else {
              result = item;
            }
          }
        } else {
          result = item;
        }
      }
  
      return result;
    }
  
  
  
  }
  