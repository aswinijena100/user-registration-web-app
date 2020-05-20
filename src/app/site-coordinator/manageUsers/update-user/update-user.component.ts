import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { User } from "../../../entity/user";
import { ToastrService } from "ngx-toastr";
import { ManageUsersService } from "../manage-users.service";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.scss"],
})
export class UpdateUserComponent implements OnInit {
  adminId: string = "";
  user: User = new User();
  userBackup: User = new User();
  errorMessage: String = "";
  successMessage: String = "";
  apps: any[] = [];
  appsBackup: any[] = [];
  selectedApps: any[] = [];
  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private manageUserService: ManageUsersService,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (
        params["adminId"] != "" &&
        params["adminId"] != "undefined" &&
        params["adminId"] != undefined
      )
        this.adminId = params["adminId"];
      console.log(this.adminId);
      this.getUserDetails();
    });
  }
  getUserDetails() {
    this.manageUserService.getusers(this.adminId).subscribe(
      (data) => {
        if (
          data != undefined &&
          data.length > 0 &&
          data[0] != null &&
          data[0] != undefined
        ) {
          this.user = data[0];
          this.userBackup = JSON.parse(JSON.stringify(this.user));
          if (
            this.user.manageLocations != undefined &&
            this.user.manageLocations != 0
          ) {
            this.user.manageLocationsCheckBox = 1;
          }
          this.getAllApps();
        }
      },
      (error) => {
        this.user = new User();
        this.userBackup = new User();
      }
    );
  }

  getAllApps() {
    this.apps = [];
    this.appsBackup = [];
    this.manageUserService.getAllApps().subscribe(
      (data) => {
        this.apps = data;
        this.appsBackup = JSON.parse(JSON.stringify(this.apps));
        console.log(this.apps);
        this.selectedApps = this.user.apps;
      },
      (error) => {
        this.apps = [];
        this.appsBackup = [];
      }
    );
  }
  deleteAppFromList(appId) {
    let appNeedsToBrRemove = this.selectedApps.filter(
      (obj) => obj.id == appId
    )[0];

    this.selectedApps = this.selectedApps.filter((obj) => obj.id != appId);
    console.log(this.selectedApps);
  }
  appCheckBoxChange(e, app) {
    let changedApp = app;
    if (e.target.checked) {
      changedApp.permission = 1;
    } else {
      changedApp.permission = 0;
    }
    changedApp.studies.forEach((study) => {
      study.permission = changedApp.permission;
      study.disabled = changedApp.permission == 1 ? true : false;
      study.selected = changedApp.permission == 1 ? true : false;
      study.sites.forEach((site) => {
        site.permission = changedApp.permission;
        site.disabled = changedApp.permission == 1 ? true : false;
        site.selected = changedApp.permission == 1 ? true : false;
      });
    });
  }
  appRadioButtonChange(e, app) {
    let changedApp = app;
    console.log(changedApp);
    changedApp.studies.forEach((study) => {
      study.permission = changedApp.permission;
      study.sites.forEach((site) => {
        site.permission = changedApp.permission;
      });
    });
  }
  studyCheckBoxChange(e, study) {
    let changedStudy = study;
    if (e.target.checked) {
      changedStudy.permission = 1;
    } else {
      changedStudy.permission = 0;
    }
    changedStudy.sites.forEach((site) => {
      site.permission = changedStudy.permission;
      site.disabled = changedStudy.permission == 1 ? true : false;
      site.selected = changedStudy.permission == 1 ? true : false;
    });
  }
  studyRadioButtonChange(e, study) {
    let changedStudy = study;
    changedStudy.sites.forEach((study) => {
      study.permission = changedStudy.permission;
    });
  }
  siteCheckBoxChange(e, site) {
    let changedSite = site;
    if (e.target.checked) {
      changedSite.permission = 1;
    } else {
      changedSite.permission = 0;
    }
    changedSite.disabled = changedSite.permission == 1 ? true : false;
    changedSite.selected = changedSite.permission == 1 ? true : false;
  }
  locationsCheckBoxChange(e) {
    if (e.target.checked) {
      this.user.manageLocations = 1;
    } else {
      this.user.manageLocations = 0;
    }
  }
  updateUser() {
    console.log(this.user);

    var checkedBoxes = document.querySelectorAll(
      "input[name=checkbox2]:checked"
    );
    if (
      this.user.superAdmin ||
      (this.selectedApps.length > 0 && checkedBoxes.length > 0)
    ) {
      if (this.user.superAdmin) {
        this.user.apps = [];
      } else {
        this.user.apps = this.selectedApps;
      }
      this.manageUserService.updateUser(this.user).subscribe(
        (data) => {
          this.toastr.success(data.message);
          this.router.navigate(["/user/manageUsers"]);
        },
        (error) => {
          console.log(error);
          this.toastr.error(error.error.userMessage);
        }
      );
    } else {
      this.toastr.error(
        "Please assign the user at least one permission from the permissions set shown."
      );
    }
  }
  cancel() {
    this.router.navigate(["/user/manageUsers"]);
  }
}
