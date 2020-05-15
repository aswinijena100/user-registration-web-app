import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateUserComponent } from "./update-user.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("UpdateUserComponent", () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SiteCoordinatorModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
  // it("should have one user", async(() => {
  //
  // }));

  // it("should accept Firstname", () => {
  //   expect(component).toBeTruthy();
  // });
  // it("should accept Lastname", () => {
  //   expect(component).toBeTruthy();
  // });
  // it("email is Un editable", () => {
  //   expect(component).toBeTruthy();
  // });
  // it("Form shuld be valid", () => {
  //   expect(component).toBeTruthy();
  // });
  // it("Form shuld be valid", () => {
  //   expect(component).toBeTruthy();
  // });
});
