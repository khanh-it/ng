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
var UserCudComponent = (function () {
    function UserCudComponent(transServ, _dialogComp, _userRepoServ) {
        this.transServ = transServ;
        this._dialogComp = _dialogComp;
        this._userRepoServ = _userRepoServ;
        this.onSucceeded = new core_1.EventEmitter();
        this.onError = new core_1.EventEmitter();
        this.onCanceled = new core_1.EventEmitter();
        this.user = new user_model_1.UserModel();
    }
    UserCudComponent.prototype.ngOnInit = function () {
        if (this.cudUser) {
            this.user = this.cudUser;
        }
    };
    UserCudComponent.prototype.onFormSubmit = function () {
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
    UserCudComponent.prototype.onCancel = function () {
        this.onCanceled.emit();
    };
    return UserCudComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserCudComponent.prototype, "onSucceeded", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserCudComponent.prototype, "onError", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserCudComponent.prototype, "onCanceled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", user_model_1.UserModel)
], UserCudComponent.prototype, "cudUser", void 0);
UserCudComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-user-cud',
        templateUrl: 'user-cud.component.html',
        styleUrls: ['user-cud.component.css'],
        providers: [],
    }),
    __metadata("design:paramtypes", [translator_service_1.TranslatorService,
        dialog_component_1.DialogComponent,
        user_repo_service_1.UserRepoService])
], UserCudComponent);
exports.UserCudComponent = UserCudComponent;
//# sourceMappingURL=user-cud.component.js.map