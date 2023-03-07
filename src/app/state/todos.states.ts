
export interface TodoModel {
    id: number;
    completed: boolean;
    note?: string;
    title?: string;
    date?: Date;
    dueDate?: Date;
    file?: string; 
    type?:string;
    noteType?:string;
  }
  

//initial state
export let todos: TodoModel[] = [


]