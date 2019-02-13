import { Component, OnInit } from '@angular/core';
import { ApplicationUser, ApplicationUserRole } from 'src/app/core/classes/user';
import { ApplicationService } from 'src/app/core/services/application.service';

@Component({
  selector: 'osg-profile',
  templateUrl: './main.component.html'
})
export class ProfileComponent implements OnInit{
  
  
  applicationUser: any;
  constructor(private readonly applicationService: ApplicationService){}

  async ngOnInit() {
    this.applicationUser = await this.applicationService.authenticatedUser.toPromise();
  }

  get role(){
    return this.applicationUser !== undefined ? this.applicationUser.role : ''; 
  }


  isPersonalTrainer(): boolean{
    return this.role === ApplicationUserRole.PersonalTrainer;
  }

  isProgramDesigner(): boolean{
    return this.role === ApplicationUserRole.ProgramDesigner;
  }

  isStrengthAthlete(): boolean{
    return this.role === ApplicationUserRole.StrengthAthlete;
  }

}
