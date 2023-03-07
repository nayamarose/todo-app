import { Injectable } from '@angular/core';
const NOTETYPE = 'note-type';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
  public saveNoteType(role: string): void {
    localStorage.setItem(NOTETYPE, role);
   
  }
  public removeNoteType(): void {
    localStorage.removeItem(NOTETYPE);
    localStorage.clear();
  }

  public getNoteType(): string | null {
    return localStorage.getItem(NOTETYPE);
  }
}
