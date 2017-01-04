import { Component, OnInit } from '@angular/core';

/* 3rd Modules */
// --- phpjs
import * as php from 'phpjs/index';
Object.defineProperty(window, 'phpjs', {
  value: php
});

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: [ 'test.component.css' ],
  providers: [ ],
})
export class TestComponent implements OnInit {

  constructor(
    protected _pouchdbServ: PouchdbDbService
  ) {
    //console.log('php: ', php);
    Object.defineProperty(window, '_pouchdbServ', {
      value: this._pouchdbServ
    });
  }

  ngOnInit() {}
}
