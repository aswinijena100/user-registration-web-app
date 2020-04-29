import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { User } from "../entity/user";

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  flag: boolean;
  user: User;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  //check if the user is logged in,if he is logged in then dont let him navigate to login
  checkLogin(url: string): boolean {
    this.user = JSON.parse(window.localStorage.getItem("currentUser"));
    if (
      this.user &&
      this.user != null &&
      this.user != undefined &&
      Object.keys(this.user).length > 0
    ) {
      this.flag = false;
      this.router.navigate(["/user", ""]);
    } else {
      // this.router.navigate(['/login'])
      this.flag = true;
    }
    return this.flag;
  }
}
