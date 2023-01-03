import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  public textColor: string;

  constructor() {
    this.textColor = 'blue';
  }

  getColor(): string {
    return this.textColor;
  }

  setColor() {
    this.textColor === 'blue' ? this.textColor = 'red' : this.textColor = 'blue';
  }
}
