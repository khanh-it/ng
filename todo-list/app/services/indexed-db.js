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
/*// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window['indexedDB']
  || window['mozIndexedDB']
  || window['webkitIndexedDB']
  || window['msIndexedDB']
;

// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window['IDBTransaction'] = window['IDBTransaction']
  || window['webkitIDBTransaction']
  || window['msIDBTransaction']
  || {READ_WRITE: "readwrite"}
; // This line should only be needed if it is needed to support the object's constants for older browsers
window['IDBKeyRange'] = window['IDBKeyRange']
  || window['webkitIDBKeyRange']
  || window['msIDBKeyRange']
; // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
*/
var core_1 = require("@angular/core");
var IndexedDBService = (function () {
    function IndexedDBService() {
    }
    /**  */
    IndexedDBService.getDB = function (DBName, DBOptions) {
        if (DBOptions === void 0) { DBOptions = { version: 1 }; }
        // Case:
        if (!('indexedDB' in window)) {
            return Promise.reject('Your browser does not support indexedDB.');
        }
        // Case: open db
        return new Promise(function (resolve, reject) {
            var request = window.indexedDB.open(DBName, DBOptions.version);
            request.addEventListener('error', function (event) {
                var msg = "[IndexedDBService][getDB][err] Open indexedDB with name '" + DBName + "' failed. Error code: .";
                console.log(msg);
                console.log('event: ', event);
                reject(msg);
            });
            request.addEventListener('success', function (event) {
                resolve(event.target.result);
            });
        });
    };
    return IndexedDBService;
}());
IndexedDBService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], IndexedDBService);
exports.IndexedDBService = IndexedDBService;
//# sourceMappingURL=indexed-db.js.map