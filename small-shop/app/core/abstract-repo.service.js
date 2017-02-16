"use strict";
var pouchdb_db_service_1 = require("./db.service/pouchdb-db.service");
var AbstractRepoService = (function () {
    function AbstractRepoService() {
        this._dbS = new pouchdb_db_service_1.PouchdbDbService();
    }
    return AbstractRepoService;
}());
exports.AbstractRepoService = AbstractRepoService;
//# sourceMappingURL=abstract-repo.service.js.map