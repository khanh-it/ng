/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

// component(s)
/* --- User */
import { UserComponent } from './user.component/user.component';
import { UserListComponent } from './user-list.component/user-list.component';
import { UserCudComponent } from './user-cud.component/user-cud.component';
import { UserSmallBoxInfoComponent } from './user-small-box-info.component/user-small-box-info.component';
import { UserChangesComponent } from './user-changes.component/user-changes.component';

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
    UserListComponent,
    UserCudComponent,
    UserChangesComponent,
    UserSmallBoxInfoComponent
  // #end.user
  ],
  providers: [
    UserRepoService,
  ]
})
export class UserModule {
  constructor () {}
}
