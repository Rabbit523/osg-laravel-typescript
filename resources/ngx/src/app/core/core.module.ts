import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed-component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { InformationComponent } from './components/info/info.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { SelectComponent } from './components/select/select.component';
import { EnterInformation } from './components/enter-information/enter-information.component';


let components = [
    NavigationComponent,
    FooterComponent,
    NewsFeedComponent,
    GetStartedComponent,
    InformationComponent,
    NotificationsComponent,
    GaugeComponent,
    SelectComponent,
    EnterInformation
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: components,
  providers: [],
})
export class CoreModule { }
