import { Injectable } from '@angular/core';
import { DataService } from "../../service/dataService";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private dataService: DataService) { }
  getLocations() {
    return this.dataService.HttpGetRequest('locations', '');
  }
}
