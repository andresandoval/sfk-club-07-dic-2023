import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForRoutingModule } from './ng-for-routing.module';
import { NgForComponent } from './ng-for.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    NgForComponent
  ],
  imports: [
    CommonModule,
    NgForRoutingModule,
    HttpClientModule
  ]
})
export class NgForModule { }
