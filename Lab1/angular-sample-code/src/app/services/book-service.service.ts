import { Injectable } from '@angular/core';
import {Book} from '../book2-model/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private books = [
    new Book(1001, 'Tech', 'Introduction to Angular', 50.25, 'Bob T', 2017),
    new Book(1002, 'Tech', 'Angular Advanced Concepts', 125.95, 'Zorb Tar', 2019),
    new Book(1003, 'Kids', 'A Fantastic Story', 12.25, 'Jane C', 2009),
    new Book(1004, 'Cook', 'The Best Shawarmas', 18.99, 'Chef Z', 1978),
    new Book(1005, 'Tech', 'Angular Demystified', 210.50, 'Zorb Tar', 2020)
  ];

  constructor() {}
  public getBooks(): Book[] {
    return this.books;
  }

  public addBook(b: Book) {
    this.books.push(b);
  }
}
