import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

// Services
//import { PhpjsService } from '../phpjs.service';
import { TranslatorService } from '../translator.service';
import { DialogComponent } from '../dialog.component/dialog.component';
import { UserRepoService } from '../user-repo.service';

// Models
import { UserModel } from '../user.model';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: [ 'login.component.css' ]
})
export class LoginComponent implements OnInit {

  /** */
  protected formData = {
    'formSubmitted': false,
    'username': '',
    'password': '',
    'remember': false
  };

  /** */
  constructor(
    //protected _phpjsServ: PhpjsService,
    protected _tranServ: TranslatorService,
    protected _router: Router,
    protected _route: ActivatedRoute,
    protected _userRepoServ: UserRepoService,
    protected _dialogComp: DialogComponent,
  ) {}

  /** */
  ngOnInit() {
    // Check if user logged in, then redirect to home page
    this._redirect2HomePageIfLoggedIn();
  }

  /**
   * Check if user logged in, then redirect to home page
   */
  protected _redirect2HomePageIfLoggedIn() {
    this._userRepoServ.getLoggedInUser()
      .then((user:UserModel|void) => {
        if (user) {
          this._router.navigate([''], {
            relativeTo: this._route,
            queryParams: {'uLIRdr': 1}
          });
        }
      })
    ;
  }

  /** */
  protected onFormSubmit() {
    // Data validation
    if (!this.formData.username || !this.formData.password) {
      this._dialogComp.alert(
        this._tranServ._('Vui lòng nhập đủ thông tin bắt buộc.')
      );
      return false;
    }

    //
    this._userRepoServ.getUser4Login(
      this.formData.username,
      UserModel.encodePassword(this.formData.password),
      true // Store user info
    ).then((user:UserModel|void|boolean) => {
      if (false === user) {
        this._dialogComp.alert(
          this._tranServ._('Mật khẩu đăng nhập chưa đúng.')
        );
      // Case: password was not matched
      } else if (null === user || undefined === user) {
        this._dialogComp.alert(
          this._tranServ._('Tài khoản đăng nhập không tồn tại.')
        );
      } else if (user) {
        // Redirect to home page!
        this._router.navigate([''], {
          relativeTo: this._route,
          queryParams: {}
        });
      } else {
        this._dialogComp.alert(
          this._tranServ._('Đăng nhập không thành công.')
        );
      }
    });
    //return false;
  }
}
