import { BrowserModule } from "@angular/platform-browser";
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { NgxDataTableModule } from "angular-9-datatable";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./site-coordinator/manageAccount/login/login.component";
import { SiteCoordinatorModule } from "./site-coordinator/site-coordinator.module";
import { SetUpAccountComponent } from "./site-coordinator/manageAccount/set-up-account/set-up-account.component";
import { ForgotPasswordComponent } from "./site-coordinator/manageAccount/forgot-password/forgot-password.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataService } from "./service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { NgSelectModule } from "@ng-select/ng-select";
import { ToastrModule } from "ngx-toastr";
import { NgForm, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SetUpAccountComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SiteCoordinatorModule,
    NgxDataTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      preventDuplicates: true,
      enableHtml: true,
    }), // ToastrModule added
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [
    DataService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
