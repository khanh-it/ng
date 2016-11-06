var req = indexedDB.deleteDatabase("MyTestDatabase");
req.onsuccess = function () {
    console.log("Deleted database successfully");
};
req.onerror = function () {
    console.log("Couldn't delete database");
};
req.onblocked = function (event) {
    console.log("Couldn't delete database due to the operation being blocked", event);
};
