import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsComponent } from './components/main.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
})
export class ContactsModule { }
