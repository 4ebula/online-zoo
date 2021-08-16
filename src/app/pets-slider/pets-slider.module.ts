import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlideComponent } from './components/slide/slide.component';
import { PetsSliderComponent } from './pets-slider.component';

@NgModule({
  declarations: [PetsSliderComponent, SlideComponent],
  imports: [CommonModule],
  exports: [PetsSliderComponent],
})
export class PetsSliderModule {}
