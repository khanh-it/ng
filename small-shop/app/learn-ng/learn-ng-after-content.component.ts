import { Component, OnInit, Inject, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'learn-ng-after-content',
  template: 'learn-ng-after-content<ng-content></ng-content>'
})
export class LearnNgAfterContentComponent/* implements OnInit*/ {
  constructor() {}
}
