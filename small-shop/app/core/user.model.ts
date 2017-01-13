// 3rd modules
import * as phpjs from 'phpjs/build/npm.js';

// Models
import { AbstractModel } from './abstract.model';

// Services
import { PhpjsService } from './phpjs.service';

/**
 *
 */
export class UserModel extends AbstractModel {

  /**  */
  public static readonly TABLE_NAME:string = 'USER';

  /**  */
  public static encodePassword(data:string):string {
    return '' + phpjs['md5'](data);
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
  public fullname:string;

  /**  */
  public username:string;
  /**  */
  //public getUsername():string { return this.username; }
  /**
  public setUsername(data:string):UserModel {
    data = (undefined === data || null === data) ? '' : data;
    this.username = '' + data;
    return this;
  }  */

  /**  */
  public password:string;
  /**  */
  public selfEncodePassword():string {
    if (undefined !== this.password) {
      this.password = UserModel.encodePassword(this.password);
    }
    return this.password;
  }
  public isPasswordEmpty():boolean {
    if (null === this.password
        || undefined === this.password
        || "d41d8cd98f00b204e9800998ecf8427e" == this.password
    ) {
      return true;
    }
    return false;
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
  public active:number;
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
  public admin:number;
  /**  */
  public static readonly ADMIN_NO:number = 0;
  /**  */
  public static readonly ADMIN_YES:number = 1;

  /** Initialize */
  protected init(data?:any):UserModel {
    /**  */
    this.fullname = data['fullname'] ? ('' + data['fullname']) : '';
    /**  */
    this.username = data['username'] ? ('' + data['username']) : '';
    /**  */
    this.password = data['password'] ? ('' + data['password']) : '';
    /**  */
    this.active = (UserModel.ACTIVE_NO === data['active'])
      ? data['active'] : UserModel.ACTIVE_YES
    ;
    /**  */
    this.admin = (UserModel.ADMIN_YES === data['admin'])
      ? data['admin'] : UserModel.ADMIN_NO
    ;
    //
    return this;
  }
}
