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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// component(s)
var dashboard_component_1 = require('./dashboard.component/dashboard.component');
var login_component_1 = require('./login.component/login.component');
var logout_component_1 = require('./logout.component/logout.component');
var page_404_component_1 = require('./page-404.component/page-404.component');
//import { Page500Component } from './page-500.component/page-500.component';
var routes = [
    // ---
    { path: '', component: dashboard_component_1.DashboardComponent },
    // --- login, logout
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    // --- application error
    //{ path: 'err-500', component: Page500Component },
    // --- page not found
    { path: 'err-404', component: page_404_component_1.Page404Component },
    { path: '**', component: page_404_component_1.Page404Component },
];
var CoreRoutingModule = (function () {
    function CoreRoutingModule() {
        //console.log('CoreRoutingModule::constructor');
    }
    CoreRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], CoreRoutingModule);
    return CoreRoutingModule;
}());
exports.CoreRoutingModule = CoreRoutingModule;
//# sourceMappingURL=core-routing.module.js.map