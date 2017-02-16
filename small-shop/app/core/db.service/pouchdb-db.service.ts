// PouchDB library
//// <reference path="./pouchdb-db.service.d.ts"/>
//import { PouchDB } from 'pouchdb';
//if (!window.hasOwnProperty('PouchDB')) {
  // +++ PouchDB
  import * as pouchdb from '../../../node_modules/pouchdb/dist/pouchdb.js';
  const PouchDB = pouchdb.PouchDB;
  declare interface PouchDB {};
  // +++ PouchDB plugins...
  import * as pouchdbAdaper from '../../../node_modules/pouchdb/dist/pouchdb.memory.js';
  const _dontUse_01 = pouchdbAdaper.PouchDB;
//}

//
import { Injectable, Inject, OnInit } from '@angular/core';

//
export interface PDBQueryResponse {
  "total_rows": number,
  "offset": number,
  "rows": any[]
};

//
import { AbstractDbService } from './abstract-db.service';

@Injectable()
export class PouchdbDbService extends AbstractDbService {
  /***/
  protected _db:any;
  /***/
  protected _dbMem:any;

  /***/
  protected init(options?:any):PouchdbDbService {
    //
    let config = PouchdbDbService.getDefaultConfig();
    if (options && options.config) {
      config = options.config;
    }
    //
    this._db = new PouchDB(config.dbname, {'adapter': 'idb'});
    this._dbMem = new PouchDB(config.dbname, {'adapter': 'memory'});

    //
    Object.defineProperty(window, '_pouchdbServ', {value: this});

    //
    return this;
  }

  /***/
  public getDB():PouchDB {
    return this._db;
  }

  /***/
  public getDBMem():PouchDB {
    return this._dbMem;
  }

  /**
   *
   */
  public get(docID:string):Promise<any> {
    return new Promise((rs, rj) => {
      this._db
        .get(docID, {include_docs: true, attachments: true})
        .then((doc:any) => { rs(doc); })
        .catch(() => { rs(null); })
      ;
    });
  }

  /**
   *
   */
  public query(
    fun:Function|string|{
      'map': Function,
      'reduce'?: Function
    },
    options?: Object,
    callback?: Function
  ):Promise<any> {
    return this._db
      .query(fun, options, callback)
    ;
  }

  /**
   *
   */
  public put(doc:any, callback?:Function):Promise<any> {
    return this._db.put(doc, callback);
  }

  /**
   *
   */
  public remove(doc:any, callback?:Function):Promise<any> {
    doc._deleted = true;
    return this.put(doc, callback);
  }

  /**
   * Insert, update data
   */
  public putUniq(
    index:string,
    keys:string|string[],
    doc:any,
    callback?:Function
  ):Promise<any> {
    // Format data key
    let keyUniq:string|string[];
    if (keys instanceof Array) {
      keyUniq = [];
      for (let key of keys) {
        keyUniq.push(doc && doc[key]);
      }
    } else {
      keyUniq = doc && doc['' + keys];
    }
    // Get data by key (check for unique)
    return this.query(index, {key: keyUniq, include_docs: true, limit: 1})
      .then((rt) => {
        let _doc = rt.rows[0] && rt.rows[0].doc;
        if (_doc && _doc._rev != doc._rev) {
          // Case: unique key violation
          throw Error(`Unique constraint. Index: ${index}. Keys: ${JSON.stringify(keys)}. Value: ${JSON.stringify(keyUniq)}. Doc: ${JSON.stringify(_doc)}.`);
        } else {
          return this.put(doc, callback);
        }
      })
    ;
  }
}
