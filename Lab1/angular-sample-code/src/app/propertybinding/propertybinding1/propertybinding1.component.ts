import { Component} from '@angular/core';

@Component({
  selector: 'app-propertybinding1',
  templateUrl: './propertybinding1.component.html',
  styleUrls: ['./propertybinding1.component.css']
})
export class Propertybinding1Component  {
  textContent = 'Text to be shown';
  showButton = true;

  constructor() {
    setTimeout(() => this.showButton = false, 2000);
  }

}
