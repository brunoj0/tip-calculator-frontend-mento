import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-summary',
  templateUrl: './tip-summary.component.html',
  styleUrls: ['./tip-summary.component.scss']
})
export class TipSummaryComponent implements OnInit {
  @Input() total: string;
  @Input() tipAmount: string;
  constructor() { }

  ngOnInit(): void {
  }

}
