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

  primeiroValor?: number;
  resultado = ''

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  receiveInput(primeiroValor: any) {
    primeiroValor = parseFloat((<HTMLInputElement>document.querySelector('#primeiroValor')).value);
    console.log("primeiroValor " + primeiroValor);
  }

  conversion(primeiroValor: any) {
    let resultado = this.primeiroValor
    console.log("resultado = " + resultado);
    document.getElementById('segundoValor')?.innerHTML
  }


}
