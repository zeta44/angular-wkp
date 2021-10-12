import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-page',
  templateUrl: './comp-page.component.html',
  styleUrls: ['./comp-page.component.css']
})
export class CompPageComponent implements OnInit {

  code_comp:string = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'hello-world',
    template: \`
      <h2>Hello World</h2>
      <p>This is my first component!</p>
    \`
  })
  export class HelloWorldComponent {
    // The code in this class drives the component's behavior.
  }
  `
  code_seletor:string =`
  <hello-world>
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  </hello-world>
  
  `
  constructor() { }

  ngOnInit(): void {
  }

}
