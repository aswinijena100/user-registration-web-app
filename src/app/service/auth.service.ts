import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from "../entity/user";

@Injectable()
export class AuthService {
  isLoggedIn = false;
  flag = false;
  loginiforamation: any;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  user: User;
  ngOnInit(){
    console.log("in auth service")

  }
  userloginedOrNot(): Observable<boolean> {
  this.user=JSON.parse(window.localStorage.getItem("currentUser"));
 
    // if (this.user && this.user != null && this.user != undefined && Object.keys(this.user).length > 0 && this.user.stRole==2) {
    //   this.flag = true;
    // } else {
    //   this.flag = false;
    // }
    return of(this.flag);
  }
  
  getauthorisationToken(): string {
    let authtoken = "";
    // this.user=JSON.parse(window.localStorage.getItem("currentUser"));
    // if (this.user && this.user != null && this.user != undefined && Object.keys(this.user).length > 0) {     
    //   authtoken = this.user.authKey;
    // }
    return authtoken;
  }

  getUserId(): string {
    let userId ='';
    // this.user=JSON.parse(window.localStorage.getItem("currentUser"));
    // if (this.user && this.user != null && this.user != undefined && Object.keys(this.user).length > 0) {    
    //   userId = this.user.userId.toString();
    // }

    return userId;
  }

  getRoleNameFromLocalStorage(): string {
    let roleName = "";
    let roleId = "";

    if (localStorage.getItem("currentUser") != null) {
      let roleId = JSON.parse(localStorage.getItem("currentUser")).roleId;
      if (roleId == '1') {
        roleName = "SUPERADMIN"
      } else if (roleId == '2') {
        roleName = "PROJECTMANAGER"
      } else if (roleId == '3') {
        roleName = 'MARKETINGTEAM'
      } else {
        roleName = 'CLIENT'
      }

    }

    return roleName;
  }
}