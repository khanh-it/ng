import { NgModule, OpaqueToken }      from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { RouterModule }               from '@angular/router';

// Configs
import { AppConfigInterface, app_configs, APP_CONFIG } from '../../configs';

// Components
import { AppComponent }       from '../../components/app/index';
import { TodoListComponent }  from '../../components/todo-list/index';
import { TodoCreateComponent }  from '../../components/todo-create/index';
import { TodoEditComponent }  from '../../components/todo-edit/index';
import { TodoDetailComponent }  from '../../components/todo-detail/index';
// Routing
import { AppRoutingModule }   from './routing';
// Services
import { PouchDBService }   from '../../services/pouchdb';
// +++ Repo(s)
import { Task_RepoService }   from '../../services/repos/task';
// Pipes
import { KeysPipe }       from '../../pipes/keys';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  exports:      [  ],
  declarations: [
    // Components
    AppComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoEditComponent,
    TodoDetailComponent,
    // .end#Components

    // Pipes
    KeysPipe,
    // .end#Pipes

    // Services
    // .end#Services
  ],
  providers: [
    // Application configs
    {provide: APP_CONFIG, useValue: app_configs},

    // .end#Application configs
    Task_RepoService, PouchDBService,

    AppModule
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
