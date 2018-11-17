import { TestBed } from '@angular/core/testing';

import { ResponseSnakeCaseToCamelCaseService } from './response-snake-case-to-camel-case.service';

describe('ResponseSnakeCaseToCamelCaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponseSnakeCaseToCamelCaseService = TestBed.get(ResponseSnakeCaseToCamelCaseService);
    expect(service).toBeTruthy();
  });
});
