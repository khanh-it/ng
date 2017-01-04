/* module(s) */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LearnNgRoutingModule } from './learn-ng-routing.module';

// component(s)
/* --- Test */
import { LearnNgComponent } from './learn-ng.component';
import { LearnNgAfterContentComponent } from './learn-ng-after-content.component';

// service(s)

@NgModule({
  imports: [ SharedModule, LearnNgRoutingModule ],
  declarations: [
    LearnNgComponent,
    LearnNgAfterContentComponent
  ],
  providers: [ ]
})
export class LearnNgModule {
  constructor () {
    console.log('LearnNgModule::constructor');
  }
}
