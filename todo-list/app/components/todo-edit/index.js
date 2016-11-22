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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
// Models
var task_1 = require("../../models/task");
// Services
var task_2 = require("../../services/repos/task");
//
require("rxjs/add/operator/switchMap");
var TodoEditComponent = (function () {
    /** */
    function TodoEditComponent(_repoTask, route, location) {
        this._repoTask = _repoTask;
        this.route = route;
        this.location = location;
        /** */
        this.submitted = false;
    }
    Object.defineProperty(TodoEditComponent.prototype, "priorities", {
        /** */
        get: function () {
            return task_1.TaskModel.returnPriorities();
        },
        enumerable: true,
        configurable: true
    });
    /** */
    TodoEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //
        this.task = new task_1.TaskModel();
        //
        this.route.params
            .switchMap(function (params) { return _this._repoTask.getTask(params['id']); })
            .subscribe(function (task) { return _this.task = task; });
    };
    /**/
    TodoEditComponent.prototype.onFormSubmit = function () {
        var _this = this;
        //
        console.log('onFormSubmit - task: ', this.task);
        //
        var rs = this._repoTask.insert(this.task)
            .then(function (_t) {
            //
            _this.task = new task_1.TaskModel();
            // Rerender form...
            _this.submitted = true;
            setTimeout(function () { return _this.submitted = false; }, 0);
        })
            .catch(function (err) {
            alert('insert data failed: ' + err);
        });
    };
    TodoEditComponent.prototype.isDFPriority = function (value) {
        return value == task_1.TaskModel.DEFAULT_PRIORITY;
    };
    return TodoEditComponent;
}());
TodoEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-edit',
        templateUrl: 'tmpl.html',
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [task_2.Task_RepoService,
        router_1.ActivatedRoute,
        common_1.Location])
], TodoEditComponent);
exports.TodoEditComponent = TodoEditComponent;
//# sourceMappingURL=index.js.map