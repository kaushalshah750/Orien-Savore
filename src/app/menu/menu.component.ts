import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Mains' | 'Desserts' | 'Drinks';
  image: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks'];
  activeCategory = 'All';

  menuItems: MenuItem[] = [
    // Starters
    {
      id: 1,
      name: 'Lobster Bisque',
      description: 'Rich, creamy soup with fresh Atlantic lobster, chives, and a hint of cognac.',
      price: 18,
      category: 'Starters',
      image: 'assets/lobster_bisque.png'
    },
    {
      id: 2,
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls infused with black truffle oil, served with marinara sauce.',
      price: 14,
      category: 'Starters',
      image: 'assets/dish3.webp', // re-using existing as placeholder style
      isVegetarian: true
    },
    {
      id: 3,
      name: 'Yellowfin Tuna Carpaccio',
      description: 'Thinly sliced fresh yellowfin tuna, garnished with microgreens, capers, and citrus vinaigrette.',
      price: 24,
      category: 'Starters',
      image: 'assets/tuna_carpaccio.png'
    },

    // Mains
    {
      id: 4,
      name: 'Herb-Crusted Rack of Lamb',
      description: 'Humanely raised rack of lamb, roasted to perfection, served with fondant potatoes and rosemary jus.',
      price: 48,
      category: 'Mains',
      image: 'assets/lamb_rack.png'
    },
    {
      id: 5,
      name: 'Seared Atlantic Salmon',
      description: 'Fresh salmon fillet with lemon butter sauce, asparagus, and herb-roasted potatoes.',
      price: 32,
      category: 'Mains',
      image: 'assets/dish2.webp'
    },
    {
      id: 6,
      name: 'Wild Mushroom Risotto',
      description: 'Creamy Arborio rice with porcini mushrooms, parmesan crisp, and truffle oil.',
      price: 28,
      category: 'Mains',
      image: 'assets/dish1.webp',
      isVegetarian: true
    },
    {
      id: 7,
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with orange glaze, served with dauphinoise potatoes.',
      price: 36,
      category: 'Mains',
      image: 'assets/dish2.webp' // placeholder
    },

    // Desserts
    {
      id: 8,
      name: 'Chocolate Soufflé',
      description: 'Decadent dark chocolate soufflé with a molten center, served with vanilla bean ice cream.',
      price: 16,
      category: 'Desserts',
      image: 'assets/chocolate_souffle.png'
    },
    {
      id: 9,
      name: 'Lemon Basil Tart',
      description: 'Zesty lemon curd in a buttery crust, topped with Italian meringue and fresh basil.',
      price: 14,
      category: 'Desserts',
      image: 'assets/gallery4.webp' // placeholder
    },
    {
      id: 10,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream.',
      price: 15,
      category: 'Desserts',
      image: 'assets/gallery1.webp' // placeholder
    },

    // Drinks
    {
      id: 11,
      name: 'Smoked Old Fashioned',
      description: 'Bourbon, maple syrup, angostura bitters, smoked with hickory wood.',
      price: 18,
      category: 'Drinks',
      image: 'assets/gallery2.webp' // placeholder
    },
    {
      id: 12,
      name: 'Vintage Pinot Noir',
      description: 'Glass of our 2018 Reserve Pinot Noir, notes of cherry and spice.',
      price: 24,
      category: 'Drinks',
      image: 'assets/gallery3.webp' // placeholder
    }
  ];

  get filteredItems() {
    return this.activeCategory === 'All'
      ? this.menuItems
      : this.menuItems.filter(item => item.category === this.activeCategory);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}
