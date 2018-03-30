import { TestBed, inject } from '@angular/core/testing';

import { AdminQuardService } from './admin-quard.service';

describe('AdminQuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminQuardService]
    });
  });

  it('should be created', inject([AdminQuardService], (service: AdminQuardService) => {
    expect(service).toBeTruthy();
  }));
});
