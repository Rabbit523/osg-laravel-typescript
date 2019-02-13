import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';

import { StrengthStandardsComponent } from './components/main.component';
import { StrengthStandardsExerciseTable } from './components/exercise-table/exercise-table.component';

@NgModule({
  declarations: [
    StrengthStandardsComponent,
    StrengthStandardsExerciseTable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
})
export class StrengthStandardsModule { }
