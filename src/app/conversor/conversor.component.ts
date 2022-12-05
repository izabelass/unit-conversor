import { Component, OnInit, Output } from '@angular/core';

interface Temperatura {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  @Output() selectedValue: string = '';
  selectedCar: string = '';

  unidade: string = '';
  valorAConverter?: any;

  temperaturas: Temperatura[] = [
    { value: 'celsius', viewValue: 'Celsius' },
    { value: 'kelvin', viewValue: 'Kelvin' },
    { value: 'fahreinheit', viewValue: 'Fahreinheit' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  mostraValores(unidade: any, valorAConverter: any) {
    const unidade1: string = unidade.value;
    const valor1: number = valorAConverter;
    console.log(unidade1);
    console.log(valor1);
  }
}