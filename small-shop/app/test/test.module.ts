/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TestRoutingModule } from './test-routing.module';

// component(s)
/* --- Test */
import { TestComponent } from './test.component/test.component';

// service(s)

/* 3rd Modules */
// --- ng2-bootstrap
import { AccordionModule } from 'ng2-bootstrap';

// Directives
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    SharedModule,
    TestRoutingModule,
    AccordionModule.forRoot()
  ],
  declarations: [
  // test
    TestComponent,
  // #end.test
    HighlightDirective
  ],
  //bootstrap: [ TestComponent ],
  providers: [ ]
})
export class TestModule {
  constructor () {
    //console.log('TestModule::constructor');
  }
}
