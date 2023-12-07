import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgForComponent} from "../ng-for/ng-for.component";
import {DeferPocComponent} from "./defer-poc.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DeferPocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeferPocRoutingModule { }
