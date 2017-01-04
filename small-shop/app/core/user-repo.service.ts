import { Injectable } from '@angular/core';

// Models
import { UserModel } from './user.model';

// Service
import { PouchdbDbService } from './db.service/pouchdb-db.service';
/* --- Repo Service */
import { AbstractRepoService } from './abstract-repo.service';

@Injectable()
export class UserRepoService extends AbstractRepoService {

  /**
   *
   */
  public static readonly TABLE_NAME:string = 'User';

  /**
   *
   */
  protected _users: UserModel[] = [];

  /**
   *
   */
  protected _loggedInUser:UserModel;

  /***/
  public constructor(protected _dbS:PouchdbDbService) {
    super(_dbS);
  }

  /* Initialize */
  protected init() {
    /*  */
  }

  public static LOGGED_IN_USER_ID_KEY:string = 'LOGGED_IN_USER_ID';

  /* Initialize */
  protected _loggedInUserID(userID?:string):string|null {
    if (userID) {
      localStorage.setItem(UserRepoService.LOGGED_IN_USER_ID_KEY, new String(userID).toString());
    } else {
      userID = localStorage.getItem(UserRepoService.LOGGED_IN_USER_ID_KEY);
      if (null === userID || undefined === userID) {
        userID = '';
      }
    }
    return userID;
  }

  /** Fetch user's logged in info (data) */
  public getLoggedInUser():Promise<UserModel|null> {
    return new Promise((rs, rj) => {
      if (!this._loggedInUser) {
        let userID = this._loggedInUserID();
        if (userID) {
          return this._dbS.get(userID)
            .then((user:UserModel) => rs(user) )
          ;
        } else {
          rs(null);
        }
      // Case: user logged in!
      } else {
        rs(this._loggedInUser);
      }
    });
  }

  /** Get user data for login */
  public getUser4Login(
    username:string,
    password:string,
    autoStoreWhenSuccess:boolean = true
  ):Promise<UserModel|void|boolean> {
    let DDocName = UserModel.getDDocName('UNIQ_username');
    return this._dbS
      .query(DDocName, {
        key: username,
        include_docs: true,
        limit: 1
      })
      .then((rt) => {
        let user = (rt.rows[0] && rt.rows[0].doc);
        // Case: user by username found
        if (user) {
          // Check password match?
          if (password != user.password) {
            return false;
          }
        }
      })
    ;
  }
}
