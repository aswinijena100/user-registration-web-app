import { Injectable } from "@angular/core";
import { DataService } from "../../service/dataService";
import { User } from "../../entity/user";

@Injectable({
  providedIn: "root",
})
export class ManageAccountService {
  user: User;
  headers: {};
  constructor(private dataService: DataService) {}

  getProfileData() {
    this.headers = {
      userId: "1",
      authUserId: "X7Pv1hOr6yx99K2-Ts7Q3KGGZqTlBh7-8uC6NtIM0HwMyRV",
    };
    return this.dataService.HttpGetRequest(
      "users",
      JSON.stringify(this.headers)
    );
  }
  updateProfileChanges(formData) {
    this.generateAuthHeader();
    return this.dataService.HttpPostRequest(
      JSON.stringify(formData),
      "updateUserProfile",
      JSON.stringify(this.headers)
    );
  }

  setUpAccount(formData) {
    return this.dataService.HttpPostRequest(
      JSON.stringify(formData),
      "user",
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
