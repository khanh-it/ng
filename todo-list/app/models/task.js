"use strict";
/**
 *
 */
var TaskModel = (function () {
    /**
     *
     */
    function TaskModel(_id, name, priority) {
        if (_id === void 0) { _id = ''; }
        if (name === void 0) { name = ''; }
        if (priority === void 0) { priority = 0; }
        this._id = _id;
        this.name = name;
        this.priority = priority;
    }
    return TaskModel;
}());
exports.TaskModel = TaskModel;
//# sourceMappingURL=task.js.map