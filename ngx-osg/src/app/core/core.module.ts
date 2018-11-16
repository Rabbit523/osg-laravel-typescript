import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';


let components = [
    NavigationComponent,
    FooterComponent
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
