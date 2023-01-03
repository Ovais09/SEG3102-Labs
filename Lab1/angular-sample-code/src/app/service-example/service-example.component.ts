import {Component, Inject, OnInit} from '@angular/core';
import {BookServiceService} from '../services/book-service.service';
import {Book} from '../book-model/book';
import {MY_TITLE, injector, MESSAGE} from '../services/constants';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {
  books: Book[];
  public message: string;

  constructor(private bookservice: BookServiceService,
              @Inject(MY_TITLE) public title: string) { }

  ngOnInit(): void {
    this.books = this.bookservice.getBooks();
    this.message = injector.get(MESSAGE);
  }

}
