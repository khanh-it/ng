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
var translator_service_1 = require("../../core/translator.service");
var dialog_component_1 = require("../../core/dialog.component/dialog.component");
var product_repo_service_1 = require("../product-repo.service");
var ProductListComponent = (function () {
    function ProductListComponent(transServ, _dialogComp, _productRepoServ) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._productRepoServ = _productRepoServ;
        this.onProductSelected = new core_1.EventEmitter();
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productRepoServ.getAllProducts().then(function (products) { return _this.products = products; });
    };
    ProductListComponent.prototype.selectProduct = function (product) {
        this.onProductSelected.emit(this.selectedProduct = product);
    };
    return ProductListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductListComponent.prototype, "onProductSelected", void 0);
ProductListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-product-list',
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        product_repo_service_1.ProductRepoService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map