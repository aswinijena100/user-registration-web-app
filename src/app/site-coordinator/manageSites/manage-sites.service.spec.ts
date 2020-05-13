import { TestBed } from "@angular/core/testing";

import { ManageSitesService } from "./manage-sites.service";
import { SiteCoordinatorModule } from "../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap";
import { DataService } from "../../service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { LocationService } from "../locations/location.service";

describe("ManageSitesService", () => {
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
    const service: ManageSitesService = TestBed.get(ManageSitesService);
    expect(service).toBeTruthy();
  });
});
