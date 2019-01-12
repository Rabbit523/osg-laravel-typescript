import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { PlanBuilderComponent } from './components/main.component';
import { PlanBuilderExercisesComponent } from './components/calendar-builder/exercises/exercises.component';
import { PlanBuilderWorkoutsComponent } from './components/calendar-builder/workouts/workouts.component';
import { PlanBuilderCalendarComponent } from './components/calendar-builder/calendar/calendar.component';
import { CalendarBuilderComponent } from './components/calendar-builder/main.component';
import { ProgressionBuilderComponent } from './components/progression-builder/main.component';
import { ProgressionBuilderProgressiveOverloadGraphComponent } from './components/progression-builder/progressive-overload-graph/progressive-overload-graph.component';
import { ProgressionBuilderTrainingProgramComponent } from './components/progression-builder/training-program/training-program.component';
import { ProgressionBuilderProgramDesignComponent } from './components/progression-builder/program-design/program-design.component'

@NgModule({
  declarations: [
    PlanBuilderComponent,
    CalendarBuilderComponent,
    PlanBuilderExercisesComponent,
    PlanBuilderWorkoutsComponent,
    PlanBuilderCalendarComponent,

    ProgressionBuilderComponent,
    ProgressionBuilderProgressiveOverloadGraphComponent,
    ProgressionBuilderTrainingProgramComponent,
    ProgressionBuilderProgramDesignComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class PlanBuilderModule { }
