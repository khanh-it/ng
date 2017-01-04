import { Component, OnInit }      from '@angular/core';
import { GroupUserService }    from '../group-user.service';

@Component({
  moduleId: module.id,
  selector: 'app-group-user',
  templateUrl: 'group-user.component.html',
  styleUrls: [ 'group-user.component.css' ],
  providers: [
    GroupUserService
  ],
})
export class GroupUserComponent implements OnInit {

  constructor(protected _groupUserService: GroupUserService) {
  }

  ngOnInit() {

  }
}
