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
  deleteAppFromList(appId) {
    let appNeedsToBrRemove
     = this.selectedApps.filter(obj => obj.id == appId)[0];

    this.selectedApps = this.selectedApps.filter(obj => obj.id != appId);
    console.log(this.selectedApps)
  }
  appCheckBoxChange(e, app) {
    let changedApp = app;
    if (e.target.checked) {
      changedApp.permission = 1
    } else {
      changedApp.permission = 0
    }
    changedApp.studies.forEach(study => {
      study.permission = changedApp.permission;
      study.disabled = changedApp.permission == 1 ? true : false;
      study.selected = changedApp.permission == 1 ? true : false;
      study.sites.forEach(site => {
        site.permission = changedApp.permission;
        site.disabled = changedApp.permission == 1 ? true : false;
        site.selected = changedApp.permission == 1 ? true : false;
      });
    });
  }
  appRadioButtonChange(e, app) {
    let changedApp = app;
    console.log(changedApp)
    changedApp.studies.forEach(study => {
      study.permission = changedApp.permission;
      study.sites.forEach(site => {
        site.permission = changedApp.permission;
      });
    });
  }
  studyCheckBoxChange(e,study) {
    let changedStudy = study;
    if (e.target.checked) {
      changedStudy.permission = 1
    } else {
      changedStudy.permission = 0
    }
    changedStudy.sites.forEach(site => {
      site.permission = changedStudy.permission;
      site.disabled = changedStudy.permission == 1 ? true : false;
      site.selected = changedStudy.permission == 1 ? true : false;
    });
  }
  studyRadioButtonChange(e, study) {
    let changedStudy = study
    changedStudy.sites.forEach(study => {
      study.permission = changedStudy.permission;
    });
  }
  siteCheckBoxChange(e,  site) {
    let changedSite = site;
    if (e.target.checked) {
      changedSite.permission = 1
    } else {
      changedSite.permission = 0
    }
    changedSite.disabled = changedSite.permission == 1 ? true : false;
    changedSite.selected = changedSite.permission == 1 ? true : false;
  }
}
