import type { Translations } from './types';

export const fr: Translations = {
  announcement: 'Livraison gratuite à Kigali pour les commandes supérieures à 30 000 RWF — offre indicative, à confirmer avec nous',

  nav: {
    home: 'Accueil',
    shop: 'Boutique',
    categories: 'Catégories',
    wholesale: 'Vente en Gros',
    about: 'À Propos',
    contact: 'Contact',
    menu: 'Menu',
    searchPlaceholder: 'Rechercher des produits, catégories...',
    noResults: 'Aucun produit trouvé. Essayez une autre recherche.',
    whatsappUsAt: 'Contactez-nous sur WhatsApp au',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    closeSearch: 'Fermer la recherche',
    searchProducts: 'Rechercher des produits',
    shoppingBag: (count: number) => `Panier, ${count} articles`,
    goToHome: 'Aller à l\'accueil',
  },

  hero: {
    eyebrow: 'Votre Destination Beauté à Kigali',
    headline1: 'Votre Beauté.',
    headline2: 'Votre Confiance.',
    body: 'Découvrez les essentiels de beauté et de soin pour votre routine quotidienne. Explorez vos favoris et contactez Beauty Line KGL pour trouver les produits que vous aimez.',
    exploreCta: 'Explorer la Collection',
    chatCta: 'Discutez avec Nous',
    categoriesLabel: 'Catégories de Beauté',
    localLabel: 'Local',
    kigaliRwanda: 'Kigali, Rwanda',
    retailLabel: 'Détail',
    andWholesale: '& Gros',
  },

  categoryGrid: {
    eyebrow: 'Parcourir la Collection',
    title: 'Acheter par Catégorie',
    subtitle: 'Du soin de la peau aux parfums — explorez les essentiels de beauté pour chaque étape de votre routine.',
    shopNow: 'Acheter',
  },

  categories: {
    'Skincare': 'Soin de la Peau',
    'Makeup': 'Maquillage',
    'Haircare': 'Soin des Cheveux',
    'Body Care': 'Soin du Corps',
    'Beauty Accessories': 'Accessoires de Beauté',
    'Fragrance': 'Parfums',
  },
  categoriesAll: 'Tout',
  categoryDescriptions: {
    'Skincare': 'Nettoyants, sérums et hydratants',
    'Makeup': 'Fond de teint, rouge à lèvres et fards',
    'Haircare': 'Shampoing, après-shampoing et soins',
    'Body Care': 'Lotions, huiles et soins du corps',
    'Beauty Accessories': 'Pinceaux, éponges et outils',
    'Fragrance': 'Parfums et brumes parfumées',
  },

  productGrid: {
    eyebrow: 'Produits en Vedette',
    title: 'Sélection pour Vous',
    subtitle: 'Une sélection d\'essentiels de beauté dans nos catégories. Tous les produits et prix sont des exemples de démonstration.',
    searchPlaceholder: 'Rechercher des produits...',
    sortFeatured: 'En vedette',
    sortPriceLow: 'Prix: Croissant',
    sortPriceHigh: 'Prix: Décroissant',
    sortNameAz: 'Nom: A à Z',
    noResults: 'Aucun produit trouvé. Essayez une autre recherche ou catégorie.',
    resetFilters: 'Réinitialiser',
  },

  productCard: {
    quickView: 'Aperçu',
    addToBag: 'Ajouter au Panier',
    inquireAria: (name: string) => `Demander info sur ${name} sur WhatsApp`,
    quickViewAria: (name: string) => `Aperçu de ${name}`,
  },

  badges: {
    new: 'Nouveau',
    bestSeller: 'Meilleure Vente',
  },

  quickView: {
    closeAria: 'Fermer l\'aperçu',
    sampleNote: 'Produet exemple — disponibilité et prix confirmés via WhatsApp.',
    quantity: 'Quantité',
    decreaseAria: 'Diminuer la quantité',
    increaseAria: 'Augmenter la quantité',
    addToBag: 'Ajouter au Panier',
    inquireWhatsapp: 'Demander sur WhatsApp',
  },

  cart: {
    title: (count: number) => count > 0 ? `Votre Panier (${count})` : 'Votre Panier',
    closeAria: 'Fermer le panier',
    emptyTitle: 'Votre panier est vide',
    emptyBody: 'Découvrez les essentiels de beauté pour votre routine quotidienne.',
    exploreCta: 'Explorer la Collection',
    removeAria: (name: string) => `Retirer ${name}`,
    decreaseAria: 'Diminuer la quantité',
    increaseAria: 'Augmenter la quantité',
    clearAll: 'Vider le panier',
    subtotal: 'Sous-total',
    confirmNote: 'La disponibilité et les prix finaux sont confirmés via WhatsApp avant la finalisation de votre commande.',
    checkoutWhatsapp: 'Commander via WhatsApp',
    continueShopping: 'Continuer mes Achats',
  },

  whatsapp: {
    general: 'Bonjour Beauty Line KGL ! J\'aimerais des informations sur vos produits.',
    productInquiry: (name: string, price: string) =>
      `Bonjour Beauty Line KGL ! Je suis intéressé(e) par ce produit:\n\n*${name}*\nPrix: ${price}\n\nEst-il disponible ?`,
    cartCheckout: (items, subtotal) => {
      let msg = `Bonjour Beauty Line KGL ! J'aimerais passer une commande:\n\n`;
      items.forEach((item, i) => {
        msg += `${i + 1}. ${item.name}\n   Qté: ${item.qty} × ${item.price} = ${item.lineTotal}\n\n`;
      });
      msg += `*Sous-total: ${subtotal}*\n\nÀ noter: Je comprends que la disponibilité et les prix finaux doivent être confirmés par la boutique avant la finalisation de ma commande.\n\nMerci !`;
      return msg;
    },
    wholesale: (name, business, phone, interests, message) => {
      let msg = `Bonjour Beauty Line KGL ! Je suis intéressé(e) par vos offres en gros.\n\n`;
      msg += `Nom: ${name}\nEntreprise: ${business}\nTéléphone/WhatsApp: ${phone}\nProduits d'intérêt: ${interests}\n`;
      if (message) msg += `Message: ${message}\n`;
      return msg;
    },
    floatingLabel: 'Discutez avec nous',
    floatingAria: 'Discutez avec nous sur WhatsApp',
  },

  wholesale: {
    eyebrow: 'Pour les Clients Professionnels',
    title: 'La Beauté pour Votre Entreprise',
    body: 'Vous souhaitez vous approvisionner en essentiels de beauté pour votre salon, boutique ou entreprise de beauté ? Contactez Beauty Line KGL pour discuter de vos besoins en produits et de vos demandes en gros.',
    benefits: [
      { title: 'Large Gamme de Produits', description: 'Accédez à une variété d\'essentiels de beauté et de soins pour votre entreprise.' },
      { title: 'Sélection de Qualité', description: 'Des produits sélectionnés pour répondre aux besoins des salons, boutiques et professionnels de la beauté.' },
      { title: 'Approvisionnement Local', description: 'Basés à Kigali, nous pouvons discuter des arrangements de livraison pour votre entreprise.' },
      { title: 'Support Commercial', description: 'Contactez-nous pour discuter de vos besoins spécifiques en produits et quantités.' },
    ],
    formTitle: 'Demande en Gros',
    formBody: 'Remplissez vos coordonnées et nous préparerons un message WhatsApp pour vous.',
    nameLabel: 'Votre Nom',
    namePlaceholder: 'Jeanne Dupont',
    businessLabel: 'Nom de l\'Entreprise',
    businessPlaceholder: 'Votre Salon ou Boutique',
    phoneLabel: 'Téléphone ou WhatsApp',
    phonePlaceholder: '+250 7XX XXX XXX',
    interestsLabel: 'Produits d\'Intérêt',
    interestsPlaceholder: 'Soin de la peau, cheveux, maquillage...',
    messageLabel: 'Message',
    messagePlaceholder: 'Parlez-nous de vos besoins...',
    submitBtn: 'Préparer le Message WhatsApp',
    requiredMark: '*',
    errors: {
      name: 'Veuillez entrer votre nom',
      business: 'Veuillez entrer le nom de votre entreprise',
      phone: 'Veuillez entrer votre numéro de téléphone',
      interests: 'Veuillez nous indiquer quels produits vous intéressent',
    },
    successTitle: 'Prêt à Envoyer Votre Demande',
    successBody: 'Votre message est préparé. Cliquez ci-dessous pour l\'envoyer via WhatsApp à notre équipe.',
    successBtn: 'Envoyer sur WhatsApp',
    editForm: 'Modifier le formulaire',
  },

  about: {
    eyebrow: 'Notre Histoire',
    title: 'La Beauté au Quotidien',
    body1: 'Beauty Line KGL est votre destination locale pour découvrir les essentiels de beauté et de soins à Kigali. Explorez la collection et contactez notre équipe pour des informations produits et de l\'aide avec votre commande.',
    body2: 'Que vous construisiez votre routine de soin quotidienne, recherchiez la teinte parfaite, ou approvisionniez votre salon, nous sommes là pour vous aider à trouver ce dont vous avez besoin.',
    local: 'Local',
    basedInKigali: 'Basés à Kigali',
    personal: 'Personnel',
    oneOnOne: 'Accompagnement individuel',
    exploreCta: 'Explorer la Collection',
  },

  social: {
    eyebrow: 'Communauté & Inspiration',
    title: 'Un Peu d\'Inspiration pour Votre Routine Beauté',
    subtitle: 'Conseils beauté, coups de cœur produits et inspiration routine. Suivez-nous while notre communauté grandit.',
    tiles: [
      { alt: 'Femme appliquant du rouge à lèvres à la lumière naturelle', label: 'Routine Beauté' },
      { alt: 'Flacons de sérum à la lumière naturelle', label: 'Produit Vedette' },
      { alt: 'Femme au sourire serein avec maquillage professionnel', label: 'Éditorial' },
      { alt: 'Femme africaine appliquant du maquillage au pinceau', label: 'Tutoriel' },
      { alt: 'Sérums de soin de la peau en flacons', label: 'Soin de la Peau' },
      { alt: 'Femme africaine profitant d\'un massage facial au rouleau de jade', label: 'Soin de Soi' },
    ],
    followUs: 'Suivez-nous pour plus d\'inspiration beauté:',
    instagram: 'Instagram',
    instagramAria: 'Suivez-nous sur Instagram (lien à ajouter)',
    tiktok: 'TikTok',
    tiktokAria: 'Suivez-nous sur TikTok (lien à ajouter)',
    linksNote: 'Les liens seront mis à jour avec les comptes vérifiés.',
  },

  trust: {
    eyebrow: 'Expérience Client',
    title: 'Acheter chez Beauty Line KGL',
    subtitle: 'Nous voulons que vous vous sentiez confiant à chaque étape. Voici ce que vous pouvez attendre de vos achats chez nous.',
    items: [
      { title: 'Comment Commander', description: 'Parcourez la collection, ajoutez des articles au panier et commandez via WhatsApp. Notre équipe confirmera les détails de votre commande.' },
      { title: 'Disponibilité des Produits', description: 'Envoyez-nous un message WhatsApp avec le nom du produit ou une capture d\'écran pour vérifier le stock avant de commander.' },
      { title: 'Informations de Paiement', description: 'Les options et détails de paiement sont confirmés lors de votre conversation WhatsApp avant la finalisation de votre commande.' },
      { title: 'Livraison', description: 'La livraison à Kigali et au-delà peut être organisée. Partagez votre localisation avec nous sur WhatsApp pour plus de détails.' },
      { title: 'Retours & Échanges', description: 'Les politiques de retour et d\'échange sont confirmées au moment de l\'achat. Contactez-nous avant de commander en cas de préoccupations.' },
      { title: 'Questions avant Achat', description: 'Nous vous encourageons à poser des questions sur un produit avant l\'achat. Notre équipe est ravie de vous aider à choisir.' },
    ],
  },

  faq: {
    eyebrow: 'Questions & Réponses',
    title: 'Questions Fréquentes',
    items: [
      { question: 'Comment passer une commande ?', answer: 'Parcourez la collection, ajoutez des articles au panier et cliquez sur « Commander via WhatsApp ». Cela ouvre une conversation avec notre équipe pour confirmer la disponibilité et finaliser votre commande. Vous pouvez aussi nous contacter directement.' },
      { question: 'Les produits et prix sur ce site sont-ils actuels ?', answer: 'Ceci est un site conceptuel. Les noms de produits, images et prix affichés sont des exemples de démonstration. Veuillez nous contacter sur WhatsApp pour confirmer la disponibilité et les prix réels avant de commander.' },
      { question: 'Comment vérifier la disponibilité d\'un produit ?', answer: 'Envoyez-nous un message WhatsApp avec le nom du produit ou une capture d\'écran. Notre équipe répondra avec les informations de stock actuelles et des alternatives si un article est indisponible.' },
      { question: 'Quels moyens de paiement sont disponibles ?', answer: 'Les détails de paiement sont confirmés lors de votre conversation WhatsApp. Veuillez nous contacter avant de passer commande pour que nous puissions vous partager les options de paiement les plus récentes.' },
      { question: 'Livrez-vous à Kigali ?', answer: 'Les arrangements de livraison à Kigali et au-delà sont discutés lors de votre commande WhatsApp. Contactez-nous avec votre localisation et nous ferons de notre mieux pour vous aider.' },
      { question: 'Puis-je retourner ou échanger un produit ?', answer: 'Les politiques de retour et d\'échange sont confirmées au moment de l\'achat. Veuillez nous envoyer un message avant de commander si vous avez des préoccupations spécifiques.' },
    ],
  },

  footer: {
    ctaTitle: 'Une Question ? Discutons',
    ctaBody: 'Contactez notre équipe sur WhatsApp pour des informations produits, des commandes ou toute question.',
    messageUs: 'Écrivez-nous',
    brandTagline: 'Votre destination locale pour les essentiels de beauté et de soins à Kigali, Rwanda.',
    navigate: 'Navigation',
    categories: 'Catégories',
    getInTouch: 'Contact',
    hours: 'Lun - Sam: 8h00 - 19h00',
    hoursSunday: 'Dimanche: 10h00 - 16h00',
    rights: (year, name) => `© ${year} ${name}. Tous droits réservés.`,
    disclaimer: 'Ceci est un site conceptuel. Les produits, prix et politiques affichés sont des exemples de démonstration.',
  },

  products: {
    p1: { name: 'Sérum Éclat du Visage', description: 'Un sérum léger conçu pour illuminer et unifier le teint. Appliquez matin et soir pour un éclat naturel et sain.' },
    p2: { name: 'Rouge à Lèvres Velours Mat — Rosewood', description: 'Rouge à lèvres mat longue tenue dans une teinte rosewood chaleureuse. Application confortable avec une couleur intense en un seul geste.' },
    p3: { name: 'Shampoing Nourrissant & Brillant', description: 'Shampoing nettoyant en douceur aux huiles naturelles pour nourrir et faire briller. Convient à tous types de cheveux, y compris traités chimiquement.' },
    p4: { name: 'Lotion Corporelle Soie', description: 'Lotion corporelle riche et non grasse qui pénètre rapidement pour une peau douce et hydratée toute la journée. Parfum floral léger.' },
    p5: { name: 'Set de Pinceaux Maquillage Pro', description: 'Un set complet de 12 pinceaux de maquillage professionnels pour le visage et les yeux. Poils synthétiques doux avec manches élégants.' },
    p6: { name: 'Eau de Parfum Ambre', description: 'Un parfum chaleureux et sophistiqué aux notes d\'ambre, de vanille et de bois de santal. Eau de parfum longue tenue pour le soir.' },
    p7: { name: 'Hydratant Hydra Boost', description: 'Hydratant quotidien à l\'acide hyaluronique pour une hydratation profonde et durable. Formule gel-crème légère parfaite pour le climat de Kigali.' },
    p8: { name: 'Palette de Fards à Paupières Glam', description: 'Palette de 12 fards à paupières aux finis mat et pailleté. Des neutres doux aux tons joyaux audacieux pour des looks jour et nuit.' },
    p9: { name: 'Masque Réparateur Capillaire', description: 'Masque capillaire profondément nourrissant qui répare et renforce les cheveux abîmés. Utilisation hebdomadaire pour des cheveux visiblement plus lisses.' },
    p10: { name: 'Huile Corporelle Éclat', description: 'Huile corporelle luxueuse qui laisse la peau avec un éclat subtil. Enrichie d\'huiles nourrissantes pour une peau douce et souple.' },
    p11: { name: 'Éponges de Beauté (Lot de 3)', description: 'Lot de trois éponges de beauté sans latex pour une application de fond de teint impeccable. Gonflent à l\'eau pour un fini dewy.' },
    p12: { name: 'Eau de Parfum Velvet', description: 'Un parfum doux et romantique aux notes de pivoine, musc blanc et bergamote. Parfait pour le quotidien.' },
  },

  language: {
    label: 'FR',
    aria: 'Changer de langue',
  },
};
