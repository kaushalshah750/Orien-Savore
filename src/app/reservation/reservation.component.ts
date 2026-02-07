import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, BookingComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  showReservationPopup = false;
}
