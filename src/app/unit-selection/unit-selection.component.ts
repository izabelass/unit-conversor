import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss']
})
export class UnitSelectionComponent implements OnInit {
  temperatures = ["Celsius", "Fahrenheit", "Kelvin"];
  weights = ["Grama", "Quilo", "Libra", "Onça"];
  lenghts = ["Centímetro", "Metro", "Polegadas", "Pés", "Jardas"];

  tempFromValue: string = '';
  tempToValue: string = '';

  weightFromValue: string = '';
  weightToValue: string = '';

  lenghtFromValue: string = '';
  lenghtToValue: string = '';


  tempConversor = new FormGroup({
    convertTempFrom: new FormControl([]),
    convertTempTo: new FormControl([]),
  });

  weightConversor = new FormGroup({
    convertWeightFrom: new FormControl([]),
    convertWeightTo: new FormControl([]),
  });

  lenghtConversor = new FormGroup({
    convertLenghtFrom: new FormControl([]),
    convertLenghtTo: new FormControl([]),
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectedValueRouter(valueFrom: string, valueTo: string): any {
    if (valueFrom !== valueTo) {
      console.log('deu certo');
      this.router.navigate([
        '/conversor',
        valueFrom,
        valueTo,
      ]);
    }
    console.log('deu ruim');
  }


  convertTemperature() {
    console.log('Convertendo de: ', this.tempFromValue + ', para: ', this.tempToValue);
    this.selectedValueRouter(this.tempFromValue, this.tempToValue);

  }

  convertWeight() {
    console.log('Convertendo de: ', this.weightFromValue + ', para: ', this.weightToValue);
    this.selectedValueRouter(this.weightFromValue, this.weightToValue);
  }

  convertLenght() {
    console.log('Convertendo de: ', this.lenghtFromValue + ', para: ', this.lenghtToValue);
    this.selectedValueRouter(this.lenghtFromValue, this.lenghtToValue);
  }

}