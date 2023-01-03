import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstNumber = 0;
  secondNumber = 0;
  result = '';

  add(firstNumber: string, secondNumber: string)  {
    this.firstNumber = Number(firstNumber);
    this.secondNumber = Number(secondNumber);
    this.result = (this.firstNumber + this.secondNumber).toString()
    console.log(this.result)
  }

  subtract(firstNumber: string, secondNumber: string)  {
    this.firstNumber = Number(firstNumber);
    this.secondNumber = Number(secondNumber);
    this.result = (this.firstNumber - this.secondNumber).toString()
    console.log(this.result)
  }

  multiply(firstNumber: string, secondNumber: string)  {
    this.firstNumber = Number(firstNumber);
    this.secondNumber = Number(secondNumber);
    this.result = (this.firstNumber * this.secondNumber).toString()
    console.log(this.result)
  }

  divide(firstNumber: string, secondNumber: string)  {
    this.firstNumber = Number(firstNumber);
    this.secondNumber = Number(secondNumber);
    this.result = (this.firstNumber / this.secondNumber).toString()
    console.log(this.result)
  }

  
}
