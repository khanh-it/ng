import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* component(s) */
//import { DashboardComponent } from './core/dashboard.component/dashboard.component';

/* Services */
//import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  //
  // ---
  { path: 'learn-ng', loadChildren: 'app/learn-ng/learn-ng.module#LearnNgModule'},
  // ---
  { path: 'test', loadChildren: 'app/test/test.module#TestModule'},
  //
  // ---
  { path: 'setup', loadChildren: 'app/setup/setup.module#SetupModule'},
  // ---
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  /* { path: '', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
        ]
      }
    ] }, */
  //{ path: '', redirectTo: 'contact', pathMatch: 'full'},
  //{ path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  //{ path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
