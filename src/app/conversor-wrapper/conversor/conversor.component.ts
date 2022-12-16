import { Measure } from '../../measure.model';
import { CalculationService } from './../../calculation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  //variaveis para receber os parametros vindos da url
  from!: string | null;
  to!: string | null;
  // variavel do tipo Measure (objeto) que tem as propriedades type e value
  //type se refere a unidade de medida (ex. celsius, metro, quilo)
  //value se refere ao valor numerico inserido no input field
  measureFrom: Measure = {
    type: '',
    value: 0
  };
  measureTo: Measure = {
    type: '',
    value: 0
  };
 
  constructor(
    private route: ActivatedRoute,
    private calculationService: CalculationService,
  ) {
    
  }
  ngOnInit(): void {
    //recebendo valores enviados como parametros pelo componente unit-selection atraves da url(utilizando o route.navigate)
    //e atribuindo os parametros para as variaveis from e to
    this.from = this.route.snapshot.paramMap.get('from');
    this.to = this.route.snapshot.paramMap.get('to');
    //se certificando que os valores existem
    if(!!this.from && !!this.to) {
    //se existirem, enviar os valores do \from/ e \to/ como propriedade type da variavel tipo Measure(interface)
    this.measureFrom.type = this.from;
    this.measureTo.type = this.to;
    }
  }

  //funcao no componente pai (conversor) que será chamada no click event do Output do componente filho (value-input)
  //pega o valor do input como parametro do tipo Measure (assim já será enviado o type e value da measure)
  convertionValue(newValue: Measure) {
    //se o newValue.type for igual ao this.measureFrom.type, ou seja, 
    //for igual ao valor que está vindo da url como primeiro parametro(from)
    if(newValue.type === this.measureFrom.type) {
      //atribua a variavel result o resultado da função convertValue
      const result = this.calculationService.convertValue(this.measureFrom.type, this.measureTo.type, +newValue.value);
      //se o resultado existir
      if(!!result) {
        //envie para a variavel this.measureTo.value o valor do resultado
        this.measureTo.value = +result;
      }
    }
    //segue a mesma logica do if de cima, só que fazendo a conta inversa
    if(newValue.type === this.measureTo.type){
      const result = this.calculationService.convertValue(this.measureTo.type, this.measureFrom.type, +newValue.value);
      if(!!result) {
        this.measureFrom.value = +result;
      }
    }
  }

}
