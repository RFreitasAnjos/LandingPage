import { Component } from '@angular/core';
import { LinksComponent } from "../links/links.component";

@Component({
  selector: 'app-card',
  imports: [LinksComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  img = "/assets/120645756.jpeg";
}
