import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  timeCount = 0;
  private timeObserver$: Observable<number>;
  private timeObserverSubscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
  }

  startCount() {
    this.timeObserver$ = interval(1000);
    this.timeObserverSubscription = this.timeObserver$.subscribe((_) => this.timeCount++);
  }

  resetCount() {
    this.timeCount = 0;
  }

  stopCount() {
    this.timeObserverSubscription.unsubscribe();
  }
}

