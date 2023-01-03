import { Component } from '@angular/core';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-child2',
  template: `<div>
    <p>Child 2</p>
    <button (click)="sendMessage()">Send to Child1</button>
    <p>Message from Child1: {{child1Message}}</p>
  </div>`,
  styleUrls: ['./child2.component.css']
})
export class Child2Component  {
  private counter = 0;
  child1Message: string;

  constructor(private communicationService: CommunicationService) {
    this.communicationService.child1to2$.subscribe((value) => this.child1Message = value);
  }

  sendMessage() {
    this.communicationService.sendToChild1(`Child 1 Counter is ${this.counter}`);
    this.counter++;
  }

}
