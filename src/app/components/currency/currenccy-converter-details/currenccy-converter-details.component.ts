import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'currenccy-converter-details',
  templateUrl: './currenccy-converter-details.component.html',
  styleUrls: ['./currenccy-converter-details.component.scss']
})
export class CurrenccyConverterDetailsComponent implements OnInit, OnChanges {

  @Input() from_value: number | undefined;
  @Input() to_value: number | undefined;
  @Input() from: string | undefined;
  @Input() to: string | undefined;

  compareValue: string | undefined;
  transferValue: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.compareValue = this.from_value + ' ' + this.from + " = " + this.to_value + ' ' + this.to;
    this.transferValue = this.to_value + ' ' + this.to;
  }

  ngOnChanges(): void {
    this.compareValue = this.from_value + ' ' + this.from + " = " + this.to_value + ' ' + this.to;
    this.transferValue = this.to_value + ' ' + this.to;
  }

}
