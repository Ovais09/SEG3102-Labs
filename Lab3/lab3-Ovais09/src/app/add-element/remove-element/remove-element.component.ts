import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ElementEntry } from '../element-entry'


@Component({
  selector: 'app-remove-element',
  templateUrl: './remove-element.component.html',
  styleUrls: ['./remove-element.component.css']
})
export class RemoveElementComponent implements OnInit {

  @Input() element?: ElementEntry

  constructor() { }

  ngOnInit(): void {
  }

  removeElement(domElement: any): void {
    domElement.remove()
    
  }

}
