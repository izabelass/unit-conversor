import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss']
})
export class UnitSelectionComponent implements OnInit {
  temperatures = ["Celsius", "Fahrenheit", "Kelvin"];
  weights = ["Grama", "Quilo", "Libra", "Onça"];
  lenghts = ["Centímetro", "Metro", "Polegadas", "Pés", "Jardas"];

  TempFromValue:string = 'teste';
  TempToValue:string = '';

  WeightFromValue:string = '';
  WeightToValue:string = '';

  LenghtFromValue:string = '';
  LenghtToValue:string = '';


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


  constructor() { }

  ngOnInit(): void {
  }

  convertTemperature() {
    if(this.TempFromValue === this.TempToValue) {
      console.log('deu ruim na temperatura');
    } else {
      console.log('Convertendo de: ', this.TempFromValue + ', para: ', this.TempToValue);
    }
  }

  convertWeight() {
    if(this.TempFromValue === this.TempToValue) {
      console.log('deu ruim no peso');
    } else {
      console.log('Convertendo de: ', this.WeightFromValue + ', para: ', this.WeightToValue);
    }
  }

  convertLenght() {
    if(this.TempFromValue === this.TempToValue) {
      console.log('deu ruim no comprimento');
    } else {
      console.log('Convertendo de: ', this.LenghtFromValue + ', para: ', this.LenghtToValue);
    }
  }



}
