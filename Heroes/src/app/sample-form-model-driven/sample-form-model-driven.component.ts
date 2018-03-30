import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sample-form-model-driven',
  templateUrl: './sample-form-model-driven.component.html',
  styleUrls: ['./sample-form-model-driven.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class SampleFormModelDrivenComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['user1', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
    // this.loginForm = new FormGroup({
    //   login: new FormControl('user1', Validators.required),
    //   password: new FormControl("", [Validators.required, Validators.minLength(7)])
    // });
  }

  onSumit(loginForm){
    console.log(loginForm.valid);
    console.log(loginForm.value);
  }

}
