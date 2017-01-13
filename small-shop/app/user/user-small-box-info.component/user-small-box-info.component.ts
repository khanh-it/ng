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

// Models
import { UserModel } from '../user.model';

@Component({
  moduleId: module.id,
  selector: 'app-user-small-box-info',
  templateUrl: 'user-small-box-info.html',
  styleUrls: [ 'user-small-box-info.css' ],
  //providers: [ ],
})
export class UserSmallBoxInfoComponent implements OnInit {

  @Input() public isActive:boolean = false;

  @Input() public user:UserModel;

  @Output() public onUserSelected = new EventEmitter<UserModel>();

  constructor(
    public transServ: TranslatorService,
    protected _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {}

  public selectUser():void {
    this.onUserSelected.emit(this.user);
  }

  /** */
  public getUserImgBase64():SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.user.getImgBase64());
  }
}
