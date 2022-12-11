import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';


@NgModule({
  declarations: [
    OverviewPageComponent, DetailsPageComponent
  ],
  imports: [
    CommonModule, ComponentsModule,
    PagesRoutingModule, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class PagesModule { }
