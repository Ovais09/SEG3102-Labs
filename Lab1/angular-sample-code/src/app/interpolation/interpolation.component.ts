import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public user = 'Misko Hevery';
  x = 10;
  logo = '../../assets/uottawa_vertical_logo.png';
  logoWidth = '150';

  constructor() {
    setTimeout(() => this.user = 'Adam Abrons', 100000);
  }

  ngOnInit(): void {
  }

  getMessage(): string {
    return 'Message returned';
  }
}
