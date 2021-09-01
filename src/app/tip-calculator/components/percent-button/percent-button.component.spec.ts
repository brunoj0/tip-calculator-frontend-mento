import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentButtonComponent } from './percent-button.component';

describe('PercentButtonComponent', () => {
  let component: PercentButtonComponent;
  let fixture: ComponentFixture<PercentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
