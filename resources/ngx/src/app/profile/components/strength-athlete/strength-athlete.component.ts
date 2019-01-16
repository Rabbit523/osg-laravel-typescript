import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-strength-athlete',
  templateUrl: './strength-athlete.component.html'
})
export class StrengthAthleteComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  about: string = 'I have been training weight for 11 years to increase my strength and muscle mass. I love to train hard and try to push beyond my limits, and always aim for proper exercise technique.';
  getStartedSections: string[] = ["the strength athlete profile", "about auto-regulation", "strength standards guide", "experience bank guide", "program design guide"];

  ngOnInit(): void {
    
  }

}
