import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  showAddTaskSection = false;
  showAddTaskButton = true;
  noteCheck: any;
  reminderCheck:any;
  taskCheck:any;
  @Input()type = '';
 
  constructor() { 
  
  }

  ngOnInit(): void {
   
    
  }
  
  typeCheck(buttonType: string) {
   
    if(buttonType == 'note') {
      this.noteCheck = true;
      return this.noteCheck;
    } else if(buttonType == 'reminder') {
      this.reminderCheck = true;
      return this.reminderCheck;
    } else if(buttonType == 'task') {
      this.taskCheck = true;
      return this.taskCheck;
    }
   
   // console.log(this.noteCheck); // or do whatever you want with the noteCheck variable
  }
  
  
  
  toggleAddTaskSection() {
    this.showAddTaskSection = !this.showAddTaskSection;
    this.showAddTaskButton = !this.showAddTaskSection;
  }
  
  
}
