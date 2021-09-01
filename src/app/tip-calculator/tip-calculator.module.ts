import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipCalculatorComponent } from './tip-calculator.component';
import { AmountInputComponent } from './components/amount-input/amount-input.component';
import { PercentButtonComponent } from './components/percent-button/percent-button.component';
import { TipSummaryComponent } from './components/tip-summary/tip-summary.component';
import { TipPercentChooserComponent } from './components/tip-percent-chooser/tip-percent-chooser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AmountSummaryComponent } from './components/amount-summary/amount-summary.component';
import { CustomPercentButtonComponent } from './components/custom-percent-button/custom-percent-button.component';



@NgModule({
  declarations: [
    TipCalculatorComponent,
    AmountInputComponent,
    PercentButtonComponent,
    TipSummaryComponent,
    TipPercentChooserComponent,
    AmountSummaryComponent,
    CustomPercentButtonComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TipCalculatorComponent
  ]
})
export class TipCalculatorModule { }
