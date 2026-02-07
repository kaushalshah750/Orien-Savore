import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { BookingComponent } from "../booking/booking.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, BookingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isHeroVisible = false;
  aboutVisible = false;
  menuVisible = false;
  testimonialsVisible = false;
  menuOpen = false;
  showReservationPopup = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit() {
    setTimeout(() => {
      this.isHeroVisible = true;
    }, 500);  // Delay fade-in by 0.5 second
  }
}
