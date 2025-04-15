import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  shakeButton(event: Event) {
    const button = event.target as HTMLElement;
    button.classList.add('shake');
  
    // Remove a classe após a animação para permitir repetir
    setTimeout(() => {
      button.classList.remove('shake');
    }, 400);
  }
  
}
