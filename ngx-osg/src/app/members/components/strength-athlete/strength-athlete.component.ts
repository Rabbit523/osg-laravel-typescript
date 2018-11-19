import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-strength-athlete',
  templateUrl: './strength-athlete.component.html'
})
export class StrengthAthleteComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
