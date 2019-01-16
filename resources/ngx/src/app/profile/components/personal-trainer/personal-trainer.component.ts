import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-personal-trainer',
  templateUrl: './personal-trainer.component.html'
})
export class PersonalTrainerComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  about: string = 'Working as professional trainer for 10 years. I am confident and passionate about what I do for a living. Let me help you transform your personal life, mentally and physically.';
  getStartedSections = ["calendar builder guide", "progression model guide", "about auto-regulation"];

  ngOnInit(): void {
    
  }

}
