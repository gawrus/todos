import { Action } from '@ngrx/store';
import { TodoList } from './todo.model';

export const SET_TODO_LIST = '[TodoList]  Set Todo List List';
export const EDIT_TODO_LIST = '[TodoList] Edit Todo List';
export const END_EDIT_TODO_LIST = '[TodoList] End Edit Todo List';

export class SetTodoList implements Action {
  readonly type = SET_TODO_LIST;

  constructor(public payload: TodoList[]) {}
}


export class EditTodoList implements Action {
  readonly type = EDIT_TODO_LIST;

  constructor(public payload: TodoList) {}
}


export class EndEditTodoList implements Action {
  readonly type = END_EDIT_TODO_LIST;
}

export type TodoListActions =
  | SetTodoList
  | EditTodoList
  | EndEditTodoList;
