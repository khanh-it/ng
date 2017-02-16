import { Injectable } from '@angular/core';

// Models
import { ProductModel } from './product.model';

// Services
import {
  AbstractRepoService as Core_AbstractRepoService,
  PDBQueryResponse
} from '../core/abstract-repo.service';

@Injectable()
export class ProductRepoService extends Core_AbstractRepoService {

  /* Initialize */
  protected init() {
    /*  */
  }

  public insert(product:ProductModel):Promise<any> {
    let key = ProductModel.getDDocName('UNIQ_code');
    return this._dbS.putUniq(key, 'code', product);
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
  public getAllProducts(options:any):Promise<PDBQueryResponse> {
    // Fetch data options
    options = options ? options : {};
    // --- Query options
    let queryOptions = options.query ? options.query : {};
    // +++
    queryOptions['include_docs'] = true;
    // +++
    //options.query['include_attachments'] = true;
    //
    let DDocName = ProductModel.getDDocName('');

    // Return
    return this._dbS.query(DDocName, queryOptions);
  }
}
