import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalTrainerComponent } from './components/personal-trainer/personal-trainer.component';
import { ProgramDesignerComponent } from './components/program-designer/program-designer.component';
import { StrengthAthleteComponent } from './components/strength-athlete/strength-athlete.component';
import { PersonalTrainerOffersComponent } from './components/personal-trainer/offers.component';
import { PersonalTrainerExperienceBankComponent } from './components/personal-trainer/experience-bank.component';
import { PersonalTrainerBookingCalendarComponent } from './components/personal-trainer/booking-calendar.component';
import { CoreModule } from '../core/core.module';
import { ProfileCoverComponent } from './components/profile/profile-cover.component';
import { ProfileAboutMeComponent } from './components/profile/profile-about-me-component';
import { StrengthAthleteTrophyWallComponent } from './components/strength-athlete/trophy-wall.component';
import { StrengthAthleteTimelineComponent } from './components/strength-athlete/timeline.component';
import { StrengthAthletePerformanceTableComponent } from './components/strength-athlete/performance-table.component';
import { StrengthAthleteTopProgramDesignsComponent } from './components/strength-athlete/top-program-designs.component';
import { StrengthAthleteTrainingCalendarComponent } from './components/strength-athlete/training-calendar.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileCoverComponent,
    ProfileAboutMeComponent,
    PersonalTrainerComponent,
    PersonalTrainerOffersComponent,
    PersonalTrainerExperienceBankComponent,
    PersonalTrainerBookingCalendarComponent,
    ProgramDesignerComponent,
    StrengthAthleteComponent,
    StrengthAthleteTrophyWallComponent,
    StrengthAthleteTimelineComponent,
    StrengthAthletePerformanceTableComponent,
    StrengthAthleteTopProgramDesignsComponent,
    StrengthAthleteTrainingCalendarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  exports: [],
  providers: [],
})
export class MembersModule { }
