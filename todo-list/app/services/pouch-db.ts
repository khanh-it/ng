// PouchDB library
//import { PouchDB } from '../../node_modules/pouchdb/dist/pouchdb.js';
//import { PouchDB } from '../../node_modules/pouchdb/dist/pouchdb.memory.js';
var PouchDB = require('../../node_modules/pouchdb/dist/pouchdb.js');
//require('../../node_modules/pouchdb/dist/pouchdb.memory.js');
//
import { Injectable, Inject } from '@angular/core';

// Configs
import { AppConfigInterface,  APP_CONFIG } from '../configs';

@Injectable()
export class PouchDBService {

  protected _db:PouchDB;

  protected _dbMem:PouchDB;

  /***/
  constructor(@Inject(APP_CONFIG) protected _appConfigs: AppConfigInterface) {

  }

  /**  */
  public getDB(DBName:string, DBOptions:{version:number} = {version: 1}):Promise<PouchDB> {
    return new Promise((resolve, reject) => {
      var db = new PouchDB();
    });
  }
}
