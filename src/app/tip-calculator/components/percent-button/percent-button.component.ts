import { Component, Input, OnInit } from '@angular/core';
import { Button } from 'src/app/shared/models/button';

@Component({
  selector: 'app-percent-button',
  templateUrl: './percent-button.component.html',
  styleUrls: ['./percent-button.component.scss']
})
export class PercentButtonComponent{
  @Input() button: Button;
  constructor() { }
}
