import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepComponent } from './dep/dep.component'
import { EmpComponent } from './emp/emp.component';

const routes: Routes = [
  {path: 'dep', component: DepComponent},
  {path: 'emp', component: EmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepComponent, EmpComponent]
