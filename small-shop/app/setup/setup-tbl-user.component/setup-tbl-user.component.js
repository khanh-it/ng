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
var pouchdb_db_service_1 = require("../../core/db.service/pouchdb-db.service");
var user_repo_service_1 = require("../../core/user-repo.service");
var user_model_1 = require("../../core/user.model");
var SetupTblUserComponent = (function () {
    function SetupTblUserComponent(_pouchdbServ, _useRepoServ) {
        this._pouchdbServ = _pouchdbServ;
        this._useRepoServ = _useRepoServ;
    }
    SetupTblUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tblName = user_model_1.UserModel.TABLE_NAME;
        var ddocID = '_design/' + tblName;
        var ddoc = {
            '_id': ddocID,
            'views': {},
            '_rev': ''
        };
        ddoc.views[tblName] = {
            map: function (doc) {
                if ('USER' === doc.TBL) {
                    emit(doc._id);
                }
            }.toString()
        };
        ddoc.views['UNIQ_username'] = {
            map: function (doc) {
                if ('USER' === doc.TBL && doc.username) {
                    emit(doc.username);
                }
            }.toString()
        };
        this._pouchdbServ.get(ddocID)
            .then(function (rt) { return rt; }, function () { })
            .then(function (rt) {
            ddoc._rev = (rt && rt._rev);
            return _this._pouchdbServ.put(ddoc).then(function () {
                return _this._pouchdbServ.query(tblName, { 'limit': 0 }).then(function (rt) {
                    console.log('[SetupTblUserComponent] alter design document done!', rt);
                });
            });
        })
            .then(function () {
            var arr = [];
            for (var i = 1; i <= 1; i++) {
                var userAdmin = new user_model_1.UserModel({
                    'username': 'admin',
                    'password': 'admin',
                    'fullname': 'Administrator',
                });
                userAdmin.selfEncodePassword();
                console.log('[SetupTblUserComponent] userAdmin:', userAdmin);
                arr.push(_this._pouchdbServ.putUniq(tblName + '/UNIQ_username', 'username', userAdmin));
            }
            Promise.all(arr)
                .then(function () { }, function (err) { console.error(err); })
                .then(function () {
                _this._pouchdbServ
                    .query('USER', { include_docs: true })
                    .then(function (rt) {
                    console.log('[SetupTblUserComponent] setup ended. Data: ', rt);
                });
            });
        });
    };
    return SetupTblUserComponent;
}());
SetupTblUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-setup-tbl-user',
        templateUrl: 'setup-tbl-user.component.html',
        providers: [],
    }),
    __metadata("design:paramtypes", [pouchdb_db_service_1.PouchdbDbService,
        user_repo_service_1.UserRepoService])
], SetupTblUserComponent);
exports.SetupTblUserComponent = SetupTblUserComponent;
//# sourceMappingURL=setup-tbl-user.component.js.map