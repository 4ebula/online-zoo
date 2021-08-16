// eslint-disable-next-line prettier/prettier
import { AfterViewInit, Component, ElementRef, ViewChildren } from '@angular/core';
import { SlideComponent } from './components/slide/slide.component';
import { TSlides } from './models/slides.model';
import { slides } from './temp_obj';

@Component({
  selector: 'app-pets-slider',
  templateUrl: './pets-slider.component.html',
  styleUrls: ['./pets-slider.component.scss'],
})
export class PetsSliderComponent implements AfterViewInit {
  @ViewChildren(SlideComponent, { read: ElementRef }) slidesElements!: ElementRef[];

  slides: TSlides = slides;

  setColumn = (index: number): number => {
    return Math.floor(index / 2) + 1;
  };

  ngAfterViewInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      this.slidesElements.forEach((e) => {
        const col = +e.nativeElement.getAttribute('column');
        const newCol = col === 1 ? 4 : col - 1;
        const slide = e.nativeElement;
        slide.style.left = '-290px';
        slide.style.transitionDuration = '500ms';
        slide.setAttribute('column', newCol);
        slide.ontransitionend = () => {
          slide.style.transitionDuration = '0ms';
          slide.style.gridColumn = newCol;
          slide.style.left = '0px';
        };
      });
    }, 5000);
  }
}
