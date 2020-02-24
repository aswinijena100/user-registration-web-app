import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from "../manage-users.service";
import { User } from 'src/app/entity/user';
@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  constructor(private manageUsersService: ManageUsersService) { }
  apps: any[] = [];
  appsBackup: any[] = [];
  selectedApps: any[] = [];
  user: User = new User();
  ngOnInit() {
    this.getAllApps();
  }
  getAllApps() {
    this.apps = [];
    this.appsBackup = [];
    this.manageUsersService.getAllApps().subscribe(data => {
      this.apps = data;
      this.appsBackup = JSON.parse(JSON.stringify(this.apps));
      console.log(this.apps)
    }, error => {
      this.apps = [];
      this.appsBackup = [];
    });
  }
  items = [{
    id: 1,
    name: "First",
    description: "First accordion"
  }, {
    id: 2,
    name: "Second",
    description: "Second accordion"
  }, {
    id: 3,
    name: "Third",
    description: "Third accordion"
  }];



  addItem() {
    this.items.push({
      id: this.items.length + 1,
      name: "Item #" + (this.items.length + 1),
      description: "Item #" + (this.items.length + 1) + " accordion"
    });
  }
  itemChanged() {
    console.log(this.selectedApps);
  }
  deleteAppFromList(appId){
    this.selectedApps=this.selectedApps.filter(obj=>obj.id!=appId);
    console.log(this.selectedApps)
  }
}
