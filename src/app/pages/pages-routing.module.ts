import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';

const routes: Routes = [
  { path: '', component: OverviewPageComponent  },
  { path: ':currency', component: DetailsPageComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
