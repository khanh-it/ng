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
var product_model_1 = require("../product.model");
var ProductCudComponent = (function () {
    function ProductCudComponent(transServ, _dialogComp, _productRepoServ) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._productRepoServ = _productRepoServ;
        this.onSucceeded = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onCanceled = new core_1.EventEmitter();
        this.product = new product_model_1.ProductModel();
    }
    ProductCudComponent.prototype.ngOnInit = function () {
        if (this.cudProduct) {
            this.product = this.cudProduct;
        }
    };
    ProductCudComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var product = this.product;
        (function () {
            var rt;
            if (!product.name
                || !product.code
                || ('' == ('' + product.price))) {
                rt = Promise.reject(new Error(_this.transServ._('Vui lòng nhập đầy đủ thông tin để thực hiện.')));
            }
            else {
                _this.product.price = +_this.product.price;
                rt = _this._productRepoServ.insert(product);
            }
            return rt;
        })().then(function (rt) {
            _this.product = null;
            setTimeout(function () {
                _this.product = new product_model_1.ProductModel();
                _this._dialogComp.alert(_this.transServ._('Thao tác dữ liệu thành công!'))
                    .then(function () {
                    _this.onSucceeded.emit(_this.product);
                });
            });
        }, function (err) {
            var msg = err.message;
            if (msg.indexOf('UNIQ_code') >= 0) {
                msg = _this.transServ._('Mã sản phẩm đã được sử dụng không thể thực hiện.');
            }
            _this._dialogComp.alert(msg);
            _this.onError.emit(err);
        });
    };
    ProductCudComponent.prototype.onCancel = function () {
        this.onCanceled.emit();
    };
    return ProductCudComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductCudComponent.prototype, "onSucceeded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductCudComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ProductCudComponent.prototype, "onCanceled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", product_model_1.ProductModel)
], ProductCudComponent.prototype, "cudProduct", void 0);
ProductCudComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-product-cud',
        templateUrl: 'product-cud.component.html',
        styleUrls: ['product-cud.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        product_repo_service_1.ProductRepoService])
], ProductCudComponent);
exports.ProductCudComponent = ProductCudComponent;
//# sourceMappingURL=product-cud.component.js.map