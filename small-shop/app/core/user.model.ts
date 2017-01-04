/* 3rd Modules */
// --- phpjs
let phpjs:any = require('../../../node_modules/phpjs/index.js');


import { AbstractModel } from './abstract.model';

/**
 *
 */
export class UserModel extends AbstractModel {

  /**  */
  public static readonly TABLE_NAME:string = 'USER';

  /**  */
  public static encodePassword(data:string):string {
    return <string>phpjs.md5(data);
  }

  /**  */
  protected static _arrActive:string[] = [
    'Chưa kích hoạt',
    'Kích hoạt'
  ];

  /**  */
  public static returnArrActive():string[] {
    return UserModel._arrActive;
  }


  /**  */
  public username:string = this._initData['username']
    ? ('' + this._initData['username']) : ''
  ;
  /**  */
  //public getUsername():string { return this.username; }
  /**
  public setUsername(data:string):UserModel {
    data = (undefined === data || null === data) ? '' : data;
    this.username = '' + data;
    return this;
  }  */

  /**  */
  protected password:string = this._initData['password']
    ? ('' + this._initData['password']) : ''
  ;
  /**  */
  public selfEncodePassword():string {
    if (undefined !== this.password) {
      this.password = UserModel.encodePassword(this.password);
    }
    return this.password;
  }
  /**  */
  //public getPassword():string { return this.password; }
  /**
  public setPassword(data:string):UserModel {
    data = (undefined === data) ? '' : UserModel.encodePassword(data);
    this.password = data;
    return this;
  }  */

  /**  */
  public active:number = (UserModel.ACTIVE_NO === this._initData['active'])
    ? this._initData['active']
    : UserModel.ACTIVE_YES
  ;
  /**  */
  //public getActive():number { return this.active; }
  /**
  public setActive(data:number):UserModel {
    data = (UserModel.ACTIVE_NO === data) ? data : UserModel.ACTIVE_YES;
    this.active = data;
    return this;
  }  */

  /**  */
  public static readonly ACTIVE_NO:number = 0;
  /**  */
  public static readonly ACTIVE_YES:number = 1;

  /**  */
  public admin:number = (UserModel.ADMIN_YES === this._initData['admin'])
    ? this._initData['admin']
    : UserModel.ADMIN_NO
  ;
  /**  */
  public static readonly ADMIN_NO:number = 0;
  /**  */
  public static readonly ADMIN_YES:number = 1;

  /** Initialize */
  //protected init(data?:any):UserModel { return this; }
}
