import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SiteParticipantsListComponent } from "./site-participants-list.component";

describe("SiteParticipantsListComponent", () => {
  let component: SiteParticipantsListComponent;
  let fixture: ComponentFixture<SiteParticipantsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiteParticipantsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteParticipantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
