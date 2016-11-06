import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

// Configs
//import { app_configs }    from '../../configs';

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
  providers: [ Task_RepoService, IndexedDBService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
