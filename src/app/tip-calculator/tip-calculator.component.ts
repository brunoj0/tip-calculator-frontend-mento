import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
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

  formGroup = new FormGroup({
    bill: new FormControl(null,
      forbiddenValueValidator("0")),
    tipPercent: new FormControl(),
    numberOfPeople: new FormControl(null, forbiddenValueValidator("0")),
  })

  constructor() { }

  ngOnInit(): void {
    this.tipAmount$ = combineLatest([
      this.formGroup.get('bill').valueChanges,
      this.formGroup.get('tipPercent').valueChanges,
      this.formGroup.get('numberOfPeople').valueChanges,
    ]).pipe(
      map(([bill, tipPercent, numberOfPeople]) => parseInt(bill) * parseInt(tipPercent) / 100 / numberOfPeople),
      map(totalAmount => totalAmount.toFixed(2)),
      startWith('0')
    );

    this.total$ = combineLatest([
      this.formGroup.get('bill').valueChanges,
      this.formGroup.get('numberOfPeople').valueChanges
    ]).pipe(
      map(([bill, numberOfPeople]) => parseInt(bill) / parseInt(numberOfPeople)),
      map(totalAmount => totalAmount.toFixed(2)),
      startWith('0')
    );
  }
}
