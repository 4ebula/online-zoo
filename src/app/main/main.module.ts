import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { FamousPetsComponent } from './components/famous-pets/famous-pets.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [HeaderComponent, AsideComponent, FooterComponent, AboutComponent, HowToComponent, FamousPetsComponent, PaymentComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, AsideComponent, FooterComponent, AboutComponent, HowToComponent, FamousPetsComponent, PaymentComponent],
})
export class MainModule {}
