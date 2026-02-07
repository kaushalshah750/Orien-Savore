import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'menu',
        loadComponent: () => import('./menu/menu.component').then(m => m.MenuComponent)
    },
    {
        path: 'testimonials',
        loadComponent: () => import('./testimonials/testimonials.component').then(m => m.TestimonialsComponent)
    },
    {
        path: 'reservation',
        loadComponent: () => import('./reservation/reservation.component').then(m => m.ReservationComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
    }
];
