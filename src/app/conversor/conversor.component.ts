import { Component, OnInit, Output } from '@angular/core';
import { CalculosService } from '../calculos.service';

interface Temperatura {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  @Output() selectedValue: string = '';
  selectedCar: string = '';

  temperaturas: Temperatura[] = [
    { value: 'temperatura', viewValue: 'Temperatura' },
    { value: 'peso', viewValue: 'Peso' },
    { value: 'medida', viewValue: 'Medida' },
  ];

  constructor(private calculos: CalculosService) { }

  ngOnInit(): void {
  }

  operacaoSelecionada(unidade: any) {
    return console.log(unidade);
  }
}
