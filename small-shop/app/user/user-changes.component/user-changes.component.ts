import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
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
  selector: 'app-user-changes',
  templateUrl: 'user-changes.component.html',
  styleUrls: [ 'user-changes.component.css' ],
  providers: [ ],
})
export class UserChangesComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _userRepoServ: UserRepoService,
    protected _sanitizer: DomSanitizer
  ) {}

  public action:string = UserChangesComponent.ACT_FEATURES;

  public static readonly ACT_FEATURES = 'features';

  public static readonly ACT_CHANGE_FULLNAME = 'change_fullname';

  public static readonly ACT_CHANGE_PASSWORD = 'change_password';

  public static readonly ACT_CHANGE_TYPE = 'change_type';

  public static readonly ACT_CHANGE_IMAGE = 'change_image';

  public static readonly ACT_ADD_NEW = 'add_new';

  public isAction(action:string):boolean {
    return action == this.action;
  }
  public isActionFeatures():boolean {
    return !!(this.isAction(UserChangesComponent.ACT_FEATURES) && this.user);
  }
  public isActionChangeFullname():boolean {
    return !!(this.isAction(UserChangesComponent.ACT_CHANGE_FULLNAME) && this.user);
  }
  public isActionChangePassword():boolean {
    return !!(this.isAction(UserChangesComponent.ACT_CHANGE_PASSWORD) && this.user);
  }
  public isActionChangeType():boolean {
    return !!(this.isAction(UserChangesComponent.ACT_CHANGE_TYPE) && this.user);
  }
  public isActionChangeImage():boolean {
    return !!(this.isAction(UserChangesComponent.ACT_CHANGE_IMAGE) && this.user);
  }
  public isActionAddNew():boolean {
    return this.isAction(UserChangesComponent.ACT_ADD_NEW);
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
  }
  public actionChangeImage():void {
    this.action = UserChangesComponent.ACT_CHANGE_IMAGE;
  }
  public actionAddNew():void {
    this.action = UserChangesComponent.ACT_ADD_NEW;
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

  public onFormSubmit():void {
    let user = this.user;
    (() => {
      let rt;
      // Check data validation
      if (!user.fullname
          || !user.username
          //|| !user.password
          || (null === user.admin || undefined === user.admin)
      ) {
        rt = Promise.reject(new Error(this.transServ._('Vui lòng nhập đầy đủ thông tin để thực hiện.')));
      } else {
        // Format data;
        // ---
        user.selfEncodePassword();
        // Insert new user data
        rt = this._userRepoServ.insert(user);
      }
      // Return
      return rt;
    })().then(
      (rt) => {
        // Inform
        //this._dialogComp.alert('');
        // Reset form data
        this.user = null;
        setTimeout(() => {
          // Reset form data
          this.user = new UserModel();
          // Emit event for parent components
          this.onSucceeded.emit(this.user);
        });
      },
      (err:Error) => {
        let msg = err.message;
        // Case: unique username?
        if (msg.indexOf('UNIQ_username') >= 0) {
          msg = this.transServ._('Tên đăng nhập đã được sử dụng không thể thực hiện.');
        }
        // Inform
        this._dialogComp.alert(msg);
        // Reprocedure error
        this.onError.emit(err);
      }
    );
  }

  public onCancel():void {
    this.onCanceled.emit();
  }
}
