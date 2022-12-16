import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Measure } from 'src/app/measure.model';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {
  measureType = '';
  measureValue!:number;

  //entrada para receber o tipo de medida e o valor como objeto
  @Input() measure!: Measure;

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });

  //primeira parte do Output, declarando um evento com retorno do tipo Measure(type e value)
  @Output() measureChangeEvent = new EventEmitter<Measure>();

  constructor() { }

  ngOnInit(): void {
    this.measureType = this.measure.type;
    this.measureValue = this.measureValue;
  }
  
  //segunda parte do Output, no click event, enviando o valor do input field para o this.measure.value e emitindo um evento
  convert(inputValue: number) {
      this.measure.value = inputValue;
        this.measureChangeEvent.emit(this.measure);
  }

}
