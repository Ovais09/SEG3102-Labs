import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../book-model/user';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  transform(value: User[] ): string {
    return value.map((user) => `${user.firstName}, ${user.lastName}`).join(' <b>and</b> ');
  }
}
