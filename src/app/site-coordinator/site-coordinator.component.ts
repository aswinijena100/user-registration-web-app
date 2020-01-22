import { Component, OnInit, ViewChild } from '@angular/core';
import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { Router } from "@angular/router";
import { DashboardComponent } from "./manageSites/dashboard/dashboard.component";
@Component({
  selector: 'app-site-coordinator',
  templateUrl: './site-coordinator.component.html',
  styleUrls: ['./site-coordinator.component.scss']
})
export class SiteCoordinatorComponent implements OnInit {
  @ViewChild(DashboardComponent, { static: false }) dashboardComponent: DashboardComponent;
  opencloseNavval: boolean = false;
  public activated: {
    dashboard: boolean;
    siteParticipantList: boolean;
  };
  private router: Router;
  constructor(router: Router) {
    this.router = router;
    this.activated = {
      dashboard: false,
      siteParticipantList: false,
    };

    // Listen for routing events so we can update the activated route indicator
    // as the user navigates around the application.
    this.router.events.subscribe(
      (event: NavigationEvent): void => {

        if (event instanceof NavigationEnd) {

          this.activated.dashboard = this.router.isActive("/", true);
          this.activated.dashboard = this.router.isActive("user/dashboard", true);
          this.activated.siteParticipantList = this.router.isActive("user/siteParticipants", true);
          console.log(this.activated)
          if (this.activated.dashboard) {
            console.log(this.dashboardComponent.activeTab)
          }
        }

      }
    );

  }


  ngOnInit() {

  }

  opencloseNav() {
    this.opencloseNavval = !this.opencloseNavval;
  }
}
