import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './manageSites/dashboard/dashboard.component';
import { CreateSiteComponent } from './manageSites/create-site/create-site.component';
import { SiteParticipantsListComponent } from './manageSites/site-participants-list/site-participants-list.component';
import { StudyParticipantsListComponent } from './manageSites/study-participants-list/study-participants-list.component';
import { AppParticipantsListComponent } from './manageSites/app-participants-list/app-participants-list.component';
import { ParticipantDetailsComponent } from './manageSites/participant-details/participant-details.component';
import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { AddNewUserComponent } from './manageUsers/add-new-user/add-new-user.component';
import { UserDetailsComponent } from './manageUsers/user-details/user-details.component';
import { UserProfileComponent } from './manageAccount/user-profile/user-profile.component';
import { SiteCoordinatorComponent } from "./site-coordinator.component";
const routes: Routes = [{
  path: "",
  component: SiteCoordinatorComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteCoordinatorRoutingModule { }
