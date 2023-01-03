import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-example',
  templateUrl: './ngstyle-example.component.html',
  styleUrls: ['./ngstyle-example.component.css']
})
export class NgstyleExampleComponent implements OnInit {
  styleObject = {
    color: 'blue',
    'background-color': 'white',
    'font-size': '300%',
    'border-style': 'solid',
    'border-width.px': '10'
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle() {
    this.styleObject.color = 'red';
    this.styleObject['font-size'] = null;
    this.styleObject['border-width.px'] = '20';
  }
}
