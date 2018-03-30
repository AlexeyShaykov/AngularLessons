import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ["name", "counterValue"] // два способа задание входящих свойств
})
export class CounterComponent implements OnInit, OnChanges {
  name: string = 'default name';
  counterValue: number = 0;
  // @Input()
  // counterValue: number = 0;

// переименовка свойства
  @Input('step')
  counterStep: number = 1;

  constructor() { }

  ngOnInit() {
    console.log('onInit ');
  }

  // ngOnChanges() {
  //   console.log('onChange call ', this.counterValue);
  // }

  ngOnChanges(changes : { [propertyName: string]: SimpleChange }) {
    console.log(' onChange call ');
    for (let propName in changes) {
      console.log(`${propName} - ${changes[propName].currentValue} -- ${changes[propName].previousValue}`)
    }
  }

  increment() {
    this.counterValue += this.counterStep;
  }
}
