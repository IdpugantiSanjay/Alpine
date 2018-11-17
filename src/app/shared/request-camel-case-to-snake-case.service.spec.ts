import { TestBed } from '@angular/core/testing';

import { RequestCamelCaseToSnakeCaseService } from './request-camel-case-to-snake-case.service';

describe('RequestCamelCaseToSnakeCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestCamelCaseToSnakeCaseService = TestBed.get(RequestCamelCaseToSnakeCaseService);
    expect(service).toBeTruthy();
  });
});
