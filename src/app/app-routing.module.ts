import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearTaxComponent } from './clear-tax/clear-tax.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', component: ClearTaxComponent },
  {
    path: 'form',
    component: TaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
