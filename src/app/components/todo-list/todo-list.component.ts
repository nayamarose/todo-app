import { Component, Input, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { todoSelector } from 'src/app/state/todos.reducers';
import { TodoModel } from 'src/app/state/todos.states';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todos: TodoModel[]=[];
@Input() typeFromLandingPage = '';
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loadTodos();
    console.log(this.typeFromLandingPage)
  }


  loadTodos(){
this.store.select(todoSelector).subscribe((state)=> this.todos = state);
console.log(this.todos);
  }
}
