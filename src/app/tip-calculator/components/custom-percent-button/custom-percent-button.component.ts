import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-percent-button',
  templateUrl: './custom-percent-button.component.html',
  styleUrls: ['./custom-percent-button.component.scss', '../percent-button/percent-button.component.scss']
})
export class CustomPercentButtonComponent {
  @Output() buttonValueChanged =  new EventEmitter<string>();
  
  constructor() { }

  percentChanged($event): void {
    this.buttonValueChanged.emit($event.target.value);
  }
}
