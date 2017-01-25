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
import { ProductRepoService } from '../product-repo.service';

// Models
import { ProductModel } from '../product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: [ 'product-list.component.css' ],
  providers: [ ],
})
export class ProductListComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _productRepoServ: ProductRepoService/*,
    protected _sanitizer: DomSanitizer*/
  ) {}

  @Output() public onProductSelected:EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  public selectedProduct:ProductModel;

  public products:ProductModel[] = [];

  public ngOnInit() {
    // Refresh list of products...
    this._productRepoServ.getAllProducts().then(products => this.products = products);
  }

  public selectProduct(product:ProductModel):void {
    this.onProductSelected.emit(this.selectedProduct = product);
  }
}
