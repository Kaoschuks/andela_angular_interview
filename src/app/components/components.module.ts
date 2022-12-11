import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';

import { CurrencyTableComponent } from './currency/currency-table/currency-table.component';
import { CurrencyConverterInputComponent } from './currency/currency-converter-input/currency-converter-input.component';
import { CurrenccyConverterDetailsComponent } from './currency/currenccy-converter-details/currenccy-converter-details.component';
import { CurrencyRatesComponent } from './currency/currency-rates/currency-rates.component';

export const components: Array<any> = [
  BaseLayoutComponent, HeaderBarComponent,
  CurrencyTableComponent, CurrencyConverterInputComponent, CurrenccyConverterDetailsComponent, CurrencyRatesComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: components,
})
export class ComponentsModule {}
