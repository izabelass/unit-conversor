import { Injectable } from '@angular/core';

export interface ConvertData{
  measureFrom: string;
  measureTo: string;
  quantityInput: number;
}

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  
  convertValue(data: ConvertData): number|string {

    //variavel para receber o valor do resultado da conversao
    let result:number;

    //conversao de temperatura

    if(data.measureFrom == 'Celsius' && data.measureTo == 'Fahreinheit'){
      result = (data.quantityInput * 9 / 5) + 32;
      return result;
    }

    if(data.measureFrom === 'Celsius' && data.measureTo === 'Kelvin'){
      result = data.quantityInput + 273.15;
      return result;
    }

    if(data.measureFrom === 'Fahreinheit' && data.measureTo === 'Celsius'){
      result = (data.quantityInput - 32) * 5 / 9;
      return result;
    }

    if(data.measureFrom === 'Fahreinheit' && data.measureTo === 'Kelvin'){
      result = (data.quantityInput - 32) * 5 / 9 + 273.15;
      return result;
    }

    if(data.measureFrom === 'Kelvin' && data.measureTo === 'Celsius'){
      result = data.quantityInput - 273;
      return result;
    }

    if(data.measureFrom === 'Kelvin' && data.measureTo === 'Fahreinheit'){
      result = (data.quantityInput - 273.15) * 9 / 5 + 32;
      return result;
    }

    //conversao de peso

    if(data.measureFrom === 'Quilo' && data.measureTo === 'Libra'){
      result = data.quantityInput * 2.205;
      return result;
    }

    if(data.measureFrom === 'Quilo' && data.measureTo === 'Onça'){
      result = data.quantityInput * 35.274;
      return result;
    }

    if(data.measureFrom === 'Libra' && data.measureTo === 'Quilo'){
      result = data.quantityInput / 2.205;
      return result;
    }

    if(data.measureFrom === 'Libra' && data.measureTo === 'Onça'){
      result = data.quantityInput * 16;
      return result;
    }

    if(data.measureFrom === 'Onça' && data.measureTo === 'Quilo'){
      result = data.quantityInput / 35.274;
      return result;
    }

    if(data.measureFrom === 'Onça' && data.measureTo === 'Libra'){
      result = data.quantityInput / 16;
      return result;
    }

    //conversao de comprimento

    if(data.measureFrom === 'Metro' && data.measureTo === 'Polegada'){
      result = data.quantityInput * 39.37;
      return result;
    }

    if(data.measureFrom === 'Metro' && data.measureTo === 'Pé'){
      result = data.quantityInput * 3.281;
      return result;
    }

    if(data.measureFrom === 'Polegada' && data.measureTo === 'Metro'){
      result = data.quantityInput / 39.37;
      return result;
    }

    if(data.measureFrom === 'Polegada' && data.measureTo === 'Pé'){
      result = data.quantityInput / 12;
      return result;
    }

    if(data.measureFrom === 'Pé' && data.measureTo === 'Metro'){
      result = data.quantityInput / 3.281;
      return result;
    }

    if(data.measureFrom === 'Pé' && data.measureTo === 'Polegada'){
      result = data.quantityInput * 12;
      return result;
    }

    return "algo deu errado, tente novamente";
  }

  constructor() { }
}
