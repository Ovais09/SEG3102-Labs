import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ElementEntry} from './element-entry'

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.css']
})
export class AddElementComponent implements OnInit {

  elements: ElementEntry[] = []
  currentElement: ElementEntry | null = null

  constructor() { }

  ngOnInit(): void {
  }

  add(inputValue: string): void {
    const newElement = new ElementEntry(inputValue)
    this.elements = [newElement, ...this.elements]
    console.table(this.elements)
  }

}
