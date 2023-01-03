import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableElementComponent } from './table-element/table-element.component';


const routes: Routes = [
  { path: 'table-element', component: TableElementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TableElementComponent]

