/* module(s) */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* component(s) */
/* --- Test */
import { LearnNgComponent } from './learn-ng.component';

const routes: Routes = [
/* test */
  { path: '', component: LearnNgComponent, data: {} },
/* #end.test */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnNgRoutingModule {}
