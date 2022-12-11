import { Component, Input, OnInit } from '@angular/core';
import { ICurrencyModel } from 'src/app/interfaces/ICurrency';

@Component({
  selector: 'currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  @Input() histories: Array<ICurrencyModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
