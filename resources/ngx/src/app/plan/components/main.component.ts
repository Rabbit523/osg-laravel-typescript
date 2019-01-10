import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osg-plan-builder',
  templateUrl: './main.component.html'
})
export class PlanBuilderComponent implements OnInit{
  
  step: PlanBuilderStep; 

  ngOnInit(): void {
    this.step = PlanBuilderStep.ProgressionBuilder;
  }

  get isBuildingCalendar(): boolean{
    return this.step === PlanBuilderStep.CalendarBuilder;
  }

  get isBuildingProgress(): boolean{
    return this.step === PlanBuilderStep.ProgressionBuilder;
  }

}


enum PlanBuilderStep{
  CalendarBuilder,
  ProgressionBuilder
}
