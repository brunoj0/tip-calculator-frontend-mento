import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipPercentChooserComponent } from './tip-percent-chooser.component';

describe('TipPercentChooserComponent', () => {
  let component: TipPercentChooserComponent;
  let fixture: ComponentFixture<TipPercentChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipPercentChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipPercentChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
