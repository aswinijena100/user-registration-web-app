import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ManageSitesService } from "../manage-sites.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { AppParticipant } from "../../../entity/appParticipant";

@Component({
  selector: "app-app-participants-list",
  templateUrl: "./app-participants-list.component.html",
  styleUrls: ["./app-participants-list.component.scss"],
})
export class AppParticipantsListComponent implements OnInit {
  @ViewChild("appsListData", { static: false }) appsListData: any;
  appId: string = "";
  appDetails: AppParticipant = new AppParticipant();
  particpantappDetailsBackup: any[] = [];
  modalRef: BsModalRef;
  contents: any[] = [];
  constructor(
    private modalService: BsModalService,
    private manageSitesService: ManageSitesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  openModal(template: TemplateRef<any>, appDetailID) {
    this.contents = appDetailID;
    if (appDetailID != "") {
      this.modalRef = this.modalService.show(template);
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (
        params["appId"] != "" &&
        params["appId"] != "undefined" &&
        params["appId"] != undefined
      )
        this.appId = params["appId"];
      this.appParticipantsDetails();
    });
  }
  participantDetails(participantRegistryId) {
    this.router.navigate(["/user/participantDetail", participantRegistryId]);
  }

  appParticipantsDetails() {
    this.manageSitesService.getappsParticipantRegistry(this.appId).subscribe(
      (data) => {
        this.appDetails = data;
        this.particpantappDetailsBackup = JSON.parse(
          JSON.stringify(this.appDetails.participants)
        );
      },
      (error) => {
        this.appDetails = new AppParticipant();
        this.particpantappDetailsBackup = [];
      }
    );
  }

  participantsDetails(participantsID) {
    this.router.navigate(["/user/participantDetail/" + participantsID]);
  }

  search(filterQuery) {
    let query = filterQuery;
    if (query && query.trim() != "" && query.trim() != undefined) {
      this.appDetails.participants = this.particpantappDetailsBackup.filter(
        function (a) {
          return (
            a.email != null &&
            a.email != undefined &&
            a.email.toLowerCase().includes(query.toLowerCase())
          );
        }
      );
    } else {
      this.appDetails.participants = this.particpantappDetailsBackup;
    }
  }
}
