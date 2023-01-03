import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {

  public firstName : any
  public lastName: any
  public phoneNumber: any
  public email: any

  constructor(private router: Router,) { 
    
    console.log(this?.router?.getCurrentNavigation()?.extras?.state)
    console.log(history.state.data)
    
    this.firstName = this?.router?.getCurrentNavigation()?.extras?.state?.['firstName']
    this.lastName = this?.router?.getCurrentNavigation()?.extras?.state?.['lastName']
    this.phoneNumber = this?.router?.getCurrentNavigation()?.extras?.state?.['phoneNumber']
    this.email = this?.router?.getCurrentNavigation()?.extras?.state?.['email']
  }

  handleClick() {
   window.location.href = "http://localhost:4200/"
  }

  ngOnInit(): void {
  //  console.log(history.state.data)
  }

}
