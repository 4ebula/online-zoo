import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MapPageComponent } from './pages/map-page/map-page.component';

const routes: Route[] = [
  {
    path: 'map',
    component: MapPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
