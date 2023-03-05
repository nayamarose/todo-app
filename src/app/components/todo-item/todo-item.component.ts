import { Component, OnInit,  Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/state/todos.states';
import { actions } from 'src/app/state/todos.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  editTodo: boolean = false;
  completeTodo: boolean = false;
  @Input() todo?:TodoModel;
  todoInput?:string;

  constructor(private store: Store) { }

  ngOnInit(): void {
    
    this.completeTodo= this.todo!.completed
    this.todoInput = this.todo!.title;
  }
  updateTodoToggle(){
    this.editTodo = !this.editTodo;
  }
  updateTodo(){
    this.editTodo = !this.editTodo;
    if(this.todoInput!.trim().length>0)
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      completed : this.todo!.completed,
      title : this.todoInput!.trim()
    }));
    else{
      this.todoInput = this.todo!.title;
    }
  }
  completeTodoToggle(){
    this.completeTodo = !this.completeTodo;
    this.store.dispatch(actions.updateTodoAction({
      id: this.todo!.id,
      completed : this.completeTodo,
      title : this.todo!.title,
    }));
  }
  deleteTodo(){
    this.store.dispatch(actions.deleteTodoAction({
      id: this.todo!.id,
      completed : this.todo!.completed,
      title : this.todo!.title
    }));
    
  }

}
