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
var router_1 = require("@angular/router");
var user_repo_service_1 = require("./user-repo.service");
var AuthCheckService = AuthCheckService_1 = (function () {
    function AuthCheckService(_router, _route, _userRepoServ) {
        this._router = _router;
        this._route = _route;
        this._userRepoServ = _userRepoServ;
        this._ignores = [];
        this.init();
    }
    AuthCheckService.prototype.setIgnores = function (ignores) {
        this._ignores = (ignores instanceof Array) ? ignores : [];
        return this;
    };
    AuthCheckService.prototype.init = function () {
        var _this = this;
        this._router.events.subscribe(function (evt) {
            if (evt instanceof router_1.NavigationStart) {
                for (var _i = 0, _a = _this._ignores; _i < _a.length; _i++) {
                    var ignore = _a[_i];
                    if (evt.url.indexOf(ignore) === 0) {
                        return;
                    }
                }
                if (evt.url.indexOf(AuthCheckService_1._ROUTE_PATH_PAGE_LOGIN) < 0) {
                    _this.redirect2LoginPageIfNotLoggedIn();
                }
            }
        });
    };
    AuthCheckService.prototype.redirect2LoginPageIfNotLoggedIn = function () {
        var _this = this;
        this._userRepoServ.getLoggedInUser()
            .then(function (user) {
            if (!user) {
                _this._router.navigate([AuthCheckService_1._ROUTE_PATH_PAGE_LOGIN, { 'authCheck': 1 }], {
                    relativeTo: _this._route,
                });
            }
        });
    };
    return AuthCheckService;
}());
AuthCheckService._ROUTE_PATH_PAGE_LOGIN = '/login';
AuthCheckService = AuthCheckService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        user_repo_service_1.UserRepoService])
], AuthCheckService);
exports.AuthCheckService = AuthCheckService;
var AuthCheckService_1;
//# sourceMappingURL=auth-check.service.js.map