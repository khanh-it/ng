/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// component(s)
/* --- User */
import { UserComponent } from './user.component/user.component';
import { UserSmallBoxInfo } from './user-small-box-info.component/user-small-box-info.component'

// service(s)
import { UserRepoService } from './user-repo.service';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
  // user
    UserComponent,
    UserSmallBoxInfo
  // #end.user
  ],
  providers: [
    UserRepoService,
  ]
})
export class UserModule {
  constructor () {}
}
