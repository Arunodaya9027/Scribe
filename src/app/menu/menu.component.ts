import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  name: String = '';

  firstName: String = 'Master';
  lastName: String = 'Yoda';

  trainingName: String = 'Angular';
  trainingDuration: number = 10;

  google: String = 'https://www.google.com';
  logo: String =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';

  button: boolean = false;
  placeholder: String = 'Enter your name';

  num1: number = 10;
  num2: number = 20;
  num3: number = 0;
  num4: number = 0;

  sum1: number = 30;
  sum2: number = 0;

  showGoogleButton: Boolean = false;

  codeName: String = 'Master Yoda';

  people: any[] = [
    {
      name: 'Master Yoda',
      age: 900,
      country: 'IN',
    },
    {
      name: 'Master Windu',
      age: 90,
      country: 'US',
    },
    {
      name: 'Master Kenobi',
      age: 50,
      country: 'UK',
    },
    {
      name: 'Master Skywalker',
      age: 30,
      country: 'FR',
    },
    {
      name: 'Sherlock Palpatine',
      age: 70,
      country: 'DE',
    },
    {
      name: 'Last Jedi',
      age: 30,
      country: 'GR',
    },
  ];

  constructor() {}

  sayHello() {
    alert('Hello');
  }

  log(ev: any) {
    console.log(ev.target.value);
  }

  change() {
    if (this.placeholder != 'Enter your name')
      this.placeholder = 'Enter your name';
    else this.placeholder = this.firstName;
  }

  clear() {
    this.num1 = 0;
    this.num2 = 0;
    this.sum1 = 0;
  }

  add() {
    this.sum1 = this.num1 + this.num2;
  }

  clear2() {
    this.num3 = 0;
    this.num4 = 0;
    this.sum2 = 0;
  }

  add2() {
    this.sum2 = this.num4 + this.num3;
  }

  toogleGoogleButton() {
    this.showGoogleButton = !this.showGoogleButton;
  }

  shouldDisplayGoogleButton() {
    if (this.codeName == 'Master Yoda') return true;
    else return false;
  }

  ngOnInit() {}
  onPersonClicked() {
    console.log('Person was clicked');
  }
}
