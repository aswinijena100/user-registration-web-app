import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddLocationComponent } from "./add-location.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LocationService } from "../location.service";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap";
import { DataService } from "../../../service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe("AddLocationComponent", () => {
  let component: AddLocationComponent;
  let fixture: ComponentFixture<AddLocationComponent>;

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
    fixture = TestBed.createComponent(AddLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
