import { NgModule } from '@angular/core';
import { TodoListRoutingModule } from './todo-list-rotuing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    SharedModule,
    TodoListRoutingModule],
  exports: []

})
export class TodoListModule {}
