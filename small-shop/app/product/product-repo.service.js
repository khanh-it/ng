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
var core_1 = require("@angular/core");
var product_model_1 = require("./product.model");
var abstract_repo_service_1 = require("../core/abstract-repo.service");
var ProductRepoService = (function (_super) {
    __extends(ProductRepoService, _super);
    function ProductRepoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductRepoService.prototype.init = function () {
    };
    ProductRepoService.prototype.insert = function (product) {
        var key = product_model_1.ProductModel.getDDocName('UNIQ_code');
        return this._dbS.putUniq(key, 'code', product);
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
    ProductRepoService.prototype.getAllProducts = function (options) {
        options = options ? options : {};
        var queryOptions = options.query ? options.query : {};
        queryOptions['include_docs'] = true;
        var DDocName = product_model_1.ProductModel.getDDocName('');
        return this._dbS.query(DDocName, queryOptions);
    };
    return ProductRepoService;
}(abstract_repo_service_1.AbstractRepoService));
ProductRepoService = __decorate([
    core_1.Injectable()
], ProductRepoService);
exports.ProductRepoService = ProductRepoService;
//# sourceMappingURL=product-repo.service.js.map