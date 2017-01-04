import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component(s)
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { LoginComponent } from './login.component/login.component';
import { LogoutComponent } from './logout.component/logout.component';
import { Page404Component } from './page-404.component/page-404.component';
//import { Page500Component } from './page-500.component/page-500.component';

const routes: Routes = [
  // ---
  { path: '', component: DashboardComponent },
  // --- login, logout
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  // --- application error
  //{ path: 'err-500', component: Page500Component },
  // --- page not found
  { path: 'err-404', component: Page404Component },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
  constructor() {
    //console.log('CoreRoutingModule::constructor');
  }
}
