import { Injectable } from '@angular/core';
import {Book} from '../book-model/book';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[];

  constructor() {
    this.books = new Array<Book>();
  }

  public getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  public addBook(b: Book): Observable<any> {
    console.log(`Book: ${b}`);
    this.books.push(b);
    return of({msg: 'Book successfully added'});
  }
}
