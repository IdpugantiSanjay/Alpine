import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input('title') title: string;
  @Input('description') description: string;
  @Input('deadline') deadline: string;
  @Input('createdDate') createdDate: string;
  @Input('tags') tags: string;

  constructor() { }

  ngOnInit() {
  }

}
