import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/state/todos.actions';
import { todoSelector } from 'src/app/state/todos.reducers';
import { TodoModel } from 'src/app/state/todos.states';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Input() type = '';
  typeOfNote:any;

  todoInput: {
    title: string,
    file?: string,
    note?: string,
    date?: Date,
    dueDate?: Date,
    type?:string,
    noteType?:string
  };
  todos?: TodoModel[];

  constructor(private store: Store) { 
  
    console.log(this.type);
    this.todoInput = {
      title: '',
      file: '',
      note: '',
      type:'',
      noteType:'',
      date: undefined,
      dueDate: undefined
    };
  }

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe(state => this.todos = state)
  }

  addTodo() {
    if (this.todoInput.title.trim().length > 0) {
      this.store.dispatch(actions.addTodoAction({
        id: this.todos!.length + 1,
        completed: false,
        title: this.todoInput.title.trim(),
        file: this.todoInput.file,
        note: this.todoInput.note,
        date: this.todoInput.date,
        dueDate: this.todoInput.dueDate,
        type:  this.todoInput.type,
        noteType: this.todoInput.noteType
      }));
      console.log(this.todoInput.type)
      this.todoInput = {
        title: '',
        file: '',
        note: '',
        type:'',
        noteType:'',
        date: undefined,
        dueDate: undefined
      };
    }
  }
}
