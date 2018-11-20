import { TestBed } from '@angular/core/testing';

import { TrainingPlansService } from './training-plans.service';

describe('TrainingPlansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingPlansService = TestBed.get(TrainingPlansService);
    expect(service).toBeTruthy();
  });
});
