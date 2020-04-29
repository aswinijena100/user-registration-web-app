import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../service/auth.service";
import { UseExistingWebDriver } from "protractor/built/driverProviders";
import { User } from "../entity/user";

@Injectable()
export class AuthGuard implements CanActivate {
  user: User;
  constructor(private authService: AuthService, private router: Router) {
    this.user = JSON.parse(window.localStorage.getItem("currentUser"));
  }
  ngOnInit() {
    console.log("in auth guard");
  }
  flag: boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    this.authService.userloginedOrNot().subscribe((res) => (this.flag = res));
    if (this.flag) {
      // if (this.user.stRole == 2) {
      //   this.router.navigate(['/user/createSearch']);
      // } else {
      //   this.router.navigate(['/admin']);
      // }
      return true;
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Navigate to the login page with extras
    this.router.navigate(["/login"]);
    return false;
  }
}
