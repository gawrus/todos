import { NgModule } from '@angular/core';
import { TodoListRoutingModule } from './todo-list-rotuing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { todoReducer } from './todo-reducer';
import { StoreModule } from '@ngrx/store';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoDetailsComponent,
    TodoEditComponent],
  imports: [
    SharedModule,
    TodoListRoutingModule,
    StoreModule.forFeature('todoList', todoReducer)
  ],
  exports: []

})
export class TodoListModule {}
