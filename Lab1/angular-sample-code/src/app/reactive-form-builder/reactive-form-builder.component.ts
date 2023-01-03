import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';

function categoryValidator(control: FormControl): { [s: string]: boolean } | null {
  const validCategories = ['Kids', 'Tech', 'Cook'];
  if (!validCategories.includes(control.value)) {
    return {invalidCategory: true};
  }
}

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html',
  styleUrls: ['./reactive-form-builder.component.css']
})
export class ReactiveFormBuilderComponent implements OnInit {
  bookForm = this.builder.group({
    category: ['', [Validators.required, categoryValidator]],
    title: ['', Validators.required],
    cost: ['', Validators.required],
    authors: this.builder.array([]),
    year: [''],
    description: ['']
  });

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.bookForm.value);
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
