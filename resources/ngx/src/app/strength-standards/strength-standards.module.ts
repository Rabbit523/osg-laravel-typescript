import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';

import { StrengthStandardsComponent } from './components/main.component';


@NgModule({
  declarations: [
    StrengthStandardsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class StrengthStandardsModule { }
