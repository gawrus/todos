import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TodoListRoutingModule {}
