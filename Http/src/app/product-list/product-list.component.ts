import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../shared/index';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  errorMessage: string;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  public refresh() {
    this.getProducts();
  }

  public editProduct(product: Product) {
    this.router.navigate(["product", "edit", product.id]);
  }

  public deleteProduct(product: Product) {
    this.router.navigate(["product", "delete", product.id]);
  }

  public createProduct() {
    this.router.navigate(["product", "create"]);
  }

  getProducts() {
    this.service.getProducts().subscribe(
      result => this.products = result,
      error => this.errorMessage = error
    );
  }

}
