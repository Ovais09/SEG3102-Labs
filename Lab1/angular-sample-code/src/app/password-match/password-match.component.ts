import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-match',
  templateUrl: './password-match.component.html',
  styleUrls: ['./password-match.component.css']
})
export class PasswordMatchComponent implements OnInit {
  passwd: string;
  confpassd: string;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }
}
