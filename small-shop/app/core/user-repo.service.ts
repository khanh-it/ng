import {
  Injectable,
  EventEmitter
} from '@angular/core';

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

  public events:any = {
    'loggedUserChanges': new EventEmitter<any>()
  };

  /***/
  public constructor(protected _dbS:PouchdbDbService) {
    super(_dbS);
  }

  /* Initialize */
  protected init() {
    /*  */
  }

  public static USER_LOGGED_ID_KEY:string = 'USER_LOGGED_ID';

  /* Initialize */
  protected _loggedInUserID(userID?:string):string {
    if (0 in arguments) {
      if (null === userID || undefined === userID) {
        userID = '';
      }
      localStorage.setItem(UserRepoService.USER_LOGGED_ID_KEY, '' + userID);
    } else {
      userID = localStorage.getItem(UserRepoService.USER_LOGGED_ID_KEY);
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
            .then((user:UserModel) => {
              rs(user);
            })
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

  /** Store user's logged in info (data) */
  public setLoggedInUser(user:UserModel|null):UserRepoService {
    this._loggedInUser = user;
    this._loggedInUserID(user && user._id);
    // Trigger events
    this.events.loggedUserChanges.emit(user);
    // Return
    return this;
  }

  /** Get user data for login */
  public getUser4Login(
    username:string,
    password:string,
    autoStoreWhenSuccess:boolean = true
  ):Promise<UserModel|void|boolean> {
    let DDocName = UserModel.getDDocName('UNIQ_username');
    return this._dbS.query(DDocName, {
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
          // Store user info
          autoStoreWhenSuccess && this.setLoggedInUser(user);
          // Return
          return user;
        }
      })
    ;
  }
}
