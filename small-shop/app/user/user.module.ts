/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// component(s)
/* --- User */
import { UserComponent } from './user.component/user.component';
import { UserListComponent } from './user-list.component/user-list.component';
import { UserDetailComponent } from './user-detail.component/user-detail.component';
import { UserLoginComponent } from './user-login.component/user-login.component';
/* --- GroupUser */
import { GroupUserComponent } from './group-user.component/group-user.component';
import { GroupUserListComponent } from './group-user-list.component/group-user-list.component';

// service(s)
import { UserService } from './user.service';
import { GroupUserService } from './group-user.service';

@NgModule({
  imports: [ SharedModule, UserRoutingModule ],
  declarations: [
  // user
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    UserLoginComponent,
  // #end.user
  // group-user
    GroupUserComponent,
    GroupUserListComponent
  // #end.group-user
  ],
  providers: [
    UserService,
    GroupUserService,
  ]
})
export class UserModule {
  constructor () {
    //console.log('UserModule::constructor');
  }
}
