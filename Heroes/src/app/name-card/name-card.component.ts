import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css'],
  inputs: ["firstName", "lastName"]
})
export class NameCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName: string;

  private _lastName: string;

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
