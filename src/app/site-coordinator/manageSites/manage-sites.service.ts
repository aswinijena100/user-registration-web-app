import { Injectable } from '@angular/core';
import { DataService } from "../../service/dataService";
import { User } from "../../entity/user";
@Injectable({
  providedIn: 'root'
})
export class ManageSitesService {
  user: User;
  headers: {};

  constructor(private dataService: DataService) { }

  getstudiesWithSite() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest('sites', JSON.stringify(this.headers));
  }
  getStudies() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest('studies', JSON.stringify(this.headers));
  }
  getApps() { 
       this.generateAuthHeader();
    return this.dataService.HttpGetRequest('apps', JSON.stringify(this.headers));
  }
  addParticipant(siteId, participantToBeAdded) {
    this.generateAuthHeader()
    return this.dataService.HttpPostRequest(JSON.stringify(participantToBeAdded), 'sites/' + siteId + '/participants', JSON.stringify(this.headers));
  }
  generateAuthHeader() {

    // var authKey = window.localStorage.getItem("authKey");
    // var userId = parseInt(window.localStorage.getItem("userId"));
    // console.log(authKey)
    // console.log(userId)

    // this.headers = { "authKey": authKey, "userId": userId };
    this.headers = { "userId": "1" };

  }
}
