import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  showAddTaskSection = false;
  showAddTaskButton = true;
  constructor() { }

  ngOnInit(): void {

    
  }
  

  
  
  
  toggleAddTaskSection() {
    this.showAddTaskSection = !this.showAddTaskSection;
    this.showAddTaskButton = !this.showAddTaskSection;
  }
  
  
}
