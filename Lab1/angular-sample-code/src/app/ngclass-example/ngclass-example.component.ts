import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-example',
  templateUrl: './ngclass-example.component.html',
  styleUrls: ['./ngclass-example.component.css']
})
export class NgclassExampleComponent implements OnInit {
  classObject = {
    class1: false,
    class2: true,
    class3: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeClass() {
    this.classObject.class1 = true;
    this.classObject.class2 = false;
    this.classObject.class3 = true;
  }
}
