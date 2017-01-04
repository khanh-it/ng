/* Configs */
import { app_config, APP_CONFIG } from './app-config';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* module(s) */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MaterialModule } from '@angular/material';
/* -- Feature Modules */
import {
  CoreModule,
  AppComponent
} from './core/core.module';

/* component(s) */

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MaterialModule.forRoot(),
    CoreModule
  ],
  exports: [ ],
  declarations: [ ],
  bootstrap:    [ AppComponent ],
  providers: [
    // Application configs
    {provide: APP_CONFIG, useValue: app_config},
  ]
})
export class AppModule {
  constructor () {}
}
