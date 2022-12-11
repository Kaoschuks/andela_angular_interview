import { Component, OnInit } from '@angular/core';
import { ICurrencyModel } from 'src/app/interfaces/ICurrency';
import { ConvertProvider } from 'src/app/providers/convert-provider/convert-provider.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {

  amount: any = 0.00;
  from_amount: any = 0.00;

  constructor(
    public convertprovider: ConvertProvider
  ) { }

  ngOnInit(): void {
  }

  processInfo(info: ICurrencyModel) {
    this.from_amount = info.amount
    this.amount = this.convertprovider.convertCurrency(info.amount, info.from, info.to)
  }

}
