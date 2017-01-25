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

  @Input() public isActive:void|boolean = null;

  @Input() public user:UserModel;

  @Output() public onUserSelected = new EventEmitter<UserModel>();

  constructor(
    public transServ: TranslatorService,
    protected _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {}

  public selectUser():void {
    if (!this.isActiveFalse()) {
      this.onUserSelected.emit(this.user);  
    }
  }

  /** */
  public getUserImgBase64():SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.user.getImgBase64());
  }

  public active(){
    this.isActive = true;
  }

  public isActiveTrue(){
    return (true === this.isActive);
  }

  public inactive(){
    this.isActive = false;
  }

  public isActiveFalse(){
    return false === this.isActive;
  }
}
