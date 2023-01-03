import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../model/Profile';
import { ProfileService } from '../profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit, OnDestroy {

  public firstName : any
  public lastName: any
  public phoneNumber: any
  public email: any
  public profilesArray: any = [];
  public subscription!: Subscription

  constructor(private router: Router, private route: ActivatedRoute, private profileService: ProfileService) { 
    
    // console.log(this?.router?.getCurrentNavigation()?.extras?.state)
    // console.log(history.state.data)
    
    // this.firstName = this?.router?.getCurrentNavigation()?.extras?.state?.['firstName']
    // this.lastName = this?.router?.getCurrentNavigation()?.extras?.state?.['lastName']
    // this.phoneNumber = this?.router?.getCurrentNavigation()?.extras?.state?.['phoneNumber']
    // this.email = this?.router?.getCurrentNavigation()?.extras?.state?.['email']
  }

  handleClick() {
   window.location.href = "http://localhost:4200/"
  }

  ngOnInit(): void {
    this.subscription = this.profileService.getProfiles().subscribe((data) => {
      this.profilesArray = data.data.profiles
      console.log(this.profilesArray)
    }
    )
  }

  ngOnDestroy(): void {
      
  }

}
