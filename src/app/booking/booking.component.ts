import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  @Output() closePopup = new EventEmitter<void>();

  reservationForm: FormGroup;
  isSubmitting = false;
  showConfirmation = false;
  availableTimes = this.generateTimeSlots();

  // Set min date to today
  minDate = new Date().toISOString().split('T')[0];

  // Configure max date (e.g., 3 months from now)
  maxDate = new Date();

  constructor(private fb: FormBuilder) {
    this.maxDate = new Date(this.maxDate.toISOString().split('T')[0]);
    this.maxDate.setMonth(this.maxDate.getMonth() + 3);

    this.reservationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9\s\-()]{8,20}$/)]],
      date: [this.minDate, Validators.required],
      time: ['19:00', Validators.required],
      guests: [2, [Validators.required, Validators.min(1), Validators.max(20)]],
      specialRequests: ['', Validators.maxLength(500)]
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      this.isSubmitting = true;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.showConfirmation = true;
        console.log('Reservation submitted:', this.reservationForm.value);
        // Here you would normally send the data to your backend
      }, 1000);
    } else {
      this.markFormGroupTouched(this.reservationForm);
    }
  }

  close(): void {
    this.closePopup.emit();
  }

  reset(): void {
    this.reservationForm.reset({
      date: this.minDate,
      time: '19:00',
      guests: 2
    });
    this.showConfirmation = false;
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  private generateTimeSlots(): string[] {
    const times: string[] = [];
    const openingHour = 11; // 11 AM
    const closingHour = 23; // 11 PM

    for (let hour = openingHour; hour <= closingHour; hour++) {
      times.push(`${hour.toString().padStart(2, '0')}:00`);
      times.push(`${hour.toString().padStart(2, '0')}:30`);
    }

    return times;
  }
}
