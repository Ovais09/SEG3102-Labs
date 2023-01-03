import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-no',
  templateUrl: './dynamic-form-no.component.html',
  styleUrls: ['./dynamic-form-no.component.css']
})
export class DynamicFormNoComponent implements OnInit {

  itemsForm = new FormGroup({
    items: new FormArray([])
  });

  ngOnInit(): void {
  }

  get items() {
    return this.itemsForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(
      new FormGroup({
        name: new FormControl(''),
        unitPrice: new FormControl(''),
        quantity: new FormControl('')
        })
    );
  }

  formGroup(i: number) {
    return this.items.controls[i] as FormGroup;
  }

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
