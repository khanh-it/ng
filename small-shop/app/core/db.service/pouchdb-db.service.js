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
var pouchdb = require("../../../node_modules/pouchdb/dist/pouchdb.js");
var PouchDB = pouchdb.PouchDB;
;
var pouchdbAdaper = require("../../../node_modules/pouchdb/dist/pouchdb.memory.js");
var _dontUse_01 = pouchdbAdaper.PouchDB;
var core_1 = require("@angular/core");
var abstract_db_service_1 = require("./abstract-db.service");
var PouchdbDbService = PouchdbDbService_1 = (function (_super) {
    __extends(PouchdbDbService, _super);
    function PouchdbDbService() {
        return _super.apply(this, arguments) || this;
    }
    PouchdbDbService.prototype.init = function (options) {
        var config = PouchdbDbService_1.getDefaultConfig();
        if (options && options.config) {
            config = options.config;
        }
        this._db = new PouchDB(config.dbname, { 'adapter': 'idb' });
        this._dbMem = new PouchDB(config.dbname, { 'adapter': 'memory' });
        Object.defineProperty(window, '_pouchdbServ', { value: this });
        return this;
    };
    PouchdbDbService.prototype.getDB = function () {
        return this._db;
    };
    PouchdbDbService.prototype.getDBMem = function () {
        return this._dbMem;
    };
    PouchdbDbService.prototype.get = function (docID) {
        var _this = this;
        return new Promise(function (rs, rj) {
            _this._db
                .get(docID, { include_docs: true, attachments: true })
                .then(function (doc) { rs(doc); })
                .catch(function () { rs(null); });
        });
    };
    PouchdbDbService.prototype.query = function (fun, options, callback) {
        return this._db
            .query(fun, options, callback);
    };
    PouchdbDbService.prototype.put = function (doc, callback) {
        return this._db.put(doc, callback);
    };
    PouchdbDbService.prototype.putUniq = function (index, keys, doc, callback) {
        var _this = this;
        var keyUniq;
        if (keys instanceof Array) {
            keyUniq = [];
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                keyUniq.push(doc && doc[key]);
            }
        }
        else {
            keyUniq = doc && doc['' + keys];
        }
        return this.query(index, { key: keyUniq, include_docs: true, limit: 1 })
            .then(function (rt) {
            var _doc = rt.rows[0] && rt.rows[0].doc;
            if (_doc && _doc._rev != doc._rev) {
                throw Error("Unique constraint. Index: " + index + ". Keys: " + JSON.stringify(keys) + ". Value: " + JSON.stringify(keyUniq) + ". Doc: " + JSON.stringify(_doc) + ".");
            }
            else {
                return _this.put(doc, callback);
            }
        });
    };
    return PouchdbDbService;
}(abstract_db_service_1.AbstractDbService));
PouchdbDbService = PouchdbDbService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PouchdbDbService);
exports.PouchdbDbService = PouchdbDbService;
var PouchdbDbService_1;
//# sourceMappingURL=pouchdb-db.service.js.map