import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';


import { Product } from './product';

@Injectable()
export class ProductService {
  private url = 'http://localhost:2403/products';

  constructor(private http: Http) { }

  public getProducts(): Observable<any> {
    let products = this.http.get(this.url)
        .map(this.extractProducts)
        .catch(this.handleError);
        return products;
  }

  public getProduct(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
      .map(this.extractProduct)
      .catch(this.handleError);
  }

  public addProduct(product: Product): Observable<any> {
    console.log('add product ', product);
    return this.http.post(this.url, product)
      .catch(this.handleError);
  }

  public updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.url}/${product.id}`, product)
      .catch(this.handleError);
  }

  public deleteProduct(product: Product): Observable<any> {
    return this.http.delete(`${this.url}/${product.id}`)
      .catch(this.handleError);
  }

  private extractProducts(responce: Response): Product[] {
    let res = responce.json();
    let products: Product[] = [];
    console.log('extractProduct ', res);
    products = res.map(r => new Product(r.id, r.name, r.price));
    // for (let i = 0; i < res.length; i++) {
    //   products.push(new Product(res[i].id, res[i].name, res[i].price))
    // }
    return products;
  }

  private extractProduct(responce: Response): Product {
    let res = responce.json();
    let product = new Product(res.id, res.name, res.price);
    return product;
  }

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
