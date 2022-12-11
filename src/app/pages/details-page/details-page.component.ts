import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnChanges {

  title: string = ''
  constructor(
    private location: Location, 
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      this.location.path(), changes
    );
  }

}
