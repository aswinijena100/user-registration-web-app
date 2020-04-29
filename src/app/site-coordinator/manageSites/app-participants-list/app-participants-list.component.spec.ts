import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AppParticipantsListComponent } from "./app-participants-list.component";

describe("AppParticipantsListComponent", () => {
  let component: AppParticipantsListComponent;
  let fixture: ComponentFixture<AppParticipantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppParticipantsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppParticipantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
