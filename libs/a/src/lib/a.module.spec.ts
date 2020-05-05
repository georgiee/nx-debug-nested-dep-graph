import { async, TestBed } from '@angular/core/testing';
import { AModule } from './a.module';

describe('AModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AModule).toBeDefined();
  });
});
