import { Injectable } from '@angular/core';

// Models
import { ProductModel } from './product.model';

// Services
import { AbstractRepoService as Core_AbstractRepoService } from '../core/abstract-repo.service';

@Injectable()
export class ProductRepoService extends Core_AbstractRepoService {

  /* Initialize */
  protected init() {
    /*  */
  }

  public insert(product:ProductModel):Promise<any> {
    let key = ProductModel.getDDocName('UNIQ_productname');
    return this._dbS.putUniq(key, 'productname', product);
  }

  public update(product:ProductModel):Promise<boolean> {
    return this._dbS.get(product.id())
      .then((doc) => {//product._rev = doc._rev;
        return this._dbS.put(product);
      })
      .catch(() => false)
      .then(() => true)
    ;
  }

  public changeImage(product:ProductModel, img?:File):Promise<any> {
    product.setImg(img);
    return this.update(product);
  }

  /* Get all products data */
  public getAllProducts():Promise<ProductModel[]> {
    let DDocName = ProductModel.getDDocName('');
    return new Promise((rs, rj) => {
      this._dbS.query(DDocName, {
        include_docs: true
      }).then(rt => {
        let products:ProductModel[] = [];
        rt.rows.forEach((row:any) => {
          products.push(new ProductModel(row.doc));
        });
        rs(products);
      }, rj);
    });
  }
}
