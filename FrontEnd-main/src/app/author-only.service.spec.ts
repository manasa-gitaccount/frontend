import { TestBed } from '@angular/core/testing';

import { AuthorOnlyService } from './author-only.service';

describe('AuthorOnlyService', () => {
  let service: AuthorOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
