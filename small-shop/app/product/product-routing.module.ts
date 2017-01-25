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
/* --- Product */
import { ProductComponent } from './product.component/product.component';
import { ProductCudComponent } from './product-cud.component/product-cud.component'

/* Services */

const routes: Routes = [
/* product */
  { path: '', component: ProductComponent, data: {},
    children: [
      {
        path: '',
        //component: ProductListComponent, data: {}, canActivate: [AuthGuardService],
        children: [
          //{ path: 'detail/:id', component: ProductDetailComponent, data: {} },
          //{ path: '', component: ProductListComponent }
        ]
      },
      { path: 'addnew', component: ProductCudComponent},
    ]
  },
/* #end.product */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
  constructor(router: Router) {}
}
