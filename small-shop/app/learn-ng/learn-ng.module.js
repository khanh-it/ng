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
var shared_module_1 = require('../shared/shared.module');
var learn_ng_routing_module_1 = require('./learn-ng-routing.module');
// component(s)
/* --- Test */
var learn_ng_component_1 = require('./learn-ng.component');
var learn_ng_after_content_component_1 = require('./learn-ng-after-content.component');
// service(s)
var LearnNgModule = (function () {
    function LearnNgModule() {
        console.log('LearnNgModule::constructor');
    }
    LearnNgModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, learn_ng_routing_module_1.LearnNgRoutingModule],
            declarations: [
                learn_ng_component_1.LearnNgComponent,
                learn_ng_after_content_component_1.LearnNgAfterContentComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], LearnNgModule);
    return LearnNgModule;
}());
exports.LearnNgModule = LearnNgModule;
//# sourceMappingURL=learn-ng.module.js.map