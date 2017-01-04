import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

// Models
import { TaskModel }    from '../../models/task';

// Services
import { Task_RepoService }    from '../../services/repos/task';

//
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'todo-edit',
  templateUrl: 'tmpl.html',
  styleUrls: ['styles.css']
})
export class TodoEditComponent implements OnInit {

  /** */
  public task: TaskModel;

  /** */
  get priorities() {
    return TaskModel.returnPriorities();
  }

  /** */
  public submitted = false;

  /** */
  public constructor(
    protected _repoTask: Task_RepoService,
    protected route: ActivatedRoute,
    protected location: Location
  ) {
  }

  /** */
  ngOnInit(): void {
    //
    this.task = new TaskModel();
    //
    this.route.params
      .switchMap((params: Params, index: number) => {
         let obserInput = this._repoTask.getTask(params['id']);
         return obserInput;
      })
      .subscribe(task => {
        this.task = task;
      })
    ;
  }

  /**/
  public onFormSubmit():void {
    //
    console.log('onFormSubmit - task: ', this.task);
    //
    let rs = this._repoTask.edit(this.task)
      .then(() => {
        // Rerender form...
        this.submitted = true;
        setTimeout(() => this.submitted = false, 0);
      })
      .catch((err) => {
        alert('edit data failed: ' + err);
      })
    ;
  }

  public isDFPriority(value) {
    return value == TaskModel.DEFAULT_PRIORITY;
  }
}
