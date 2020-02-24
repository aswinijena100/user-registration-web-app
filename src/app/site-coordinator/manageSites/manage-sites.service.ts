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
    return this.dataService.HttpGetRequest('sites/1', '');
  }
  getStudies() {
    return this.dataService.HttpGetRequest('studies/1', '');
  }
  getApps() {
    return this.dataService.HttpGetRequest('apps/1', '');
  }
  addParticipant(siteId, participantToBeAdded) {
    this.generateAuthHeader()
    return this.dataService.HttpPostRequest(JSON.stringify(participantToBeAdded), 'sites/' + siteId + '/participants', JSON.stringify(this.headers));
  }
  getstudiesParticipantRegistry(studyId){
    this.generateAuthHeader()
    return this.dataService.HttpGetRequest('studies/' + studyId + '/participants',JSON.stringify(this.headers));
  }
  getappsParticipantRegistry(appId){
    this.generateAuthHeader()
    return this.dataService.HttpGetRequest('apps/' + appId + '/participants',JSON.stringify(this.headers));
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
