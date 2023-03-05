import{createAction,props} from '@ngrx/store'
import { TodoModel } from './todos.states'

export const addTodoAction = createAction(
    "[TODO] ADD_TODO",
    props<TodoModel>()
    );
export const updateTodoAction = createAction(
    "[TODO] UPDATE_TODO",
    props<TodoModel>()
    );
export const deleteTodoAction = createAction(
    "[TODO] DELETE_TODO",
    props<TodoModel>()
    );

export const actions = {
    addTodoAction,
    updateTodoAction,
    deleteTodoAction
}








