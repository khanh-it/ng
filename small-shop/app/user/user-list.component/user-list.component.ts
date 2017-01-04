import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: [ 'user-list.component.css' ],
  providers: [
    UserService
  ],
})
export class UserListComponent implements OnInit {

  constructor(protected _userService: UserService) {
  }

  ngOnInit() {

  }
}
