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
var platform_browser_1 = require("@angular/platform-browser");
var translator_service_1 = require("../../core/translator.service");
var dialog_component_1 = require("../../core/dialog.component/dialog.component");
var product_repo_service_1 = require("../product-repo.service");
var ProductComponent = ProductComponent_1 = (function () {
    function ProductComponent(transServ, _dialogComp, _productRepoServ, _sanitizer) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._productRepoServ = _productRepoServ;
        this._sanitizer = _sanitizer;
        this.products = [];
        this.action = ProductComponent_1.ACT_LIST;
    }
    ProductComponent.prototype.isAction = function (action) {
        return action == this.action;
    };
    ProductComponent.prototype.isActionList = function () {
        return this.isAction(ProductComponent_1.ACT_LIST);
    };
    ProductComponent.prototype.isActionAddNew = function () {
        return this.isAction(ProductComponent_1.ACT_ADD_NEW);
    };
    ProductComponent.prototype.actionList = function () {
        this.action = ProductComponent_1.ACT_LIST;
    };
    ProductComponent.prototype.actionAddNew = function () {
        this.action = ProductComponent_1.ACT_ADD_NEW;
    };
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.selectProduct = function (product) {
        this.selectedProduct = product;
    };
    ProductComponent.prototype.getProductImgBase64 = function (product) {
        var url = this._sanitizer.bypassSecurityTrustResourceUrl(product.getImgBase64());
        return url;
    };
    return ProductComponent;
}());
ProductComponent.ACT_LIST = 'list';
ProductComponent.ACT_ADD_NEW = 'add_new';
ProductComponent = ProductComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-product',
        templateUrl: 'product.component.html',
        styleUrls: ['product.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        product_repo_service_1.ProductRepoService,
        platform_browser_1.DomSanitizer])
], ProductComponent);
exports.ProductComponent = ProductComponent;
var ProductComponent_1;
//# sourceMappingURL=product.component.js.map