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
var router_1 = require("@angular/router");
var product_component_1 = require("./product.component/product.component");
var product_cud_component_1 = require("./product-cud.component/product-cud.component");
var routes = [
    { path: '', component: product_component_1.ProductComponent, data: {},
        children: [
            {
                path: '',
                children: []
            },
            { path: 'addnew', component: product_cud_component_1.ProductCudComponent },
        ]
    },
];
var ProductRoutingModule = (function () {
    function ProductRoutingModule(router) {
    }
    return ProductRoutingModule;
}());
ProductRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ProductRoutingModule);
exports.ProductRoutingModule = ProductRoutingModule;
//# sourceMappingURL=product-routing.module.js.map