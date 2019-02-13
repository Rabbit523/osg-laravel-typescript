import { Component, OnInit, Input } from '@angular/core';
import { ApplicationUser } from 'src/app/core/classes/user';

@Component({
  selector: 'osg-strength-athlete-performance-table',
  templateUrl: './performance-table.component.html'
})
export class StrengthAthletePerformanceTableComponent implements OnInit{
  
  @Input() applicationUser: ApplicationUser;

  comparisons: string[] = ['bench press', 'squats', 'deadlift'];

  ngOnInit(): void {
    
  }

}
