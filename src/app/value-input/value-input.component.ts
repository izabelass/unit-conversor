import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-value-input',
  templateUrl: './value-input.component.html',
  styleUrls: ['./value-input.component.scss']
})
export class ValueInputComponent implements OnInit {
  @Input() measure = '';

  quantityInputForm = new FormGroup({
    quantityInput: new FormControl([]),
  });

  @Output() quantityInputEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  convert(value: string) {
    this.quantityInputEvent.emit(value);
  }


}
