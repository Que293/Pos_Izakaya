// Mock data for menu items
export const MENU_ITEMS = [
  // Courses - Starters
  { id: 'c1', type: 'courses', category: 'starters', name: 'Caesar Salad', price: 9.99 },
  { id: 'c2', type: 'courses', category: 'starters', name: 'Bruschetta', price: 7.99 },
  { id: 'c3', type: 'courses', category: 'starters', name: 'Garlic Bread', price: 5.99 },
  { id: 'c4', type: 'courses', category: 'starters', name: 'Soup of the Day', price: 6.99 },
  { id: 'c5', type: 'courses', category: 'starters', name: 'Calamari', price: 11.99 },
  
  // Courses - Main Dishes
  { id: 'c6', type: 'courses', category: 'mains', name: 'Grilled Salmon', price: 22.99 },
  { id: 'c7', type: 'courses', category: 'mains', name: 'Ribeye Steak', price: 28.99 },
  { id: 'c8', type: 'courses', category: 'mains', name: 'Chicken Alfredo', price: 18.99 },
  { id: 'c9', type: 'courses', category: 'mains', name: 'Vegetable Risotto', price: 16.99 },
  { id: 'c10', type: 'courses', category: 'mains', name: 'Lamb Chops', price: 26.99 },
  { id: 'c11', type: 'courses', category: 'mains', name: 'Beef Burger', price: 15.99 },
  
  // Courses - Desserts
  { id: 'c12', type: 'courses', category: 'desserts', name: 'Tiramisu', price: 8.99 },
  { id: 'c13', type: 'courses', category: 'desserts', name: 'Cheesecake', price: 7.99 },
  { id: 'c14', type: 'courses', category: 'desserts', name: 'Chocolate Lava Cake', price: 9.99 },
  { id: 'c15', type: 'courses', category: 'desserts', name: 'Ice Cream (3 Scoops)', price: 6.99 },
  
  // Extras - Drinks
  { id: 'e1', type: 'extras', category: 'drinks', name: 'Sparkling Water', price: 3.99 },
  { id: 'e2', type: 'extras', category: 'drinks', name: 'Soda', price: 2.99 },
  { id: 'e3', type: 'extras', category: 'drinks', name: 'House Wine (Glass)', price: 7.99 },
  { id: 'e4', type: 'extras', category: 'drinks', name: 'Beer', price: 5.99 },
  { id: 'e5', type: 'extras', category: 'drinks', name: 'Coffee', price: 3.49 },
  { id: 'e6', type: 'extras', category: 'drinks', name: 'Tea', price: 2.99 },
  
  // Extras - Sides
  { id: 'e7', type: 'extras', category: 'sides', name: 'French Fries', price: 4.99 },
  { id: 'e8', type: 'extras', category: 'sides', name: 'Mashed Potatoes', price: 4.99 },
  { id: 'e9', type: 'extras', category: 'sides', name: 'Steamed Vegetables', price: 5.99 },
  { id: 'e10', type: 'extras', category: 'sides', name: 'Onion Rings', price: 5.99 },
  { id: 'e11', type: 'extras', category: 'sides', name: 'Side Salad', price: 4.99 },
  
  // Extras - Condiments
  { id: 'e12', type: 'extras', category: 'condiments', name: 'Extra Sauce', price: 1.99 },
  { id: 'e13', type: 'extras', category: 'condiments', name: 'Truffle Oil', price: 2.99 },
  { id: 'e14', type: 'extras', category: 'condiments', name: 'Parmesan Cheese', price: 1.49 },
];

// Course categories
export const COURSE_CATEGORIES = [
  { id: 'starters', name: 'Starters' },
  { id: 'mains', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'specials', name: 'Chef Specials' }
];

