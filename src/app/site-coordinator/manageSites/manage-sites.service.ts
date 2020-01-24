import { Injectable } from '@angular/core';
import { DataService } from "../../service/dataService";
import { User } from "../../entity/user";
@Injectable({
  providedIn: 'root'
})
export class ManageSitesService {
  user: User;

  constructor(private dataService: DataService) { }

  getstudiesWithSite() {
    return this.dataService.HttpGetRequest('sites?userId=1', '');
  }
  getStudies() {
    return this.dataService.HttpGetRequest('studies?userId=1', '');
  }
}
