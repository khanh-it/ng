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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// PouchDB library
//import { PouchDB } from '../../node_modules/pouchdb/dist/pouchdb.js';
//import { PouchDB } from '../../node_modules/pouchdb/dist/pouchdb.memory.js';
var PouchDB = require('../../node_modules/pouchdb/dist/pouchdb.js');
//require('../../node_modules/pouchdb/dist/pouchdb.memory.js');
//
var core_1 = require("@angular/core");
// Configs
var configs_1 = require("../configs");
var PouchDBService = (function () {
    /***/
    function PouchDBService(_appConfigs) {
        this._appConfigs = _appConfigs;
    }
    /**  */
    PouchDBService.prototype.getDB = function (DBName, DBOptions) {
        if (DBOptions === void 0) { DBOptions = { version: 1 }; }
        return new Promise(function (resolve, reject) {
            var db = new PouchDB();
        });
    };
    return PouchDBService;
}());
PouchDBService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(configs_1.APP_CONFIG)),
    __metadata("design:paramtypes", [Object])
], PouchDBService);
exports.PouchDBService = PouchDBService;
//# sourceMappingURL=pouch-db.js.map