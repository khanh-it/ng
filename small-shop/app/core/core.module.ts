/* Application Configs */
import { app_config } from '../app-config';

/* NG Modules */
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { MaterialModule } from '@angular/material';

/* Router Modules */
import { CoreRoutingModule } from './core-routing.module';

// component(s)
import { AppComponent } from './app.component/app.component';
import { NavComponent } from './nav.component/nav.component';
import { DashboardComponent } from './dashboard.component/dashboard.component';
import { LoginComponent } from './login.component/login.component';
import { LogoutComponent } from './logout.component/logout.component';
import { Page404Component } from './page-404.component/page-404.component';
//import { Page500Component } from './page-500.component/page-500.component';
import { DialogComponent } from './dialog.component/dialog.component';

/* Services */
import { PhpjsService } from './phpjs.service';
import { TranslatorService } from './translator.service';
import { PouchdbDbService } from './db.service/pouchdb-db.service';
import { AuthCheckService } from './auth-check.service';
import { UserRepoService } from './user-repo.service';

/* re-exports */
export { AppComponent };

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    //MaterialModule,
  ],
  exports: [ ],
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    Page404Component,
    //Page500Component
    DialogComponent,
  ],
  providers: [
    PhpjsService,
    TranslatorService,
    PouchdbDbService,
    AuthCheckService,
    UserRepoService,
    DialogComponent,
  ]
})
export class CoreModule {

  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule,
    protected _authCheckServ: AuthCheckService
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
    //
    this._authCheckServ.setIgnores(app_config['auth-service'].ignores);
    // Initilize
    this.init();
  }

  /** Initilize */
  protected init() {}
}

// Set default DB config
PouchdbDbService.setDefaultConfig(app_config.db);
