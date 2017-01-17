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
var dialog_component_1 = require("../../core/dialog.component/dialog.component");
var user_repo_service_1 = require("../user-repo.service");
var UserComponent = UserComponent_1 = (function () {
    function UserComponent(transServ, _dialogComp, _userRepoServ, _sanitizer) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._userRepoServ = _userRepoServ;
        this._sanitizer = _sanitizer;
        this.formData = {
            'fullname': '',
            'password': ''
        };
        this.users = [];
        this.action = UserComponent_1.ACT_LIST;
    }
    UserComponent.prototype.isAction = function (action) {
        return action == this.action;
    };
    UserComponent.prototype.isActionList = function () {
        return this.isAction(UserComponent_1.ACT_LIST);
    };
    UserComponent.prototype.isActionChanges = function () {
        return !!(this.isAction(UserComponent_1.ACT_CHANGES) && this.selectedUser);
    };
    UserComponent.prototype.isActionAddNew = function () {
        return this.isAction(UserComponent_1.ACT_ADD_NEW);
    };
    UserComponent.prototype.actionList = function () {
        this.action = UserComponent_1.ACT_LIST;
    };
    UserComponent.prototype.actionChanges = function () {
        this.action = UserComponent_1.ACT_CHANGES;
    };
    UserComponent.prototype.actionAddNew = function () {
        this.action = UserComponent_1.ACT_ADD_NEW;
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
    };
    UserComponent.prototype.getUserImgBase64 = function (user) {
        var url = this._sanitizer.bypassSecurityTrustResourceUrl(user.getImgBase64());
        return url;
    };
    return UserComponent;
}());
UserComponent.ACT_LIST = 'list';
UserComponent.ACT_CHANGES = 'changes';
UserComponent.ACT_ADD_NEW = 'add_new';
UserComponent = UserComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-user',
        templateUrl: 'user.component.html',
        styleUrls: ['user.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        user_repo_service_1.UserRepoService,
        platform_browser_1.DomSanitizer])
], UserComponent);
exports.UserComponent = UserComponent;
var UserComponent_1;
//# sourceMappingURL=user.component.js.map