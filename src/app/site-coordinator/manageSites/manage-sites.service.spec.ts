import { TestBed } from '@angular/core/testing';

import { ManageSitesService } from './manage-sites.service';

describe('ManageSitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageSitesService = TestBed.get(ManageSitesService);
    expect(service).toBeTruthy();
  });
});
