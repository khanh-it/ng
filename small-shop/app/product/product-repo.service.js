"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var product_model_1 = require("./product.model");
var abstract_repo_service_1 = require("../core/abstract-repo.service");
var ProductRepoService = (function (_super) {
    __extends(ProductRepoService, _super);
    function ProductRepoService() {
        return _super.apply(this, arguments) || this;
    }
    ProductRepoService.prototype.init = function () {
    };
    ProductRepoService.prototype.insert = function (product) {
        var key = product_model_1.ProductModel.getDDocName('UNIQ_productname');
        return this._dbS.putUniq(key, 'productname', product);
    };
    ProductRepoService.prototype.update = function (product) {
        var _this = this;
        return this._dbS.get(product.id())
            .then(function (doc) {
            return _this._dbS.put(product);
        })
            .catch(function () { return false; })
            .then(function () { return true; });
    };
    ProductRepoService.prototype.changeImage = function (product, img) {
        product.setImg(img);
        return this.update(product);
    };
    ProductRepoService.prototype.getAllProducts = function () {
        var _this = this;
        var DDocName = product_model_1.ProductModel.getDDocName('');
        return new Promise(function (rs, rj) {
            _this._dbS.query(DDocName, {
                include_docs: true
            }).then(function (rt) {
                var products = [];
                rt.rows.forEach(function (row) {
                    products.push(new product_model_1.ProductModel(row.doc));
                });
                rs(products);
            }, rj);
        });
    };
    return ProductRepoService;
}(abstract_repo_service_1.AbstractRepoService));
ProductRepoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductRepoService);
exports.ProductRepoService = ProductRepoService;
//# sourceMappingURL=product-repo.service.js.map