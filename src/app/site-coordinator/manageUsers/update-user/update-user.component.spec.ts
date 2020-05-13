import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateUserComponent } from "./update-user.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
describe("UpdateUserComponent", () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteCoordinatorModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
