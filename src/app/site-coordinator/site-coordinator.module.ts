import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SiteCoordinatorRoutingModule } from './site-coordinator-routing.module';
import { SiteCoordinatorComponent } from './site-coordinator.component';
import { DashboardComponent } from './manageSites/dashboard/dashboard.component';
import { SiteParticipantsListComponent } from './manageSites/site-participants-list/site-participants-list.component';
import { StudyParticipantsListComponent } from './manageSites/study-participants-list/study-participants-list.component';
import { AppParticipantsListComponent } from './manageSites/app-participants-list/app-participants-list.component';
import { ParticipantDetailsComponent } from './manageSites/participant-details/participant-details.component';
import { ManageUsersComponent } from './manageUsers/manage-users/manage-users.component';
import { AddNewUserComponent } from './manageUsers/add-new-user/add-new-user.component';
import { UserDetailsComponent } from './manageUsers/user-details/user-details.component';
import { UserProfileComponent } from './manageAccount/user-profile/user-profile.component';
import { LocationsComponent } from './locations/locations/locations.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { LocationDetailsComponent } from './locations/location-details/location-details.component';

//services
import { ManageAccountService } from "./manageAccount/manage-account.service";
import { ManageSitesService } from "./manageSites/manage-sites.service";
import { ManageUsersService } from "./manageUsers/manage-users.service";
import { LocationService } from "./locations/location.service";
//libraries
import { DataTableModule } from "angular-6-datatable";
import { FormsModule } from '@angular/forms';

//by prasanna

@NgModule({
  declarations: [SiteCoordinatorComponent,
    DashboardComponent,
    SiteParticipantsListComponent,
    StudyParticipantsListComponent,
    AppParticipantsListComponent,
    ParticipantDetailsComponent,
    ManageUsersComponent,
    AddNewUserComponent,
    UserDetailsComponent,
    UserProfileComponent,
    LocationsComponent,
    AddLocationComponent,
    LocationDetailsComponent],
  imports: [
    CommonModule,
    SiteCoordinatorRoutingModule,
    DataTableModule,
    FormsModule],
  providers: [
    ManageAccountService,
    ManageSitesService,
    ManageUsersService,
    LocationService
  ]
})
export class SiteCoordinatorModule { }
