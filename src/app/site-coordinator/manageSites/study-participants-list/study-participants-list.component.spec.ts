import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StudyParticipantsListComponent } from "./study-participants-list.component";

describe("StudyParticipantsListComponent", () => {
  let component: StudyParticipantsListComponent;
  let fixture: ComponentFixture<StudyParticipantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudyParticipantsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyParticipantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
