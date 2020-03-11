import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './manageSites/dashboard/dashboard.component';
import { SiteParticipantsListComponent } from './manageSites/site-participants-list/site-participants-list.component';
import { StudyParticipantsListComponent } from './manageSites/study-participants-list/study-participants-list.component';
import { AppParticipantsListComponent } from './manageSites/app-participants-list/app-participants-list.component';
import { ParticipantDetailsComponent } from './manageSites/participant-details/participant-details.component';
import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { AddNewUserComponent } from './manageUsers/add-new-user/add-new-user.component';
import { UpdateUserComponent } from './manageUsers/update-user/update-user.component';
import { UserDetailsComponent } from './manageUsers/user-details/user-details.component';
import { UserProfileComponent } from './manageAccount/user-profile/user-profile.component';
// import { SetUpAccountComponent } from './manageAccount/set-up-account/set-up-account.component';
import { SiteCoordinatorComponent } from "./site-coordinator.component";
import { LocationsComponent } from './locations/locations/locations.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';
const routes: Routes = [{
  path: "",
  component: SiteCoordinatorComponent,
  children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'siteParticipants/:siteId', component: SiteParticipantsListComponent },
    // { path: 'studyParticipants', component: StudyParticipantsListComponent },
    // { path: 'appParticipants', component: AppParticipantsListComponent },
    // { path: 'participantDetail', component: ParticipantDetailsComponent },
    { path: 'siteParticipants/:siteId', component: SiteParticipantsListComponent },
    { path: 'studyParticipants/:studyId', component: StudyParticipantsListComponent },
    { path: 'appParticipants/:appId', component: AppParticipantsListComponent },
    { path: 'participantDetail/:partcipantId', component: ParticipantDetailsComponent },
    { path: 'manageUsers', component: ManageUsersComponent },
    { path: 'addNewUser', component: AddNewUserComponent },
    { path: 'updateUser', component: UpdateUserComponent },
    { path: 'userDetails', component: UserDetailsComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'addNewLocation', component: AddLocationComponent },
    { path: 'locationDetails/:locationId', component: LocationDetailsComponent },
    { path: 'userProfile', component: UserProfileComponent },
    // { path: 'setUpAccount', component: SetUpAccountComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteCoordinatorRoutingModule { }
