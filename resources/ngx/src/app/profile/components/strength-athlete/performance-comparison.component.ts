import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-strength-athlete-performance-comparison',
  templateUrl: './performance-comparison.component.html'
})
export class StrengthAthletePerformanceComparisonComponent implements OnInit{
  
  @Input() title: string = '';

  ngOnInit(): void {
    
  }

}
