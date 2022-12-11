import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var $ :any;

@Injectable({
  providedIn: 'root'
})
export class ConvertProvider{

  rates: object | any = {}
  currencies: Array<string> = []
  from_currency: string | undefined
  to_currency: string | undefined = 'EUR'
  constructor() { }

  convertCurrency(amount: number, from_currency: string, to_currency: string) {
    this.to_currency = to_currency;
    this.from_currency = from_currency;
    return amount * this.rates[to_currency];
  }

  getCurrency() {
    $.get('https://openexchangerates.org/api/latest.json', {app_id: environment.exchange.appid}, (data: any) => {
      this.rates = data.rates
      this.from_currency = data.base
      this.currencies = Object.keys(this.rates)
    })
  }
}
