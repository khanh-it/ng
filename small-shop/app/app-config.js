"use strict";
var core_1 = require("@angular/core");
exports.APP_CONFIG = new core_1.OpaqueToken('app.config');
exports.app_config = {
    db: {
        dbname: 'small_shop'
    },
    'auth-service': {
        ignores: ['/setup']
    }
};
//# sourceMappingURL=app-config.js.map