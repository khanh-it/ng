/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

// component(s)
/* --- Product */
import { ProductComponent } from './product.component/product.component';
import { ProductListComponent } from './product-list.component/product-list.component';
import { ProductCudComponent } from './product-cud.component/product-cud.component';

// service(s)
import { ProductRepoService } from './product-repo.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
  // product
    ProductComponent,
    ProductListComponent,
    ProductCudComponent,
  // #end.product
  ],
  providers: [
    ProductRepoService,
  ]
})
export class ProductModule {
  constructor () {
  }
}
