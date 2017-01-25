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
import { ProductRepoService } from '../product-repo.service';

// Models
import { ProductModel } from '../product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: [ 'product.component.css' ],
  providers: [ ],
})
export class ProductComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _productRepoServ: ProductRepoService,
    protected _sanitizer: DomSanitizer
  ) {}
  
  public selectedProduct:ProductModel;

  public products:ProductModel[] = [];

  public action:string = ProductComponent.ACT_LIST;

  public static readonly ACT_LIST = 'list';

  public static readonly ACT_CHANGES = 'changes';

  public static readonly ACT_ADD_NEW = 'add_new';

  public isAction(action:string):boolean {
    return action == this.action;
  }
  public isActionList():boolean {
    return this.isAction(ProductComponent.ACT_LIST);
  }
  public isActionChanges():boolean {
    return !!(this.isAction(ProductComponent.ACT_CHANGES) && this.selectedProduct);
  }
  public isActionAddNew():boolean {
    return this.isAction(ProductComponent.ACT_ADD_NEW);
  }

  public actionList():void {
    this.action = ProductComponent.ACT_LIST;
  }
  public actionChanges():void {
    this.action = ProductComponent.ACT_CHANGES;
  }
  public actionAddNew():void {
    this.action = ProductComponent.ACT_ADD_NEW;
  }

  ngOnInit() {

  }

  public selectProduct(product:ProductModel):void {
    this.selectedProduct = product;
  }

  /** */
  public getProductImgBase64(product:ProductModel):SafeResourceUrl {
    let url = this._sanitizer.bypassSecurityTrustResourceUrl(product.getImgBase64());
    return url;
  }
}
