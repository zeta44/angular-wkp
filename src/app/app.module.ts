import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BiblioPageModule } from './biblio-page';
import { CliPageModule } from './cli-page';
import { CompPageModule } from './comp-page';
import { LandingPageModule } from './landing-page';
import { ModPageModule } from './mod-page';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingPageModule,
    CompPageModule,
    ModPageModule,
    CliPageModule,
    BiblioPageModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
