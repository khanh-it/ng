import { Component, OnInit } from '@angular/core';

/** Services */
import { PouchdbDbService } from '../../core/db.service/pouchdb-db.service';
import { ProductRepoService } from '../../product/product-repo.service';

/** Models */
import { ProductModel } from '../../product/product.model';

declare var emit:Function;

@Component({
  moduleId: module.id,
  selector: 'app-setup-tbl-product',
  templateUrl: 'setup-tbl-product.component.html',
  providers: [
    ProductRepoService
  ],
})
export class SetupTblProductComponent implements OnInit {

  constructor(
    protected _pouchdbServ: PouchdbDbService,
    protected _productRepoServ: ProductRepoService
  ) {}

  ngOnInit() {
    // design document
    let tblName = ProductModel.TABLE_NAME;
    let ddocID = '_design/' + tblName;
    let ddoc = {
      '_id': ddocID,
      'views': {},
      '_rev': ''
    };
    // ---
    ddoc.views[tblName] = {
      map: function(doc:any) {
        if ('PRODUCT' === doc.TBL) {
          emit(doc._id);
        }
      }.toString()
    };
    // ---
    ddoc.views['UNIQ_code'] = {
      map: function (doc:any) {
        if ('PRODUCT' === doc.TBL && doc.code) {
          emit(doc.code);
        }
      }.toString()
    };
    // ---
    ddoc.views['IDX_name'] = {
      map: function (doc:any) {
        if ('PRODUCT' === doc.TBL) {
          emit(doc.name);
        }
      }.toString()
    };
    // ---
    ddoc.views['IDX_price'] = {
      map: function (doc:any) {
        if ('PRODUCT' === doc.TBL) {
          emit(doc.price);
        }
      }.toString()
    };
    //console.log('[SetupTblProductComponent] ddoc: ', ddoc);

    // insert, or update design document
    this._pouchdbServ.get(ddocID)
      .then((rt:any) => { return rt; }, () => {})
      .then((rt:any) => {
        ddoc._rev = (rt && rt._rev);
        return this._pouchdbServ.put(ddoc).then(() => {
          return this._pouchdbServ.query(tblName, {'limit': 0}).then((rt) => {
            console.log('[SetupTblProductComponent] alter design document done!', rt);
          });
        });
      })
      // add predefined product(s)
      .then(() => {
        // ...
      })
      //
      .then(() => {
        alert('Setup table "PRODUCT" done!');
      })
    ;
  }
}
