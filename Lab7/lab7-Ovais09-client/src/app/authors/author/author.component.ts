import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Author } from 'src/app/books/model/book';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../service/authors.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, OnDestroy {

  selectedAuthor!: Author | null;
  private subscription!: Subscription;

  constructor(private route: ActivatedRoute, private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.subscription = this.authorService.getAuthor(id).subscribe(
        (data: Author) => {
          this.selectedAuthor = data;
        },
        (_: any) => {
          this.selectedAuthor = null;
        });
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
