import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent {
  date = new Date(2015, 4, 23);
  lowerCaseText = 'this is in lower case';
  object = {name: 'John', city: 'Ottawa', age: 18};
}
