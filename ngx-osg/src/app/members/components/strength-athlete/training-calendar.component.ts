import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-strength-athlete-training-calendar',
  templateUrl: './training-calendar.component.html'
})
export class StrengthAthleteTrainingCalendarComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
