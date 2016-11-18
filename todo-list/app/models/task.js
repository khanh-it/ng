"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstract_1 = require("./abstract");
/**
 *
 */
var TaskModel = (function (_super) {
    __extends(TaskModel, _super);
    function TaskModel() {
        return _super.apply(this, arguments) || this;
    }
    /**  */
    TaskModel.returnPriorities = function () {
        return TaskModel._priorities;
    };
    /** Initialize */
    TaskModel.prototype.init = function (options) {
        if (options === void 0) { options = { name: '', note: '', priority: TaskModel.DEFAULT_PRIORITY }; }
        this.name = options.name;
        this.note = options.note;
        this.priority = options.priority;
        // Return
        return this;
    };
    return TaskModel;
}(abstract_1.AbstractModel));
exports.TaskModel = TaskModel;
/**  */
TaskModel._priorities = ['Lowest', 'Low', 'Normal', 'High', 'Highest'];
/**  */
TaskModel.DEFAULT_PRIORITY = 2; // Normal
//# sourceMappingURL=task.js.map