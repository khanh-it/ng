import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
/*import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';*/

// Services
import { TranslatorService } from '../../core/translator.service';
import { DialogComponent } from '../../core/dialog.component/dialog.component';
import { UserRepoService } from '../user-repo.service';

// Models
import { UserModel } from '../user.model';

@Component({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: [ 'user-list.component.css' ],
  providers: [ ],
})
export class UserListComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _userRepoServ: UserRepoService/*,
    protected _sanitizer: DomSanitizer*/
  ) {}

  @Output() public onUserSelected:EventEmitter<UserModel> = new EventEmitter<UserModel>();

  public selectedUser:UserModel;

  public users:UserModel[] = [];

  public ngOnInit() {
    // Refresh list of users...
    this._refreshUserList();
  }

  // Refresh list of users...
  protected _refreshUserList() {
    // Refresh list of users...
    this._userRepoServ.getAllUsers().then(users => this.users = users);
  }

  public selectUser(user:UserModel):void {
    this.onUserSelected.emit(this.selectedUser = user);
  }

  public deleteUser(user:UserModel, usrSmallBoxInf:any):void {
    if (user) {
      this._dialogComp.confirm(
        this.transServ._(`Xóa tài khoản: ${user.fullname} [${user.username}]?`)
      ).then(rs => {
        if (!rs) return;
        // Mark as inactive when processing
        usrSmallBoxInf.inactive();
        // Delete user data
        this._userRepoServ.delete(user)
          .then(rs => {
            this._refreshUserList();
          })
          .catch((err:Error) => {
            // Inform
            this._dialogComp.alert(this.transServ._(`Xóa tài khoản không thành công. Err: ${err.message}.`));
          })
          .then(() => {
            // Mark as inactive when done
            usrSmallBoxInf.active();
          })
        ;
      });
    }
  }
}
