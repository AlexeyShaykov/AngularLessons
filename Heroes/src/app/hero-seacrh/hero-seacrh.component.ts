import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-seacrh',
  templateUrl: './hero-seacrh.component.html',
  styleUrls: ['./hero-seacrh.component.css']
})
export class HeroSeacrhComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {}

  seach(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(300),

      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHero(term))
    );
  }

}
