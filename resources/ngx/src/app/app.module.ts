import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './profile/profile.module';
import { PlanBuilderModule } from './plan/plan.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContactsModule } from './contacts/contacts.module';
import { ApplicationService } from './core/services/application.service';
import { AuthInterceptor } from './core/services/auth.interceptor';
import { ExperienceBankModule } from './experience-bank/experience-bank.module';
import { StrengthStandardsModule } from './strength-standards/strength-standards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ProfileModule,
    PlanBuilderModule,
    ExperienceBankModule,
    StrengthStandardsModule,
    DashboardModule,
    ContactsModule
  ],
  providers: [
    ApplicationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
