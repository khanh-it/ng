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
// Services
//import { PhpjsService } from '../phpjs.service';
var translator_service_1 = require('../translator.service');
var dialog_component_1 = require('../dialog.component/dialog.component');
var user_repo_service_1 = require('../user-repo.service');
// Models
var user_model_1 = require('../user.model');
var LoginComponent = (function () {
    /** */
    function LoginComponent(
        //protected _phpjsServ: PhpjsService,
        transServ, _router, _route, _userRepoServ, _dialogComp) {
        this.transServ = transServ;
        this._router = _router;
        this._route = _route;
        this._userRepoServ = _userRepoServ;
        this._dialogComp = _dialogComp;
        /** */
        this.formData = {
            'formSubmitted': false,
            'username': '',
            'password': '',
            'remember': false
        };
    }
    /** */
    LoginComponent.prototype.ngOnInit = function () {
        // Check if user logged in, then redirect to home page
        this._redirect2HomePageIfLoggedIn();
    };
    /**
     * Check if user logged in, then redirect to home page
     */
    LoginComponent.prototype._redirect2HomePageIfLoggedIn = function () {
        var _this = this;
        this._userRepoServ.getLoggedInUser()
            .then(function (user) {
            if (user) {
                _this._router.navigate([''], {
                    relativeTo: _this._route,
                    queryParams: { 'uLIRdr': 1 }
                });
            }
        });
    };
    /** */
    LoginComponent.prototype.onFormSubmit = function () {
        var _this = this;
        // Data validation
        if (!this.formData.username || !this.formData.password) {
            this._dialogComp.alert(this.transServ._('Vui lòng nhập đủ thông tin bắt buộc.'));
            return false;
        }
        //
        this._userRepoServ.getUser4Login(this.formData.username, user_model_1.UserModel.encodePassword(this.formData.password), true // Store user info
        ).then(function (user) {
            if (false === user) {
                _this._dialogComp.alert(_this.transServ._('Mật khẩu đăng nhập chưa đúng.'));
            }
            else if (null === user || undefined === user) {
                _this._dialogComp.alert(_this.transServ._('Tài khoản đăng nhập không tồn tại.'));
            }
            else if (user) {
                // Redirect to home page!
                _this._router.navigate([''], {
                    relativeTo: _this._route,
                    queryParams: {}
                });
            }
            else {
                _this._dialogComp.alert(_this.transServ._('Đăng nhập không thành công.'));
            }
        });
        //return false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [translator_service_1.TranslatorService, router_1.Router, router_1.ActivatedRoute, user_repo_service_1.UserRepoService, dialog_component_1.DialogComponent])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map