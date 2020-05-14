import { Component, OnInit } from "@angular/core";
import { User } from "src/app/entity/user";
import { ManageUsersService } from "../manage-users.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-manage-users",
  templateUrl: "./manage-users.component.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent implements OnInit {
  constructor(
    private manageUserService: ManageUsersService,
    private router: Router
  ) {}
  data: any;
  users: User[] = [];
  userBackup: User[] = [];
  errorMessage: String = "";
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.users = [];
    this.userBackup = [];
    this.manageUserService.getusers().subscribe(
      (data) => {
        this.users = data;
        this.userBackup = JSON.parse(JSON.stringify(this.users));
        console.log(this.users);
      },
      (error) => {
        this.users = [];
        this.userBackup = [];
        this.errorMessage = "users not found";
      }
    );
  }
}
