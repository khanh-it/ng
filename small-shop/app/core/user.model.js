"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var phpjs = require("phpjs/build/npm.js");
var abstract_model_1 = require("./abstract.model");
var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        return _super.apply(this, arguments) || this;
    }
    UserModel.encodePassword = function (data) {
        return '' + phpjs['md5'](data);
    };
    UserModel.returnArrActive = function () {
        return UserModel._arrActive;
    };
    UserModel.prototype.selfEncodePassword = function () {
        if (undefined !== this.password) {
            this.password = UserModel.encodePassword(this.password);
        }
        return this.password;
    };
    UserModel.prototype.isPasswordEmpty = function () {
        if (null === this.password
            || undefined === this.password
            || "d41d8cd98f00b204e9800998ecf8427e" == this.password) {
            return true;
        }
        return false;
    };
    UserModel.prototype.init = function (data) {
        this.fullname = data['fullname'] ? ('' + data['fullname']) : '';
        this.username = data['username'] ? ('' + data['username']) : '';
        this.password = data['password'] ? ('' + data['password']) : '';
        this.active = (UserModel.ACTIVE_NO === data['active'])
            ? data['active'] : UserModel.ACTIVE_YES;
        this.admin = (UserModel.ADMIN_YES === data['admin'])
            ? data['admin'] : UserModel.ADMIN_NO;
        return this;
    };
    return UserModel;
}(abstract_model_1.AbstractModel));
UserModel.TABLE_NAME = 'USER';
UserModel._arrActive = [
    'Chưa kích hoạt',
    'Kích hoạt'
];
UserModel.ACTIVE_NO = 0;
UserModel.ACTIVE_YES = 1;
UserModel.ADMIN_NO = 0;
UserModel.ADMIN_YES = 1;
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map