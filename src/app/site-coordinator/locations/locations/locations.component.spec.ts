import {
  async,
  fakeAsync,
  ComponentFixture,
  TestBed,
  tick,
} from "@angular/core/testing";
import { LocationService } from "../location.service";
import { UserServiceMock } from "../../../mocks/user.service.mock";
import { LocationsComponent } from "./locations.component";
import { SiteCoordinatorModule } from "../../site-coordinator.module";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataService } from "../../../service/dataService";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { Router } from "@angular/router";
import { By } from "@angular/platform-browser";
import { addMatchers } from "../../../../testing";

class FakeRouter {
  navigateByUrl(url: string) {
    return url;
  }
}

describe("LocationsComponent", () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;
  let service: LocationService;
  let valueServiceSpy: jasmine.SpyObj<LocationService>;
  let router: Router;

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
      providers: [
        LocationService,
        DataService,
        BsModalService,
        BsModalRef,
        {
          useClass: UserServiceMock,
        },
      ],
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
  it("should NOT have locations before ngOnInit", () => {
    expect(component.locations.length).toBe(
      0,
      "should not have locations before ngOnInit"
    );
  });

  it("should DISPLAY Locations", () => {
    const compiled = fixture.nativeElement.querySelectorAll(
      ".subheader__title"
    );
    expect(compiled.length).toBe(1, "should display all locations list");
  });

  it("should call onClick method", () => {
    fixture.detectChanges();
    const onClickMock = spyOn(component, "newAddLocation");
    fixture.debugElement
      .query(By.css("button"))
      .triggerEventHandler("click", null);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should auto click on NewAddLocation Button", async(() => {
    spyOn(component, "newAddLocation");
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();

    fixture.whenStable().then(() => {
      expect(component.newAddLocation).toHaveBeenCalled();
    });
  }));

  it("should get the user List via refresh function", fakeAsync(() => {
    component.getLocation();
    tick();
    fixture.detectChanges();
    expect(component.locations.length).toBe(
      1,
      "Location list after function call"
    );
  }));

  // it("#getValue should return stubbed value from a spy", () => {
  //   const { service, stubValue, valueServiceSpy } = setup();
  //   expect(service.getLocation()).toBe(
  //     stubValue,
  //     "service returned stub value"
  //   );
  //   expect(valueServiceSpy.getValue.calls.count()).toBe(
  //     1,
  //     "spy method was called once"
  //   );
  //   expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
  //     stubValue
  //   );
  // });
  // it("should render title ", async(() => {
  //   const fixture = TestBed.createComponent(LocationsComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.queryAll(By.css(".subheader__title"));
  //   expect(compiled[0].nativeElement).toContain("Locations");
  // }));
  // describe("after get dashboard heroes", () => {
  //   let router: Router;

  //   // Trigger component so it gets heroes and binds to them
  //   beforeEach(async(() => {
  //     router = fixture.debugElement.injector.get(Router);
  //     fixture.detectChanges(); // runs ngOnInit -> getHeroes
  //     fixture
  //       .whenStable() // No need for the `lastPromise` hack!
  //       .then(() => fixture.detectChanges()); // bind to heroes
  //   }));

  //   it("should HAVE heroes", () => {
  //     expect(component.locations.length).toBeGreaterThan(
  //       0,
  //       "should have heroes after service promise resolves"
  //     );
  //   });

  //   it("should DISPLAY heroes", () => {
  //     // Find and examine the displayed heroes
  //     // Look for them in the DOM by css class
  //     const heroes = fixture.nativeElement.querySelectorAll("dashboard-hero");
  //     expect(heroes.length).toBe(4, "should display 4 heroes");
  //   });

  //   // it("should tell ROUTER to navigate when hero clicked", () => {
  //   //   // heroClick(); // trigger click on first inner <div class="hero">

  //   //   // args passed to router.navigateByUrl() spy
  //   //   const spy = router.navigateByUrl as jasmine.Spy;
  //   //   const navArgs = spy.calls.first().args[0];

  //   //   // expecting to navigate to id of the component's first hero
  //   //   const id = component.locations[0].id;
  //   //   expect(navArgs).toBe(
  //   //     "/heroes/" + id,
  //   //     "should nav to HeroDetail for first hero"
  //   //   );
  //   // });
  // });
});
