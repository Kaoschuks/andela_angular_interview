import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.scss']
})
export class CurrencyRatesComponent implements OnInit {

  @Input() key: any;
  @Input() rateInfo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
