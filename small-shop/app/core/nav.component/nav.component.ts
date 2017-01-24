import {
  Component,
  OnInit,
  Input,
  Inject
} from '@angular/core';

// Configs
//import { AppConfigInterface,  APP_CONFIG } from '../../configs';

// Module(s)
//import { AppModule } from '../../modules/app/index';

// Services
import { TranslatorService } from '../translator.service';
import { UserRepoService } from '../user-repo.service';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: [ 'nav.component.css' ],
})
export class NavComponent implements OnInit {

  /** Logged user data? */
  public user:any;

  constructor(
    public transServ: TranslatorService,
    protected _userRepoServ: UserRepoService
  ) {}

  ngOnInit() {
    //
    let loggedUserChangesHandler = (user:any) => { this.user = user; };
    this._userRepoServ.events.loggedUserChanges.subscribe(loggedUserChangesHandler);
    this._userRepoServ.getLoggedInUser().then(loggedUserChangesHandler);
  }
}
