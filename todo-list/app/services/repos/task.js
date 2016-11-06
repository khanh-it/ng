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
// Services
var indexed_db_1 = require("../indexed-db");
var Task_RepoService = (function () {
    /***/
    function Task_RepoService() {
        /**
         *
         */
        this.DBName = 'todo-list.ng';
        /**
         *
         */
        this.DBOptions = {
            version: 1
        };
        /**
         *
         */
        this._tasks = [
            { id: '1', name: 'Task 01', priority: 0 },
            { id: '2', name: 'Task 02', priority: 0 },
            { id: '3', name: 'Task 03', priority: 0 },
            { id: '4', name: 'Task 04', priority: 0 },
            { id: '5', name: 'Task 05', priority: 0 },
            { id: '6', name: 'Task 06', priority: 0 },
            { id: '7', name: 'Task 07', priority: 0 },
            { id: '8', name: 'Task 08', priority: 0 },
            { id: '9', name: 'Task 09', priority: 0 },
            { id: '10', name: 'Task 10', priority: 0 },
        ];
    }
    Task_RepoService.prototype.getDB = function () {
        var _this = this;
        if (this._db) {
            return Promise.resolve(this._db);
        }
        return indexed_db_1.IndexedDBService
            .getDB(this.DBName, this.DBOptions)
            .then(function (db) {
            console.log('getDB', db);
            _this._db = db;
            // Create an objectStore for this database
            var objectStore = db.createObjectStore("task", { keyPath: "id" });
            console.log('objectStore: ', objectStore);
        });
    };
    /***/
    Task_RepoService.prototype.getTasks = function () {
        var _this = this;
        return this.getDB()
            .then(function (db) {
            console.log("Get tasks done!");
            return _this._tasks;
        })
            .catch(function (err) {
            console.log("Get tasks failed!", err);
            return _this._tasks;
        });
    };
    return Task_RepoService;
}());
Task_RepoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Task_RepoService);
exports.Task_RepoService = Task_RepoService;
//# sourceMappingURL=task.js.map