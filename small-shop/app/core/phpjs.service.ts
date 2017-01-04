import { Injectable } from '@angular/core';

/* 3rd Modules */
// --- phpjs
let phpjs:any = require('../../../node_modules/phpjs/index.js');
if (!window.hasOwnProperty('_phpjs')) {
  Object.defineProperty(window, '_phpjs', {value: phpjs});
}

@Injectable()
export class PhpjsService {

  /** Constructor */
  public constructor () {
    Object.defineProperty(window, '_phpjsServ', {value: this});
  }

  public _():any {
    let args:any[] = Array.prototype.slice.call(arguments);
    let [method, ...params] = args;
    return phpjs[method].apply(phpjs, params);
  }
}
