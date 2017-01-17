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
var user_model_1 = require("../user.model");
var UserChangesComponent = UserChangesComponent_1 = (function () {
    function UserChangesComponent(transServ, _dialogComp, _userRepoServ, _sanitizer) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._userRepoServ = _userRepoServ;
        this._sanitizer = _sanitizer;
        this.action = UserChangesComponent_1.ACT_FEATURES;
        this.onSucceeded = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onCanceled = new core_1.EventEmitter();
    }
    UserChangesComponent.prototype.isAction = function (action) {
        return action == this.action;
    };
    UserChangesComponent.prototype.isActionFeatures = function () {
        return !!(this.isAction(UserChangesComponent_1.ACT_FEATURES) && this.user);
    };
    UserChangesComponent.prototype.isActionChangeFullname = function () {
        return !!(this.isAction(UserChangesComponent_1.ACT_CHANGE_FULLNAME) && this.user);
    };
    UserChangesComponent.prototype.isActionChangePassword = function () {
        return !!(this.isAction(UserChangesComponent_1.ACT_CHANGE_PASSWORD) && this.user);
    };
    UserChangesComponent.prototype.isActionChangeType = function () {
        return !!(this.isAction(UserChangesComponent_1.ACT_CHANGE_TYPE) && this.user);
    };
    UserChangesComponent.prototype.isActionChangeImage = function () {
        return !!(this.isAction(UserChangesComponent_1.ACT_CHANGE_IMAGE) && this.user);
    };
    UserChangesComponent.prototype.isActionAddNew = function () {
        return this.isAction(UserChangesComponent_1.ACT_ADD_NEW);
    };
    UserChangesComponent.prototype.actionFeatures = function () {
        this.action = UserChangesComponent_1.ACT_FEATURES;
    };
    UserChangesComponent.prototype.actionChangeFullname = function () {
        this.action = UserChangesComponent_1.ACT_CHANGE_FULLNAME;
    };
    UserChangesComponent.prototype.actionChangePassword = function () {
        this.action = UserChangesComponent_1.ACT_CHANGE_PASSWORD;
    };
    UserChangesComponent.prototype.actionChangeType = function () {
        this.action = UserChangesComponent_1.ACT_CHANGE_TYPE;
    };
    UserChangesComponent.prototype.actionChangeImage = function () {
        this.action = UserChangesComponent_1.ACT_CHANGE_IMAGE;
    };
    UserChangesComponent.prototype.actionAddNew = function () {
        this.action = UserChangesComponent_1.ACT_ADD_NEW;
    };
    UserChangesComponent.prototype.ngOnInit = function () {
    };
    UserChangesComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var user = this.user;
        (function () {
            var rt;
            if (!user.fullname
                || !user.username
                || (null === user.admin || undefined === user.admin)) {
                rt = Promise.reject(new Error(_this.transServ._('Vui lòng nhập đầy đủ thông tin để thực hiện.')));
            }
            else {
                user.selfEncodePassword();
                rt = _this._userRepoServ.insert(user);
            }
            return rt;
        })().then(function (rt) {
            _this.user = null;
            setTimeout(function () {
                _this.user = new user_model_1.UserModel();
                _this.onSucceeded.emit(_this.user);
            });
        }, function (err) {
            var msg = err.message;
            if (msg.indexOf('UNIQ_username') >= 0) {
                msg = _this.transServ._('Tên đăng nhập đã được sử dụng không thể thực hiện.');
            }
            _this._dialogComp.alert(msg);
            _this.onError.emit(err);
        });
    };
    UserChangesComponent.prototype.onCancel = function () {
        this.onCanceled.emit();
    };
    return UserChangesComponent;
}());
UserChangesComponent.ACT_FEATURES = 'features';
UserChangesComponent.ACT_CHANGE_FULLNAME = 'change_fullname';
UserChangesComponent.ACT_CHANGE_PASSWORD = 'change_password';
UserChangesComponent.ACT_CHANGE_TYPE = 'change_type';
UserChangesComponent.ACT_CHANGE_IMAGE = 'change_image';
UserChangesComponent.ACT_ADD_NEW = 'add_new';
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserChangesComponent.prototype, "onSucceeded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserChangesComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserChangesComponent.prototype, "onCanceled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", user_model_1.UserModel)
], UserChangesComponent.prototype, "user", void 0);
UserChangesComponent = UserChangesComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-user-changes',
        templateUrl: 'user-changes.component.html',
        styleUrls: ['user-changes.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        user_repo_service_1.UserRepoService,
        platform_browser_1.DomSanitizer])
], UserChangesComponent);
exports.UserChangesComponent = UserChangesComponent;
var UserChangesComponent_1;
//# sourceMappingURL=user-changes.component.js.map