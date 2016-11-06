"use strict";
/**
 *
 */
var TaskModel = (function () {
    /**
     *
     */
    function TaskModel(id, name, priority) {
        if (id === void 0) { id = ''; }
        if (name === void 0) { name = ''; }
        if (priority === void 0) { priority = 0; }
        this.id = id;
        this.name = name;
        this.priority = priority;
    }
    return TaskModel;
}());
exports.TaskModel = TaskModel;
//# sourceMappingURL=task.js.map