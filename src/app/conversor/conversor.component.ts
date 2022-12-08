import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Temperatura {
  value: string;
  viewValue: string;
}

interface Tipos {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  selectedValue: string = '';
  selectedCar: string = '';
  
  tipos: Tipos[] = [
    { value: 'temperatura', viewValue: 'Temperatura' },
    { value: 'peso', viewValue: 'Peso' },
    { value: 'medida', viewValue: 'Medida' },
  ];

  @Output() newUnitTypeEvent = new EventEmitter<string>();

  @Input() temperaturas: Temperatura[] = [
    { value: 'temperatura', viewValue: 'Temperatura' },
    { value: 'peso', viewValue: 'Peso' },
    { value: 'medida', viewValue: 'Medida' },
  ];

    selectMedidas = new FormGroup({
    tipoMedida: new FormControl([

    ]),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  addMedida(value: string) {
    this.newUnitTypeEvent.emit(value);
  }
}
