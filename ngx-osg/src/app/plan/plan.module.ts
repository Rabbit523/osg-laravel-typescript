import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { PlanBuilderComponent } from './components/main.component';
import { PlanBuilderExercisesComponent } from './components/exercises/exercises.component';
import { PlanBuilderWorkoutsComponent } from './components/workouts/workouts.component';
import { PlanBuilderCalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    PlanBuilderComponent,
    PlanBuilderExercisesComponent,
    PlanBuilderWorkoutsComponent,
    PlanBuilderCalendarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class PlanBuilderModule { }
