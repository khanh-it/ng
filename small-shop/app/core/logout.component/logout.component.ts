import {
  Component,
  //OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  //Params
} from '@angular/router';

// Services
//import { PhpjsService } from '../phpjs.service';
import { TranslatorService } from '../translator.service';
//import { DialogComponent } from '../dialog.component/dialog.component';
import { UserRepoService } from '../user-repo.service';

@Component({
  moduleId: module.id,
  selector: 'app-logout',
  template: '',
  //templateUrl: 'logout.component.html',
  //styleUrls: [ 'logout.component.css' ],
})
export class LogoutComponent /*implements OnInit*/ {

  constructor(
    //protected _phpjsServ: PhpjsService,
    public transServ: TranslatorService,
    protected _router: Router,
    protected _route: ActivatedRoute,
    protected _userRepoServ: UserRepoService,
    //protected _dialogComp: DialogComponent,
  ) {
    // Check if user logged in, then redirect to home page
    this._logout();
  }

  //ngOnInit() {}

  /**
   * Logout user
   */
  protected _logout() {
    // Erase session
    this._userRepoServ.setLoggedInUser(null);
    // Redirect to home page!
    this._router.navigate(['/login', {'logoutRdr': 1}], {
      relativeTo: this._route,
      queryParams: {}
    });
  }
}
