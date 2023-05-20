import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input('person') person: any;

  constructor() {}

  getTextSize(person: any) {
    if (person.country == 'IN') return '50';
    else if (person.country == 'US') return '40';
    else if (person.country == 'UK') return '30';
    else return '20px';
  }

  ngOnInit() {
    console.log(this.person);
  }
}
