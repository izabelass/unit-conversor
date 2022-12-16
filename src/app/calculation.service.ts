import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  
  convertValue(measureFrom: string, measureTo: string, quantityInput: number): number|string {

    //variavel para receber o valor do resultado da conversao
    let result:number;

    //conversao de temperatura

    if(measureFrom == 'Celsius' && measureTo == 'Fahrenheit'){
      let result;
      result = (quantityInput * 9 / 5) + 32;
      return result;
    }

    if(measureFrom === 'Celsius' && measureTo === 'Kelvin'){
      result = quantityInput + 273.15;
      return result;
    }

    if(measureFrom === 'Fahrenheit' && measureTo === 'Celsius'){
      result = (quantityInput - 32) * 5 / 9;
      return result;
    }

    if(measureFrom === 'Fahrenheit' && measureTo === 'Kelvin'){
      result = (quantityInput - 32) * 5 / 9 + 273.15;
      return result;
    }

    if(measureFrom === 'Kelvin' && measureTo === 'Celsius'){
      result = quantityInput - 273;
      return result;
    }

    if(measureFrom === 'Kelvin' && measureTo === 'Fahrenheit'){
      result = (quantityInput - 273.15) * 9 / 5 + 32;
      return result;
    }

    //conversao de peso

    if(measureFrom === 'Quilo' && measureTo === 'Libra'){
      result = quantityInput * 2.205;
      return result;
    }

    if(measureFrom === 'Quilo' && measureTo === 'Onça'){
      result = quantityInput * 35.274;
      return result;
    }

    if(measureFrom === 'Libra' && measureTo === 'Quilo'){
      result = quantityInput / 2.205;
      return result;
    }

    if(measureFrom === 'Libra' && measureTo === 'Onça'){
      result = quantityInput * 16;
      return result;
    }

    if(measureFrom === 'Onça' && measureTo === 'Quilo'){
      result = quantityInput / 35.274;
      return result;
    }

    if(measureFrom === 'Onça' && measureTo === 'Libra'){
      result = quantityInput / 16;
      return result;
    }

    //conversao de comprimento

    if(measureFrom === 'Metro' && measureTo === 'Polegada'){
      result = quantityInput * 39.37;
      return result;
    }

    if(measureFrom === 'Metro' && measureTo === 'Pé'){
      result = quantityInput * 3.281;
      return result;
    }

    if(measureFrom === 'Polegada' && measureTo === 'Metro'){
      result = quantityInput / 39.37;
      return result;
    }

    if(measureFrom === 'Polegada' && measureTo === 'Pé'){
      result = quantityInput / 12;
      return result;
    }

    if(measureFrom === 'Pé' && measureTo === 'Metro'){
      result = quantityInput / 3.281;
      return result;
    }

    if(measureFrom === 'Pé' && measureTo === 'Polegada'){
      result = quantityInput * 12;
      return result;
    }

    return "algo deu errado, tente novamente";
  }

  constructor() { }
}
