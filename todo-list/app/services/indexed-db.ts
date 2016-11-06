/*// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window['indexedDB']
  || window['mozIndexedDB']
  || window['webkitIndexedDB']
  || window['msIndexedDB']
;

// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window['IDBTransaction'] = window['IDBTransaction']
  || window['webkitIDBTransaction']
  || window['msIDBTransaction']
  || {READ_WRITE: "readwrite"}
; // This line should only be needed if it is needed to support the object's constants for older browsers
window['IDBKeyRange'] = window['IDBKeyRange']
  || window['webkitIDBKeyRange']
  || window['msIDBKeyRange']
; // (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
*/
import { Injectable } from '@angular/core';

@Injectable()
export class IndexedDBService {
  /**  */
  public static getDB(DBName:string, DBOptions:{version:number} = {version: 1}):Promise<IDBDatabase> {
    // Case:
    if (!('indexedDB' in window)) {
      return Promise.reject('Your browser does not support indexedDB.');
    }

    // Case: open db
    return new Promise((resolve, reject) => {
      var request = window.indexedDB.open(DBName, DBOptions.version);
      request.addEventListener('error', event => {
        let msg = `[IndexedDBService][getDB][err] Open indexedDB with name '${DBName}' failed. Error code: .`;
        console.log(msg);
        console.log('event: ', event);
        reject(msg);
      });
      request.addEventListener('success', event => {
        resolve((event.target as IDBOpenDBRequest).result);
      });
    });
  }
}
