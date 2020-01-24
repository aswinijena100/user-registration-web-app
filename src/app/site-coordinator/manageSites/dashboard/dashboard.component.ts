import { Component, OnInit, TemplateRef, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ManageSitesService } from "../manage-sites.service";
import * as _ from "lodash";
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
  studies: any[] = [];
  studiesBackup: any[] = [];
  activeTab: string = 'sites';
  addSite: any = {};

  constructor(private modalService: BsModalService, private manageSiteService: ManageSitesService) { }


  ngOnInit() {
    this.getstudiesWithSite();
  }

  getstudiesWithSite() {
    this.studiesWithSites = [];
    this.studiesWithSitesBackup = [];
    this.manageSiteService.getstudiesWithSite().subscribe(data => {
      this.studiesWithSites = data;
      this.studiesWithSitesBackup = JSON.parse(JSON.stringify(this.studiesWithSites));
    }, error => {
      this.studiesWithSites = [];
      this.studiesWithSitesBackup = [];
    });
  }
  getStudies() {
    this.studies = [];
    this.studiesBackup = [];
    this.manageSiteService.getStudies().subscribe(data => {
      this.studies = data;
      this.studiesBackup = JSON.parse(JSON.stringify(this.studies));
    }, error => {
      this.studies = [];
      this.studiesBackup = [];
    });
  }
  openAddSiteModal(template: TemplateRef<any>, study: any) {
    this.modalRef = this.modalService.show(template);
    if (study != undefined && study != null) {
      this.addSite.studyId = study.id;
      this.addSite.studyCustomId = study.customId;
      this.addSite.appId = study.appId;
      this.addSite.appInfoId = study.appInfoId;
    }

  }
  addSiteData() {

  }

  search(filterQuery) {
    let query = filterQuery;
    if (this.activeTab == 'sites') {
      if (query && query.trim() != '' && query.trim() != undefined) {
        this.studiesWithSites = this.studiesWithSitesBackup.filter(function (a) {
          return a.sites.some(function (b) {
            debugger;
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
          return a.sites.some(function (b) {
            debugger;
            return ((b.customId != null && b.customId != undefined && b.customId.toLowerCase().includes(query.toLowerCase()))
              || (b.name != null && b.name != undefined && b.name.toLowerCase().includes(query.toLowerCase()))
              || (a.name != null && a.name != undefined && a.name.toLowerCase().includes(query.toLowerCase())));
          });
        });
      } else {
        this.studies = this.studiesBackup;
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
    }
  }
}
