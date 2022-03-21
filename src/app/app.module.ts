import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { Card01Component } from './card01/card01.component';
import { Card02Component } from './card02/card02.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Card01Component,
    Card02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
