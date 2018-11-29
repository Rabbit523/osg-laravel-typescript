import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-program-designer-training-calendar',
  templateUrl: './training-calendar.component.html'
})
export class ProgramDesignerTrainingCalendarComponent implements OnInit{
    
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
