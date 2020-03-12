import { Component, OnInit, TemplateRef, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ManageSitesService } from "../manage-sites.service";
import { Router } from "@angular/router";
import * as _ from "lodash";
import { ToastrService } from 'ngx-toastr';
import { LocationService } from "../../locations/location.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() tabChangeItem: EventEmitter<any> = new EventEmitter();
  modalRef: BsModalRef;
  studiesWithSites: any[] = [];
  studiesWithSitesBackup: any[] = [];
  locations: Location[] = [];
  locationBackup: Location[] = [];
  studies: any[] = [];
  studiesBackup: any[] = [];
  apps: any[] = [];
  appsBackup: any[] = [];
  activeTab: string = 'sites';
  addSite: any = {};
  errorMessage: String = "";
  locationId: String = "";
  constructor(private locationService: LocationService, private router: Router, private modalService: BsModalService, private manageSiteService: ManageSitesService, private toastr: ToastrService) { }
  ngOnInit() {
    this.getstudiesWithSite();
  }

  getstudiesWithSite() {
    this.studiesWithSites = [];
    this.studiesWithSitesBackup = [];
    this.errorMessage = "";
    this.manageSiteService.getstudiesWithSite().subscribe(data => {
      this.studiesWithSites = data;
      this.studiesWithSitesBackup = JSON.parse(JSON.stringify(this.studiesWithSites));
    }, error => {
      this.studiesWithSites = [];
      this.studiesWithSitesBackup = [];
      this.errorMessage = error.error.userMessage;
    });
  }
  getStudies() {
    this.studies = [];
    this.studiesBackup = [];
    this.errorMessage = "";
    this.manageSiteService.getStudies().subscribe(data => {
      this.studies = data;
      this.studiesBackup = JSON.parse(JSON.stringify(this.studies));
    }, error => {
      this.studies = [];
      this.studiesBackup = [];
      this.errorMessage = error.error.userMessage;
    });
  }
  getApps() {
    this.apps = [];
    this.appsBackup = [];
    this.errorMessage = "";
    this.manageSiteService.getApps().subscribe(data => {
      this.apps = data;
      this.appsBackup = JSON.parse(JSON.stringify(this.studies));
    }, error => {
      this.apps = [];
      this.appsBackup = [];
      this.errorMessage = error.error.userMessage;
    });
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
  openAddSiteModal(template: TemplateRef<any>, study: any) {
    this.modalRef = this.modalService.show(template);
    this.getLocation();
    if (study != undefined && study != null) {
      this.addSite.studyId = study.id;
      this.addSite.studyCustomId = study.customId;
      this.addSite.appId = study.appId;
      this.addSite.appInfoId = study.appInfoId;
    }
  }
  addSiteData(template) {
    this.addSite.locationId = this.locationId;
    this.manageSiteService.addSite(this.addSite).subscribe(data => {
      this.toastr.success(data.message);
      this.modalRef.hide();
      this.getstudiesWithSite();
    }, error => {
      this.modalRef.hide();
      this.toastr.error(error.error.userMessage);
    });
  }

  search(filterQuery) {
    let query = filterQuery;
    if (this.activeTab == 'sites') {
      if (query && query.trim() != '' && query.trim() != undefined) {
        this.studiesWithSites = this.studiesWithSitesBackup.filter(function (a) {
          return a.sites.some(function (b) {
            return ((b.customId != null && b.customId != undefined && b.customId.toLowerCase().includes(query.toLowerCase()))
              || (b.name != null && b.name != undefined && b.name.toLowerCase().includes(query.toLowerCase()))
              || (a.name != null && a.name != undefined && a.name.toLowerCase().includes(query.toLowerCase())));
          });
        });
      } else {
        this.studiesWithSites = this.studiesWithSitesBackup;
      }
    }
    else if (this.activeTab == 'studies') {
      if (query && query.trim() != '' && query.trim() != undefined) {
        this.studies = this.studiesBackup.filter(function (a) {
          return ((a.name != null && a.name != undefined && a.name.toLowerCase().includes(query.toLowerCase()) ||
            (a.customId != null && a.customId != undefined && a.customId.toLowerCase().includes(query.toLowerCase()))));
        });
      } else {
        this.studies = this.studiesBackup;
      }
    }
    else if (this.activeTab == 'apps') {
      if (query && query.trim() != '' && query.trim() != undefined) {
        this.apps = this.appsBackup.filter(function (a) {
          return ((a.name != null && a.name != undefined && a.name.toLowerCase().includes(query.toLowerCase()) ||
            (a.customId != null && a.customId != undefined && a.customId.toLowerCase().includes(query.toLowerCase()))));
        });
      } else {
        this.apps = this.appsBackup;
      }
    }
  }
  changeTab(tab) {
    this.activeTab = tab;
    this.tabChangeItem.emit(tab);
    if (this.activeTab == 'sites') {
      this.getstudiesWithSite();
    } else if (this.activeTab == 'studies') {
      this.getStudies();
    } else if (this.activeTab == 'apps') {
      this.getApps();
    }
  }
  navigateToParticipantList(type, id) {
    if (type == "site") {
      this.router.navigate(["/user/siteParticipants/", id])
    } else if (type == "study") {
      this.router.navigate(["/user/studyParticipants/", 1])
    } else if (type == "app") {
      this.router.navigate(["/user/appParticipants/", id])
    }
  }

}
