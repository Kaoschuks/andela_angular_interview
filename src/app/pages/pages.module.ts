import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './pages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, ComponentsModule,
    AppsRoutingModule, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppsModule { }
