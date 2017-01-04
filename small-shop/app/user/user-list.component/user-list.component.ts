import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

/** Services */
import { TranslatorService } from '../../core/translator.service';
import { DialogComponent } from '../../core/dialog.component/dialog.component';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: [ 'user-list.component.css' ],
  providers: [
    UserService
  ],
})
export class UserListComponent implements OnInit {

  constructor(
    //protected _phpjsServ: PhpjsService,
    protected _tranServ: TranslatorService,
    protected _router: Router,
    protected _route: ActivatedRoute,
    //protected _userRepoServ: UserRepoService,
    protected _dialogComp: DialogComponent,
  ) {}

  ngOnInit() {

  }
}
