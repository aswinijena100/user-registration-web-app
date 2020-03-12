import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "../../../entity/location";
import { LocationService } from "../location.service";
import { ToastrService } from 'ngx-toastr';


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
  constructor(private router: Router, private locationService: LocationService,private toastr: ToastrService) { }

  ngOnInit() {
  }

  addLocation() {
    this.errorMessage = '';
    this.successMessage = '';
    this.locationService.addLocation(this.location).subscribe(data => {
      this.toastr.success(data.successBean.message);
     // this.successMessage = "Location Added successfully."
    }, error => {
      console.log(error);
      this.toastr.error(error.error.userMessage);
      //this.errorMessage = error.error.message;
    })
  }
}
