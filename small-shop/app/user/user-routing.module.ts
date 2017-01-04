/* module(s) */
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

/* component(s) */
/* --- User */
import { UserComponent } from './user.component/user.component';
import { UserListComponent } from './user-list.component/user-list.component';
import { UserDetailComponent } from './user-detail.component/user-detail.component';
import { UserLoginComponent } from './user-login.component/user-login.component';

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
          { path: 'detail/:id', component: UserDetailComponent, data: {} },
          { path: '', component: UserListComponent }
        ]
      }
    ]
  },
  //{ path: 'user/login', component: UserLoginComponent, data: {} },
  //{ path: 'user/logout', component: UserComponent, data: {} },
  //{ path: 'user/profile', component: UserComponent, data: {} },
  //{ path: 'user/list', component: UserListComponent, data: {} },
  //{ path: 'user/create', component: UserComponent, data: {} },
  //{ path: 'user/edit', component: UserComponent, data: {} },
  //{ path: 'user/detail/:id', component: UserDetailComponent, data: {} },
  //{ path: 'user/delete', component: UserComponent, data: {} },
/* #end.user */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  constructor(router: Router) {
    //console.log('UserRoutingModule::constructor.');
    //console.dir('Router: ', Router);
    //console.dir('RouterModule: ', RouterModule);
  }
}
