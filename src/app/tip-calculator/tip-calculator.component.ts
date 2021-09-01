import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { forbiddenValueValidator } from '../shared/directives/forbidden-value.directive';
import { Icon } from '../shared/enums/icon.enum';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.scss']
})
export class TipCalculatorComponent implements OnInit {
  readonly Icon = Icon;

  total$: Observable<string>;
  tipAmount$: Observable<string>;

  calculatorFormGroup = new FormGroup({
    bill: new FormControl(null,
      forbiddenValueValidator(0)),
    tipPercent: new FormControl(),
    numberOfPeople: new FormControl(null, forbiddenValueValidator(0)),
  })

  constructor() { }

  ngOnInit(): void {
    this.tipAmount$ = combineLatest([
      this.calculatorFormGroup.get('bill').valueChanges,
      this.calculatorFormGroup.get('tipPercent').valueChanges,
      this.calculatorFormGroup.get('numberOfPeople').valueChanges,
    ]).pipe(
      tap(([bill, tipPercent, numberOfPeople]) => console.log(bill && tipPercent && numberOfPeople)),
      filter(([bill, tipPercent, numberOfPeople]) => bill && tipPercent && numberOfPeople),
      map(([bill, tipPercent, numberOfPeople]) => parseInt(bill) * parseInt(tipPercent) / 100 / numberOfPeople),
      map(totalAmount => totalAmount.toFixed(2)),
      startWith('0.00')
    );

    this.total$ = combineLatest([
      this.calculatorFormGroup.get('bill').valueChanges,
      this.calculatorFormGroup.get('numberOfPeople').valueChanges
    ]).pipe(
      filter(([bill, numberOfPeople]) => bill && numberOfPeople),
      map(([bill, numberOfPeople]) => parseInt(bill) / parseInt(numberOfPeople)),
      map(totalAmount => totalAmount.toFixed(2)),
      startWith('0.00')
    );
  }

  resetForm() {
    this.calculatorFormGroup.reset();
  }
}
