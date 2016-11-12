import { NgModule, OpaqueToken }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

// Configs
import { AppConfigInterface, app_configs, APP_CONFIG } from '../../configs';

// Components
import { AppComponent }       from '../../components/app/index';
import { TodoListComponent }  from '../../components/todo-list/index';
// Routing
import { AppRoutingModule }   from './routing';
// Services
import { IndexedDBService }   from '../../services/indexed-db';
// +++ Repo(s)
import { Task_RepoService }   from '../../services/repos/task';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  exports:      [  ],
  declarations: [
    // Components
    AppComponent, TodoListComponent,
    // .end#Components

    // Services
    // .end#Services
  ],
  providers: [
    // Application configs
    {provide: APP_CONFIG, useValue: app_configs},

    // .end#Application configs
    Task_RepoService, IndexedDBService,

    AppModule
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
