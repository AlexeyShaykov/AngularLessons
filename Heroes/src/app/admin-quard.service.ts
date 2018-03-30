import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminQuardService implements CanActivate {

  constructor() { }

  canActivate() {
    let value: boolean = false;
    return value;
  }

}
