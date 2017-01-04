import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-login',
  templateUrl: 'user-login.component.html',
  styleUrls: [ 'user-login.component.css' ],
  providers: [
    UserService
  ],
})
export class UserLoginComponent implements OnInit {

  constructor(protected _userService: UserService) {
  }

  ngOnInit() {

  }
}
