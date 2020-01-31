import { Component, OnInit } from '@angular/core';
import { LocationService } from "../location.service";
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public data: any;
  locations: any[] = [];
  locationBackup: any[] = [];

  constructor(private locationService: LocationService) {
    this.data = [
      { 'name': 'Anil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida, UP, India' },
      { 'name': 'Anil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'Sunil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'Alok', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'Tinku', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'XYZ', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'asas', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'erer', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
      { 'name': 'jhjh', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' }
    ];
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
    });
  }
}
