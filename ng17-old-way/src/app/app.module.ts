import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterLink,
        RouterLinkActive,
        RouterLink,
        RouterLinkActive
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
