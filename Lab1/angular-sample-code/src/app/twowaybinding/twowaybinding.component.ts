import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent  {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() {
    this.size = 10;
  }
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }


  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
