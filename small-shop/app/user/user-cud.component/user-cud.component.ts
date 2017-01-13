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
  selector: 'app-user-cud',
  templateUrl: 'user-cud.component.html',
  styleUrls: [ 'user-cud.component.css' ],
  providers: [ ],
})
export class UserCudComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _userRepoServ: UserRepoService,
    //protected _sanitizer: DomSanitizer
  ) {}

  @Output() public onSucceeded:EventEmitter<UserModel>
    = new EventEmitter<UserModel>()
  ;

  @Output() public onError:EventEmitter<Error>
    = new EventEmitter<Error>()
  ;

  @Output() public onCanceled:EventEmitter<void>
    = new EventEmitter<void>()
  ;

  @Input() public cudUser:UserModel;

  public user:UserModel = new UserModel();

  ngOnInit() {
    // Init user's data...
    if (this.cudUser) {
      this.user = this.cudUser;
    }
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
