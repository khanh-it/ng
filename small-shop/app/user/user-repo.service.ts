import { Injectable } from '@angular/core';

// Models
import { UserModel } from './user.model';

// Services
import { UserRepoService as Core_UserRepoService } from '../core/user-repo.service';

@Injectable()
export class UserRepoService extends Core_UserRepoService {

  /* Initialize */
  protected init() {
    /*  */
  }

  public update(user:UserModel):Promise<boolean> {
    return this._dbS.get(user.id())
      .then((doc) => {//user._rev = doc._rev;
        return this._dbS.put(user);
      })
      .catch(() => false)
      .then(() => true)
    ;
  }

  /* Get all users data */
  public getAllUsers():Promise<UserModel[]> {
    let DDocName = UserModel.getDDocName('');
    return new Promise((rs, rj) => {
      this._dbS.query(DDocName, {
        include_docs: true
      }).then(rt => {
        let users:UserModel[] = [];
        rt.rows.forEach((row:any) => {
          users.push(new UserModel(row.doc));
        });
        rs(users);
      }, rj);
    });
  }
}
