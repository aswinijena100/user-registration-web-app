import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site-coordinator/manageAccount/login/login.component';
import { AppParticipantsListComponent } from './site-coordinator/manageSites/app-participants-list/app-participants-list.component';
import { SiteParticipantsListComponent } from './site-coordinator/manageSites/site-participants-list/site-participants-list.component';
import { StudyParticipantsListComponent } from './site-coordinator/manageSites/study-participants-list/study-participants-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '#', redirectTo: '/login' },
  { path: 'login', component: LoginComponent},
  { path: 'app', component: AppParticipantsListComponent},//by prasanna
  { path: 'site', component: SiteParticipantsListComponent},//by prasanna
  { path: 'study', component: StudyParticipantsListComponent},//by prasanna
  //added for new login html
  { path: 'user', loadChildren: () => import('./site-coordinator/site-coordinator.module').then(m => m.SiteCoordinatorModule) },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
