import { Injectable } from '@angular/core';

// Models
import { TaskModel } from '../../models/task';

// Services
import { PouchDBService } from '../pouchdb';


@Injectable()
export class Task_RepoService {
  /**
   *
   */
  protected _defTasks: TaskModel[] = [
    {_id: '001_1', name: 'Task 01', priority: 0},
    {_id: '001_2', name: 'Task 02', priority: 0},
    {_id: '001_3', name: 'Task 03', priority: 0},
    {_id: '001_4', name: 'Task 04', priority: 0},
    {_id: '001_5', name: 'Task 05', priority: 0},
    {_id: '001_6', name: 'Task 06', priority: 0},
    {_id: '001_7', name: 'Task 07', priority: 0},
    {_id: '001_8', name: 'Task 08', priority: 0},
    {_id: '001_9', name: 'Task 09', priority: 0},
    {_id: '001_10', name: 'Task 10', priority: 0},
  ];

  /**
   *
   */
  protected _tasks: TaskModel[] = [];

  /***/
  public constructor(protected _PouchDBService:PouchDBService) {
    //console.log('_PouchDBService: ', this._PouchDBService);
  }

  /***/
  public getTasks():Promise<TaskModel[]> {
    let db = this._PouchDBService.getDB();
    return db.allDocs({
        'include_docs': true,
        'key': '001_1'
      })
      .then(docs => {
        console.log('docs: ', docs);
        /*if (!docs.total_rows) {
        /*    this._defTasks.forEach((task, idx) => {
              docs.rows.push(task);
              db.put(task);
            });
        }*/
        return docs.rows;
      })
      .catch((err) => {
        console.log(`Get tasks failed!`, err);
        return this._tasks;
      })
    ;
  }
}
