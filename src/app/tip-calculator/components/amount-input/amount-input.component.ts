import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
  control = new FormControl();
  _onTouched: Function;

  readonly iconsEnum = Icon;

  inputValue = '';
  onChange: Function;
  constructor() { }


  ngOnInit(): void {
  }

  writeValue(value: any) {
    this.control.setValue(value);
  }

  registerOnChange(fn: (value:any) => void) {
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: Function) {
    this._onTouched = fn;
  }
}
