import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  @Input() todoList: TodoList;

  constructor() { }

  ngOnInit(): void {
  }

}
