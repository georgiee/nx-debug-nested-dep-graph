import { async, TestBed } from '@angular/core/testing';
import { BModule } from './b.module';

describe('BModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BModule).toBeDefined();
  });
});
