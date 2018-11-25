import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  showNewCardField = false;

  @Input('listName') listName: string;
  @Input('cards') cards: Observable<any>; // TODO: Create an card interface

  constructor() { }

  ngOnInit() {
  }

}
