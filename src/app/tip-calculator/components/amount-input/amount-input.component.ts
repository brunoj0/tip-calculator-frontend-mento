import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Icon } from 'src/app/shared/enums/icon.enum';

@Component({
  selector: 'app-amount-input',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AmountInputComponent,
    multi: true
  }],
  templateUrl: './amount-input.component.html',
  styleUrls: ['./amount-input.component.scss']
})
export class AmountInputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string;
  @Input() icon: Icon;
  @Input() error: boolean;

  readonly iconsEnum = Icon;

  inputValue = 0;
  onChange: any;
  constructor() { }


  ngOnInit(): void {
  }

  writeValue(obj: number): void {
    console.log('aa');
    this.inputValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  inputValueChanged($event) {
    this.onChange($event.target.value);
  }
}
