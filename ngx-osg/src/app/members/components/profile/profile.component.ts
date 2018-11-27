import { Component, OnInit } from '@angular/core';
import { ApplicationUser, ApplicationUserRole } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
  
  
  applicationUser: ApplicationUser;

  ngOnInit(): void {
    this.applicationUser = new ApplicationUser({
      role: ApplicationUserRole.PersonalTrainer
    });
  }


  isPersonalTrainer(): boolean{
    return this.applicationUser.role === ApplicationUserRole.PersonalTrainer;
  }

  isProgramDesigner(): boolean{
    return this.applicationUser.role === ApplicationUserRole.ProgramDesigner;
  }

  isStrengthAthlete(): boolean{
    return this.applicationUser.role === ApplicationUserRole.StrengthAthlete;
  }

}
