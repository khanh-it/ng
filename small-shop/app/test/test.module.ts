/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TestRoutingModule } from './test-routing.module';

// component(s)
/* --- Test */
import { TestComponent } from './test.component/test.component';

// service(s)

@NgModule({
  imports: [ SharedModule, TestRoutingModule ],
  declarations: [
  // test
    TestComponent,
  // #end.test
  ],
  //bootstrap: [ TestComponent ],
  providers: [ ]
})
export class TestModule {
  constructor () {
    //console.log('TestModule::constructor');
  }
}
