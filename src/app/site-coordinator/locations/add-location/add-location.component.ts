import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "../../../entity/location";
import { LocationService } from "../location.service";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {
  @ViewChild("addLocationForm", { static: false }) addLocationForm: any;
  location: Location = new Location();
  errorMessage = '';
  successMessage = '';
  constructor(private router: Router, private locationService: LocationService) { }

  ngOnInit() {
  }
  navigateToLocations() {
    this.router.navigate(['/user/locations'])
  }
  addLocation() {
    this.errorMessage = '';
    this.successMessage = '';
    this.locationService.addLocation(this.location).subscribe(data => {
      this.successMessage = "Location Added successfully."
    }, error => {
      console.log(error);
      this.errorMessage = error.error.message;
    })
  }
}
