import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSvgComponent } from './user-svg.component';

describe('UserSvgComponent', () => {
  let component: UserSvgComponent;
  let fixture: ComponentFixture<UserSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
