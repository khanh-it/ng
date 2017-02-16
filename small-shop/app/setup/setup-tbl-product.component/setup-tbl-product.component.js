"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pouchdb_db_service_1 = require("../../core/db.service/pouchdb-db.service");
var product_repo_service_1 = require("../../product/product-repo.service");
var product_model_1 = require("../../product/product.model");
var SetupTblProductComponent = (function () {
    function SetupTblProductComponent(_pouchdbServ, _productRepoServ) {
        this._pouchdbServ = _pouchdbServ;
        this._productRepoServ = _productRepoServ;
    }
    SetupTblProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tblName = product_model_1.ProductModel.TABLE_NAME;
        var ddocID = '_design/' + tblName;
        var ddoc = {
            '_id': ddocID,
            'views': {},
            '_rev': ''
        };
        ddoc.views[tblName] = {
            map: function (doc) {
                if ('PRODUCT' === doc.TBL) {
                    emit(doc._id);
                }
            }.toString()
        };
        ddoc.views['UNIQ_code'] = {
            map: function (doc) {
                if ('PRODUCT' === doc.TBL && doc.code) {
                    emit(doc.code);
                }
            }.toString()
        };
        ddoc.views['IDX_name'] = {
            map: function (doc) {
                if ('PRODUCT' === doc.TBL) {
                    emit(doc.name);
                }
            }.toString()
        };
        ddoc.views['IDX_price'] = {
            map: function (doc) {
                if ('PRODUCT' === doc.TBL) {
                    emit(doc.price);
                }
            }.toString()
        };
        this._pouchdbServ.get(ddocID)
            .then(function (rt) { return rt; }, function () { })
            .then(function (rt) {
            ddoc._rev = (rt && rt._rev);
            return _this._pouchdbServ.put(ddoc).then(function () {
                return _this._pouchdbServ.query(tblName, { 'limit': 0 }).then(function (rt) {
                    console.log('[SetupTblProductComponent] alter design document done!', rt);
                });
            });
        })
            .then(function () {
        })
            .then(function () {
            alert('Setup table "PRODUCT" done!');
        });
    };
    return SetupTblProductComponent;
}());
SetupTblProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-setup-tbl-product',
        templateUrl: 'setup-tbl-product.component.html',
        providers: [
            product_repo_service_1.ProductRepoService
        ],
    }),
    __metadata("design:paramtypes", [pouchdb_db_service_1.PouchdbDbService,
        product_repo_service_1.ProductRepoService])
], SetupTblProductComponent);
exports.SetupTblProductComponent = SetupTblProductComponent;
//# sourceMappingURL=setup-tbl-product.component.js.map