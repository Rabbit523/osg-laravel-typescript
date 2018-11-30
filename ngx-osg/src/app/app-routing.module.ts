import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/components/main.component';
import { PlanBuilderComponent } from './plan/components/main.component';
import { DashboardComponent } from './dashboard/components/main.component';
import { ContactsComponent } from './contacts/components/main.component';
import { InformationComponent } from './core/components/info/info.component';
import { NotificationsComponent } from './core/components/notifications/notifications.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'plan', component: PlanBuilderComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:handle', component: ProfileComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'info', component: InformationComponent },
  { path: 'unknown', component: InformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
