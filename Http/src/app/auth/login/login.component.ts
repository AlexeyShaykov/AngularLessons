import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
  private fb: FormBuilder,
  private router: Router, private service: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  // private buildForm() {
  //   this.authForm = this.fb.group({
  //     login: ["", Validators.required],
  //     password: ["", Validators.compose([Validators.required, Validators.minLength(5)]),
  //       this.validPassword.bind(this)]
  //   });
  // }
  private buildForm() {
    this.authForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }
  public checkError(element: string, errorType: string) {
    return this.authForm.get(element).hasError(errorType) &&
      this.authForm.get(element).touched;
  }

  public goToProducts() {
    console.log('ready go to products');
    this.router.navigate(['/']);
  }

  public onSubmit(authForm: FormGroup) {
    // const {login, password} = authForm.value;
    const login = authForm.get('login');
    const password = authForm.get('password');
    console.log('this is login ', login);
    console.log('this is password ', password);
    this.service.checkUser(login.value, password.value).subscribe(
      result => this.goToProducts(),
      error => console.log('caught error login ', error)
    );
  }
}
