import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site-coordinator/manageAccount/login/login.component'
import { SiteCoordinatorModule } from "./site-coordinator/site-coordinator.module";
import { SetUpAccountComponent } from './site-coordinator/manageAccount/set-up-account/set-up-account.component';
import { ForgotPasswordComponent } from './site-coordinator/manageAccount/forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetUpAccountComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteCoordinatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
