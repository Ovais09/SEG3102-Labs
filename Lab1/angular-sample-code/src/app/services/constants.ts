import {InjectionToken, Injector} from '@angular/core';

export const MY_TITLE = new InjectionToken<string>('MyTitle', {
  providedIn: 'root',
  factory: () => 'Books Inventory List'
}) ;

/*
Alternative
export const MY_TITLE = new InjectionToken<string>('MyTitle');
add {provide: MY_TITLE, useValue: 'This is My Title'} to providers array in app.module
*/
export const MESSAGE = new InjectionToken<string>('Message');
export const injector =
  Injector.create({providers: [{provide: MESSAGE, useValue: 'Hello and Welcome'}]});
