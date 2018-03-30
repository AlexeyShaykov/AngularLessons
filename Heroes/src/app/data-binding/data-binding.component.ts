import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  inputA: number = 0;
  inputB: number = 0;
  result: number = 0;
  result2: number = 0;
  selectedId: number;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRouter.params.forEach((params: Params) => {
      this.selectedId = +params["id"];
      console.log('DataBindingComponent OnInit routerParams ', this.selectedId);
    });
  }

  handleCalculate() {
    this.result = this.inputA ** this.inputB;
    console.log(this.result);
  }

  handleCalculated(x, y) {
    this.result2 = x ** y;
  }

  *ligenerator() {
    for (let i = 0; i < 10; i++) {
      yield i;
    }
  }

}
