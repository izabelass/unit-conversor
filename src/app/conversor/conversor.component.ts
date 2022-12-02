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

  temperaturas: Temperatura[] = [
    {value: 'celsius', viewValue: 'Celsius'},
    {value: 'kelvin', viewValue: 'Kelvin'},
    {value: 'fahreinheit', viewValue: 'Fahreinheit'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
