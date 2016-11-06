import { Injectable } from '@angular/core';

// Models
import { TaskModel } from '../../models/task';

// Services
import { IndexedDBService } from '../indexed-db';


@Injectable()
export class Task_RepoService {
  /**
   *
   */
  public DBName = 'todo-list.ng';
  /**
   *
   */
  public DBOptions = {
    version: 1
  };

  protected _db;

  /**
   *
   */
  protected _tasks: TaskModel[] = [
    {id: '1', name: 'Task 01', priority: 0},
    {id: '2', name: 'Task 02', priority: 0},
    {id: '3', name: 'Task 03', priority: 0},
    {id: '4', name: 'Task 04', priority: 0},
    {id: '5', name: 'Task 05', priority: 0},
    {id: '6', name: 'Task 06', priority: 0},
    {id: '7', name: 'Task 07', priority: 0},
    {id: '8', name: 'Task 08', priority: 0},
    {id: '9', name: 'Task 09', priority: 0},
    {id: '10', name: 'Task 10', priority: 0},
  ];

  /***/
  public constructor() {}

  public getDB():Promise<IDBDatabase> {
    if (this._db) {
      return Promise.resolve(this._db);
    }
    return IndexedDBService
      .getDB(this.DBName, this.DBOptions)
      .then(db => {
        console.log('getDB', db);
        this._db = db;
        // Create an objectStore for this database
        var objectStore = db.createObjectStore("task", { keyPath: "id" });
        console.log('objectStore: ',  objectStore);
      })
    ;
  }

  /***/
  public getTasks():Promise<TaskModel[]> {
    return this.getDB()
      .then(db => {
        console.log(`Get tasks done!`);
        return this._tasks;
      })
      .catch((err) => {
        console.log(`Get tasks failed!`, err);
        return this._tasks;
      })
    ;
  }
}
