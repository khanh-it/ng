"use strict";
var AbstractModel = (function () {
    function AbstractModel(data) {
        this._attachments = [];
        data = AbstractModel.isPlainObject(data) ? data : {};
        this.TBL = data.TBL = '' + (data.TBL ? data.TBL
            : Object.getPrototypeOf(this).constructor.TABLE_NAME);
        this._id = data._id = '' + (data._id ? data._id : AbstractModel.genIDStr());
        this._rev = data._rev = data._rev;
        if (!this.TBL) {
            throw Error('Missing TABLE_NAME for model constructor!');
        }
        this.init(data);
    }
    AbstractModel.getDDocName = function (index) {
        return this.TABLE_NAME + (index ? ('/' + index) : '');
    };
    AbstractModel.genIDStr = function () {
        return (new Date()).toISOString();
    };
    AbstractModel.isPlainObject = function (data) {
        return (Object.prototype.toString.call(data) === "[object Object]");
    };
    AbstractModel.prototype.genID = function () {
        return (this._id = AbstractModel.genIDStr());
    };
    AbstractModel.prototype.id = function (id) {
        if (!id) {
            id = this._id;
        }
        return (this._id = id);
    };
    AbstractModel.prototype.init = function (data) { };
    ;
    return AbstractModel;
}());
AbstractModel.TABLE_NAME = '';
exports.AbstractModel = AbstractModel;
//# sourceMappingURL=abstract.model.js.map