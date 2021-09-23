import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetsSliderModule } from '../pets-slider/pets-slider.module';
import { AboutComponent } from './components/about/about.component';
import { AsideComponent } from './components/aside/aside.component';
import { FamousPetsComponent } from './components/famous-pets/famous-pets.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ZoogeographyComponent } from './components/zoogeography/zoogeography.component';

@NgModule({
  declarations: [
    AsideComponent,
    AboutComponent,
    HowToComponent,
    FamousPetsComponent,
    PaymentComponent,
    TestimonialsComponent,
    ZoogeographyComponent,
  ],
  imports: [CommonModule, PetsSliderModule],
  exports: [
    AsideComponent,
    AboutComponent,
    HowToComponent,
    FamousPetsComponent,
    PaymentComponent,
    TestimonialsComponent,
    ZoogeographyComponent,
    PetsSliderModule,
  ],
})
export class MainModule {}
