import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-strength-athlete-trophy-wall',
  templateUrl: './trophy-wall.component.html'
})
export class StrengthAthleteTrophyWallComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;
  trophies: any[] = [
    {title: 'CHEST', css: 'yellow'},
    {title: 'BACK', css: 'green'},
    {title: 'QUADS', css: 'blue'},
  ];
  
  ngOnInit(): void {
    
  }

}
