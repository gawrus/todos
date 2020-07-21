import { TodoItem } from './todo-item.model';

export interface TodoList{
  id: string;
  name: string;
  date?: Date;
  state?: 'new' | 'completed' | 'cancelled' | null;
  todos: TodoItem[];
}
