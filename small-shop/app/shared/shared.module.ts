// module(s)
import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
// directive(s)
//import { HighlightDirective }         from './highlight.directive';
// pipe(s)
//import { AwesomePipe }         from './awesome.pipe';

// component(s)
import { PagingComponent } from './paging.component/paging.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    //AwesomePipe,
    //HighlightDirective
    PagingComponent,
  ],
  exports: [
    //AwesomePipe,
    //HighlightDirective,
    CommonModule,
    FormsModule,
    PagingComponent
  ]
})
export class SharedModule { }
