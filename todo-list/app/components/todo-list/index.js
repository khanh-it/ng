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
// Models
var task_1 = require("../../models/task");
// Services
var task_2 = require("../../services/repos/task");
var TodoListComponent = (function () {
    /**/
    function TodoListComponent(_repoTask) {
        this._repoTask = _repoTask;
        /**/
        this._tasks = [];
    }
    /**/
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //
        this.task_priorities = task_1.TaskModel.returnPriorities();
        //console.log('ngOnInit');
        this._repoTask.getTasks()
            .then(function (tasks) {
            //console.log('[TodoListComponent] Get tasks done!');
            _this._tasks = tasks;
        })
            .catch(function (err) {
            //console.log('[TodoListComponent] Get tasks failed!');
            _this._tasks = [];
        });
    };
    /***/
    TodoListComponent.prototype.getSortedTasks = function () {
        //console.log('[TodoListComponent][getSortedTasks]!');
        return this._tasks;
    };
    /***/
    TodoListComponent.prototype.getTaskPriorityName = function (priority) {
        return this.task_priorities[priority];
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'TodoList',
        templateUrl: 'tmpl.html',
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [task_2.Task_RepoService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=index.js.map