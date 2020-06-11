import { TestBed } from '@angular/core/testing';

import { PreloadStratagyService } from './preload-stratagy.service';

describe('PreloadStratagyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreloadStratagyService = TestBed.get(PreloadStratagyService);
    expect(service).toBeTruthy();
  });
});
