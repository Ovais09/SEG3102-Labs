import { Component, OnInit } from '@angular/core';
import {Book} from '../book2-model/book';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
  styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent implements OnInit {
  books = [
    new Book(1001, 'Tech', 'Introduction to Angular', 50.25, 'Bob T', 2017),
    new Book(1002, 'Tech', 'Angular Advanced Concepts', 125.95, 'Zorb Tar', 2019),
    new Book(1003, 'Kids', 'A Fantastic Story', 12.25, 'Jane C', 2009),
    new Book(1004, 'Cook', 'The Best Shawarmas', 18.99, 'Chef Z', 1978),
    new Book(1005, 'Tech', 'Angular Demystified', 210.50, 'Zorb Tar', 2020)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
