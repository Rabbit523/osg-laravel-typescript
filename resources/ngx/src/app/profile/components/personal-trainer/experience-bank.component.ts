import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-personal-trainer-experience-bank',
  templateUrl: './experience-bank.component.html'
})
export class PersonalTrainerExperienceBankComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  ngOnInit(): void {
    
  }

}
