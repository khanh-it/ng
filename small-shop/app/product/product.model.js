"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_model_1 = require("../core/abstract.model");
var ProductModel = (function (_super) {
    __extends(ProductModel, _super);
    function ProductModel() {
        return _super.apply(this, arguments) || this;
    }
    ProductModel.returnArrActive = function () {
        return ProductModel._arrActive;
    };
    ProductModel.prototype.getActive = function () { return this.active; };
    ProductModel.prototype.setActive = function (data) {
        data = (ProductModel.ACTIVE_NO === data) ? data : ProductModel.ACTIVE_YES;
        this.active = data;
        return this;
    };
    ProductModel.prototype.setImg = function (img) {
        this.img = img;
    };
    ProductModel.prototype.getImg = function () {
        return this.img;
    };
    ProductModel.prototype.getImgBase64 = function () {
        return (this.img instanceof File)
            ? window.URL.createObjectURL(this.img)
            : ProductModel.IMG;
    };
    ProductModel.prototype.init = function (data) {
        this.code = data['code'] ? ('' + data['code']) : '';
        this.name = data['name'] ? ('' + data['name']) : '';
        this.price = data['price'] ? +data['price'] : 0;
        this.note = data['note'] ? ('' + data['note']) : '';
        this.setActive(data['active']);
        return this;
    };
    return ProductModel;
}(abstract_model_1.AbstractModel));
ProductModel.IMG = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNThmY2E3NmMxMiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1OGZjYTc2YzEyIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNCIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=';
ProductModel.TABLE_NAME = 'PRODUCT';
ProductModel._arrActive = [
    'Chưa kích hoạt',
    'Kích hoạt'
];
ProductModel.ACTIVE_NO = 0;
ProductModel.ACTIVE_YES = 1;
exports.ProductModel = ProductModel;
//# sourceMappingURL=product.model.js.map