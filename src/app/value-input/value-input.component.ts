import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {
  @Input() measure = '';
  @Input() measureTo = '';
  primeiroValor: number = 0;
  segundoValor: number = 0

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  receiveInput(segundoValor: number, primeiroValor: number) {
    primeiroValor = parseInt((<HTMLInputElement>document.getElementById('primeiroValor')).value);

    segundoValor = parseInt((<HTMLInputElement>document.getElementById('segundoValor')).value);

    console.log(primeiroValor, segundoValor);
  }


}
