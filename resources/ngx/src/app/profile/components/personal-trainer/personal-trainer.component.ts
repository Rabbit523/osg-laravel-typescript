import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-personal-trainer',
  templateUrl: './personal-trainer.component.html'
})
export class PersonalTrainerComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  getStartedSections = ["calendar builder guide", "progression model guide", "about auto-regulation"];

  ngOnInit(): void {
    
  }

}
