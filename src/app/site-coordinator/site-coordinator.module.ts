import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteCoordinatorRoutingModule } from './site-coordinator-routing.module';
import { SiteCoordinatorComponent } from './site-coordinator.component';
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
import {DataTableModule} from "angular-6-datatable";//by prasanna

@NgModule({
  declarations: [SiteCoordinatorComponent,
    DashboardComponent,
    CreateSiteComponent,
    SiteParticipantsListComponent,
    StudyParticipantsListComponent,
    AppParticipantsListComponent,
    ParticipantDetailsComponent,
    ManageUsersComponent,
    AddNewUserComponent,
    UserDetailsComponent,
    UserProfileComponent],
  imports: [
    CommonModule,
    SiteCoordinatorRoutingModule,
    DataTableModule // by prasanna
  ]
})
export class SiteCoordinatorModule { }
