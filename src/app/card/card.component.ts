import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input('title') title: string;
  @Input('description') description: string;
  @Input('deadline') deadline: string;
  @Input('createdDate') createdDate: string;
  @Input('tags') tags: string;

  @Input('id')
  taskId: string;

  @Input('showActions')
  showActions: boolean = true;

  @Output('delete')
  deleteEvent = new EventEmitter<string>();

  @Output('complete')
  completeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onDeleteButtonClickEvent() {
    this.deleteEvent.emit(this.taskId);
  }

  public onCompleteButtonClickEvent() {
    this.completeEvent.emit(this.taskId);
  }

}
