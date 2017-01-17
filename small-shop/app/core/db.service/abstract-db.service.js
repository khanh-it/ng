"use strict";
;
var AbstractDbService = (function () {
    /** Constructor */
    function AbstractDbService() {
        // Initialize
        this.init(null);
    }
    AbstractDbService.setDefaultConfig = function (config) {
        AbstractDbService._defaultConfig = config;
    };
    AbstractDbService.getDefaultConfig = function () {
        return AbstractDbService._defaultConfig;
    };
    /** Initialize */
    AbstractDbService.prototype.init = function (options) {
        return this;
    };
    AbstractDbService._defaultConfig = {
        dbname: ''
    };
    return AbstractDbService;
}());
exports.AbstractDbService = AbstractDbService;
//# sourceMappingURL=abstract-db.service.js.map