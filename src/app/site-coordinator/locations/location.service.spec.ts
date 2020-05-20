import { TestBed } from "@angular/core/testing";

import { LocationService } from "./location.service";
import { SiteCoordinatorModule } from "../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataService } from "../../service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe("LocationService", () => {
  let httpClientSpy: { get: jasmine.Spy };
  let locationService: LocationService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    locationService = new LocationService(<any>httpClientSpy);
  });

  beforeEach(() =>
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
    })
  );

  it("should be created", () => {
    const service: LocationService = TestBed.get(LocationService);
    expect(service).toBeTruthy();
  });
});
