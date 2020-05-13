import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SiteParticipantsListComponent } from "./site-participants-list.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap";
import { DataService } from "../../../service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { LocationService } from "../../locations/location.service";

describe("SiteParticipantsListComponent", () => {
  let component: SiteParticipantsListComponent;
  let fixture: ComponentFixture<SiteParticipantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SiteCoordinatorModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        ModalModule.forRoot(),
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
    fixture = TestBed.createComponent(SiteParticipantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
