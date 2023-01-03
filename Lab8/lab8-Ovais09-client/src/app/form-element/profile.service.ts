import { Injectable } from '@angular/core';
import { Profile } from './model/Profile';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import {ApolloQueryResult, FetchResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apollo: Apollo) { }

  public getProfiles(): Observable<ApolloQueryResult<any>> {
    return this.apollo.query<any>({
      query: gql`
        query {
          profiles {
            firstName
            lastName
            phoneNumber
            email
          }
        }
      `
    });
  }

  public addProfile(profile: Profile): Observable<FetchResult<any>> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation createProfile($firstName: String!, $lastName: String!, $phoneNumber: String!, $email: String!) {
          createProfile(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, email: $email) {
            firstName
            lastName
            phoneNumber
            email
          }
        }
      `,
      variables: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        phoneNumber: profile.phoneNumber,
        email: profile.email
      }
    });
  }


}
