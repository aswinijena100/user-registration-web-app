import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SiteCoordinatorComponent } from "./site-coordinator.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

describe("SiteCoordinatorComponent", () => {
  let component: SiteCoordinatorComponent;
  let fixture: ComponentFixture<SiteCoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteCoordinatorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ModalModule.forRoot(), RouterTestingModule.withRoutes([])],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
