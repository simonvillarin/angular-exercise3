import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent {
  @Input('book') book: Book | undefined;
  @Output() actionEmitter: EventEmitter<number> = new EventEmitter<number>();

  edit = (id: number) => {
    this.actionEmitter.emit(this.book?.id);
    console.log(`Edit book id: ${id}`);
  };

  delete = (id: number) => {
    this.actionEmitter.emit(this.book?.id);
    console.log(`Delete book id: ${id}`);
  };
}
