import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Author, Book} from '../books/model/book';
import {BooksService} from '../books/service/books.service';

function categoryValidator(control: FormControl<string>): { [s: string]: boolean } | null {
  const validCategories = ['Kids', 'Tech', 'Cook'];
  if (!validCategories.includes(control.value)) {
    return {invalidCategory: true};
  }
  return null;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bookForm = this.builder.group({
    bookNumber: ['', [Validators.required, Validators.pattern('[1-9]\\d{3}')]],
    category: ['', [Validators.required, categoryValidator]],
    title: ['', Validators.required],
    cost: ['', [Validators.required, Validators.pattern('\\d+(\\.\\d{1,2})?')] ],
    authors: this.builder.array([]),
    year: [''],
    description: ['']
  });

  get bookNumber(): AbstractControl {return <AbstractControl>this.bookForm.get('bookNumber'); }
  get category(): AbstractControl {return <AbstractControl>this.bookForm.get('category'); }
  get title(): AbstractControl {return <AbstractControl>this.bookForm.get('title'); }
  get cost(): AbstractControl {return <AbstractControl>this.bookForm.get('cost'); }
  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  constructor(private builder: FormBuilder,
              private booksService: BooksService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const book =  new Book(0,
      Number(this.bookForm.value.bookNumber),
      <string>this.bookForm.value.category,
      <string>this.bookForm.value.title,
      Number(this.bookForm.value.cost),
      [],
      Number(this.bookForm.value.year),
      <string>this.bookForm.value.description);
    const authors = <Author[]>this.bookForm.value.authors;
    this.booksService.addBook(book).subscribe(_ => {
      authors.forEach((author: Author) => {
        this.booksService.addAuthor(Object.assign(author, {bookNumber: book.bookNumber}))
          .subscribe(_ => {});
      });
    });
    this.bookForm.reset();
    this.authors.clear();
  }

  addAuthor(): void {
    this.authors.push(
      this.builder.group({
        firstName: [''],
        lastName: ['']
      })
    );
  }

  removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }
}
