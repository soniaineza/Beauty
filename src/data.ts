import type { Product, CategoryCard } from '@/types';

export const SITE_CONFIG = {
  businessName: 'Beauty Line KGL',
  city: 'Kigali, Rwanda',
  phoneDisplay: '+250 796 110 649',
  phoneIntl: '250796110649',
  hours: 'Mon - Sat: 8:00 AM - 7:00 PM',
  hoursSunday: 'Sunday: 10:00 AM - 4:00 PM',
  email: 'hello@beautyline.rw',
  announcement: 'Free local delivery within Kigali on orders over 30,000 RWF — sample offer, confirm with us',
};

export const CATEGORIES: CategoryCard[] = [
  {
    name: 'Skincare',
    image: 'https://images.pexels.com/photos/38822007/pexels-photo-38822007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Cleansers, serums & moisturizers',
  },
  {
    name: 'Makeup',
    image: 'https://images.pexels.com/photos/6233285/pexels-photo-6233285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Foundation, lipstick & eyeshadow',
  },
  {
    name: 'Haircare',
    image: 'https://images.pexels.com/photos/33525723/pexels-photo-33525723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Shampoo, conditioner & treatments',
  },
  {
    name: 'Body Care',
    image: 'https://images.pexels.com/photos/33537354/pexels-photo-33537354.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Lotions, oils & body treatments',
  },
  {
    name: 'Beauty Accessories',
    image: 'https://images.pexels.com/photos/6233285/pexels-photo-6233285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Brushes, sponges & beauty tools',
  },
  {
    name: 'Fragrance',
    image: 'https://images.pexels.com/photos/11482458/pexels-photo-11482458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Perfumes & body mists',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Radiance Face Serum',
    category: 'Skincare',
    price: 18500,
    image: 'https://images.pexels.com/photos/38822007/pexels-photo-38822007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A lightweight serum designed to brighten and even out your complexion. Apply morning and night for a natural, healthy glow.',
    badge: 'Best Seller',
  },
  {
    id: 'p2',
    name: 'Vel Matte Lipstick — Rosewood',
    category: 'Makeup',
    price: 12000,
    image: 'https://images.pexels.com/photos/7664873/pexels-photo-7664873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Long-lasting matte lipstick in a warm rosewood shade. Smooth, comfortable wear with rich color payoff in a single swipe.',
    badge: 'New',
  },
  {
    id: 'p3',
    name: 'Nourish & Shine Shampoo',
    category: 'Haircare',
    price: 9500,
    image: 'https://images.pexels.com/photos/19833253/pexels-photo-19833253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Gentle cleansing shampoo with natural oils to nourish and add shine. Suitable for all hair types, including chemically treated hair.',
  },
  {
    id: 'p4',
    name: 'Silk Body Lotion',
    category: 'Body Care',
    price: 8500,
    image: 'https://images.pexels.com/photos/33537356/pexels-photo-33537356.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Rich, non-greasy body lotion that absorbs quickly for soft, moisturized skin all day long. Light floral scent.',
  },
  {
    id: 'p5',
    name: 'Pro Makeup Brush Set',
    category: 'Beauty Accessories',
    price: 22000,
    image: 'https://images.pexels.com/photos/4938501/pexels-photo-4938501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A complete set of 12 professional-grade makeup brushes for face and eyes. Soft synthetic bristles with elegant handles.',
    badge: 'Best Seller',
  },
  {
    id: 'p6',
    name: 'Amber Eau de Parfum',
    category: 'Fragrance',
    price: 28000,
    image: 'https://images.pexels.com/photos/12456276/pexels-photo-12456276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A warm, sophisticated fragrance with notes of amber, vanilla, and sandalwood. Long-lasting eau de parfum for evening wear.',
  },
  {
    id: 'p7',
    name: 'Hydra Boost Moisturizer',
    category: 'Skincare',
    price: 15000,
    image: 'https://images.pexels.com/photos/36339062/pexels-photo-36339062.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Daily moisturizer with hyaluronic acid for deep, lasting hydration. Lightweight gel-cream formula perfect for Kigali\'s climate.',
    badge: 'New',
  },
  {
    id: 'p8',
    name: 'Glam Eyeshadow Palette',
    category: 'Makeup',
    price: 16500,
    image: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: '12-shade eyeshadow palette with matte and shimmer finishes. From soft neutrals to bold jewel tones for day-to-night looks.',
  },
  {
    id: 'p9',
    name: 'Repair Hair Mask',
    category: 'Haircare',
    price: 13000,
    image: 'https://images.pexels.com/photos/14656315/pexels-photo-14656315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Deep conditioning hair mask that repairs and strengthens damaged hair. Use weekly for visibly smoother, healthier strands.',
  },
  {
    id: 'p10',
    name: 'Glow Body Oil',
    category: 'Body Care',
    price: 11000,
    image: 'https://images.pexels.com/photos/11124449/pexels-photo-11124449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Luxurious body oil that leaves skin with a subtle, radiant sheen. Infused with nourishing oils for soft, supple skin.',
    badge: 'New',
  },
  {
    id: 'p11',
    name: 'Beauty Blender Sponges (3-pack)',
    category: 'Beauty Accessories',
    price: 6500,
    image: 'https://images.pexels.com/photos/7256091/pexels-photo-7256091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Set of three latex-free beauty sponges for flawless foundation application. Expand with water for a dewy finish.',
  },
  {
    id: 'p12',
    name: 'Velvet Eau de Parfum',
    category: 'Fragrance',
    price: 25000,
    image: 'https://images.pexels.com/photos/11482458/pexels-photo-11482458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A soft, romantic fragrance with notes of peony, white musk, and bergamot. Perfect for everyday wear.',
    badge: 'Best Seller',
  },
];

export const FAQS = [
  {
    question: 'How do I place an order?',
    answer: 'Browse the collection, add items to your cart, and tap "Checkout via WhatsApp." This opens a chat with our team so we can confirm availability and finalize your order. You can also message us directly about any product.',
  },
  {
    question: 'Are the products and prices on this website current?',
    answer: 'This is a concept website. Product names, images, and prices shown here are samples for demonstration. Please contact us on WhatsApp to confirm actual availability and pricing before ordering.',
  },
  {
    question: 'How can I check if a product is available?',
    answer: 'Send us a WhatsApp message with the product name or a screenshot. Our team will respond with current stock information and alternatives if an item is unavailable.',
  },
  {
    question: 'What payment methods are available?',
    answer: 'Payment details are confirmed during your WhatsApp conversation. Please reach out to us before placing an order so we can share the most up-to-date payment options.',
  },
  {
    question: 'Do you deliver in Kigali?',
    answer: 'Delivery arrangements within Kigali and beyond are discussed during your WhatsApp order. Contact us with your location and we will do our best to assist.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer: 'Return and exchange policies are confirmed at the time of purchase. Please message us before ordering if you have specific concerns about a product.',
  },
];
