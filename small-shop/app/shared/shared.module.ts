// module(s)
import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { FormsModule }                from '@angular/forms';
// directive(s)
//import { HighlightDirective }         from './highlight.directive';
// pipe(s)
//import { AwesomePipe }         from './awesome.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    //AwesomePipe,
    //HighlightDirective
  ],
  exports: [
    //AwesomePipe,
    //HighlightDirective,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
