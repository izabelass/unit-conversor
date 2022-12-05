import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss']
})
export class UnitSelectionComponent implements OnInit {
  @Output() selectedValue: string = '';
  selectedCar: string = '';
 
  temperaturas = ['celsius', 'kelvin','fahreinheit'];

  constructor() { }

  ngOnInit(): void {
    
  }

  tempConversor = new FormGroup({
    converterDeTemp: new FormControl([]),
    converterParaTemp: new FormControl([]),

  });

  btnTempConverter(){
   
  }

}
