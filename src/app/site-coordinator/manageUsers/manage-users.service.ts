import { Injectable } from "@angular/core";
import { DataService } from "../../service/dataService";
import { User } from "src/app/entity/user";

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
  getusers(adminId?: string) {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "manageusers/" + (adminId == undefined ? "" : adminId),
      JSON.stringify(this.headers)
    );
  }
  addUser(user: User) {
    this.generateAuthHeader();
    return this.dataService.HttpPostRequest(
      JSON.stringify(user),
      "manageusers/",
      JSON.stringify(this.headers)
    );
  }
  updateUser(user: User) {
    this.generateAuthHeader();
    return this.dataService.HttpPutRequest(
      JSON.stringify(user),
      "manageusers/" + user.id + "/",
      JSON.stringify(this.headers)
    );
  }
  generateAuthHeader() {
    // var authKey = window.localStorage.getItem("authKey");
    // var userId = parseInt(window.localStorage.getItem("userId"));
    // console.log(authKey)
    // console.log(userId)

    // this.headers = { "authKey": authKey, "userId": userId };
    this.headers = { userId: "10" };
  }
}