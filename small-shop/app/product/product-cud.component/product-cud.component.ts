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
  selector: 'app-product-cud',
  templateUrl: 'product-cud.component.html',
  styleUrls: [ 'product-cud.component.css' ],
  providers: [ ],
})
export class ProductCudComponent implements OnInit {

  constructor(
    public transServ: TranslatorService,
    protected _dialogComp: DialogComponent,
    protected _productRepoServ: ProductRepoService,
    //protected _sanitizer: DomSanitizer
  ) {}

  @Output() public onSucceeded:EventEmitter<ProductModel>
    = new EventEmitter<ProductModel>()
  ;

  @Output() public onError:EventEmitter<Error>
    = new EventEmitter<Error>()
  ;

  @Output() public onCanceled:EventEmitter<void>
    = new EventEmitter<void>()
  ;

  @Input() public cudProduct:ProductModel;

  /**  */
  public product:ProductModel = new ProductModel();

  ngOnInit() {
    // Init product's data...
    if (this.cudProduct) {
      this.product = this.cudProduct;
    }
  }

  public onFormSubmit():void {
    let product = this.product;
    (() => {
      let rt;
      // Check data validation
      if (!product.name
          || !product.code
          || ('' == ('' + product.price))
      ) {
        rt = Promise.reject(new Error(this.transServ._('Vui lòng nhập đầy đủ thông tin để thực hiện.')));
      } else {
        // Format data;
        // --- price
        this.product.price = +this.product.price;
        // ...
        // Insert new product data
        rt = this._productRepoServ.insert(product);
      }
      // Return
      return rt;
    })().then(
      (rt) => {
        // Inform
        //this._dialogComp.alert('');
        // Reset form data
        this.product = null;
        setTimeout(() => {
          // Reset form data
          this.product = new ProductModel();
          // Emit event for parent components
          this._dialogComp.alert(this.transServ._('Thao tác dữ liệu thành công!'))
            .then(() => {
              this.onSucceeded.emit(this.product);
            })
          ;
        });
      },
      (err:Error) => {
        let msg = err.message;
        // Case: unique code?
        if (msg.indexOf('UNIQ_code') >= 0) {
          msg = this.transServ._('Mã sản phẩm đã được sử dụng không thể thực hiện.');
        }
        // Inform
        this._dialogComp.alert(msg);
        // Reprocedure error
        this.onError.emit(err);
      }
    );
  }

  public onCancel():void {
    this.onCanceled.emit();
  }
}
