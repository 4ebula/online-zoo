import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideComponent } from './components/aside/aside.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, AsideComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, AsideComponent, FooterComponent],
})
export class MainModule {}
