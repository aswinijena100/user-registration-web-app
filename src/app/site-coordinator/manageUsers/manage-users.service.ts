import { Injectable } from "@angular/core";
import { DataService } from "../../service/dataService";

@Injectable({
  providedIn: "root",
})
export class ManageUsersService {
  headers: {};

  constructor(private dataService: DataService) {}
  getAllApps() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "apps/details",
      JSON.stringify(this.headers)
    );
  }
  generateAuthHeader() {
    // var authKey = window.localStorage.getItem("authKey");
    // var userId = parseInt(window.localStorage.getItem("userId"));
    // console.log(authKey)
    // console.log(userId)

    // this.headers = { "authKey": authKey, "userId": userId };
    this.headers = { userId: "1" };
  }
}
