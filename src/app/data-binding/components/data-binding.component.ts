import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  string_Interpolation:string =`
Data Binding
String Interpolation - {{propriedade}}.
Property Bindig - [propriedade]="atributoDoComponente".
Event Bindig - (nomeDoEvento)="metodoDoComponente()".
Two Way Data Binding - [(ngModel)]="propComponent".
`

  constructor() { }

  ngOnInit(): void {
  }

}
