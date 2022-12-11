import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICurrencyModel } from 'src/app/interfaces/ICurrency';

@Component({
  selector: 'currency-converter-input',
  templateUrl: './currency-converter-input.component.html',
  styleUrls: ['./currency-converter-input.component.scss']
})
export class CurrencyConverterInputComponent implements OnChanges {
  
  @Input() coverttedValue: number | undefined;
  @Input() currencies: Array<string> = [];
  @Input() from: string | undefined;
  @Input() to: string | undefined;
  @Output() convertEvent = new EventEmitter();

  currencyForm: FormGroup = new FormGroup({
    amount: new FormControl(
      "",
      Validators.required,
    ),
    to: new FormControl(
      "",
    ),
  });

  constructor() { }

  ngOnChanges() {
    this.currencyForm.patchValue({
      to: this.coverttedValue
    })
  }

  changeCurrency(currency: string, type: string = 'from') {
    if(type == 'from') this.from = currency;
    if(type == 'to') this.to = currency
    this.convertCurrency()
  }

  convertCurrency() {
    this.convertEvent.emit({
      from: this.from,
      amount: this.currencyForm.value.amount,
      to: this.to
    } as ICurrencyModel)
  }

}
