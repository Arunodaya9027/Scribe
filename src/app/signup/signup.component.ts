import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  first_name: String = '';
  last_name: String = '';

  constructor() {}

  onSubmit(signupform: any) {
    console.log(signupform.value);
  }

  ngOnInit() {}
}
