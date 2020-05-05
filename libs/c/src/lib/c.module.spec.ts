import { async, TestBed } from '@angular/core/testing';
import { CModule } from './c.module';

describe('CModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CModule).toBeDefined();
  });
});
