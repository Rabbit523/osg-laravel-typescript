import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  ],
  exports: components,
  providers: [],
})
export class CoreModule { }
