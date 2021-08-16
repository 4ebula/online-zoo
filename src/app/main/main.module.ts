import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, AsideComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, AsideComponent],
})
export class MainModule {}
