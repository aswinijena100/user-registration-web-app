import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: 'app-site-coordinator',
  templateUrl: './site-coordinator.component.html',
  styleUrls: ['./site-coordinator.component.scss'],
})
export class SiteCoordinatorComponent implements OnInit {

  searchPlaceholder: string = "Search by site or study ID or name"
  opencloseNavval: boolean = false;
  componentRef: any;
  filterQuery: string = "";
  constructor(router: Router) {

  }
  ngOnInit() {

  }

  opencloseNav() {
    this.opencloseNavval = !this.opencloseNavval;
  }
  search() {
    this.componentRef.search(this.filterQuery);
  }
  onActivate(componentRef) {
    this.componentRef = componentRef;
    console.log(this.componentRef.constructor.name)
    //Below will subscribe to the tab change emitter
    if (this.componentRef.constructor.name == "DashboardComponent") {
      componentRef.tabChangeItem.subscribe((data) => {
        // Will receive the data from child here 
        console.log("tab chnage event triggered " + data)
        if (data == 'studies') {
          this.searchPlaceholder = "Search by  study ID or name"
        } else if (data == 'apps') {
          this.searchPlaceholder = "Search by APP ID or name"
        } else if (data == 'sites') {
          this.searchPlaceholder = "Search by site or study ID or name"
        }
      });
    } else if (this.componentRef.constructor.name == "LocationsComponent") {
      this.searchPlaceholder = "Search by location"
    } else if (this.componentRef.constructor.name == "SiteParticipantsListComponent") {
      this.searchPlaceholder = "Search by Participant Email"
    }
  }
}
