import { TodoList } from './todo.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as Todo from './todo-actions';
import * as fromTodo from './todo-reducer';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Injectable()
export class TodoService{
  private fbSubs: Subscription[] = [];
  constructor(
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<fromTodo.State>
  ){

  }

  createTodoList() {
    const newTodo: TodoList = {
      id: null,
      name: 'Tytuł',
      todos: [{
        id: null,
        name: 'Cokolwiek',
        description:'asdasd',
      }],
    };

    this.store.dispatch(new Todo.EditTodoList(newTodo));
  }

  saveTodoList(){
    this.store.select(fromTodo.getCurrentTodoList).pipe(take(1)).subscribe(x => {
      this.addDataToDatabase({
        ...x,
        date: new Date(),
        state: 'new'
      });
      this.store.dispatch(new Todo.EndEditTodoList());
    });
  }

  private addDataToDatabase(todo: TodoList) {
    this.db.collection('todos').add(todo);
  }

  fetchTodos() {
    this.fbSubs.push(
      this.db
        .collection('todos')
        .valueChanges()
        .subscribe((todos: TodoList[]) => {
          this.store.dispatch(new Todo.SetTodoList(todos));
        })
    );
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }
}
