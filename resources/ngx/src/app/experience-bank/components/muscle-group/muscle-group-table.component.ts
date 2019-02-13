import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-experience-bank-muscle-group-table',
  templateUrl: './muscle-group-table.component.html'
})
export class ExperienceBankMuscleGroupTable implements OnInit{
  
  @Input() title: string = '';

  ngOnInit(): void {
    
  }

}
