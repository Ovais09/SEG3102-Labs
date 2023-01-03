import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {BooksService} from '../services/books.service';
import {Book} from '../book-model/book';

function categoryValidator(control: FormControl): { [s: string]: boolean } | null {
  const validCategories = ['Kids', 'Tech', 'Cook'];
  if (!validCategories.includes(control.value)) {
    return {invalidCategory: true};
  }
}

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {
  bookForm = this.builder.group({
    category: ['', [Validators.required, categoryValidator]],
    title: ['', Validators.required],
    cost: ['', Validators.required],
    authors: this.builder.array([]),
    year: [''],
    description: ['']
  });
  books: Book[];

  constructor(private builder: FormBuilder,
              private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books: Book[]) => this.books = books);
  }

  onSubmit() {
    const book =  Object.assign({id: 0}, this.bookForm.value);
    this.booksService.addBook(book);
    this.bookForm.reset();
    this.authors.clear();
  }

  get authors() {
    return this.bookForm.get('authors') as FormArray;
  }

  addAuthor() {
    this.authors.push(
      this.builder.group({
        firstName: [''],
        lastName: ['']
      })
    );
  }

  removeAuthor(i: number) {
    this.authors.removeAt(i);
  }
}
