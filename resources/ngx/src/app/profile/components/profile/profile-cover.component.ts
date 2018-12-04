import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-profile-cover',
  templateUrl: './profile-cover.component.html'
})
export class ProfileCoverComponent implements OnInit{
    
  @Input() applicationUser: any;

  ngOnInit(): void {
    
  }

  get fullName(){
    return this.applicationUser !== undefined ? this.applicationUser.name : '';
  }
}
