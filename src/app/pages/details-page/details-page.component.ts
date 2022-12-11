import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConvertProvider } from 'src/app/providers/convert-provider/convert-provider.service';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { ICurrencyModel } from 'src/app/interfaces/ICurrency';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  amount: any = 0.00;
  from_amount: any = 0.00;

  constructor(
    private router: Router, 
    public convertprovider: ConvertProvider
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {  
          if(event.url == '/eur-gbp') {
            this.convertprovider.to_currency = 'GBP'
          }    
          if(event.url == '/eur-usd') {
            this.convertprovider.to_currency = 'EUR'
          }    
        }
    });
    this.convertprovider.getHistory();
  }

  processInfo(info: ICurrencyModel) {
    this.from_amount = info.amount
    this.amount = this.convertprovider.convertCurrency(info.amount, info.from, info.to);
    this.convertprovider.saveHistory(info);
  }

}
