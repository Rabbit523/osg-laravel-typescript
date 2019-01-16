import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'osg-progression-builder',
  templateUrl: './main.component.html'
})
export class ProgressionBuilderComponent implements OnInit{
  
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  back(){
    this.cancel.emit(null);
  }

}
