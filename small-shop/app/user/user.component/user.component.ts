import {
  Component,
  OnInit
} from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

// Services
import { TranslatorService } from '../../core/translator.service';
import { DialogComponent } from '../../core/dialog.component/dialog.component';
import { UserRepoService } from '../user-repo.service';

// Models
import { UserModel } from '../user.model';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: [ 'user.component.css' ],
  providers: [ ],
})
export class UserComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _userRepoServ: UserRepoService,
    protected _sanitizer: DomSanitizer
  ) {}

  public formData:any = {
    'fullname': '',
    'password': ''
  };

  public selectedUser:UserModel;

  public users:UserModel[] = [];

  public action:string = UserComponent.ACT_LIST;

  public static readonly ACT_LIST = 'list';

  public static readonly ACT_FEATURES = 'features';

  public static readonly ACT_CHANGE_FULLNAME = 'change_fullname';

  public static readonly ACT_CHANGE_PASSWORD = 'change_password';

  public static readonly ACT_CHANGE_TYPE = 'change_type';

  public static readonly ACT_CHANGE_IMAGE = 'change_image';

  public static readonly ACT_ADD_NEW = 'add_new';

  public isAction(action:string):boolean {
    return action == this.action;
  }
  public isActionList():boolean {
    return this.isAction(UserComponent.ACT_LIST);
  }
  public isActionFeatures():boolean {
    return !!(this.isAction(UserComponent.ACT_FEATURES) && this.selectedUser);
  }
  public isActionChangeFullname():boolean {
    return !!(this.isAction(UserComponent.ACT_CHANGE_FULLNAME) && this.selectedUser);
  }
  public isActionChangePassword():boolean {
    return !!(this.isAction(UserComponent.ACT_CHANGE_PASSWORD) && this.selectedUser);
  }
  public isActionChangeType():boolean {
    return !!(this.isAction(UserComponent.ACT_CHANGE_TYPE) && this.selectedUser);
  }
  public isActionChangeImage():boolean {
    return !!(this.isAction(UserComponent.ACT_CHANGE_IMAGE) && this.selectedUser);
  }
  public isActionAddNew():boolean {
    return this.isAction(UserComponent.ACT_ADD_NEW);
  }

  public actionList():void {
    this.action = UserComponent.ACT_LIST;
  }
  public actionFeatures():void {
    this.action = UserComponent.ACT_FEATURES;
  }
  public actionChangeFullname():void {
    this.action = UserComponent.ACT_CHANGE_FULLNAME;
  }
  public actionChangePassword():void {
    this.action = UserComponent.ACT_CHANGE_PASSWORD;
  }
  public actionChangeType():void {
    this.action = UserComponent.ACT_CHANGE_TYPE;
  }
  public actionChangeImage():void {
    this.action = UserComponent.ACT_CHANGE_IMAGE;
  }
  public actionAddNew():void {
    this.action = UserComponent.ACT_ADD_NEW;
  }

  ngOnInit() {
    this._userRepoServ.getAllUsers()
      .then(users => {
        this.users = users;
      })
    ;
  }

  public selectUser(user:UserModel):void {
    this.selectedUser = user;
  }

  /** */
  public getUserImgBase64(user:UserModel):SafeResourceUrl {
    let url = this._sanitizer.bypassSecurityTrustResourceUrl(user.getImgBase64());
    return url;
  }

  public onFormSubmit_addNew():any {

  }

  public onFormSubmit():any {
    let user = this.selectedUser;
    if (!user) {
      this._dialogComp.alert(this.transServ._('Chưa chọn tài khoản, không thể thực hiện.'));
      this.actionList();
    } else {
      // Case: change user fullname
      if (this.isActionChangeFullname()) {
        let fullname = this.formData.fullname
          ? ('' + this.formData.fullname).trim()
          : user.fullname
        ;
        ((user.fullname != fullname && fullname) && (user.fullname = fullname)
          ? this._userRepoServ.update(user)
          : Promise.resolve()
        ).then(() => { this.actionFeatures(); });

      // Case: change user password
      } else if (this.isActionChangePassword()) {

      // Case: change user type
      } else if (this.isActionChangeType()) {

        // Case: change user image
      } else if (this.isActionChangeImage()) {

      }
    }
  }
}
