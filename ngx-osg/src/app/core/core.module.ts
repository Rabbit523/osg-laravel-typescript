import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsFeedComponent } from './components/news-feed/news-feed-component';


let components = [
    NavigationComponent,
    FooterComponent,
    NewsFeedComponent
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
