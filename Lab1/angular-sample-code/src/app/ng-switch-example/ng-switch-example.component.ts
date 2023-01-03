import { Component, OnInit } from '@angular/core';

export enum UserType {
  Admin = 0,
  Gold = 1,
  Silver = 2,
  Bronze = 3
}

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {
  Type = UserType;
  userType: UserType = UserType.Gold;

  constructor() { }

  ngOnInit(): void {
  }

}
