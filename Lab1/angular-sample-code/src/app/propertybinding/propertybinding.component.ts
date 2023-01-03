import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {
  textColor = 'blue';
  className = 'class2';

  constructor() {
  }

  ngOnInit(): void {
  }

  getColorStyle() {
    return `color: ${this.textColor}`;
  }

  hasClass1() {
    return true;
  }
}
