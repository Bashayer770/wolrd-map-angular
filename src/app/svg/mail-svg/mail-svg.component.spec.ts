import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSvgComponent } from './mail-svg.component';

describe('MailSvgComponent', () => {
  let component: MailSvgComponent;
  let fixture: ComponentFixture<MailSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
