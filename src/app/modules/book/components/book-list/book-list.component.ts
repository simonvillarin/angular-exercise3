import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = this.bookService.getBooks();
  id: number = 0;

  constructor(private bookService: BookService) {}

  getId = (id: number) => {
    this.id = id;
    // console.log(id);
  };
}
