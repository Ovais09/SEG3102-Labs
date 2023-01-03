import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

function categoryValidator(control: FormControl): { [s: string]: boolean } | null {
  const validCategories = ['Kids', 'Tech', 'Cook'];
  if (!validCategories.includes(control.value)) {
    return {invalidCategory: true};
  }
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  bookForm = new FormGroup({
    category: new FormControl('', [Validators.required, categoryValidator]),
    title: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    author: new FormControl(''),
    year: new FormControl(''),
    description: new FormControl('')
  });

  constructor() { }

  get category() {return this.bookForm.get('category'); }

  get title() {return this.bookForm.get('title'); }

  get cost() {return this.bookForm.get('cost'); }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.bookForm.value);
  }
}
