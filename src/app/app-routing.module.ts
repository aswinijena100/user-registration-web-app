import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './site-coordinator/manageAccount/login/login.component';
import { SetUpAccountComponent } from './site-coordinator/manageAccount/set-up-account/set-up-account.component';
import { ForgotPasswordComponent } from './site-coordinator/manageAccount/forgot-password/forgot-password.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'setUpAccount', component: SetUpAccountComponent },
  { path: 'user', loadChildren: './site-coordinator/site-coordinator.module#SiteCoordinatorModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
