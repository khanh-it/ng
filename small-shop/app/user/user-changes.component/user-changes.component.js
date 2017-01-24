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
var user_model_1 = require("../user.model");
var UserChangesComponent = UserChangesComponent_1 = (function () {
    function UserChangesComponent(transServ, _dialogComp, _userRepoServ) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._userRepoServ = _userRepoServ;
        this.action = UserChangesComponent_1.ACT_FEATURES;
        this.onSucceeded = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onCanceled = new core_1.EventEmitter();
        this.formData = {
            'fullname': '',
            'old_password': '',
            'password': '',
            'password_confirm': '',
            'admin': null
        };
    }
    UserChangesComponent.prototype.isAction = function (action) {
        return !!(('' + action == this.action) && this.user);
    };
    UserChangesComponent.prototype.isActionFeatures = function () {
        return this.isAction(UserChangesComponent_1.ACT_FEATURES);
    };
    UserChangesComponent.prototype.isActionChangeFullname = function () {
        return this.isAction(UserChangesComponent_1.ACT_CHANGE_FULLNAME);
    };
    UserChangesComponent.prototype.isActionChangePassword = function () {
        return this.isAction(UserChangesComponent_1.ACT_CHANGE_PASSWORD);
    };
    UserChangesComponent.prototype.isActionChangeType = function () {
        return this.isAction(UserChangesComponent_1.ACT_CHANGE_TYPE);
    };
    UserChangesComponent.prototype.isActionChangeImage = function () {
        return this.isAction(UserChangesComponent_1.ACT_CHANGE_IMAGE);
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
        this.formData.admin = this.user.admin;
    };
    UserChangesComponent.prototype.actionChangeImage = function () {
        this.action = UserChangesComponent_1.ACT_CHANGE_IMAGE;
    };
    UserChangesComponent.prototype.ngOnInit = function () {
    };
    UserChangesComponent.prototype.onFormSubmit_changeFullname = function () {
        var _this = this;
        var user = this.user;
        user && (function () {
            var rt = Promise.resolve();
            var fullname = ('' + _this.formData.fullname).trim();
            if (fullname && (user.fullname != fullname)) {
                user.fullname = fullname;
                rt = _this._userRepoServ.update(user);
            }
            return rt;
        })().then(function (rt) {
            _this.formData.fullname = '';
        }, function (err) {
            _this._dialogComp.alert(err.message);
        }).then(function () {
            _this.actionFeatures();
        });
    };
    UserChangesComponent.prototype.onFormSubmit_changePassword = function () {
        var _this = this;
        var user = this.user;
        user && (function () {
            var rt = Promise.resolve();
            var old_password = user_model_1.UserModel.encodePassword('' + _this.formData.old_password);
            var password = ('' + _this.formData.password).trim();
            var password_confirm = ('' + _this.formData.password_confirm).trim();
            if (old_password != user.password) {
                rt = Promise.reject(new Error('Mật khẩu hiện tại chưa đúng.'));
            }
            else if (password != password_confirm) {
                rt = Promise.reject(new Error('Mật khẩu mới không trùng khớp.'));
            }
            else {
                user.password = password;
                user.selfEncodePassword();
                rt = _this._userRepoServ.update(user);
            }
            return rt;
        })().then(function (rt) {
            _this.formData.old_password = _this.formData.password = _this.formData.password_confirm = '';
            _this.actionFeatures();
        }, function (err) {
            _this._dialogComp.alert(_this.transServ._(err.message));
        });
    };
    UserChangesComponent.prototype.onFormSubmit_changeType = function () {
        var _this = this;
        var user = this.user;
        user && (function () {
            var rt = Promise.resolve();
            user.setAdmin(_this.formData.admin);
            rt = _this._userRepoServ.update(user);
            return rt;
        })().then(function (rt) {
            _this.formData.admin = null;
            _this.actionFeatures();
        }, function (err) {
            _this._dialogComp.alert(_this.transServ._(err.message));
        });
    };
    UserChangesComponent.prototype.onFormSubmit_changeImage = function (usrImgEle) {
        var _this = this;
        if (!usrImgEle.files.length) {
            this.actionFeatures();
        }
        else {
            var usrImg = usrImgEle.files[0];
            this._userRepoServ.changeImage(this.user, usrImg)
                .then(function () {
                _this.actionFeatures();
            })
                .catch(function (e) {
                _this._dialogComp.alert(_this.transServ._('Thay đổi ảnh đại diện không thành công. Err: ' + e.message));
            });
        }
    };
    UserChangesComponent.prototype.deleteUser = function () {
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
        user_repo_service_1.UserRepoService])
], UserChangesComponent);
exports.UserChangesComponent = UserChangesComponent;
var UserChangesComponent_1;
//# sourceMappingURL=user-changes.component.js.map