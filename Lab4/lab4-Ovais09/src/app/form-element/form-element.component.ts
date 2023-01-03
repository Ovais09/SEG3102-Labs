import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.css']
})
export class FormElementComponent implements OnInit {




  // formaddress = this.builder.group({
  //   name: ['', Validators.required],
  // })

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // })

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[1-9][0-9][0-9][1-9][0-9][0-9][0-9][0-9][0-9][0-9]$') ]],
    email: ['', [Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')]]
  });



  onSubmit(fname: HTMLInputElement, lname: HTMLInputElement, phonenumber: HTMLInputElement, emailNumber: HTMLInputElement, bigForm: HTMLFormElement) {
    console.warn(this.profileForm.value)
    console.log(this.profileForm)
    fname.value = ''
    lname.value = ''
    phonenumber.value = ''
    emailNumber.value = ''
    this.profileForm.patchValue({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''  
    });

    bigForm.style.display = 'none'
  }


  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street'
  //     }
  //   });
  // }

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  // get fname(): AbstractControl<string> {
  //   return <AbstractControl>this.formaddress.get('fname');
  // }

  // onSubmit() {
  //   console.log(this.formaddress);
  // }

}
