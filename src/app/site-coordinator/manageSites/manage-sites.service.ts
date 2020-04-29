import { Injectable } from "@angular/core";
import { DataService } from "../../service/dataService";
import { User } from "../../entity/user";
@Injectable({
  providedIn: "root",
})
export class ManageSitesService {
  user: User;
  headers: {};

  constructor(private dataService: DataService) {}

  getstudiesWithSite() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "sites",
      JSON.stringify(this.headers)
    );
  }
  getStudies() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "studies",
      JSON.stringify(this.headers)
    );
  }
  getApps() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "apps",
      JSON.stringify(this.headers)
    );
  }
  addParticipant(siteId, participantToBeAdded) {
    this.generateAuthHeader();
    return this.dataService.HttpPostRequest(
      JSON.stringify(participantToBeAdded),
      "sites/" + siteId + "/participants",
      JSON.stringify(this.headers)
    );
  }
  importParticipants(siteId, formData) {
    this.generateAuthHeader();
    return this.dataService.HttpPostMultipartFileRequest(
      formData,
      "sites/" + siteId + "/participants/import",
      JSON.stringify(this.headers)
    );
  }
  getsiteParticipants(siteId, selectedTab) {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "sites/" + siteId + "/participants?onboardingStatus=" + selectedTab,
      JSON.stringify(this.headers)
    );
  }
  getstudiesParticipantRegistry(studyId) {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "studies/" + studyId + "/participants",
      JSON.stringify(this.headers)
    );
  }
  getappsParticipantRegistry(appId) {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "apps/" + appId + "/participants",
      JSON.stringify(this.headers)
    );
  }
  showParticipantsDetails(partcipantId) {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "sites/" + partcipantId + "/participant",
      JSON.stringify(this.headers)
    );
  }
  siteDecommission(siteId) {
    this.generateAuthHeader();
    return this.dataService.HttpPutRequest(
      JSON.stringify(siteId),
      "sites/" + siteId + "/decommission",
      JSON.stringify(this.headers)
    );
  }
  enableDisableInvitation(siteId, dataSet) {
    this.generateAuthHeader();
    return this.dataService.HttpPostRequest(
      JSON.stringify(dataSet),
      "sites/" + siteId + "/participants/activate",
      JSON.stringify(this.headers)
    );
  }

  sendAndResendInvitation(siteId, dataSet) {
    this.generateAuthHeader();
    console.log(dataSet);
    return this.dataService.HttpPostRequest(
      JSON.stringify(dataSet),
      "sites/" + siteId + "/participants/invite",
      JSON.stringify(this.headers)
    );
  }

  addSite(siteObject) {
    this.generateAuthHeader();
    return this.dataService.HttpPostRequest(
      JSON.stringify(siteObject),
      "sites",
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
