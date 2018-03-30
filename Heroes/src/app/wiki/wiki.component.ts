import { Component, OnInit } from '@angular/core';

import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  items: any[] = [];

  constructor(private ws: WikiService) { }

  ngOnInit() {
  }

  search(term: string) {
    this.ws.search(term).subscribe(
      response => this.items = response
    );
  }

}
