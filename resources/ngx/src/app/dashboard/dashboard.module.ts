import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/main.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class DashboardModule { }
