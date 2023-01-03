import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class CommunicationService {
  public child1to2$ = new Subject<string>();
  public child2to1$ = new Subject<string>();
  sendToChild2(value: string) {
    this.child1to2$.next(value);
  }
  sendToChild1(value: string) {
    this.child2to1$.next(value);
  }
}
