import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObervablesComponent } from './obervables/obervables.component';

const routes: Routes = [
  { path: 'obervables', component: ObervablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
