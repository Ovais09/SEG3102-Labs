import { Injectable } from '@angular/core';
import {Author, Book} from '../model/book';
import {Apollo, gql} from "apollo-angular";
import {Observable} from "rxjs";
import {ApolloQueryResult, FetchResult} from "@apollo/client/core";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 constructor(private apollo: Apollo) {}

  public getBook(bookNumber: number): Observable<ApolloQueryResult<any>> {
    return this.apollo
    .query<any>({
      query: gql`
        query($bookNumber: Int!) {
          bookByNumber(bookNumber: $bookNumber) {
            bookId
            bookNumber
            category
            title
            cost
            description
            authors {
              firstName
              lastName
            }
          }
        }
      `,
      variables: {
        bookNumber
      }
    });
  }

  public addBook(b: Book): Observable<FetchResult<unknown>> {
    return this.apollo.mutate({
        mutation: gql`
          mutation newBook($bookNumber: Int!,
            $category: String!,
            $title: String!,
            $cost: Float!,
            $year: String,
            $description: String){
            newBook(bookNumber: $bookNumber,
              category: $category,
              title: $title,
              cost: $cost,
              year: $year,
              description: $description) {
              bookId
            }
          }
        `,
        variables: {
          bookNumber: b.bookNumber,
          category: b.category,
          title: b.title,
          cost: b.cost,
          year: b.year,
          description: b.description
        }
      }
    );
  }

  addAuthor(author: Author): Observable<FetchResult<unknown>> {
    return this.apollo.mutate({
        mutation: gql`
          mutation newAuthor($bookNumber: Int!,
            $firstName: String!,
            $lastName: String!){
            newAuthor(bookNumber: $bookNumber,
              firstName: $firstName,
              lastName: $lastName) {
              firstName
              lastName
            }
          }
        `,
        variables: {
          bookNumber: author.bookNumber,
          firstName: author.firstName,
          lastName: author.lastName
        }
      }
    );
  }
}
