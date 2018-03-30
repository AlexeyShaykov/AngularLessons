import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Product, ProductService } from '../shared/index';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  public errorMessage: string;
  public currentProduct: Product

  constructor(private service: ProductService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

    public deleteProduct() {
      this.service.deleteProduct(this.currentProduct).subscribe(
        () => this.goBack(),
        error => this.errorMessage = error
      );
    }
    public goBack() {
      this.router.navigate(['/products']);
    }

  ngOnInit() {
    this.getProductFromRoute();
  }

  private getProductFromRoute() {
    let id = this.activatedRoute.snapshot.params['id'];
    if (!id) return;
    this.service.getProduct(id).subscribe(
      result => this.currentProduct = result,
      error => this.errorMessage = error
    );
  }

}
