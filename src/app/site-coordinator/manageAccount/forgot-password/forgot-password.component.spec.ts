import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ForgotPasswordComponent } from "./forgot-password.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
describe("ForgotPasswordComponent", () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteCoordinatorModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ForgotPasswordComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
