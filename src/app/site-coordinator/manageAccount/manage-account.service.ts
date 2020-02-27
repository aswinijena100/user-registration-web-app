import { Injectable } from '@angular/core';
import { DataService } from "../../service/dataService";
import { User } from "../../entity/user";

@Injectable({
  providedIn: 'root'
})
export class ManageAccountService {
  user: User;
  headers: {};
  constructor(private dataService: DataService) { }

  getProfileData() {
    //this.headers = { "userId": "kR2g5m2pJPP0P31-WNFYK8Al7jBP0mJ-cTSFJJHJ4DewuCg" };
    let authToken = "kR2g5m2pJPP0P31-WNFYK8Al7jBP0mJ-cTSFJJHJ4DewuCg";
    return this.dataService.HttpGetRequest('users/kR2g5m2pJPP0P31-WNFYK8Al7jBP0mJ-cTSFJJHJ4DewuCg', '');
   // return this.dataService.HttpGetRequest('users/'+authToken, JSON.stringify(this.headers));
  }


  generateAuthHeader() {

    // var authKey = window.localStorage.getItem("authKey");
    // var userId = parseInt(window.localStorage.getItem("userId"));
    // console.log(authKey)
    // console.log(userId)

    // this.headers = { "authKey": authKey, "userId": userId };
    this.headers = { "userId": "10" };

  }


}
