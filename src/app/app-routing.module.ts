import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToursListPageComponent } from './components/main-layout/tours-list-page/tours-list-page.component';
import { TourPageComponent } from './components/main-layout/tour-page/tour-page.component';
import { NotFoundPageComponent } from './components/main-layout/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: ToursListPageComponent
  },
  {
    path: 'tour/:id',
    component: TourPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
