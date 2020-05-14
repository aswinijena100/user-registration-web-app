import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { LocationService } from "../location.service";
import { UserServiceMock } from "../../../mocks/user.service.mock";
import { LocationsComponent } from "./locations.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataService } from "../../../service/dataService";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";

describe("LocationsComponent", () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;
  let service: LocationService;
  let valueServiceSpy: jasmine.SpyObj<LocationService>;

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
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(LocationsComponent);
        // service = TestBed.inject(LocationService);
        // expect(service.getLocation()).toBe('real value');
        component = fixture.componentInstance; // UserComponent test instance
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it(`should have one user`, () => {
    expect(component.locations.length).toBe(0);
  });
});
