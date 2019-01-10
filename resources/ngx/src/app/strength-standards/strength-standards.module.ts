import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { StrengthStandardsComponent } from './components/main.component';

import { StrengthStandardsEnterInformation } from './components/enter-information/enter-information.component';
import { StrengthStandardsExerciseTable } from './components/exercise-table/exercise-table.component';

@NgModule({
  declarations: [
    StrengthStandardsComponent,
    StrengthStandardsEnterInformation,
    StrengthStandardsExerciseTable
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class StrengthStandardsModule { }
