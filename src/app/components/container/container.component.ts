import { NgOptimizedImage } from '@angular/common';
import { Component,OnInit,OnDestroy } from '@angular/core';
import { CarouselComponent } from "../carousel/carousel.component";
import { CardComponent } from "../card/card.component";
import { interval, Subscription} from 'rxjs';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-container',
  imports: [ CarouselComponent, CardComponent, AboutComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent{
  images=[
    'https://via.placeholder.com/300.png?text=Image1',
    'https://via.placeholder.com/300.png?text=Image2',
    'https://via.placeholder.com/300.png?text=Image3',
    'https://via.placeholder.com/300.png?text=Image4',
    'https://via.placeholder.com/300.png?text=Image5'
  ];
}
