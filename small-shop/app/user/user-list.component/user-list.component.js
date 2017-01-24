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
var translator_service_1 = require("../../core/translator.service");
var dialog_component_1 = require("../../core/dialog.component/dialog.component");
var user_repo_service_1 = require("../user-repo.service");
var UserListComponent = (function () {
    function UserListComponent(transServ, _dialogComp, _userRepoServ) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._userRepoServ = _userRepoServ;
        this.onUserSelected = new core_1.EventEmitter();
        this.users = [];
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userRepoServ.getAllUsers().then(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.selectUser = function (user) {
        this.onUserSelected.emit(this.selectedUser = user);
    };
    return UserListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserListComponent.prototype, "onUserSelected", void 0);
UserListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-user-list',
        templateUrl: 'user-list.component.html',
        styleUrls: ['user-list.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        user_repo_service_1.UserRepoService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map