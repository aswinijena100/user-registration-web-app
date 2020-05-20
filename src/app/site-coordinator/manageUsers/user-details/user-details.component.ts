import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { User } from "../../../entity/user";
import { ToastrService } from "ngx-toastr";
import { ManageUsersService } from "../manage-users.service";
@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  adminId: string = "";
  user: User = new User();
  userBackup: User = new User();
  errorMessage: String = "";
  successMessage: String = "";
  selectedApps: any[] = [];

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private manageUserService: ManageUsersService
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
        this.user = data[0];
        this.userBackup = JSON.parse(JSON.stringify(this.user));
        this.selectedApps = this.user.apps;

        console.log(this.selectedApps);
      },
      (error) => {
        this.user = new User();
        this.userBackup = new User();
      }
    );
  }
}
