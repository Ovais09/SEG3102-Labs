import { Component, OnInit } from '@angular/core';
import {Book} from '../book2-model/book';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  submitted = false;
  public model: Book;
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(bookForm: NgForm) {
    this.model = Object.assign({id: 0}, bookForm.value);
    bookForm.resetForm();
    this.submitted = true;
  }
  get createdModel() { return JSON.stringify(this.model); }
}
