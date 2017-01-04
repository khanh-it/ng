/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SetupRoutingModule } from './setup-routing.module';

// component(s)
/* --- Setup */
import { SetupComponent } from './setup.component/setup.component';
import { SetupTblUserComponent } from './setup-tbl-user.component/setup-tbl-user.component';

// service(s)

@NgModule({
  imports: [ SharedModule, SetupRoutingModule ],
  declarations: [
  // setup
    SetupComponent,
    SetupTblUserComponent,
  // #end.setup
  ],
  //bootstrap: [ SetupComponent ],
  providers: [ ]
})
export class SetupModule {
  constructor () {
    //console.log('SetupModule::constructor');
  }
}
