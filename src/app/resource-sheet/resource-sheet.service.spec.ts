import { TestBed } from '@angular/core/testing';

import { ResourceSheetService } from './resource-sheet.service';

describe('ResourceSheetService', () => {
  let service: ResourceSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
