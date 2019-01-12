import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { ExperienceBankComponent } from './components/main.component';

import { ExperienceBankEnterInformation } from './components/enter-information/enter-information.component';

import { ExperienceBankMuscleGroupTable } from './components/muscle-group/muscle-group-table.component';


@NgModule({
  declarations: [
    ExperienceBankComponent,
    ExperienceBankEnterInformation,
    ExperienceBankMuscleGroupTable
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class ExperienceBankModule { }
