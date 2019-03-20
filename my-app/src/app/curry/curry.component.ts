import {
  Component,
  OnInit
} from '@angular/core';
import lodashFunction from "lodash/function";

// 柯里化是指这样一个函数(假设叫做createCurry)，他接收函数A作为参数，运行后能够返回一个新的函数,并且这个新的函数能够处理函数A的剩余参数。就是把一个多参数的函数，转化为单参数函数。
// function A(a, b, c) {
//   // do something
// }`
// var B = createCurry(A);
// A(1, 2, 3)  =>  B(1)(2)(3)

@Component({
  selector: 'app-curry',
  templateUrl: './curry.component.html',
  styleUrls: ['./curry.component.css']
})
export class CurryComponent {
  constructor() {}

  ngOnInit() {
    this.curry();
  }

  public curry() {
    let check = function (reg, targetString) {
      return reg.test(targetString);
    }

    check(/^1[34578]\d{9}$/, '14900000088');
    check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com');

    let _check = lodashFunction.curry(check);
    let checkPhone = _check(/^1[34578]\d{9}$/);
    let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
    checkPhone('14900000088');
    checkEmail('test@163.com');
  }
}
