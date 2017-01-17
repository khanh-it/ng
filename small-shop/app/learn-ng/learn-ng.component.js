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
var LearnNgComponent = (function () {
    function LearnNgComponent() {
        this.prop01 = '';
        this.prop01 = 'property 01';
    }
    // only called for/if there is an @input variable set by parent.
    LearnNgComponent.prototype.ngOnChanges = function () {
        //console.log(`ngOnChanges. Params: `, arguments);
    };
    LearnNgComponent.prototype.ngOnInit = function () {
        //this.prop01 = 'property 01';
        //console.log(`ngOnInit. Params: `, arguments);
    };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    LearnNgComponent.prototype.ngDoCheck = function () {
        //console.log(`ngDoCheck. Params: `, arguments);
    };
    LearnNgComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit. Params: ", arguments);
    };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    LearnNgComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked. Params: ", arguments);
    };
    LearnNgComponent.prototype.ngAfterViewInit = function () {
        //console.log(`ngAfterViewInit. Params: `, arguments);
    };
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    LearnNgComponent.prototype.ngAfterViewChecked = function () {
        //console.log(`ngAfterViewChecked. Params: `, arguments);
    };
    LearnNgComponent.prototype.ngOnDestroy = function () {
        //console.log(`ngOnDestroy. Params: `, arguments);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LearnNgComponent.prototype, "prop01", void 0);
    LearnNgComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'learn-ng',
            templateUrl: 'learn-ng.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LearnNgComponent);
    return LearnNgComponent;
}());
exports.LearnNgComponent = LearnNgComponent;
//# sourceMappingURL=learn-ng.component.js.map