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
  public task: TaskModel;

  /** */
  public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  /** */
  public submitted = false;

  /** */
  public onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.task); }

  /**/
  public constructor(protected _repoTask: Task_RepoService) {}

  /**/
  ngOnInit(): void {
  }
}
