import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {
  @Input() measure = '';

  @Input() measureFrom: string = '';
  @Input() measureTo: string = '';

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });


  constructor() { }

  ngOnInit(): void {
  }


}
