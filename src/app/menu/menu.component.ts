import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  firstName: String = 'Master';
  lastName: String = 'Yoda';

  num1: number = 10;
  num2: number = 20;

  trainingName: String = 'Angular';
  trainingDuration: number = 10;

  constructor() {}

  ngOnInit() {}
}
