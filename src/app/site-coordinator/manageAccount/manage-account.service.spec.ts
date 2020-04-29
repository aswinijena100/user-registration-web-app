import { TestBed } from "@angular/core/testing";

import { ManageAccountService } from "./manage-account.service";

describe("ManageAccountService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ManageAccountService = TestBed.get(ManageAccountService);
    expect(service).toBeTruthy();
  });
});
