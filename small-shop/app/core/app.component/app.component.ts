import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  providers: []
})
export class AppComponent {

  constructor() {}

  // only called for/if there is an @input variable set by parent.
  //ngOnChanges() {}

  //ngOnInit() {}

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngDoCheck() {}

  //ngAfterContentInit() {}

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterContentChecked() {}

  //ngAfterViewInit() {}

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterViewChecked() {}

  //ngOnDestroy() {}
}
