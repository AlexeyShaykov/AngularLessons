import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product, ProductService } from '../shared/index';

@Component({
  selector: 'app-product-create-edit',
  templateUrl: './product-create-edit.component.html',
  styleUrls: ['./product-create-edit.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class ProductCreateEditComponent implements OnInit {
  currentProduct: Product;
  errorMessage: string;
  productForm: FormGroup;

  constructor(private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();
    this.getProductFromRoute();
  }

  public checkError(element: string, errorType: string) {
    return this.productForm.get(element).hasError(errorType) &&
      this.productForm.get(element).touched;
  }

  public onSubmit(productForm: FormGroup) {
    this.currentProduct.name = productForm.value.name;
    this.currentProduct.price = productForm.value.price;

    if(this.currentProduct.id) {
      this.service.updateProduct(this.currentProduct).subscribe(
        () => this.goBack(),
        error => this.errorMessage = error
      );
    } else {
      this.service.addProduct(this.currentProduct).subscribe(
        () => this.goBack(),
        error => this.errorMessage = error
      );
    }
  }

  public goBack() {
    this.router.navigate(['/products']);
  }

  private buildForm() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required]
    });
  }

  private getProductFromRoute() {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.service.getProduct(id).subscribe(
        product => {
          this.currentProduct = product;
          this.productForm.patchValue(this.currentProduct);
        },
        error => this.errorMessage = error
      );
    } else {
      this.currentProduct = new Product(null, null, null);
      this.productForm.patchValue(this.currentProduct);
    }
  }

}
