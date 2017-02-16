import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
/*import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';*/

// Services
import { TranslatorService } from '../../core/translator.service';
import { DialogComponent } from '../../core/dialog.component/dialog.component';
import { ProductRepoService } from '../product-repo.service';
import { PhpjsService } from '../../core/phpjs.service';
const phpjs = PhpjsService.phpjs();

// Components
import { PagingComponent } from '../../shared/paging.component/paging.component';

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

  @ViewChild('pager') protected _pager:PagingComponent;

  public pagingData:any = {
    'limit': 10,
    'skip': null,
    'totalRows': null,
  };

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _productRepoServ: ProductRepoService/*,
    protected phpjsServ: PhpjsService,
    protected _sanitizer: DomSanitizer*/
  ) {}

  @Output() public onProductSelected:EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  public selectedProduct:ProductModel;

  public products:ProductModel[] = [];

  public ngOnInit() {
    // Get list of products...
    this.fetchProductList();
  }

  public fetchProductList():void {
    // Format options
    let options = {
    // --- query options
      'query': this.pagingData
    };
    // ---
    this._productRepoServ.getAllProducts(options)
      .then(rt => {
        this.pagingData.totalRows = rt.total_rows;
        if (rt && rt.rows) {
          this.products = rt.rows.map((row:any) => {
            return new ProductModel(row.doc);
          });
        }
      })
    ;
  }

  public selectProduct(product:ProductModel):void {
    this.onProductSelected.emit(this.selectedProduct = product);
  }

  /** */
  public onPagerPageChanges(page:number, offset:number/*, pager:PagingComponent*/) {
    this.pagingData.skip = offset;
    this.fetchProductList();
  }
}
