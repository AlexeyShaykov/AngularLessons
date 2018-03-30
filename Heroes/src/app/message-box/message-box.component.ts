import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  public visible: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  hide() {
    this.visible = !this.visible;
  }

  ngOnChanges() {
    console.log('ng on changes ', this.visible);
  }

}
