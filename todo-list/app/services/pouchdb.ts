// PouchDB library
/// <reference path="./pouchdb.d.ts"/>
import { PouchDB } from 'pouchdb';
if (!window.hasOwnProperty('PouchDB')) {
  // +++ PouchDB
  require('../../node_modules/pouchdb/dist/pouchdb.js');
  // +++ PouchDB plugins...
  require('../../node_modules/pouchdb/dist/pouchdb.memory.js');
}

//
import { Injectable, Inject, OnInit } from '@angular/core';

//
import { ServiceAbstract } from './Abstract';


// Configs
import { AppConfigInterface,  APP_CONFIG } from '../configs';

@Injectable()
export class PouchDBService extends ServiceAbstract implements OnInit {
  /***/
  protected _db:PouchDB;
  /***/
  protected _dbMem:PouchDB;

  /***/
  constructor(
    @Inject(APP_CONFIG) _appConfigs: AppConfigInterface
  ) {
    //
    super(_appConfigs);
    //
    this._db = new PouchDB(this._appConfigs.db.name);
    this._dbMem = <PouchDB>(new PouchDB(this._appConfigs.db.name, {'adapter': 'memory'}));
  }

  ngOnInit() {
    console.log('module: ', module);
    console.log('_appConfigs: ', this._appConfigs);
    console.log('this._db: ', this._db);
    console.log('this._dbMem: ', this._dbMem);
  }

  /***/
  public getDB():PouchDB {
    return this._db;
  }

  /***/
  public getDBMem():PouchDB {
    return this._dbMem;
  }
}
