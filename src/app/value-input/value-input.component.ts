import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss'],
})
export class ValueInputComponent implements OnInit {
  @Input() measure = '';
  @Input() measureTo = '';
  resultado?: number;

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });

  constructor() { }

  ngOnInit(): void { }

  // RECEBE OS VALORES DOS INPUTS
  recebeInput1() {
    let primeiroValor = parseFloat(
      (<HTMLInputElement> document.querySelector('#primeiroValor')).value
    );
    
    return primeiroValor;
  }

  recebeInput2() {
    let segundoValor = parseFloat(
      (<HTMLInputElement> document.querySelector('#segundoValor')).value
    );
    return segundoValor;
  }

  // CONVERTE DE CELSIUS PARA FAHRENHEIT
  converteValor1() {
    let valor1 = this.recebeInput1();
    let resultado: number;
    resultado = (valor1 * 9) / 5 + 32;
    this.resultado = resultado;
  }

  // CONVERTE DE FAHRENHEIT PARA CELSIUS
  converteValor2() {
    let valor2 = this.recebeInput2();
    let resultado: number;
    resultado = ((valor2 - 32) * 5) / 9;
    this.resultado = resultado;
  }
}
