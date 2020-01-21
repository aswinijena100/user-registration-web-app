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
  sites: any[] = [];
  data: any[] = [];

  constructor(private modalService: BsModalService, private manageSitesService: ManageSitesService) { }


  ngOnInit() {
    this.getSites();
  }

  getSites() {
    console.log("sites")
    this.sites = [];
    this.manageSitesService.getSites().subscribe(data => {
      this.sites = data;
      this.data = JSON.parse(JSON.stringify(this.sites));
    }, error => {
      this.sites = [];
      console.log("error");
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
