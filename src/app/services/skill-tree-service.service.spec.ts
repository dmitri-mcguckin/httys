import { TestBed } from '@angular/core/testing';

import { SkillTreeServiceService } from './skill-tree-service.service';

describe('SkillTreeServiceService', () => {
  let service: SkillTreeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillTreeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
