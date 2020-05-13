import { TestBed } from "@angular/core/testing";

import { ManageAccountService } from "./manage-account.service";
import { SiteCoordinatorModule } from "../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap";
import { DataService } from "../../service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe("ManageAccountService", () => {
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
      providers: [
        ManageAccountService,
        DataService,
        BsModalService,
        BsModalRef,
      ],
    })
  );

  it("should be created", () => {
    const service: ManageAccountService = TestBed.get(ManageAccountService);
    expect(service).toBeTruthy();
  });
});
