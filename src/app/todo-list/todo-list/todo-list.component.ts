import { TodoList } from './../todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import * as fromTodo from '../todo-reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: TodoList[];

  constructor(
    private todosService: TodoService,
    private store: Store<fromTodo.State>) { }

  ngOnInit(): void {
    this.store.select(fromTodo.getTodos).subscribe(
      (todos: TodoList[]) => {
        this.todos = todos;
      }
    );

    this.todosService.fetchTodos();
  }

  onAddItem(){
    this.todosService.createTodoList();
  }

  onSave(){
    this.todosService.saveTodoList();
  }

}
