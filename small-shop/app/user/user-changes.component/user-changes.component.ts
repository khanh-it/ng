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
  selector: 'app-user-changes',
  templateUrl: 'user-changes.component.html',
  styleUrls: [ 'user-changes.component.css' ],
  providers: [ ],
})
export class UserChangesComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _userRepoServ: UserRepoService/*,
    protected _sanitizer: DomSanitizer*/
  ) {}

  public action:string = UserChangesComponent.ACT_FEATURES;

  public static readonly ACT_FEATURES = 'features';

  public static readonly ACT_CHANGE_FULLNAME = 'change_fullname';

  public static readonly ACT_CHANGE_PASSWORD = 'change_password';

  public static readonly ACT_CHANGE_TYPE = 'change_type';

  public static readonly ACT_CHANGE_IMAGE = 'change_image';

  public isAction(action:string):boolean {
    return !!(('' + action == this.action) && this.user);
  }
  public isActionFeatures():boolean {
    return this.isAction(UserChangesComponent.ACT_FEATURES);
  }
  public isActionChangeFullname():boolean {
    return this.isAction(UserChangesComponent.ACT_CHANGE_FULLNAME);
  }
  public isActionChangePassword():boolean {
    return this.isAction(UserChangesComponent.ACT_CHANGE_PASSWORD);
  }
  public isActionChangeType():boolean {
    return this.isAction(UserChangesComponent.ACT_CHANGE_TYPE);
  }
  public isActionChangeImage():boolean {
    return this.isAction(UserChangesComponent.ACT_CHANGE_IMAGE);
  }
  public actionFeatures():void {
    this.action = UserChangesComponent.ACT_FEATURES;
  }
  public actionChangeFullname():void {
    this.action = UserChangesComponent.ACT_CHANGE_FULLNAME;
  }
  public actionChangePassword():void {
    this.action = UserChangesComponent.ACT_CHANGE_PASSWORD;
  }
  public actionChangeType():void {
    this.action = UserChangesComponent.ACT_CHANGE_TYPE;
    //
    this.formData.admin = this.user.admin;
  }
  public actionChangeImage():void {
    this.action = UserChangesComponent.ACT_CHANGE_IMAGE;
  }

  @Output() public onSucceeded:EventEmitter<UserModel>
    = new EventEmitter<UserModel>()
  ;

  @Output() public onError:EventEmitter<Error>
    = new EventEmitter<Error>()
  ;

  @Output() public onCanceled:EventEmitter<void>
    = new EventEmitter<void>()
  ;

  @Input() public user:UserModel;

  ngOnInit() {
    // Init user's data...

  }

  /** Placeholder for form data */
  public formData:any = {
    'fullname': '',
    'old_password': '',
    'password': '',
    'password_confirm': '',
    'admin': null
  };

  /**
   * Change user's fullname
   */
  public onFormSubmit_changeFullname():void {
    let user = this.user;
    user && (() => {
      let rt = Promise.resolve();
      // Check data validation
      let fullname = ('' + this.formData.fullname).trim();
      if (fullname && (user.fullname != fullname)) {
        // Format, set model data...
        user.fullname = fullname;
        // Update data
        rt = this._userRepoServ.update(user);
      }
      // Return
      return rt;
    })().then((rt) => {
        // Inform: this._dialogComp.alert('');
        // Reset form data
        this.formData.fullname = '';
      }, (err:Error) => {
        // Inform
        this._dialogComp.alert(err.message);
      }
    ).then(() => {
      this.actionFeatures();
    });
  }

  /**
   * Change user's password
   */
  public onFormSubmit_changePassword():void {
    let user = this.user;
    user && (() => {
      let rt = Promise.resolve();
      // Check data validation
      let old_password = UserModel.encodePassword('' + this.formData.old_password);
      let password = ('' + this.formData.password).trim();
      let password_confirm = ('' + this.formData.password_confirm).trim();
      if (old_password != user.password) {
          rt = Promise.reject(new Error('Mật khẩu hiện tại chưa đúng.'));
      } else if (password != password_confirm) {
        rt = Promise.reject(new Error('Mật khẩu mới không trùng khớp.'));
      } else {
        // Format, set model data...
        user.password = password;
        user.selfEncodePassword();
        // Update data
        rt = this._userRepoServ.update(user);
      }
      // Return
      return rt;
    })().then((rt) => {
        // Inform: this._dialogComp.alert('');
        // Reset form data
        this.formData.old_password = this.formData.password = this.formData.password_confirm = '';
        // Return
        this.actionFeatures();
      }, (err:Error) => {
        // Inform
        this._dialogComp.alert(this.transServ._(err.message));
      }
    );
  }

  /**
   * Change user's password
   */
  public onFormSubmit_changeType():void {
    let user = this.user;
    user && (() => {
      let rt = Promise.resolve();
      // Check data validation
      // ...
      // Format, set model data...
      user.setAdmin(this.formData.admin);
      // Update data
      rt = this._userRepoServ.update(user);
      // Return
      return rt;
    })().then((rt) => {
        // Inform: this._dialogComp.alert('');
        // Reset form data
        this.formData.admin = null;
        // Return
        this.actionFeatures();
      }, (err:Error) => {
        // Inform
        this._dialogComp.alert(this.transServ._(err.message));
      }
    );
  }

  /**
   * Change user's image
   */
  public onFormSubmit_changeImage(usrImgEle:HTMLInputElement):void {
    // Cancel?
    if (!usrImgEle.files.length) {
      this.actionFeatures();
    } else {
      let usrImg:File = usrImgEle.files[0];
      this._userRepoServ.changeImage(this.user, usrImg)
        .then(() => {
          this.actionFeatures();
        })
        .catch((e:Error) => {
            this._dialogComp.alert(this.transServ._('Thay đổi ảnh đại diện không thành công. Err: ' + e.message));
        })
      ;
    }
  }

  public deleteUser() {

  }

  public onCancel():void {
    this.onCanceled.emit();
  }
}
