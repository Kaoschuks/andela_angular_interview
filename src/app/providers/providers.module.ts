import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertProvider } from './convert-provider/convert-provider.service';

export const providers: Array<any> = [
  ConvertProvider
];

@NgModule({
  imports: [CommonModule],
  providers: providers,
})
export class ProvidersModule {}
