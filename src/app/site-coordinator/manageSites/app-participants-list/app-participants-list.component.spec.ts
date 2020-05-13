import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppParticipantsListComponent } from "./app-participants-list.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap";
import { LocationService } from "../../locations/location.service";
import { DataService } from "src/app/service/dataService";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";

describe("AppParticipantsListComponent", () => {
  let component: AppParticipantsListComponent;
  let fixture: ComponentFixture<AppParticipantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SiteCoordinatorModule,
        HttpClientModule,
        ModalModule.forRoot(),
        RouterTestingModule.withRoutes([]),
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [LocationService, DataService, BsModalService, BsModalRef],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppParticipantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
