import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { FeatureRoutingModule } from './feature-routing.module';
import { MapPageComponent } from './pages/map-page/map-page.component';

@NgModule({
  imports: [InlineSVGModule, HttpClientModule, FeatureRoutingModule],
  declarations: [MapPageComponent],
})
export class FeatureModule {}
