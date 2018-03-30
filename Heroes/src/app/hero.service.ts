import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  private heroesUrl: string = 'api/heroes';
  public HEROES: Hero[] = [];
  private httpOptions: object = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   // Todo: send the message _after_ fetching the heroes
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetch heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  getTestJsonData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      result => console.log('get methods responce ', result),
      error => console.log(error.statusText)
    );
  }



  // getHeroes() {
  //     return new Promise<Hero[]>((resolve, reject) => {
  //       this.http.get<Hero[]>(this.heroesUrl).toPromise().then(
  //         res => {
  //           this.HEROES = res;
  //           resolve(res);
  //         }
  //       )
  //     });
  // }

  getHero(id: number): Observable<Hero> {
    const url: string = `${this.heroesUrl}/${id}`;
    // Todo: send the message _after_ fetching the hero
    return this.http.get<Hero>(url).pipe(
      tap(() => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update hero id={$hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id={$id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHero(term: string): Observable<Hero[]> {
    console.log('search Hero ', term);
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>('api/heroes/?name=${term}').pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('seacrhHero', []))
    );
  }
}
