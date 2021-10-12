import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direc-page',
  templateUrl: './direc-page.component.html',
  styleUrls: ['./direc-page.component.css']
})
export class DirecPageComponent implements OnInit {

  diretiva:string =`
  Os tipos de Diretivas:
  ngStyle - [ngStyle]="{}".
  ngClass - [ngClass]="{}".
  ngIf - *ngIf="expressaoBooleana".
  ngSwitch - [ngSwitch]="attribute".
  ngFor - *ngFor="let value of values".
  `

  constructor() { }

  ngOnInit(): void {
  }

}
