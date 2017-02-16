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
var shared_module_1 = require("../shared/shared.module");
var setup_routing_module_1 = require("./setup-routing.module");
var setup_component_1 = require("./setup.component/setup.component");
var setup_tbl_user_component_1 = require("./setup-tbl-user.component/setup-tbl-user.component");
var setup_tbl_product_component_1 = require("./setup-tbl-product.component/setup-tbl-product.component");
var SetupModule = (function () {
    function SetupModule() {
    }
    return SetupModule;
}());
SetupModule = __decorate([
    core_1.NgModule({
        imports: [shared_module_1.SharedModule, setup_routing_module_1.SetupRoutingModule],
        declarations: [
            setup_component_1.SetupComponent,
            setup_tbl_user_component_1.SetupTblUserComponent,
            setup_tbl_product_component_1.SetupTblProductComponent
        ],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], SetupModule);
exports.SetupModule = SetupModule;
//# sourceMappingURL=setup.module.js.map