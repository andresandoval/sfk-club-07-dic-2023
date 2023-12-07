import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeferPocRoutingModule } from './defer-poc-routing.module';
import { DeferPocComponent } from './defer-poc.component';
import { LargeComponentComponent } from './large-component/large-component.component';


@NgModule({
  declarations: [
    DeferPocComponent,
    LargeComponentComponent
  ],
  imports: [
    CommonModule,
    DeferPocRoutingModule
  ]
})
export class DeferPocModule { }
