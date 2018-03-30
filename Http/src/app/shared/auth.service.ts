import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';

// import 'rxjs/Rx';


import { User } from './user';

@Injectable()
export class AuthService implements CanActivate {
  private url = 'http://localhost:2403/users';
  private isLogin: boolean = false;

  constructor(private http: Http, private router: Router) { }

  canActivate() {
    console.log('can auth ', this.isLogin);
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
    return this.isLogin;
  }

  // private getUsers(): Observable<any> {
  //   let users = this.http.get(this.url)
  //       .map(this.extractUsers)
  //       .catch(this.handleError);
  //       return users;
  // }

  public checkUser(login: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, { username: login, password })
          .map(result => {
            this.isLogin = result.ok;
            return this.isLogin;
          })
          .catch(this.handleError);
  }

  // public checkUser(login: string, password: string): Observable<any> {
  //   return Observable.create(observer => {
  //     this.getUsers().subscribe(
  //     users => {
  //       console.log('get users from server ', users);
  //       const result = users.some(user => user.login === login && user.password === password);
  //       observer.next(result);
  //       })
  //     }
  //   )
  // }
  // ()

  // public getProduct(id: string): Observable<any> {
  //   return this.http.get(`${this.url}/${id}`)
  //     .map(this.extractProduct)
  //     .catch(this.handleError);
  // }
  //
  // public addProduct(product: Product): Observable<any> {
  //   console.log('add product ', product);
  //   return this.http.post(this.url, product)
  //     .catch(this.handleError);
  // }
  //
  // public updateProduct(product: Product): Observable<any> {
  //   return this.http.put(`${this.url}/${product.id}`, product)
  //     .catch(this.handleError);
  // }
  //
  // public deleteProduct(product: Product): Observable<any> {
  //   return this.http.delete(`${this.url}/${product.id}`)
  //     .catch(this.handleError);
  // }

  private extractUsers(responce: Response): User[] {
    let res = responce.json();
    let users: User[] = [];
    console.log('extractUsers ', res);
    users = res.map(r => new User(r.login, r.password));
    // for (let i = 0; i < res.length; i++) {
    //   products.push(new Product(res[i].id, res[i].name, res[i].price))
    // }
    return users;
  }

  // private extractUser(responce: Response): Product {
  //   let res = responce.json();
  //   let product = new Product(res.id, res.name, res.price);
  //   return product;
  // }

  private handleError(error: any): any {
    let message = '';

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message =`${error.status} - ${error.statusText || ''} ${errorData}`;
    } else {
      message = error.message ? error.message : error.toString();
    }

    return Observable.throw(message);
  }
}
