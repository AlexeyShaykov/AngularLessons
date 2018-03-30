import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class UserFormComponent implements OnInit {

  roles: string[] = ['Guest', 'Moderator', 'Administrator'];

  model: User = new User(0, '', '', 0);
  str: string = '';

  summitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.summitted = true;
    console.log(this.userForm.value);
  }

  get diagnostic() { return JSON.stringify(this.model); }

  @ViewChild('myForm') userForm;

  ngAfterViewInit() {
    console.log('subscribe');
    console.log(this.userForm);
    console.log(this.userForm.form);
    this.userForm.control.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    console.log('before if');
    if( !this.userForm) return;
    console.log('caught value form control changes ', data);
    console.log(this.userForm.form);
  }
}
