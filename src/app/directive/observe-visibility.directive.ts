import { Directive, ElementRef, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appObserveVisibility]',
  standalone: true
})
export class ObserveVisibilityDirective implements AfterViewInit, OnDestroy {
  @Output() visibilityChanged = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.visibilityChanged.emit(true);
        this.observer.unobserve(this.element.nativeElement); // Stop observing after first animation
      }
    }, {
      threshold: 0.2,
    });
  
    this.observer.observe(this.element.nativeElement);
  }
  

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
