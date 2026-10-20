import type { Translations } from './types';

export const en: Translations = {
  announcement: 'Free local delivery within Kigali on orders over 30,000 RWF — sample offer, confirm with us',

  nav: {
    home: 'Home',
    shop: 'Shop',
    categories: 'Categories',
    wholesale: 'Wholesale',
    about: 'About Us',
    contact: 'Contact',
    menu: 'Menu',
    searchPlaceholder: 'Search for products, categories...',
    noResults: 'No products found. Try a different search.',
    whatsappUsAt: 'WhatsApp us at',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    closeSearch: 'Close search',
    searchProducts: 'Search products',
    shoppingBag: (count: number) => `Shopping bag, ${count} items`,
    goToHome: 'Go to home',
  },

  hero: {
    eyebrow: 'Your Beauty Destination in Kigali',
    headline1: 'Your Beauty.',
    headline2: 'Your Confidence.',
    body: 'Discover beauty and self-care essentials for your everyday routine. Explore your favorites and connect with Beauty Line KGL to find the products you love.',
    exploreCta: 'Explore the Collection',
    chatCta: 'Chat with Us',
    categoriesLabel: 'Beauty Categories',
    localLabel: 'Local',
    kigaliRwanda: 'Kigali, Rwanda',
    retailLabel: 'Retail',
    andWholesale: '& Wholesale',
  },

  categoryGrid: {
    eyebrow: 'Browse the Collection',
    title: 'Shop by Category',
    subtitle: 'From skincare to fragrance — explore beauty essentials curated for every part of your routine.',
    shopNow: 'Shop now',
  },

  categories: {
    'Skincare': 'Skincare',
    'Makeup': 'Makeup',
    'Haircare': 'Haircare',
    'Body Care': 'Body Care',
    'Beauty Accessories': 'Beauty Accessories',
    'Fragrance': 'Fragrance',
  },
  categoriesAll: 'All',
  categoryDescriptions: {
    'Skincare': 'Cleansers, serums & moisturizers',
    'Makeup': 'Foundation, lipstick & eyeshadow',
    'Haircare': 'Shampoo, conditioner & treatments',
    'Body Care': 'Lotions, oils & body treatments',
    'Beauty Accessories': 'Brushes, sponges & beauty tools',
    'Fragrance': 'Perfumes & body mists',
  },

  productGrid: {
    eyebrow: 'Featured Products',
    title: 'Curated for You',
    subtitle: 'A selection of beauty essentials across our categories. All products and prices are samples for demonstration.',
    searchPlaceholder: 'Search products...',
    sortFeatured: 'Featured',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    sortNameAz: 'Name: A to Z',
    noResults: 'No products found. Try a different search or category.',
    resetFilters: 'Reset filters',
  },

  productCard: {
    quickView: 'Quick View',
    addToBag: 'Add to Bag',
    inquireAria: (name: string) => `Inquire about ${name} on WhatsApp`,
    quickViewAria: (name: string) => `Quick view ${name}`,
  },

  badges: {
    new: 'New',
    bestSeller: 'Best Seller',
  },

  quickView: {
    closeAria: 'Close quick view',
    sampleNote: 'Sample product — availability and pricing confirmed via WhatsApp.',
    quantity: 'Quantity',
    decreaseAria: 'Decrease quantity',
    increaseAria: 'Increase quantity',
    addToBag: 'Add to Bag',
    inquireWhatsapp: 'Inquire on WhatsApp',
  },

  cart: {
    title: (count: number) => count > 0 ? `Your Bag (${count})` : 'Your Bag',
    closeAria: 'Close cart',
    emptyTitle: 'Your bag is empty',
    emptyBody: 'Discover beauty essentials curated for your everyday routine.',
    exploreCta: 'Explore the Collection',
    removeAria: (name: string) => `Remove ${name}`,
    decreaseAria: 'Decrease quantity',
    increaseAria: 'Increase quantity',
    clearAll: 'Clear all items',
    subtotal: 'Subtotal',
    confirmNote: 'Availability and final prices are confirmed via WhatsApp before your order is finalized.',
    checkoutWhatsapp: 'Checkout via WhatsApp',
    continueShopping: 'Continue Shopping',
  },

  whatsapp: {
    general: 'Hello Beauty Line KGL! I\'d like to ask about your products.',
    productInquiry: (name: string, price: string) =>
      `Hello Beauty Line KGL! I'm interested in this product:\n\n*${name}*\nPrice: ${price}\n\nIs it available?`,
    cartCheckout: (items, subtotal) => {
      let msg = `Hello Beauty Line KGL! I'd like to place an order:\n\n`;
      items.forEach((item, i) => {
        msg += `${i + 1}. ${item.name}\n   Qty: ${item.qty} × ${item.price} = ${item.lineTotal}\n\n`;
      });
      msg += `*Subtotal: ${subtotal}*\n\nPlease note: I understand that availability and final prices must be confirmed by the store before my order is finalized.\n\nThank you!`;
      return msg;
    },
    wholesale: (name, business, phone, interests, message) => {
      let msg = `Hello Beauty Line KGL! I'm interested in your wholesale offerings.\n\n`;
      msg += `Name: ${name}\nBusiness: ${business}\nPhone/WhatsApp: ${phone}\nProduct interests: ${interests}\n`;
      if (message) msg += `Message: ${message}\n`;
      return msg;
    },
    floatingLabel: 'Chat with us',
    floatingAria: 'Chat with us on WhatsApp',
  },

  wholesale: {
    eyebrow: 'For Business Customers',
    title: 'Beauty for Your Business',
    body: 'Looking to stock up on beauty essentials for your salon, shop, or beauty business? Contact Beauty Line KGL to discuss your product requirements and wholesale inquiries.',
    benefits: [
      { title: 'Wide Product Range', description: 'Access a variety of beauty and personal-care essentials for your business.' },
      { title: 'Quality Selection', description: 'Products selected to meet the needs of salons, shops, and beauty professionals.' },
      { title: 'Local Supply', description: 'Based in Kigali, we can discuss delivery arrangements for your business.' },
      { title: 'Business Support', description: 'Reach out to discuss your specific product requirements and quantities.' },
    ],
    formTitle: 'Wholesale Inquiry',
    formBody: 'Fill in your details and we\'ll prepare a WhatsApp message for you.',
    nameLabel: 'Your Name',
    namePlaceholder: 'Jane Doe',
    businessLabel: 'Business Name',
    businessPlaceholder: 'Your Salon or Shop',
    phoneLabel: 'Phone or WhatsApp Number',
    phonePlaceholder: '+250 7XX XXX XXX',
    interestsLabel: 'Product Interests',
    interestsPlaceholder: 'Skincare, haircare, makeup...',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your requirements...',
    submitBtn: 'Prepare WhatsApp Inquiry',
    requiredMark: '*',
    errors: {
      name: 'Please enter your name',
      business: 'Please enter your business name',
      phone: 'Please enter your phone number',
      interests: 'Please tell us what products you\'re interested in',
    },
    successTitle: 'Ready to Send Your Inquiry',
    successBody: 'Your message is prepared. Click below to send it via WhatsApp to our team.',
    successBtn: 'Send Inquiry on WhatsApp',
    editForm: 'Edit form',
  },

  about: {
    eyebrow: 'Our Story',
    title: 'Beauty That Fits Your Everyday',
    body1: 'Beauty Line KGL is your local destination for discovering beauty and personal-care essentials in Kigali. Explore the collection and reach out to our team for product information and assistance with your order.',
    body2: 'Whether you\'re building your daily skincare routine, searching for the perfect shade, or stocking your salon, we\'re here to help you find what you need.',
    local: 'Local',
    basedInKigali: 'Based in Kigali',
    personal: 'Personal',
    oneOnOne: 'One-on-one support',
    exploreCta: 'Explore the Collection',
  },

  social: {
    eyebrow: 'Community & Inspiration',
    title: 'A Little Inspiration for Your Beauty Routine',
    subtitle: 'Beauty tips, product highlights, and routine inspiration. Follow along as we grow our community.',
    tiles: [
      { alt: 'Woman applying lipstick in natural sunlight', label: 'Beauty Routine' },
      { alt: 'Skincare serum bottles in natural lighting', label: 'Product Highlight' },
      { alt: 'Woman with serene smile showcasing professional makeup', label: 'Editorial' },
      { alt: 'African American woman applying makeup with a brush', label: 'Tutorial' },
      { alt: 'Niacinamide skincare serums in bottles', label: 'Skincare' },
      { alt: 'African American woman enjoying a face massage with a jade roller', label: 'Self Care' },
    ],
    followUs: 'Follow us for more beauty inspiration:',
    instagram: 'Instagram',
    instagramAria: 'Follow on Instagram (link to be added)',
    tiktok: 'TikTok',
    tiktokAria: 'Follow on TikTok (link to be added)',
    linksNote: 'Social links will be updated with verified accounts.',
  },

  trust: {
    eyebrow: 'Customer Experience',
    title: 'Shopping with Beauty Line KGL',
    subtitle: 'We want you to feel confident every step of the way. Here\'s what to expect when you shop with us.',
    items: [
      { title: 'How to Order', description: 'Browse the collection, add items to your bag, and check out via WhatsApp. Our team will confirm your order details.' },
      { title: 'Product Availability', description: 'Message us on WhatsApp with any product name or screenshot to check current stock before ordering.' },
      { title: 'Payment Information', description: 'Payment options and details are confirmed during your WhatsApp conversation before your order is finalized.' },
      { title: 'Delivery', description: 'Delivery within Kigali and beyond can be arranged. Share your location with us on WhatsApp for details.' },
      { title: 'Returns & Exchanges', description: 'Return and exchange policies are confirmed at the time of purchase. Message us with any concerns before ordering.' },
      { title: 'Questions Before Buying', description: 'We encourage you to ask about any product before purchasing. Our team is happy to help you choose.' },
    ],
  },

  faq: {
    eyebrow: 'Questions & Answers',
    title: 'Frequently Asked Questions',
    items: [
      { question: 'How do I place an order?', answer: 'Browse the collection, add items to your cart, and tap "Checkout via WhatsApp." This opens a chat with our team so we can confirm availability and finalize your order. You can also message us directly about any product.' },
      { question: 'Are the products and prices on this website current?', answer: 'This is a concept website. Product names, images, and prices shown here are samples for demonstration. Please contact us on WhatsApp to confirm actual availability and pricing before ordering.' },
      { question: 'How can I check if a product is available?', answer: 'Send us a WhatsApp message with the product name or a screenshot. Our team will respond with current stock information and alternatives if an item is unavailable.' },
      { question: 'What payment methods are available?', answer: 'Payment details are confirmed during your WhatsApp conversation. Please reach out to us before placing an order so we can share the most up-to-date payment options.' },
      { question: 'Do you deliver in Kigali?', answer: 'Delivery arrangements within Kigali and beyond are discussed during your WhatsApp order. Contact us with your location and we will do our best to assist.' },
      { question: 'Can I return or exchange a product?', answer: 'Return and exchange policies are confirmed at the time of purchase. Please message us before ordering if you have specific concerns about a product.' },
    ],
  },

  footer: {
    ctaTitle: 'Have a Question? Let\'s Chat',
    ctaBody: 'Reach out to our team on WhatsApp for product information, orders, or any questions.',
    messageUs: 'Message Us',
    brandTagline: 'Your local destination for beauty and personal-care essentials in Kigali, Rwanda.',
    navigate: 'Navigate',
    categories: 'Categories',
    getInTouch: 'Get in Touch',
    hours: 'Mon - Sat: 8:00 AM - 7:00 PM',
    hoursSunday: 'Sunday: 10:00 AM - 4:00 PM',
    rights: (year, name) => `© ${year} ${name}. All rights reserved.`,
    disclaimer: 'This is a concept website. Products, prices, and policies shown are samples for demonstration.',
  },

  products: {
    p1: { name: 'Radiance Face Serum', description: 'A lightweight serum designed to brighten and even out your complexion. Apply morning and night for a natural, healthy glow.' },
    p2: { name: 'Vel Matte Lipstick — Rosewood', description: 'Long-lasting matte lipstick in a warm rosewood shade. Smooth, comfortable wear with rich color payoff in a single swipe.' },
    p3: { name: 'Nourish & Shine Shampoo', description: 'Gentle cleansing shampoo with natural oils to nourish and add shine. Suitable for all hair types, including chemically treated hair.' },
    p4: { name: 'Silk Body Lotion', description: 'Rich, non-greasy body lotion that absorbs quickly for soft, moisturized skin all day long. Light floral scent.' },
    p5: { name: 'Pro Makeup Brush Set', description: 'A complete set of 12 professional-grade makeup brushes for face and eyes. Soft synthetic bristles with elegant handles.' },
    p6: { name: 'Amber Eau de Parfum', description: 'A warm, sophisticated fragrance with notes of amber, vanilla, and sandalwood. Long-lasting eau de parfum for evening wear.' },
    p7: { name: 'Hydra Boost Moisturizer', description: 'Daily moisturizer with hyaluronic acid for deep, lasting hydration. Lightweight gel-cream formula perfect for Kigali\'s climate.' },
    p8: { name: 'Glam Eyeshadow Palette', description: '12-shade eyeshadow palette with matte and shimmer finishes. From soft neutrals to bold jewel tones for day-to-night looks.' },
    p9: { name: 'Repair Hair Mask', description: 'Deep conditioning hair mask that repairs and strengthens damaged hair. Use weekly for visibly smoother, healthier strands.' },
    p10: { name: 'Glow Body Oil', description: 'Luxurious body oil that leaves skin with a subtle, radiant sheen. Infused with nourishing oils for soft, supple skin.' },
    p11: { name: 'Beauty Blender Sponges (3-pack)', description: 'Set of three latex-free beauty sponges for flawless foundation application. Expand with water for a dewy finish.' },
    p12: { name: 'Velvet Eau de Parfum', description: 'A soft, romantic fragrance with notes of peony, white musk, and bergamot. Perfect for everyday wear.' },
  },

  language: {
    label: 'EN',
    aria: 'Switch language',
  },
};
