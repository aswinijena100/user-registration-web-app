import { Injectable } from "@angular/core";
import { DataService } from "../../service/dataService";
import { Location } from "../../entity/location";

@Injectable()
export class LocationService {
  headers: {};
  constructor(private dataService: DataService) {}
  getLocations() {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "locations",
      JSON.stringify(this.headers)
    );
  }
  getLocationDetails(locationId) {
    this.generateAuthHeader();
    return this.dataService.HttpGetRequest(
      "locations/" + locationId,
      JSON.stringify(this.headers)
    );
  }
  addLocation(location: Location) {
    this.generateAuthHeader();
    return this.dataService.HttpPostRequest(
      JSON.stringify(location),
      "locations",
      JSON.stringify(this.headers)
    );
  }
  updateLocation(location, locationId) {
    this.generateAuthHeader();
    return this.dataService.HttpPutRequest(
      JSON.stringify(location),
      "locations/" + locationId,
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
