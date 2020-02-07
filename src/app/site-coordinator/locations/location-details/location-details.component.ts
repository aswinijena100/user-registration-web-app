import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '../../../entity/location';
import { LocationService } from "../location.service";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {
  @ViewChild("updateLocationForm", { static: false }) updateLocationForm: any;

  modalRef: BsModalRef;
  locationId: string = "";
  location: Location = new Location();
  locationBackup: Location = new Location();
  errorMessage: String = "";
  successMessage: String = "";
  constructor(private modalService: BsModalService, private route: ActivatedRoute, private locationService: LocationService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['locationId'] != '' && params['locationId'] != 'undefined' && params['locationId'] != undefined)
        this.locationId = params['locationId'];
      console.log(this.locationId)
      this.getLocationDetails();

    })
  }
  getLocationDetails() {
    this.locationService.getLocationDetails(this.locationId).subscribe(data => {
      this.location = data[0];
      this.locationBackup = JSON.parse(JSON.stringify(this.location));
      console.log(this.location)
    }, error => {
      this.location = new Location();
      this.locationBackup = new Location();
    });
  }
  updateLocation(task) {
    this.errorMessage = '';
    this.successMessage = '';
    let locationBeanToUpdate: {} = {
    }
    if (task == 'update') {
      locationBeanToUpdate = {
        "name": this.location.name,
        "description": this.location.description
      }
    } else {
      locationBeanToUpdate = {
        "status": this.location.status == "1" ? "0" : "1",
      }
    }
    this.locationService.updateLocation(locationBeanToUpdate, this.locationId).subscribe(data => {
      this.successMessage = data.successBean.message;
      this.location.name = data.name;
      this.location.description = data.description;
      this.location.status = data.status;
      this.locationBackup = JSON.parse(JSON.stringify(this.location));
    }, error => {
      console.log(error);
      this.errorMessage = error.userMessage;
    });
    
  }
}
