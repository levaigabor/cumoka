import { TestBed } from '@angular/core/testing';

import { TrainingplansService } from './trainingplans.service';

describe('TrainingplansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingplansService = TestBed.get(TrainingplansService);
    expect(service).toBeTruthy();
  });
});
