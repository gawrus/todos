import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: 'edittodo', component: TodoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TodoListRoutingModule {}
