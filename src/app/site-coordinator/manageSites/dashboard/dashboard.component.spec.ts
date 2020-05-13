import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";

import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap";
import { LocationService } from "../../locations/location.service";
import { DataService } from "src/app/service/dataService";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SiteCoordinatorModule,
        HttpClientModule,
        ModalModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        ToastrModule.forRoot({
          positionClass: "toast-top-center",
          preventDuplicates: true,
          enableHtml: true,
        }),
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [LocationService, DataService, BsModalService, BsModalRef],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
