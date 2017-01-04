/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// component(s)
import { UserComponent } from './user.component/user.component';
import { UserListComponent } from './user-list.component/user-list.component';
import { UserLoginComponent } from './user-login.component/user-login.component';

// service(s)
import { UserService } from './user.service';

@NgModule({
  imports: [ SharedModule, UserRoutingModule ],
  declarations: [
  // user
    UserComponent,
    UserListComponent,
    UserLoginComponent
  // #end.user
  ],
  //bootstrap: [ UserComponent ],
  providers: [ UserService ]
})
export class UserModule {
  constructor () {
    console.log('UserModule::constructor');
  }
}
