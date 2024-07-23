import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockSvgComponent } from './lock-svg.component';

describe('LockSvgComponent', () => {
  let component: LockSvgComponent;
  let fixture: ComponentFixture<LockSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LockSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
