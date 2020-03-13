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
  showSearchBar:Boolean=true;
  componentRef: any;
  filterQuery: string = "";
  constructor(router: Router) {

  }
  ngOnInit() {

  }

  opencloseNav() {
    this.opencloseNavval = !this.opencloseNavval;
  }

    //to call search method onclick of enter
    public handleKeyDown(event: any) {
      if (event.keyCode == 13) {
        this.componentRef.search(this.filterQuery);
      }
    }
  onActivate(componentRef) {
    this.showSearchBar=true;
    this.filterQuery="";
    this.componentRef = componentRef;
    if (this.componentRef.constructor.name == "DashboardComponent") {
      this.searchPlaceholder = "Search by site or study ID or name"

      componentRef.tabChangeItem.subscribe((data) => {
        console.log("tab chnage event triggered " + data)
        if (data == 'studies') {
          this.filterQuery="";
          this.searchPlaceholder = "Search by  study ID or name"
        } else if (data == 'apps') {
          this.filterQuery="";
          this.searchPlaceholder = "Search by APP ID or name"
        } else if (data == 'sites') {
          this.filterQuery="";
          this.searchPlaceholder = "Search by site or study ID or name"
        }
      });
    } else if (this.componentRef.constructor.name == "LocationsComponent") {
      this.searchPlaceholder = "Search by location"
    } else if (this.componentRef.constructor.name == "SiteParticipantsListComponent" || this.componentRef.constructor.name == "AppParticipantsListComponent" ) {
      this.searchPlaceholder = "Search by Participant Email"
    } else if(this.componentRef.constructor.name == "StudyParticipantsListComponent"){
      this.searchPlaceholder = "Search by Site ID or Participant Email"
    } else if(this.componentRef.constructor.name == "UserProfileComponent"){
     this.showSearchBar=false;
    }
  }
}
