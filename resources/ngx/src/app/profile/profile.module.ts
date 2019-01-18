import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ProfileComponent } from './components/main.component';
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
import { ProgramDesignerPublishedProgramsComponent } from './components/program-designer/published-programs.component';
import { ProgramDesignerProgramFilterComponent } from './components/program-designer/program-filter.component';
import { ProgramDesignerExperienceBankComponent } from './components/program-designer/experience-bank.component';
import { ProgramDesignerExperienceReviewsComponent } from './components/program-designer/experience-reviews.component';
import { ProgramDesignerProgramDesignComponent } from './components/program-designer/program-design.component';
import { ProgramDesignerTrainingCalendarComponent } from './components/program-designer/training-calendar.component';
import { StrengthAthleteTrophyComponent } from './components/strength-athlete/trophy.component';
import { StrengthAthletePerformanceComparisonComponent } from './components/strength-athlete/performance-comparison.component';
import { ProgramDesignerTrainingDayModalComponent } from './components/program-designer/training-day-modal/training-day-modal.component';
import { PersonalTrainerBookingDetailsModalComponent } from './components/personal-trainer/booking-details-modal/booking-details-modal.component';



const modals = [
  ProgramDesignerTrainingDayModalComponent,
  PersonalTrainerBookingDetailsModalComponent
];

@NgModule({
  entryComponents: modals,
  declarations: [
    ProfileComponent,
    ProfileCoverComponent,
    ProfileAboutMeComponent,
    PersonalTrainerComponent,
    PersonalTrainerOffersComponent,
    PersonalTrainerExperienceBankComponent,
    PersonalTrainerBookingCalendarComponent,
    ProgramDesignerComponent,
    ProgramDesignerPublishedProgramsComponent,
    ProgramDesignerProgramFilterComponent,
    ProgramDesignerExperienceBankComponent,
    ProgramDesignerExperienceReviewsComponent,
    ProgramDesignerProgramDesignComponent,
    ProgramDesignerTrainingCalendarComponent,
    StrengthAthleteComponent,
    StrengthAthleteTrophyWallComponent,
    StrengthAthleteTrophyComponent,
    StrengthAthleteTimelineComponent,
    StrengthAthletePerformanceTableComponent,
    StrengthAthletePerformanceComparisonComponent,
    StrengthAthleteTopProgramDesignsComponent,
    StrengthAthleteTrainingCalendarComponent,
    modals
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ModalModule.forRoot(),
  ],
  exports: [],
  providers: [],
})
export class ProfileModule { }
