import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  itemsForm = this.fb.group({
    items: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get items() {
    return this.itemsForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(
      this.fb.group({
        name: [''],
        unitPrice: [''],
        quantity: ['']
      })
    );
  }

  formGroup(i: number) {
    return this.items.controls[i] as FormGroup;
  }

/*  addItem() {
    this.items.push(this.fb.control(''));
  }*/

  onSubmit() {
    console.log(this.itemsForm.value);
  }
   get nbItems() {
    return this.items.length;
   }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  clearItems() {
    this.items.clear();
  }
}
