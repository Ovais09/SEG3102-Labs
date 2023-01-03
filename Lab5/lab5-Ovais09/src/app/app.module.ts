import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormElementComponent } from './form-element/form-element.component';
import { TableElementComponent } from './table-element/table-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormElementComponent,
    TableElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
