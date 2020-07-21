import { TodoList } from './todo.model';
import * as fromRoot from '../app.reducer';
import {
  TodoListActions,
  SET_TODO_LIST,
  EDIT_TODO_LIST,
  END_EDIT_TODO_LIST } from './todo-actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface TodoListState {
  todos: TodoList[];
  currentTodoList: TodoList;
}


export interface State extends fromRoot.State {
  todoList: TodoListState;
}

const initialState: TodoListState = {
  todos: [],
  currentTodoList: null
};

export function todoReducer(state = initialState, action: TodoListActions) {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        ...state,
        todos: action.payload
      };
    case EDIT_TODO_LIST:
      return {
        ...state,
        currentTodoList: action.payload
      };
    case END_EDIT_TODO_LIST:
      return {
        ...state,
        currentTodoList: null
      };
    default: {
      return state;
    }
  }
}

export const getTodoListState = createFeatureSelector<TodoListState>('todoList');
export const getTodos = createSelector(getTodoListState, (state: TodoListState) => state.todos);
export const getCurrentTodoList = createSelector(getTodoListState, (state: TodoListState) => state.currentTodoList);
