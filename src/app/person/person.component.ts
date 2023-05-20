import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input('person') person: any;
  @Output('personCliced') personClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.personClicked.emit();
  }
}
