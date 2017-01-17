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
/* module(s) */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
/* component(s) */
/* --- Setup */
var setup_component_1 = require('./setup.component/setup.component');
var setup_tbl_user_component_1 = require('./setup-tbl-user.component/setup-tbl-user.component');
var routes = [
    /* setup */
    { path: '', component: setup_component_1.SetupComponent, data: {} },
    { path: 'tbl-user', component: setup_tbl_user_component_1.SetupTblUserComponent, data: {} },
];
var SetupRoutingModule = (function () {
    function SetupRoutingModule() {
    }
    SetupRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], SetupRoutingModule);
    return SetupRoutingModule;
}());
exports.SetupRoutingModule = SetupRoutingModule;
//# sourceMappingURL=setup-routing.module.js.map