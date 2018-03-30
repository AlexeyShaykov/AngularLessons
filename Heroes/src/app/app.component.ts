import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute, private HS: HeroService) {  }

  goToDataBinding() {
    this.router.navigate(["/data-binding", {id: this.getRandomArbitrary(1,3)}]);
  }

  private getRandomArbitrary(min, max): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnInit() {
    console.log(this.HS.getTestJsonData());
  }
}
