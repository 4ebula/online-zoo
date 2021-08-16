import { Component, Input, OnInit } from '@angular/core';
import { TSlide } from '../../models/slides.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() slide!: TSlide;

  source: string = '';

  ngOnInit(): void {
    const fileName = this.slide.name.toLowerCase().split(' ').join('_');
    this.source = `./assets/images/slider/${fileName}.${this.slide.ext}`;
  }
}
