import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import * as R from 'ramda';
import { Container } from '../interfaces/container.interface';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  showNewCardField = false;


  @Input('containerInfo') containerInfo: Container;
  @Input('cards') cards: Observable<any>; // TODO: Create an card interface
  @Output("delete") deleteEventEmitter = new EventEmitter<Container>();


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
  }


  public deleteContainer() {
    this.deleteEventEmitter.emit(this.containerInfo);
  }

}
