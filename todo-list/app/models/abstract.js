"use strict";
/**
 * Super class for based class model...
 */
var AbstractModel = (function () {
    /** Constructor */
    function AbstractModel(options) {
        // Auto generate ID
        //this._id = AbstractModel.genID();
        this._id = '';
        // Initialize
        this.init(options);
    }
    /** Initialize */
    AbstractModel.genIDStr = function () {
        return (new Date()).toISOString();
    };
    /** Get/Set id */
    AbstractModel.prototype.genID = function (id) {
        return (this._id = AbstractModel.genIDStr());
    };
    return AbstractModel;
}());
exports.AbstractModel = AbstractModel;
//# sourceMappingURL=abstract.js.map