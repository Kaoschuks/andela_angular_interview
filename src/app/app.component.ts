import { Component } from '@angular/core';
import { ConvertProvider } from './providers/convert-provider/convert-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview_test';

  constructor(
    private convert: ConvertProvider
  ) {
    this.convert.getCurrency()
  }
}
