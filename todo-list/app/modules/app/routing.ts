import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent }   from '../../components/app/index';
import { TodoListComponent }   from '../../components/todo-list/index';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '',  component: TodoListComponent },
  { path: 'todo/list', component: TodoListComponent },
  //{ path: 'todo/create', component: TodoCreateComponent },
  //{ path: 'todo/edit/id:id', component: TodoEditComponent },
  //{ path: 'todo/detail/id:id', component: TodoDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
