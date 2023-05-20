import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  name: String = '';
  age: any;

  people: any[] = [
    {
      name: 'Master Hero',
      age: 49,
    },
    {
      name: 'Master Windu',
      age: 90,
    },
    {
      name: 'Master Kenobi',
      age: 50,
    },
    {
      name: 'Master Skywalker',
      age: 30,
    },
    {
      name: 'Sherlock Palpatine',
      age: 70,
    },
    {
      name: 'Last Jedi',
      age: 30,
    },
  ];

  constructor() {}

  onClick() {
    this.people.push({
      name: this.name,
      age: this.age,
    });
    this.name = '';
    this.age = null;
  }

  ngOnInit() {}
  onPersonClicked() {
    console.log('Person was clicked');
  }
}
