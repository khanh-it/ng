/* module(s) */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* component(s) */
/* --- Test */
import { TestComponent } from './test.component/test.component';

const routes: Routes = [
/* test */
  { path: '', component: TestComponent, data: {} },
/* #end.test */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {}
