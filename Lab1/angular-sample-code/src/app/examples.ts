import {ReplaySubject} from 'rxjs';


const subject$ = new ReplaySubject(2);
const observer1 = {next: (v) => console.log(`observer1: ${v}`)};
const observer2 = {next: (v) => console.log(`observer2: ${v}`)};

subject$.subscribe(observer1);
subject$.next(1);
subject$.next(2);
subject$.subscribe(observer2);
subject$.next(3);
