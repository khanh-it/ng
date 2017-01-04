import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'learn-ng',
  templateUrl: 'learn-ng.component.html'
})
export class LearnNgComponent implements OnInit {

  @Input()
  prop01:string = '';

  constructor() {
    this.prop01 = 'property 01';
  }

  // only called for/if there is an @input variable set by parent.
  ngOnChanges() {
    //console.log(`ngOnChanges. Params: `, arguments);
  }

  ngOnInit() {
    //this.prop01 = 'property 01';
    //console.log(`ngOnInit. Params: `, arguments);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() {
    //console.log(`ngDoCheck. Params: `, arguments);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit. Params: `, arguments);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked. Params: `, arguments);
  }

  ngAfterViewInit() {
    //console.log(`ngAfterViewInit. Params: `, arguments);
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() {
    //console.log(`ngAfterViewChecked. Params: `, arguments);
  }

  ngOnDestroy() {
    //console.log(`ngOnDestroy. Params: `, arguments);
  }
}
