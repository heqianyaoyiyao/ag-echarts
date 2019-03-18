import {
  Component,
  OnInit
} from '@angular/core';
import lodashFunction from "lodash/function";


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
    var checkPhone = _check(/^1[34578]\d{9}$/);
    var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);
    checkPhone('14900000088');
    checkEmail('test@163.com');
  }
}
