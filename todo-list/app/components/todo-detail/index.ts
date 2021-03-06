import { Component, OnInit } from '@angular/core';

// Models
import { TaskModel }    from '../../models/task';

// Services
import { Task_RepoService }    from '../../services/repos/task';

@Component({
  moduleId: module.id,
  selector: 'TodoDetail',
  templateUrl: 'tmpl.html',
  styleUrls: ['styles.css']
})
export class TodoDetailComponent implements OnInit {
  /**/
  protected _task: TaskModel;

  /**/
  public constructor(protected _repoTask: Task_RepoService) {}

  /**/
  ngOnInit(): void {}
}
