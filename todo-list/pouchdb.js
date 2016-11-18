var db = new PouchDB('todo-list.ng');

function genID() {
  return new Date().toISOString();
}

function buildDDoc_TABLES() {
  return db
    .get('_design/TABLES').then(
      (doc) => { return db.remove(doc); },
      () => { console.log('Not found, just ignore it!'); }
    )
    .then(() => {
    	return db.put({
    		_id: '_design/TABLES',
    		views: {TABLES: {map: function(doc){ emit(doc.TBL); }.toString()}}
    	});
    })
    .then(() => { db.allDocs({limit: 0}); })
  ;
}

function buildDDoc_TBLAccount() {
  return db
    .get('_design/TBL_Account').then(
      (doc) => { return db.remove(doc); },
      () => { console.log('Not found, just ignore it!'); }
    )
    .then(() => {
    	return db.put({
    		_id: '_design/TBL_Account',
    		views: {
          TBL_Account: {
            map: function(doc){
              if (buildDDoc_TBLAccount.table_name == doc.TBL) emit(doc._id);
            }.toString()
          },
          IDX_name: {
            map: function(doc){
              if (buildDDoc_TBLAccount.table_name == doc.TBL) emit(doc.name);
            }.toString()
          },
          IDX_create_time: {
            map: function(doc){
              if (buildDDoc_TBLAccount.table_name == doc.TBL) emit(doc.create_time);
            }.toString()
          }
        }
    	});
    })
    .then(() => { db.allDocs({limit: 0}); })
  ;
}
buildDDoc_TBLAccount.table_name = 'account';


// table : account
function insertData_account() {
  for (let i = 1; i <= 100; i++) {
    setTimeout(() => {
      db.put({
        _id: genID(),
        TBL: buildDDoc_TBLAccount.table_name,
        name: 'Account name ' + parseInt(100 * Math.random()),
        create_time: +new Date()
      });
    }, i + 10);
  }
}

function fetchAll_account() {
  //return db.query('TABLES', '');
}
// .end#table : account


// table : task
function buildDDoc_TBLTask() {
  return db
    .get('_design/TBL_Task').then(
      (doc) => { return db.remove(doc); },
      () => { console.log('Not found, just ignore it!'); }
    )
    .then(() => {
    	return db.put({
    		_id: '_design/TBL_Task',
    		views: {
          TBL_Task: {
            map: function(doc){
              if (buildDDoc_TBLTask.table_name == doc.TBL) emit(doc._id);
            }.toString()
          },
          IDX_name: {
            map: function(doc){
              if (buildDDoc_TBLTask.table_name == doc.TBL) emit([doc.TBL, doc.name]);
            }.toString()
          },
          IDX_create_time: {
            map: function(doc){
              if (buildDDoc_TBLTask.table_name == doc.TBL) emit([doc.TBL, doc.create_time]);
            }.toString()
          }
        }
    	});
    })
    .then(() => { db.allDocs({limit: 0}); })
  ;
}
buildDDoc_TBLTask.table_name = 'task';

function insertData_task() {
  for (let i = 1; i <= 100; i++) {
    setTimeout(() => {
      db.put({
        _id: genID(),
        TBL: buildDDoc_TBLTask.table_name,
        name: 'Task name ' + parseInt(100 * Math.random()),
        create_time: +new Date()
      });
    }, i + 10);
  }
}

function fetchAll_task() {
  //return db.query('TABLES', );
}
// .end#table : task
