import { Component, OnInit } from '@angular/core';

// Models
import { TaskModel }    from '../../models/task';

// Services
import { Task_RepoService }    from '../../services/repos/task';

@Component({
  moduleId: module.id,
  selector: 'TodoList',
  templateUrl: 'tmpl.html',
  styleUrls: ['styles.css']
})
export class TodoListComponent implements OnInit {
  /**/
  protected _tasks: TaskModel[] = [];

  /**/
  public task_priorities: string[];

  /**/
  public constructor(protected _repoTask: Task_RepoService) {}

  /**/
  ngOnInit(): void {
    //
    this.task_priorities = TaskModel.returnPriorities();
    //console.log('ngOnInit');
    this._repoTask.getTasks()
      .then((tasks) => {
        //console.log('[TodoListComponent] Get tasks done!');
        this._tasks = tasks;
      })
      .catch(err => {
        //console.log('[TodoListComponent] Get tasks failed!');
        this._tasks = [];
      })
    ;
  }

  /***/
  public getSortedTasks():TaskModel[] {
    //console.log('[TodoListComponent][getSortedTasks]!');
    return this._tasks;
  }

  /***/
  public getTaskPriorityName(priority) {
    return this.task_priorities[priority];
  }
}
