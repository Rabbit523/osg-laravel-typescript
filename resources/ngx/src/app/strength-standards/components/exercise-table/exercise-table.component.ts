import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-strength-standards-exercise-table',
  templateUrl: './exercise-table.component.html'
})
export class StrengthStandardsExerciseTable implements OnInit{
  
  @Input() title: string = '';

  ngOnInit(): void {
    
  }

}
