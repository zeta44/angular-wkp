import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BiblioPageModule } from './biblio-page';
import { CliPageModule } from './cli-page';
import { CompPageModule } from './comp-page';
import { DataBindingModule } from './data-binding';
import { DirecPageModule } from './direc-page';
import { LandingPageModule } from './landing-page';
import { ModPageModule } from './mod-page';
import { ServicePageModule } from './service-page';


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
    DataBindingModule,
    DirecPageModule,
    ServicePageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
