import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-personal-trainer-booking-calendar',
  templateUrl: './booking-calendar.component.html'
})
export class PersonalTrainerBookingCalendarComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
