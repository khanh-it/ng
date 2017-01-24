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
  
  public selectedUser:UserModel;

  public users:UserModel[] = [];

  public action:string = UserComponent.ACT_LIST;

  public static readonly ACT_LIST = 'list';

  public static readonly ACT_CHANGES = 'changes';

  public static readonly ACT_ADD_NEW = 'add_new';

  public isAction(action:string):boolean {
    return action == this.action;
  }
  public isActionList():boolean {
    return this.isAction(UserComponent.ACT_LIST);
  }
  public isActionChanges():boolean {
    return !!(this.isAction(UserComponent.ACT_CHANGES) && this.selectedUser);
  }
  public isActionAddNew():boolean {
    return this.isAction(UserComponent.ACT_ADD_NEW);
  }

  public actionList():void {
    this.action = UserComponent.ACT_LIST;
  }
  public actionChanges():void {
    this.action = UserComponent.ACT_CHANGES;
  }
  public actionAddNew():void {
    this.action = UserComponent.ACT_ADD_NEW;
  }

  ngOnInit() {

  }

  public selectUser(user:UserModel):void {
    this.selectedUser = user;
  }

  /** */
  public getUserImgBase64(user:UserModel):SafeResourceUrl {
    let url = this._sanitizer.bypassSecurityTrustResourceUrl(user.getImgBase64());
    return url;
  }
}
