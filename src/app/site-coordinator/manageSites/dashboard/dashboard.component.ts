import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ManageSitesService } from "../manage-sites.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  modalRef: BsModalRef;
  studiesWithSites: any[] = [];
  data: any[] = [];
  activeTab: string = 'sites';
  addSite: any = {};
  constructor(private modalService: BsModalService, private manageSiteService: ManageSitesService) { }


  ngOnInit() {
    this.getstudiesWithSite();
  }

  getstudiesWithSite() {
    console.log("studiesWithSite")
    this.studiesWithSites = [];
    this.manageSiteService.getstudiesWithSite().subscribe(data => {
      this.studiesWithSites = data;
      this.data = JSON.parse(JSON.stringify(this.studiesWithSites));
    }, error => {
      this.studiesWithSites = [];
      console.log("error");
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
  addSiteData(){

  }
}
