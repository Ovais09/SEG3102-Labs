import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddElementComponent } from './add-element/add-element.component';
import { RemoveElementComponent } from './add-element/remove-element/remove-element.component';


@NgModule({
  declarations: [
    AppComponent,
    AddElementComponent,
    RemoveElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