// Courses
export const COURSES = [
  // Starters
  { 
    id: 101, 
    name: 'Bruschetta', 
    price: 8.99, 
    category: 'starters',
    description: 'Toasted bread topped with tomatoes, garlic, and fresh basil'
  },
  { 
    id: 102, 
    name: 'Calamari', 
    price: 12.99, 
    category: 'starters',
    description: 'Crispy fried squid served with lemon aioli'
  },
  { 
    id: 103, 
    name: 'Caprese Salad', 
    price: 10.99, 
    category: 'starters',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze'
  },
  { 
    id: 104, 
    name: 'Garlic Bread', 
    price: 6.99, 
    category: 'starters',
    description: 'Toasted bread with garlic butter and herbs'
  },
  
  // Main Courses
  { 
    id: 201, 
    name: 'Spaghetti Carbonara', 
    price: 16.99, 
    category: 'mains',
    description: 'Classic pasta with pancetta, egg, and parmesan'
  },
  { 
    id: 202, 
    name: 'Grilled Salmon', 
    price: 22.99, 
    category: 'mains',
    description: 'Fresh salmon fillet with lemon herb butter'
  },
  { 
    id: 203, 
    name: 'Chicken Parmesan', 
    price: 18.99, 
    category: 'mains',
    description: 'Breaded chicken topped with marinara and mozzarella'
  },
  { 
    id: 204, 
    name: 'Vegetable Risotto', 
    price: 15.99, 
    category: 'mains',
    description: 'Creamy arborio rice with seasonal vegetables'
  },
  { 
    id: 205, 
    name: 'Ribeye Steak', 
    price: 28.99, 
    category: 'mains',
    description: '12oz ribeye with garlic butter and roasted potatoes'
  },
  
  // Desserts
  { 
    id: 301, 
    name: 'Tiramisu', 
    price: 8.99, 
    category: 'desserts',
    description: 'Classic Italian dessert with coffee and mascarpone'
  },
  { 
    id: 302, 
    name: 'Chocolate Lava Cake', 
    price: 9.99, 
    category: 'desserts',
    description: 'Warm chocolate cake with a molten center'
  },
  { 
    id: 303, 
    name: 'Cheesecake', 
    price: 8.99, 
    category: 'desserts',
    description: 'New York style cheesecake with berry compote'
  },
  
  // Chef Specials
  { 
    id: 401, 
    name: 'Lobster Ravioli', 
    price: 26.99, 
    category: 'specials',
    description: 'Handmade ravioli filled with lobster in a saffron cream sauce'
  },
  { 
    id: 402, 
    name: 'Truffle Risotto', 
    price: 24.99, 
    category: 'specials',
    description: 'Creamy risotto with black truffle and parmesan'
  }
];

// Extra categories
export const EXTRA_CATEGORIES = [
  { id: 'sides', name: 'Side Dishes' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'addons', name: 'Add-ons' }
];

// Extras
export const EXTRAS = [
  // Side Dishes
  { 
    id: 501, 
    name: 'French Fries', 
    price: 4.99, 
    category: 'sides' 
  },
  { 
    id: 502, 
    name: 'Side Salad', 
    price: 5.99, 
    category: 'sides' 
  },
  { 
    id: 503, 
    name: 'Mashed Potatoes', 
    price: 4.99, 
    category: 'sides' 
  },
  { 
    id: 504, 
    name: 'Steamed Vegetables', 
    price: 5.99, 
    category: 'sides' 
  },
  
  // Drinks
  { 
    id: 601, 
    name: 'Soda', 
    price: 2.99, 
    category: 'drinks' 
  },
  { 
    id: 602, 
    name: 'Iced Tea', 
    price: 2.99, 
    category: 'drinks' 
  },
  { 
    id: 603, 
    name: 'Coffee', 
    price: 3.99, 
    category: 'drinks' 
  },
  { 
    id: 604, 
    name: 'Glass of Wine', 
    price: 8.99, 
    category: 'drinks' 
  },
  { 
    id: 605, 
    name: 'Beer', 
    price: 6.99, 
    category: 'drinks' 
  },
  
  // Add-ons
  { 
    id: 701, 
    name: 'Extra Cheese', 
    price: 1.99, 
    category: 'addons' 
  },
  { 
    id: 702, 
    name: 'Bacon', 
    price: 2.99, 
    category: 'addons' 
  },
  { 
    id: 703, 
    name: 'Avocado', 
    price: 2.99, 
    category: 'addons' 
  },
  { 
    id: 704, 
    name: 'Mushrooms', 
    price: 1.99, 
    category: 'addons' 
  }
];






