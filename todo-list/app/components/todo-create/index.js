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
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        /** */
        this.submitted = false;
    }
    /** */
    TodoCreateComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(TodoCreateComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.task); },
        enumerable: true,
        configurable: true
    });
    /**/
    TodoCreateComponent.prototype.ngOnInit = function () {
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