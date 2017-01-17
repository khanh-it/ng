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
var pouchdb_db_service_1 = require("./db.service/pouchdb-db.service");
var abstract_repo_service_1 = require("./abstract-repo.service");
var UserRepoService = UserRepoService_1 = (function (_super) {
    __extends(UserRepoService, _super);
    function UserRepoService(_dbS) {
        var _this = _super.call(this, _dbS) || this;
        _this._dbS = _dbS;
        _this._users = [];
        return _this;
    }
    UserRepoService.prototype.init = function () {
    };
    UserRepoService.prototype._loggedInUserID = function (userID) {
        if (0 in arguments) {
            if (null === userID || undefined === userID) {
                userID = '';
            }
            localStorage.setItem(UserRepoService_1.USER_LOGGED_ID_KEY, '' + userID);
        }
        else {
            userID = localStorage.getItem(UserRepoService_1.USER_LOGGED_ID_KEY);
        }
        return userID;
    };
    UserRepoService.prototype.getLoggedInUser = function () {
        var _this = this;
        return new Promise(function (rs, rj) {
            if (!_this._loggedInUser) {
                var userID = _this._loggedInUserID();
                if (userID) {
                    return _this._dbS.get(userID)
                        .then(function (user) {
                        rs(user);
                    });
                }
                else {
                    rs(null);
                }
            }
            else {
                rs(_this._loggedInUser);
            }
        });
    };
    UserRepoService.prototype.setLoggedInUser = function (user) {
        this._loggedInUser = user;
        this._loggedInUserID(user && user._id);
        return this;
    };
    UserRepoService.prototype.getUser4Login = function (username, password, autoStoreWhenSuccess) {
        var _this = this;
        if (autoStoreWhenSuccess === void 0) { autoStoreWhenSuccess = true; }
        var DDocName = user_model_1.UserModel.getDDocName('UNIQ_username');
        return this._dbS.query(DDocName, {
            key: username,
            include_docs: true,
            limit: 1
        })
            .then(function (rt) {
            var user = (rt.rows[0] && rt.rows[0].doc);
            if (user) {
                if (password != user.password) {
                    return false;
                }
                autoStoreWhenSuccess && _this.setLoggedInUser(user);
                return user;
            }
        });
    };
    return UserRepoService;
}(abstract_repo_service_1.AbstractRepoService));
UserRepoService.TABLE_NAME = 'User';
UserRepoService.USER_LOGGED_ID_KEY = 'USER_LOGGED_ID';
UserRepoService = UserRepoService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [pouchdb_db_service_1.PouchdbDbService])
], UserRepoService);
exports.UserRepoService = UserRepoService;
var UserRepoService_1;
//# sourceMappingURL=user-repo.service.js.map