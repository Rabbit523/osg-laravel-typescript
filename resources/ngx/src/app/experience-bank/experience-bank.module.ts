import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { ExperienceBankComponent } from './components/main.component';


@NgModule({
  declarations: [
    ExperienceBankComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class ExperienceBankModule { }
