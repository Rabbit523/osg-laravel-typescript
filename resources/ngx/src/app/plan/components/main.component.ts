import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'osg-plan-builder',
  templateUrl: './main.component.html'
})
export class PlanBuilderComponent implements OnInit {

  step: PlanBuilderStep;

  //getStartedSections: string[] = ["the workout & calendar builder", "progression builder", "experience bank & reviews", "auto-regulation"];

  ngOnInit(): void {
    this.step = PlanBuilderStep.CalendarBuilder;
  }

  get getStartedSections(): string[]{
    return this.isBuildingCalendar 
      ? ["the workout & calendar builder", "progression builder", "experience bank & reviews", "auto-regulation"]
      : ["strength training principles", "program design variables", "progression models and strategies", "save & publish programs"];
  }

  get isBuildingCalendar(): boolean {
    return this.step === PlanBuilderStep.CalendarBuilder;
  }

  get isBuildingProgress(): boolean {
    return this.step === PlanBuilderStep.ProgressionBuilder;
  }

  next(){
    window.scroll(0,0);
    this.step = PlanBuilderStep.ProgressionBuilder;
  }

  previous(){
    window.scroll(0,0);
    this.step = PlanBuilderStep.CalendarBuilder;
  }

}


enum PlanBuilderStep {
  CalendarBuilder,
  ProgressionBuilder
}
