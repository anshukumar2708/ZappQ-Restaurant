import { Restaurant, MenuItem } from '../store/slices/restaurantSlice';
import burgerImage from '../assets/burger-deluxe.jpg';
import saladImage from '../assets/caesar-salad.jpg';
import salmonImage from '../assets/grilled-salmon.jpg';
import cakeImage from '../assets/chocolate-lava-cake.jpg';
import wingsImage from '../assets/buffalo-wings.jpg';
import juiceImage from '../assets/fresh-juice.jpg';
import tiramisuImage from '../assets/tiramisu.jpg';

export const dummyMenuItems: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan, croutons and our signature caesar dressing',
    price: 12.99,
    image: saladImage,
    category: 'Starters',
    available: true,
    preparationTime: 10,
  },
  {
    id: 'starter-2',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in spicy buffalo sauce, served with ranch',
    price: 14.99,
    image: wingsImage,
    category: 'Starters',
    available: true,
    preparationTime: 15,
  },
  {
    id: 'starter-3',
    name: 'Garlic Bread',
    description: 'Toasted sourdough bread with garlic butter and herbs',
    price: 8.99,
    image: saladImage,
    category: 'Starters',
    available: true,
    preparationTime: 8,
  },
  
  // Main Course
  {
    id: 'main-1',
    name: 'Deluxe Burger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, bacon and our special sauce',
    price: 18.99,
    image: burgerImage,
    category: 'Main Course',
    available: true,
    preparationTime: 20,
  },
  {
    id: 'main-2',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon grilled to perfection with seasonal vegetables',
    price: 24.99,
    image: salmonImage,
    category: 'Main Course',
    available: true,
    preparationTime: 25,
  },
  {
    id: 'main-3',
    name: 'Chicken Alfredo',
    description: 'Tender chicken breast with creamy alfredo sauce over fettuccine pasta',
    price: 19.99,
    image: salmonImage,
    category: 'Main Course',
    available: true,
    preparationTime: 22,
  },
  {
    id: 'main-4',
    name: 'Ribeye Steak',
    description: '12oz premium ribeye steak cooked to your preference with garlic mashed potatoes',
    price: 32.99,
    image: salmonImage,
    category: 'Main Course',
    available: true,
    preparationTime: 30,
  },
  
  // Drinks
  {
    id: 'drink-1',
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: 4.99,
    image: juiceImage,
    category: 'Drinks',
    available: true,
    preparationTime: 2,
  },
  {
    id: 'drink-2',
    name: 'Craft Beer',
    description: 'Local craft beer on tap',
    price: 6.99,
    image: juiceImage,
    category: 'Drinks',
    available: true,
    preparationTime: 1,
  },
  {
    id: 'drink-3',
    name: 'House Wine',
    description: 'Red or white wine by the glass',
    price: 8.99,
    image: juiceImage,
    category: 'Drinks',
    available: true,
    preparationTime: 1,
  },
  
  // Desserts
  {
    id: 'dessert-1',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
    price: 9.99,
    image: cakeImage,
    category: 'Desserts',
    available: true,
    preparationTime: 12,
  },
  {
    id: 'dessert-2',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 8.99,
    image: tiramisuImage,
    category: 'Desserts',
    available: true,
    preparationTime: 5,
  },
  {
    id: 'dessert-3',
    name: 'New York Cheesecake',
    description: 'Rich and creamy cheesecake with berry compote',
    price: 7.99,
    image: cakeImage,
    category: 'Desserts',
    available: true,
    preparationTime: 5,
  },
];

export const dummyRestaurant: Restaurant = {
  id: 'rest-1',
  name: 'ZappQ Restaurant',
  logo: '🍽️',
  tableNumber: 'T-12',
  menu: dummyMenuItems,
  categories: ['Starters', 'Main Course', 'Drinks', 'Desserts'],
};