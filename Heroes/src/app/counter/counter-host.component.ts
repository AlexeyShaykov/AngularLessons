import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-host',
  templateUrl: './counter-host.component.html'
})
export class CounterHostComponent implements OnInit {
  name: string = 'AA';
  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.name = 'BBB';
  }
}
