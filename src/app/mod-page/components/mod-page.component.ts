import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod-page',
  templateUrl: './mod-page.component.html',
  styleUrls: ['./mod-page.component.css']
})
export class ModPageComponent implements OnInit {

  module_exe:string =
  `
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  @NgModule({
    imports:      [ BrowserModule ],
    providers:    [ Logger ],
    declarations: [ AppComponent ],
    exports:      [ AppComponent ],
    bootstrap:    [ AppComponent ]
  })
  export class AppModule { }`
  constructor() { }

  ngOnInit(): void {
  }

}
