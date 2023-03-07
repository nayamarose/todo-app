
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { actions } from './todos.actions';
import { TodoModel, todos } from "./todos.states"


export const todoReducer = createReducer(
    //supplying the initial state
    todos,

    //add new todo to todos array
    on(actions.addTodoAction, (state: any, todo: any) => {
      console.log(...state,todo , 'state and todo')
        return [...state,todo, ]
    }),

    //update todo in todos array
    on(actions.updateTodoAction, (state: TodoModel[], updatedTodo: TodoModel) => {
        const index = state.findIndex(todo => todo.id === updatedTodo.id);
        if (index >= 0) {
          const todos = [...state];
          todos[index] = updatedTodo;
          return todos;
        }
        return state;
      }),
      
      //delete todo from todos
    on(actions.deleteTodoAction, (state: any, todo: any) => {
     let todos =  state.filter((t:any)=>t.id != todo.id)
        return [...todos]
    }),

);

export const todoSelector = createSelector(createFeatureSelector("todos"),
(todos: TodoModel[])=>todos
);
