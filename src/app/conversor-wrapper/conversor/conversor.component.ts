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
    if(newValue.type === this.measureFrom.type) {
      const result = this.calculationService.convertValue(this.measureFrom.type, this.measureTo.type, +newValue.value);
      if(!!result && result != null) {
        this.measureTo.value = +result;
        console.log(result, this.measureTo.value);
      }
    }
    
    if(newValue.type === this.measureTo.type){
      const result = this.calculationService.convertValue(this.measureTo.type, this.measureFrom.type, +newValue.value);
      if(!!result && result != null) {
        this.measureFrom.value = +result;
        console.log(result, this.measureFrom.value);
      }
    }
  }

}
