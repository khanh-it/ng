import { Component, OnInit } from '@angular/core';

// Models
import { TaskModel }    from '../../models/task';

// Services
import { Task_RepoService }    from '../../services/repos/task';

@Component({
  moduleId: module.id,
  selector: 'todo-create',
  templateUrl: 'tmpl.html',
  styleUrls: ['styles.css']
})
export class TodoCreateComponent implements OnInit {

  /** */
  public task: TaskModel;

  /** */
  get priorities() {
    return TaskModel.returnPriorities();
  }

  /** */
  public submitted = false;

  /** */
  public constructor(protected _repoTask: Task_RepoService) {
  }

  /** */
  ngOnInit(): void {
    //
    this.task = new TaskModel();
  }

  /**/
  public onFormSubmit():void {
    //
    console.log('onFormSubmit - task: ', this.task);
    //
    let rs = this._repoTask.insert(this.task)
      .then((_t) => {
        //
        this.task = new TaskModel();
        // Rerender form...
        this.submitted = true;
        setTimeout(() => this.submitted = false, 0);
      })
      .catch((err) => {
        alert('insert data failed: ' + err);
      })
    ;
  }

  public isDFPriority(value) {
    return value == TaskModel.DEFAULT_PRIORITY;
  }
}
