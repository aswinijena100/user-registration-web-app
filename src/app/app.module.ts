import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {DataTableModule} from "angular-6-datatable";
import { AppComponent } from './app.component';
import { LoginComponent } from './site-coordinator/manageAccount/login/login.component'
import { SiteCoordinatorModule } from "./site-coordinator/site-coordinator.module";
import { SetUpAccountComponent } from './site-coordinator/manageAccount/set-up-account/set-up-account.component';
import { ForgotPasswordComponent } from './site-coordinator/manageAccount/forgot-password/forgot-password.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from "./service/dataService";
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetUpAccountComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteCoordinatorModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({positionClass : "toast-top-center",preventDuplicates: true,}) // ToastrModule added
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
