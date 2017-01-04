import { Component, OnInit } from '@angular/core';
import { GroupUserService } from '../group-user.service';

@Component({
  moduleId: module.id,
  selector: 'app-group-user-list',
  templateUrl: 'group-user-list.component.html',
  styleUrls: [ 'group-user-list.component.css' ],
  providers: [
    GroupUserService
  ],
})
export class GroupUserListComponent implements OnInit {

  constructor(protected _groupUserService: GroupUserService) {
  }

  ngOnInit() {

  }
}
