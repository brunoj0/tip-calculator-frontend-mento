import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-summary',
  templateUrl: './amount-summary.component.html',
  styleUrls: ['./amount-summary.component.scss']
})
export class AmountSummaryComponent implements OnInit {
  @Input() amount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
