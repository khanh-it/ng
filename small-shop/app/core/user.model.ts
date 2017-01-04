/* 3rd Modules */
// --- phpjs
let phpjs:any = require('../../../node_modules/phpjs/index.js');


import { AbstractModel } from './abstract.model';

/**
 *
 */
export class UserModel extends AbstractModel {

  /**  */
  public static TABLE_NAME:string = 'USER';

  /**  */
  public static encodePassword(data:string):string {
    return <string>phpjs.md5(data);
  }

  /**  */
  protected static _arrActive:string[] = ['Chưa kích hoạt', 'Kích hoạt'];

  /**  */
  public static returnArrActive():string[] {
    return UserModel._arrActive;
  }


  /**  */
  protected username:string;
  /**  */
  public getUsername():string {
    return this.username;
  }
  /**  */
  public setUsername(data:string):UserModel {
    this.username = '' + data;
    return this;
  }

  /**  */
  protected password:string;
  /**  */
  public getPassword():string {
    return this.password;
  }
  /**  */
  public setPassword(data:string):UserModel {
    data = (undefined === data) ? '' : UserModel.encodePassword(data);
    this.password = data;
    return this;
  }

  /**  */
  public active:number;
  /**  */
  public getActive():number {
    return this.active;
  }
  /**  */
  public setActive(data:number):UserModel {
    data = (UserModel.ACTIVE_NO === data) ? data : UserModel.ACTIVE_YES;
    this.active = data;
    return this;
  }

  /**  */
  public static readonly ACTIVE_NO:number = 0;
  /**  */
  public static readonly ACTIVE_YES:number = 1;

  /** Initialize */
  protected init(
    data: {username:string, password?:string, active?:number}
      = {username: '', password: undefined, active: UserModel.ACTIVE_YES}
  ):UserModel {
    console.log('UserModel. Data: ', data);
    this.setUsername(data.username);
    this.setPassword(data.password);
    this.setActive(data.active);
    // Return
    return this;
  }
}
