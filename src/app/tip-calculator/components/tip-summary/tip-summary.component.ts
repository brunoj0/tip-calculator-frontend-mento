import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tip-summary',
  templateUrl: './tip-summary.component.html',
  styleUrls: ['./tip-summary.component.scss']
})
export class TipSummaryComponent implements OnInit {
  @Output() reset = new EventEmitter<void>();
  @Input() total: string;
  @Input() tipAmount: string;
  constructor() { }

  ngOnInit(): void {
  }

  resetClicked() {
    this.reset.emit()
  }
}
