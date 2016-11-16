"use strict";
/**
 *
 */
var TaskModel = (function () {
    /**
     *
     */
    function TaskModel(_id, name, note, priority) {
        if (_id === void 0) { _id = ''; }
        if (name === void 0) { name = ''; }
        if (note === void 0) { note = ''; }
        if (priority === void 0) { priority = 0; }
        this._id = _id;
        this.name = name;
        this.note = note;
        this.priority = priority;
    }
    return TaskModel;
}());
exports.TaskModel = TaskModel;
//# sourceMappingURL=task.js.map