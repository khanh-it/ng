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
var task_1 = require("../../services/repos/task");
var TodoCreateComponent = (function () {
    /**/
    function TodoCreateComponent(_repoTask) {
        this._repoTask = _repoTask;
        /** */
        this._dfTask = {
            '_id': '', 'name': '', 'note': '', 'priority': 0
        };
        /** */
        this.priorities = ['Lowest', 'Low', 'Normal', 'High', 'Highest'];
        /** */
        this.formHidden = false;
        /** */
        this.submitted = false;
    }
    // TODO: Remove this when we're done
    TodoCreateComponent.prototype.diagnostic = function (task) {
        if (undefined === task) {
            return JSON.stringify((undefined === task) ? this.task : task);
        }
        console.log('diagnostic: ', task);
        return '';
    };
    TodoCreateComponent.prototype._mkDefaultTask = function () {
        //
        this.task = JSON.parse(JSON.stringify(this._dfTask));
    };
    /**/
    TodoCreateComponent.prototype.ngOnInit = function () {
        //
        this._mkDefaultTask();
        //
        var time = 1024;
        setInterval(function () {
        }, time);
    };
    /**/
    TodoCreateComponent.prototype.onKBEvts = function (eleDOM) {
        //console.log('eleDOM: ', eleDOM);
        //this.task.name = (<HTMLInputElement>$event.target).value;
    };
    /**/
    TodoCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this._mkDefaultTask();
        this.submitted = true;
        setTimeout(function () { return _this.submitted = false; }, 0);
        console.log('arguments: ', arguments);
        console.log('-- end ');
        return false;
    };
    return TodoCreateComponent;
}());
TodoCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'TodoCreate',
        templateUrl: 'tmpl.html',
        styleUrls: ['styles.css']
    }),
    __metadata("design:paramtypes", [task_1.Task_RepoService])
], TodoCreateComponent);
exports.TodoCreateComponent = TodoCreateComponent;
//# sourceMappingURL=index.js.map