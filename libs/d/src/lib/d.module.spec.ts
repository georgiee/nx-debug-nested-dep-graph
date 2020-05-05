import { async, TestBed } from '@angular/core/testing';
import { DModule } from './d.module';

describe('DModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DModule).toBeDefined();
  });
});
