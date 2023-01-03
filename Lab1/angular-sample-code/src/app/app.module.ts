import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { AsyncObservablePipeComponent } from './async-observable-pipe/async-observable-pipe.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { PasswordMatchComponent } from './password-match/password-match.component';
import { NgstyleExampleComponent } from './ngstyle-example/ngstyle-example.component';
import { NgclassExampleComponent } from './ngclass-example/ngclass-example.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { DynamicFormNoComponent } from './dynamic-form-no/dynamic-form-no.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { NamesPipe } from './pipes-examples/names.pipe';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ParentComponent } from './component-comm/parent/parent.component';
import { Child1Component } from './component-comm/child1/child1.component';
import { Child2Component } from './component-comm/child2/child2.component';
import { Propertybinding1Component } from './propertybinding/propertybinding1/propertybinding1.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    AsyncObservablePipeComponent,
    PipesExamplesComponent,
    TemplateFormComponent,
    ReactiveFormBuilderComponent,
    DynamicFormComponent,
    PasswordMatchComponent,
    ReactiveFormComponent,
    NgstyleExampleComponent,
    NgclassExampleComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent,
    NgForExampleComponent,
    DynamicFormNoComponent,
    ServiceExampleComponent,
    BookEntryComponent,
    NamesPipe,
    StopwatchComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Propertybinding1Component,
    TwowaybindingComponent
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
