import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPercentButtonComponent } from './custom-percent-button.component';

describe('CustomPercentButtonComponent', () => {
  let component: CustomPercentButtonComponent;
  let fixture: ComponentFixture<CustomPercentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPercentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPercentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
