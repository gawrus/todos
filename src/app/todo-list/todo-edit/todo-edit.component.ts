import { TodoList } from './../todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Store } from '@ngrx/store';
import * as fromTodo from '../todo-reducer';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  constructor(
    private todosService: TodoService,
    private store: Store<fromTodo.State>,
    private formBuilder: FormBuilder) {
      this.buildForm();
    }

  todoList: TodoList;
  form: FormGroup;
  get f() { return this.form.controls; }
  ngOnInit(): void {


    this.store.select(fromTodo.getCurrentTodoList).subscribe(
      (item: TodoList) => {
        this.todoList = item;

        this.form.patchValue({
          name: item.name,
        });

        const todosFormArray = (this.form.get('todos') as FormArray);
        item.todos.forEach( (x, i) => {
          let g: FormGroup = new FormGroup({
            checked: new FormControl(false),
            name: new FormControl(x.name, [Validators.required]),
          });
          todosFormArray.push(g);
        });


      }
    );
  }

  buildForm(){
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      'todos': new FormArray([])
    });
  }

  get todos(): FormArray {
    return (this.form.get('todos') as FormArray);
  }

}
