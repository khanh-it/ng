import { Component, OnInit, Inject } from '@angular/core';

// Configs
import { AppConfigInterface,  APP_CONFIG } from '../../configs';

// Module(s)
import { AppModule } from '../../modules/app/index';

@Component({
  moduleId: module.id,
  selector: 'App',
  templateUrl: 'tmpl.html'
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
