"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var user_model_1 = require("./user.model");
var user_repo_service_1 = require("../core/user-repo.service");
var UserRepoService = (function (_super) {
    __extends(UserRepoService, _super);
    function UserRepoService() {
        return _super.apply(this, arguments) || this;
    }
    UserRepoService.prototype.init = function () {
    };
    UserRepoService.prototype.insert = function (user) {
        var key = user_model_1.UserModel.getDDocName('UNIQ_username');
        return this._dbS.putUniq(key, 'username', user);
    };
    UserRepoService.prototype.update = function (user) {
        var _this = this;
        return this._dbS.get(user.id())
            .then(function (doc) {
            return _this._dbS.put(user);
        })
            .catch(function () { return false; })
            .then(function () { return true; });
    };
    UserRepoService.prototype.changeImage = function (user, img) {
        user.setImg(img);
        return this.update(user);
    };
    UserRepoService.prototype.getAllUsers = function () {
        var _this = this;
        var DDocName = user_model_1.UserModel.getDDocName('');
        return new Promise(function (rs, rj) {
            _this._dbS.query(DDocName, {
                include_docs: true
            }).then(function (rt) {
                var users = [];
                rt.rows.forEach(function (row) {
                    users.push(new user_model_1.UserModel(row.doc));
                });
                rs(users);
            }, rj);
        });
    };
    return UserRepoService;
}(user_repo_service_1.UserRepoService));
UserRepoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserRepoService);
exports.UserRepoService = UserRepoService;
//# sourceMappingURL=user-repo.service.js.map