try {
var db;
var request = indexedDB.open("todo-list.ng", 12);
request.onupgradeneeded = function(event) {
  alert('upgradeneeded');
  var db = event.target.result;

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("task" + db.version, { keyPath: "id" });
};
request.onsuccess = function(event) {
  alert('success');
  db = event.target.result;
};
} catch (e) {
  alert(e.message);
}

/*"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var index_1 = require("./modules/app/index");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(index_1.AppModule);
//# sourceMappingURL=index.js.map*/
