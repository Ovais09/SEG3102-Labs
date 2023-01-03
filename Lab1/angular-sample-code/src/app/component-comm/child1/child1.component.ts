import { Component} from '@angular/core';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-child1',
  template: `<div>
    <p>Child 1</p>
    <button (click)="sendMessage()">Send to Child2</button>
    <p>Message from Child2: {{child2Message}}</p>
  </div>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  private counter = 0;
  child2Message: string;

  constructor(private communicationService: CommunicationService) {
    this.communicationService.child2to1$.subscribe((value) => this.child2Message = value);
  }

  sendMessage() {
    this.communicationService.sendToChild2(`Child 1 Counter is ${this.counter}`);
    this.counter++;
  }

}
