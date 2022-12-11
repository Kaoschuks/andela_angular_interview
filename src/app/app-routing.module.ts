import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule), component: BaseLayoutComponent, 
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
