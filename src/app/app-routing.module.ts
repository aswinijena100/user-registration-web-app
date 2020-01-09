import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site-coordinator/manageAccount/login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '#', redirectTo: '/login' },
  { path: 'login', component: LoginComponent},
  //added for new login html
  { path: 'user', loadChildren: './site-coordinator/site-coordinator.module#SiteCoordinatorModule' },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
