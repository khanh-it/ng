/* module(s) */
import {
  NgModule
} from '@angular/core';
import {
  Routes,
  Router,
  RouterModule
} from '@angular/router';

/* component(s) */
/* --- User */
import { UserComponent } from './user.component/user.component';

/* Services */

const routes: Routes = [
/* user */
  //{ path: 'user', redirectTo: 'user/list', pathMatch: 'full'},
  { path: '', component: UserComponent, data: {},
    children: [
      {
        path: '',
        //component: UserListComponent, data: {}, canActivate: [AuthGuardService],
        children: [
          //{ path: 'detail/:id', component: UserDetailComponent, data: {} },
          //{ path: '', component: UserListComponent }
        ]
      }
    ]
  },
/* #end.user */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  constructor(router: Router) {}
}
