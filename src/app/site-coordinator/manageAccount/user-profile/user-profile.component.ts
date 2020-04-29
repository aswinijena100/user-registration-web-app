import { Component, OnInit, ViewChild } from "@angular/core";
import { ManageAccountService } from "../manage-account.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../../entity/user";
import { ToastrService } from "ngx-toastr";
import { invalid } from "@angular/compiler/src/render3/view/util";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit {
  user: User = new User();
  profileAutoCompleteData: any = {};
  errorMessage: string = "";
  successMessage: String = "";
  passCritiria: string = "";
  @ViewChild("profile", { static: false }) form: any;

  constructor(
    private manageAccountService: ManageAccountService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getProfileDetails();
    this.passCritiria = `Your password must be 8 to 64 characters long.  
                        - contain a lower case letter.
                        - contain an upper case letter. 
                        - contain a number.
                        - contain a special character from the following set:
                        !"" # $ % ' () * + , - . : ; < = > ? @ [] ^_  {} |~"' `;
  }

  getProfileDetails() {
    this.manageAccountService.getProfileData().subscribe(
      (data) => {
        console.log(data);
        this.profileAutoCompleteData = data;
        this.user = this.profileAutoCompleteData;
      },
      (error) => {
        this.toastr.error(error.error.userMessage);
      }
    );
  }
  updateProfile() {
    if (this.form.invalid) {
      return;
    } else {
      this.manageAccountService.updateProfileChanges(this.form.value).subscribe(
        (data) => {
          this.toastr.success(data.successBean.message);
        },
        (error) => {
          this.toastr.error(error.error.userMessage);
        }
      );
    }
  }
}
