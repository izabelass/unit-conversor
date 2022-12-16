import { CalculationService, ConvertData } from './../../calculation.service';
import { Measure } from './../value-input/value-input.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {

  from!: string | null;
  to!: string | null;
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
    this.from = this.route.snapshot.paramMap.get('from');
    this.to = this.route.snapshot.paramMap.get('to');

    if(!!this.from && !!this.to) {

    this.measureFrom.type = this.from;
    this.measureTo.type = this.to;
    }
  }

  convertionValue(newValue: Measure) {
    const dataFrom: ConvertData = {
      measureFrom : this.measureFrom.type, 
      measureTo: this.measureTo.type, 
      quantityInput: newValue.value
    };

    const dataTo: ConvertData = {
      measureTo: this.measureTo.type, 
      measureFrom : this.measureFrom.type, 
      quantityInput: newValue.value
    };

    if(newValue.type === this.measureFrom.type) {
      const result = this.calculationService.convertValue(dataFrom);
      if(!!result && result != null) {
        this.measureTo.value = +result;
        console.log(result, this.measureTo.value);
      }
    }
    
    if(newValue.type === this.measureTo.type){
      const result = this.calculationService.convertValue(dataTo);
      if(!!result && result != null) {
        this.measureFrom.value = +result;
        console.log(result, this.measureFrom.value);
      }
    }
  }

}
