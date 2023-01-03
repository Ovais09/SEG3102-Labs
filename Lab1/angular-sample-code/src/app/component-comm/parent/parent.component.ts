import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.service';

@Component({
  selector: 'app-parent',
  template: `<p>Parent</p>
    <app-child1></app-child1>
    <app-child2></app-child2>
   `,
  styleUrls: ['./parent.component.css'],
  providers: [CommunicationService]
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
