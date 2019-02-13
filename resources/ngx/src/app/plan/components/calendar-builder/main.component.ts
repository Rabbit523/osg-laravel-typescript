import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'osg-calendar-builder',
  templateUrl: './main.component.html'
})
export class CalendarBuilderComponent implements OnInit{
  

  @Output() complete: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    
  }

  next(){
    this.complete.emit(null);
  }

}
