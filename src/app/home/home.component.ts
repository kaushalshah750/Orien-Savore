import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ObserveVisibilityDirective } from '../directive/observe-visibility.directive';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ObserveVisibilityDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isHeroVisible = false;
  aboutVisible = false;
  menuVisible = false;
  testimonialsVisible = false;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isHeroVisible = true;
    }, 500);  // Delay fade-in by 0.5 second
  }
}
