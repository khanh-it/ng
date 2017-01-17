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
/* --- Test */
var test_component_1 = require('./test.component/test.component');
var routes = [
    /* test */
    { path: '', component: test_component_1.TestComponent, data: {} },
];
var TestRoutingModule = (function () {
    function TestRoutingModule() {
    }
    TestRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], TestRoutingModule);
    return TestRoutingModule;
}());
exports.TestRoutingModule = TestRoutingModule;
//# sourceMappingURL=test-routing.module.js.map