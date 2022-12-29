import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { selectionValidators } from './selection.validators';

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.scss']
})
export class UnitSelectionComponent implements OnInit {
  //declarar variavel e definir quais tipos terao para aparecer no select
  temperatures = ["Celsius", "Fahrenheit", "Kelvin"];
  weights = ["Quilo", "Libra", "Onça"];
  lenghts = ["Metro", "Polegada", "Pé"]; 

  //declarar variaveis para receber os valores de cada select atraves do [(value)] do mat-select no template
  tempFromValue:string = '';
  tempToValue:string = '';

  weightFromValue:string = '';
  weightToValue:string = '';

  lenghtFromValue:string = '';
  lenghtToValue:string = '';

  //definir formularios, criando grupos para cada tipo(temperatura, peso, comprimento)
  //foi colocado um validator de obrigatorio(required) para cada FormControl e
  //adicionado um cross field validator para cada FormGroup, chamando o metodo...
  //...checkEqualValidator com os params ref a cada FormGroup.
  tempConversor = new FormGroup({
    convertTempFrom: new FormControl('', Validators.required), //select da esquerda
    convertTempTo: new FormControl('', Validators.required), //select da direita
  }, { validators: selectionValidators.checkEqualValidator('convertTempFrom', 'convertTempTo') });

  weightConversor = new FormGroup({
    convertWeightFrom: new FormControl('', Validators.required), //select da esquerda
    convertWeightTo: new FormControl('', Validators.required), //select da direita
  }, { validators: selectionValidators.checkEqualValidator('convertWeightFrom', 'convertWeightTo') });

  lenghtConversor = new FormGroup({
    convertLenghtFrom: new FormControl('', Validators.required), //select da esquerda
    convertLenghtTo: new FormControl('', Validators.required), //select da direita
  }, { validators: selectionValidators.checkEqualValidator('convertLenghtFrom', 'convertLenghtTo') });


  constructor(private router: Router) { }

  
  ngOnInit(): void {

  }

  //utiliza o router.navigate para enviar os valores selecionados como parametros na url
  selectedValueRouter(valueFrom: string, valueTo: string): any {
    if(valueFrom !== valueTo){
      this.router.navigate([
        '/conversor', //encaminha para a pagina /conversor
        valueFrom, //primeiro parametro da url
        valueTo, //segundo parametro da url
      ]);
    }
  }

  convertTemperature() {
    //chama o router navigate utilizando os variaveis que receberam os valores dos selects como parametros
    this.selectedValueRouter(this.tempFromValue, this.tempToValue);
    
  }

  convertWeight() {
     //chama o router navigate utilizando os variaveis que receberam os valores dos selects como parametros
      this.selectedValueRouter(this.weightFromValue, this.weightToValue);
  }

  convertLenght() {
     //chama o router navigate utilizando os variaveis que receberam os valores dos selects como parametros
    this.selectedValueRouter(this.lenghtFromValue, this.lenghtToValue);
  }

  //cross field validator criado para verificar se os valores dos dois selects são iguais, 
  //caso forem, será mostrado uma mensagem de erro, caso sejam diferentes retorna null.
  //esse metodo control.get utiliza como parametro o nome do FormControl que deseja pegar o valor
  //para facilitar, eu criei esse metodo checkEqualValidator com esses dois parametros
  //o valueFrom deve receber o FormControl da esquerda como string, ex: 'convertTempFrom'
  //o valueTo deve receber o FormControl da direita como string, ex: 'convertTempTo'
  
  // checkEqualValidator(valueFrom: string, valueTo: string): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  
  //       const convertFrom = control.get(valueFrom);
  //       const convertTo = control.get(valueTo);
   
  //       return convertFrom && convertTo && convertFrom.value === convertTo.value ? { checkEqual: true } : null;
   
  //   }
  // }
  
}


