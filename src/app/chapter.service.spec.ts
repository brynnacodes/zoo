/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChapterService } from './chapter.service';

describe('ChapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterService]
    });
  });

  it('should ...', inject([ChapterService], (service: ChapterService) => {
    expect(service).toBeTruthy();
  }));
});
