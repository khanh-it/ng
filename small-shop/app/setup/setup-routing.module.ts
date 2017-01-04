/* module(s) */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* component(s) */
/* --- Setup */
import { SetupComponent } from './setup.component/setup.component';
import { SetupTblUserComponent } from './setup-tbl-user.component/setup-tbl-user.component';

const routes: Routes = [
/* setup */
  { path: '', component: SetupComponent, data: {} },
  { path: 'tbl-user', component: SetupTblUserComponent, data: {} },
/* #end.setup */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
