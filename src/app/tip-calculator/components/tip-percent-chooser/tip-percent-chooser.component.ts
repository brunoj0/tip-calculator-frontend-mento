import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Button } from 'src/app/shared/models/button';

@Component({
  selector: 'app-tip-percent-chooser',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TipPercentChooserComponent,
    multi: true
  }],
  templateUrl: './tip-percent-chooser.component.html',
  styleUrls: ['./tip-percent-chooser.component.scss']
})
export class TipPercentChooserComponent implements ControlValueAccessor {

  defaultValues = ['5', '10', '15', '25', '50'];
  buttons: Button[];
  constructor() {
    this.buttons = this.defaultValues.map(value => ({value, active: false} as Button));
    console.log(this.buttons);
  }

  onChange;

  writeValue(obj: string): void {
    this.changeActiveButton(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {
  }

  percentChange(percent: string) {
    this.changeActiveButton(percent);
    this.onChange(percent);
  }

  private changeActiveButton(percent: string): void {
    this.buttons = this.buttons.map(button => {
      button.value === percent ? button.active = true : button.active = false;
      return button;
    });
  }

}
