import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { PlanBuilderComponent } from './components/main.component';
import { PlanBuilderExercisesComponent } from './components/calendar-builder/exercises/exercises.component';
import { PlanBuilderWorkoutsComponent } from './components/calendar-builder/workouts/workouts.component';
import { PlanBuilderCalendarComponent } from './components/calendar-builder/calendar/calendar.component';
import { CalendarBuilderComponent } from './components/calendar-builder/main.component';
import { ProgressionBuilderComponent } from './components/progression-builder/main.component';


@NgModule({
  declarations: [
    PlanBuilderComponent,
    CalendarBuilderComponent,
    PlanBuilderExercisesComponent,
    PlanBuilderWorkoutsComponent,
    PlanBuilderCalendarComponent,

    ProgressionBuilderComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class PlanBuilderModule { }
