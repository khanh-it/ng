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
var platform_browser_1 = require("@angular/platform-browser");
var translator_service_1 = require("../../core/translator.service");
var user_model_1 = require("../user.model");
var UserSmallBoxInfoComponent = (function () {
    function UserSmallBoxInfoComponent(transServ, _sanitizer) {
        this.transServ = transServ;
        this._sanitizer = _sanitizer;
        this.isActive = null;
        this.onUserSelected = new core_1.EventEmitter();
    }
    UserSmallBoxInfoComponent.prototype.ngOnInit = function () { };
    UserSmallBoxInfoComponent.prototype.selectUser = function () {
        if (!this.isActiveFalse()) {
            this.onUserSelected.emit(this.user);
        }
    };
    UserSmallBoxInfoComponent.prototype.getUserImgBase64 = function () {
        return this._sanitizer.bypassSecurityTrustResourceUrl(this.user.getImgBase64());
    };
    UserSmallBoxInfoComponent.prototype.active = function () {
        this.isActive = true;
    };
    UserSmallBoxInfoComponent.prototype.isActiveTrue = function () {
        return (true === this.isActive);
    };
    UserSmallBoxInfoComponent.prototype.inactive = function () {
        this.isActive = false;
    };
    UserSmallBoxInfoComponent.prototype.isActiveFalse = function () {
        return false === this.isActive;
    };
    return UserSmallBoxInfoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserSmallBoxInfoComponent.prototype, "isActive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", user_model_1.UserModel)
], UserSmallBoxInfoComponent.prototype, "user", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserSmallBoxInfoComponent.prototype, "onUserSelected", void 0);
UserSmallBoxInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-user-small-box-info',
        templateUrl: 'user-small-box-info.html',
        styleUrls: ['user-small-box-info.css'],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        platform_browser_1.DomSanitizer])
], UserSmallBoxInfoComponent);
exports.UserSmallBoxInfoComponent = UserSmallBoxInfoComponent;
//# sourceMappingURL=user-small-box-info.component.js.map