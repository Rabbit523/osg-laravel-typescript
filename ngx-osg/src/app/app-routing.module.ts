import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/components/main.component';
import { PlanBuilderComponent } from './plan/components/main.component';
import { DashboardComponent } from './dashboard/components/main.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'plan', component: PlanBuilderComponent},
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
