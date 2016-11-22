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
var pouchdb_1 = require("../pouchdb");
var Task_RepoService = (function () {
    /***/
    function Task_RepoService(_PouchDBService) {
        this._PouchDBService = _PouchDBService;
        /**
         *
         */
        this._defTasks = [
            { _id: '001_1', name: 'Task 01', priority: 0 },
            { _id: '001_2', name: 'Task 02', priority: 0 },
            { _id: '001_3', name: 'Task 03', priority: 0 },
            { _id: '001_4', name: 'Task 04', priority: 0 },
            { _id: '001_5', name: 'Task 05', priority: 0 },
            { _id: '001_6', name: 'Task 06', priority: 0 },
            { _id: '001_7', name: 'Task 07', priority: 0 },
            { _id: '001_8', name: 'Task 08', priority: 0 },
            { _id: '001_9', name: 'Task 09', priority: 0 },
            { _id: '001_10', name: 'Task 10', priority: 0 },
        ];
        /**
         *
         */
        this._tasks = [];
        //console.log('_PouchDBService: ', this._PouchDBService);
    }
    /***/
    Task_RepoService.prototype.getTasks = function () {
        var _this = this;
        var db = this._PouchDBService.getDB();
        return db.allDocs({
            'include_docs': true,
        })
            .then(function (docs) {
            //console.log('docs: ', docs);
            /*if (!docs.total_rows) {
            /*    this._defTasks.forEach((task, idx) => {
                  docs.rows.push(task);
                  db.put(task);
                });
            }*/
            return docs.rows;
        })
            .catch(function (err) {
            console.log("Get tasks failed!", err);
            return _this._tasks;
        });
    };
    Task_RepoService.prototype.insert = function (task) {
        //
        task.genID();
        return this._PouchDBService.getDB().put(task);
    };
    Task_RepoService.prototype.getTask = function (id) {
        var db = this._PouchDBService.getDB();
        return db.allDocs({
            'include_docs': true, 'key': id
        })
            .then(function (docs) {
            return docs.rows[0];
        })
            .catch(function (err) {
            console.log("Get task failed!", err);
            return null;
        });
    };
    return Task_RepoService;
}());
Task_RepoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [pouchdb_1.PouchDBService])
], Task_RepoService);
exports.Task_RepoService = Task_RepoService;
//# sourceMappingURL=task.js.map