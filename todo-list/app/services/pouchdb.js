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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
if (!window.hasOwnProperty('PouchDB')) {
    // +++ PouchDB
    require('../../node_modules/pouchdb/dist/pouchdb.js');
    // +++ PouchDB plugins...
    require('../../node_modules/pouchdb/dist/pouchdb.memory.js');
}
//
var core_1 = require("@angular/core");
//
var Abstract_1 = require("./Abstract");
// Configs
var configs_1 = require("../configs");
var PouchDBService = (function (_super) {
    __extends(PouchDBService, _super);
    /***/
    function PouchDBService(_appConfigs) {
        var _this = 
        //
        _super.call(this, _appConfigs) || this;
        //
        _this._db = new PouchDB(_this._appConfigs.db.name);
        _this._dbMem = (new PouchDB(_this._appConfigs.db.name, { 'adapter': 'memory' }));
        return _this;
    }
    PouchDBService.prototype.ngOnInit = function () {
        console.log('module: ', module);
        console.log('_appConfigs: ', this._appConfigs);
        console.log('this._db: ', this._db);
        console.log('this._dbMem: ', this._dbMem);
    };
    /***/
    PouchDBService.prototype.getDB = function () {
        return this._db;
    };
    /***/
    PouchDBService.prototype.getDBMem = function () {
        return this._dbMem;
    };
    return PouchDBService;
}(Abstract_1.ServiceAbstract));
PouchDBService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(configs_1.APP_CONFIG)),
    __metadata("design:paramtypes", [Object])
], PouchDBService);
exports.PouchDBService = PouchDBService;
//# sourceMappingURL=pouchdb.js.map