import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit {
  @Input() from!: string | null;
  @Input() to!: string | null

  @Input() measureFrom: string = '';
  @Input() measureTo: string = '';

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.from = this.route.snapshot.paramMap.get('from');
    this.to = this.route.snapshot.paramMap.get('to');

    if (this.from && this.to) {

      this.measureFrom = this.from;
      this.measureTo = this.to;
    }
  }

}