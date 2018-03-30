import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-host',
  templateUrl: './timer-host.component.html',
  styleUrls: ['./timer-host.component.css']
})
export class TimerHostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tickHandle1(value) {
    console.log('Tick tickHandle1 - ', value);
  }

  tickHandle2(value) {
    console.log('Tick tickHandle2 - ', value);
  }
}
