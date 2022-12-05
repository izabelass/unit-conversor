import { Component, OnInit, Output } from '@angular/core';

interface Temperatura {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss']
})
export class UnitSelectionComponent implements OnInit {
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
