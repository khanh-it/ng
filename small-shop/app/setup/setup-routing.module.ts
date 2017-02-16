/* module(s) */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* component(s) */
/* --- Setup */
import { SetupComponent } from './setup.component/setup.component';
import { SetupTblUserComponent } from './setup-tbl-user.component/setup-tbl-user.component';
import { SetupTblProductComponent } from './setup-tbl-product.component/setup-tbl-product.component';

const routes: Routes = [
/* setup */
  { path: '', component: SetupComponent, data: {} },
  { path: 'tbl-user', component: SetupTblUserComponent, data: {} },
  { path: 'tbl-product', component: SetupTblProductComponent, data: {} },
/* #end.setup */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule {}
