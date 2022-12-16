import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export interface Measure {
  type: string;
  value: number;
}

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {
  measureType = '';
  measureValue:number = 0;

  //entrada para receber o tipo de medida e o valor como objeto
  @Input() measure!: Measure;

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });

  @Output() measureChangeEvent = new EventEmitter<Measure>();

  constructor() { }

  ngOnInit(): void {
    this.measureType = this.measure.type;
    this.measureValue = this.measureValue;
  }
  
  convert(inputValue: number) {
      // this.measure = {
      //     type: this.measureType,
      //     value: inputValue
      //   };
      this.measure.value = inputValue;
        this.measureChangeEvent.emit(this.measure);
      console.log(inputValue);
      console.log(this.measureType)
  }

}
