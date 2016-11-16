import { Component, OnInit } from '@angular/core';

// Models
import { TaskModel }    from '../../models/task';

// Services
import { Task_RepoService }    from '../../services/repos/task';

@Component({
  moduleId: module.id,
  selector: 'TodoCreate',
  templateUrl: 'tmpl.html',
  styleUrls: ['styles.css']
})
export class TodoCreateComponent implements OnInit {

  /** */
  protected _dfTask: TaskModel = {
    '_id': '', 'name': '', 'note': '', 'priority': 0
  };

  /** */
  public task: TaskModel;

  /** */
  public priorities = ['Lowest', 'Low', 'Normal', 'High', 'Highest'];

  /** */
  public formHidden = false;

  // TODO: Remove this when we're done
  public diagnostic(task) {
    if (undefined === task) {
      return JSON.stringify((undefined === task) ? this.task : task)  ;
    }
    console.log('diagnostic: ', task);
    return '';
  }

  /**/
  public constructor(protected _repoTask: Task_RepoService) {}

  protected _mkDefaultTask() {
    //
    this.task = JSON.parse(JSON.stringify(this._dfTask));
  }

  /**/
  ngOnInit(): void {
    //
    this._mkDefaultTask();
    //
    let time = 1024;
    setInterval(() => {

    }, time);
  }

  /**/
  public onKBEvts(eleDOM:any) {
    //console.log('eleDOM: ', eleDOM);
    //this.task.name = (<HTMLInputElement>$event.target).value;
  }

  /** */
  public submitted = false;

  /**/
  public onSubmit() {
    this._mkDefaultTask();
    this.submitted = true;
    setTimeout(() => this.submitted = false, 0);

    console.log('arguments: ', arguments);
    console.log('-- end ');

    return false;
  }
}
