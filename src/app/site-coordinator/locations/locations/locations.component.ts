import { Component, OnInit } from '@angular/core';
import { LocationService } from "../location.service";
import { Location } from "../../../entity/location";
import { Router } from "@angular/router";
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  locationBackup: Location[] = [];
  errorMessage: String = "";
  constructor(private locationService: LocationService, private router: Router) {
  }

  ngOnInit() {
    this.getLocation();
  }
  getLocation() {
    this.locations = [];
    this.locationBackup = [];
    this.locationService.getLocations().subscribe(data => {
      this.locations = data;
      this.locationBackup = JSON.parse(JSON.stringify(this.locations));
      console.log(this.locations)
    }, error => {
      this.locations = [];
      this.locationBackup = [];
      this.errorMessage="LOcations not found";
    });
  }
  locationDetails(locationId) {
    console.log(locationId)
    this.router.navigate(['/user/locationDetails/', locationId])

  }
  search(filterQuery) {
    let query = filterQuery;
    if (query && query.trim() != '' && query.trim() != undefined) {
      this.locations = this.locationBackup.filter(function (a) {
        return ((a.name != null && a.name != undefined && a.name.toLowerCase().includes(query.toLowerCase()) ||
          (a.customId != null && a.customId != undefined && a.customId.toLowerCase().includes(query.toLowerCase()))));
      });
    } else {
      this.locations = this.locationBackup;
    }
  }
}
