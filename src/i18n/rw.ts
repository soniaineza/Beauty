import type { Translations } from './types';

export const rw: Translations = {
  announcement: 'Koherezwa ku buntu mu Kigali ku byo wagurije birenze 30,000 RWF — igitekerezo gisubizwaho, mwongere muganire n twe',

  nav: {
    home: 'Ahabanza',
    shop: 'Ibicuruzwa',
    categories: 'Ibyiciro',
    wholesale: 'Igurisha Ritonutse',
    about: 'Tuzwiho',
    contact: 'Twuvugane',
    menu: 'Ibikubiyemo',
    searchPlaceholder: 'Shakisha ibicuruzwa, ibyiciro...',
    noResults: 'Nta byicuruzwa byabonetse. Gerageza ishakisha ryitondewe.',
    whatsappUsAt: 'Tuvugane kuri WhatsApp kuri',
    openMenu: 'Fungura ibikubiyemo',
    closeMenu: 'Funga ibikubiyemo',
    closeSearch: 'Funga ishakisha',
    searchProducts: 'Shakisha ibicuruzwa',
    shoppingBag: (count: number) => `Igikoresho cyo kugurisha, ${count} bintu`,
    goToHome: 'Subira ku ntariki',
  },

  hero: {
    eyebrow: 'Ahanyurwanyabumwa ho mu Kigali',
    headline1: 'Ubwiza Bwawe.',
    headline2: 'Kwizera Kwawe.',
    body: 'Bona ibyiza n\'ibyo kwita ku mubiri wawe ku minsi yose. Gerageza ibyo ukunda unaganire na Beauty Line KGL kugira ngo ubone ibicuruzwa ukunda.',
    exploreCta: 'Reba Ibicuruzwa',
    chatCta: 'Tuganire',
    categoriesLabel: 'Ibyiciro by\'Ubupayiniya',
    localLabel: 'Hano',
    kigaliRwanda: 'Kigali, u Rwanda',
    retailLabel: 'Icyringaniro',
    andWholesale: 'n\'Igurisha Ritonutse',
  },

  categoryGrid: {
    eyebrow: 'Reba Ibicuruzwa',
    title: 'Gura ukwiciro',
    subtitle: 'Ku bwiza bw\'urubingo gushoro ibinuka — reba ibyiza byo kwita ku mubiri byagenewe buri kinyagaciro cy\'iminsi yawe.',
    shopNow: 'Ngura aka',
  },

  categories: {
    'Skincare': 'Kwita ku baruhi',
    'Makeup': 'Makeup',
    'Haircare': 'Kwita ku masi',
    'Body Care': 'Kwita ku mubiri',
    'Beauty Accessories': 'Ibikoresho by\'Ubupayiniya',
    'Fragrance': 'Ibintu by\'Bituye',
  },
  categoriesAll: 'Byose',
  categoryDescriptions: {
    'Skincare': 'Ibisabune, serumu n\'ibinobirwa',
    'Makeup': 'Ibindikizi, urwango n\'ijisho',
    'Haircare': 'Ibisabune cy\'umutwe n\'ibivura',
    'Body Care': 'Ibinobirwa, amavuta n\'ibivura umubiri',
    'Beauty Accessories': 'Ibifashi, ibyongererezo n\'ibikoresho',
    'Fragrance': 'Parfüm n\'ibintu by\'bituye',
  },

  productGrid: {
    eyebrow: 'Ibicuruzwa by\'ibanze',
    title: 'Byagenewe Wowe',
    subtitle: 'Ibyiza by\'ubupayiniya mu byiciro byacu. Ibicuruzwa n\'ibiciro byose ni urugero rw\'erekanwa.',
    searchPlaceholder: 'Shakisha ibicuruzwa...',
    sortFeatured: 'By\'ibanze',
    sortPriceLow: 'Igiciro: Kirenga gito',
    sortPriceHigh: 'Igiciro: Kirenga kinini',
    sortNameAz: 'Izina: A kugera Z',
    noResults: 'Nta byicuruzwa byabonetse. Gerageza ishakisha cyangwa icyiciro kindi.',
    resetFilters: 'Gura izina rito',
  },

  productCard: {
    quickView: 'Reba vuba',
    addToBag: 'Ohereza mu gikoresho',
    inquireAria: (name: string) => `Baza kuri ${name} kuri WhatsApp`,
    quickViewAria: (name: string) => `Reba vuba ${name}`,
  },

  badges: {
    new: 'Gishya',
    bestSeller: 'Kigurwa cyane',
  },

  quickView: {
    closeAria: 'Funga ireba vuba',
    sampleNote: 'Igicuruzwa cy\'urugero — uboneka n\'igiciro bisubizwaho kuri WhatsApp.',
    quantity: 'Umubare',
    decreaseAria: 'Gabanya umubare',
    increaseAria: 'Ongera umubare',
    addToBag: 'Ohereza mu gikoresho',
    inquireWhatsapp: 'Baza kuri WhatsApp',
  },

  cart: {
    title: (count: number) => count > 0 ? `Igikoresho cyawe (${count})` : 'Igikoresho cyawe',
    closeAria: 'Funga igikoresho',
    emptyTitle: 'Igikoresho cyawe kirimo ubusa',
    emptyBody: 'Reba ibyiza byo kwita ku mubiri byagenewe iminsi yawe yose.',
    exploreCta: 'Reba Ibicuruzwa',
    removeAria: (name: string) => `Kuraho ${name}`,
    decreaseAria: 'Gabanya umubare',
    increaseAria: 'Ongera umubare',
    clearAll: 'Huye ibintu byose',
    subtotal: 'Igiteranyo',
    confirmNote: 'Uboneka n\'ibiciro by\'anyuma bisubizwaho kuri WhatsApp mbere y\'uko agatakuro kawe kaba akozwe.',
    checkoutWhatsapp: 'Icisha kuri WhatsApp',
    continueShopping: 'Komeza Gura',
  },

  whatsapp: {
    general: 'Muraho Beauty Line KGL! Nshaka kubaza ku byicuruzwa byanyu.',
    productInquiry: (name: string, price: string) =>
      `Muraho Beauty Line KGL! Nshyize mu byiyumvo ibi gicuruzwa:\n\n*${name}*\nIgiciro: ${price}\n\nKiraboneka?`,
    cartCheckout: (items, subtotal) => {
      let msg = `Muraho Beauty Line KGL! Nshaka kwerekana itekerezo ry'igicuruzwa:
`;
      items.forEach((item, i) => {
        msg += `${i + 1}. ${item.name}
   Umubare: ${item.qty} × ${item.price} = ${item.lineTotal}
`;
      });
      msg += `*Igiteranyo: ${subtotal}*
`;
      msg += `Mutamenye: Memeye ko uboneka n'ibiciro by'anyuma bigomba kugenzurwa n'iduka mbere y'uko agatakuro kaba akozwe.
`;
      msg += `Murakoze!`;
      return msg;
    },
    wholesale: (name, business, phone, interests, message) => {
      let msg = `Muraho Beauty Line KGL! Nshaka kumenya byinshi ku gurisha ritonutse.\n\n`;
      msg += `Izina: ${name}\nIbicuruzwa: ${business}\nTelefone/WhatsApp: ${phone}\nIbyiyumvo: ${interests}\n`;
      if (message) msg += `Ubutumwa: ${message}\n`;
      return msg;
    },
    floatingLabel: 'Tuganire',
    floatingAria: 'Tuganire kuri WhatsApp',
  },

  wholesale: {
    eyebrow: 'Kubaguzi B\'ibyamarengane',
    title: 'Ubupayiniya bw\'Aguciro kawe',
    body: 'Ushaka kugura ibyiza by\'ubupayiniya ku saloni yawe, iduka cyangwa ibyamarengane byawe by\'ubupayiniya? Ganira na Beauty Line KGL ku byicuruzwa ukwemeranya n\'ibyiyumbo byo gurisha ritonutse.',
    benefits: [
      { title: 'Ubwitaby byinshi', description: 'Ubone ubwitaby bwinshi bw\'ibyiza n\'ibyo kwita ku mubiri byagenewe aguciro kawe.' },
      { title: 'Ibyiciro byiza', description: 'Ibicuruzwa byatoranyijwe mu bijyanye n\'ibyangombwa bya saloni, iduka n\'abahanga b\'ubupayiniya.' },
      { title: 'Ibyo hano', description: 'Turi mu Kigali, twaganira ku bwitumwa bw\'ibicuruzwa ku byamarengane byawe.' },
      { title: 'Gufasha Aguciro', description: 'Tuvugane ku byicuruzwa ukwemeranya n\'umubare ushaka.' },
    ],
    formTitle: 'Ibyiyumvo ku Gurisha Ritonutse',
    formBody: 'Uzuza amakuru yawe tugatungere ubutumwa bwa WhatsApp.',
    nameLabel: 'Izina ryawe',
    namePlaceholder: 'Mwene Mutaramutse',
    businessLabel: 'Izina ry\'Aguciro',
    businessPlaceholder: 'Saloni cyangwa Duka ryawe',
    phoneLabel: 'Telefone cyangwa WhatsApp',
    phonePlaceholder: '+250 7XX XXX XXX',
    interestsLabel: 'Ibyicuruzwa ukwiyumva',
    interestsPlaceholder: 'Kwita ku baruhi, kwita ku masi, makeup...',
    messageLabel: 'Ubutumwa',
    messagePlaceholder: 'Tubwire ibyo ushaka...',
    submitBtn: 'Tegura Ubutumwa bwa WhatsApp',
    requiredMark: '*',
    errors: {
      name: 'Mutumwe izina ryawe',
      business: 'Mutumwe izina ry\'aguciro kawe',
      phone: 'Mutumwe telefone yawe',
      interests: 'Mutubwire ibicuruzwa ukwiyumva',
    },
    successTitle: 'Ubutumwa bwateguwe',
    successBody: 'Ubutumwa bwawe bwateguwe. Kanda hano ku musozi ku bwohereza kuri WhatsApp.',
    successBtn: 'Ohereza kuri WhatsApp',
    editForm: 'Hindura ifishi',
  },

  about: {
    eyebrow: 'Tuzwiho',
    title: 'Ubupayiniya bwihariye ku Minsi yawe',
    body1: 'Beauty Line KGL ni aho uhitemwo guhombo ibiza n\'ibyo kwita ku mubiri mu Kigali. Reba ibicuruzwa unganire n\'ikipe yacu ku byiciro n\'amakuru y\'agatakuro kawe.',
    body2: 'Ushyiraho ishinga ry\'kwita ku baruhi ku minsi yose, cyangwa ushaka ibara ryiza, cyangwa ushaka kuzuza saloni yawe, turi hano kugufasha kubona ibyo ushaka.',
    local: 'Hano',
    basedInKigali: 'Turi mu Kigali',
    personal: 'Bwite',
    oneOnOne: 'Gufasha amaso ku maso',
    exploreCta: 'Reba Ibicuruzwa',
  },

  social: {
    eyebrow: 'Ubumwe n\'Imyumvire',
    title: 'Imyumvire y\'Ubupayiniya bwawe',
    subtitle: 'Inama z\'ubupayiniya, ibicuruzwa byiza, n\'imyumvire y\'iminsi. Dukurikire nk\'uko ubumwe bwacu bugenda bwiyongera.',
    tiles: [
      { alt: 'Umugore wemeza urwango mu zenguruke z\'izuba', label: 'Imigenzo y\'Ubupayiniya' },
      { alt: 'Ibivuga serumu mu cyerekezo cya kamere', label: 'Ibicuruzwa byiza' },
      { alt: 'Umugore w\'amabwiza yerekana makeup y\'umwuga', label: 'Iby\'erekanwa' },
      { alt: 'Umugore w\'u Burundi yemeza makeup n\'agafashi', label: 'Inama' },
      { alt: 'Serumu z\'ubupayiniya mu maso', label: 'Kwita ku baruhi' },
      { alt: 'Umugore w\'u Burundi wizwa n\'amasabune y\'amaboko', label: 'Kwita ku Mubiri' },
    ],
    followUs: 'Tukurikire ku byiyumvo byinshi by\'ubupayiniya:',
    instagram: 'Instagram',
    instagramAria: 'Tukurikire kuri Instagram (interuro izongerwaho)',
    tiktok: 'TikTok',
    tiktokAria: 'Tukurikire kuri TikTok (interuro izongerwaho)',
    linksNote: 'Interuro zizongerwaho z\'amakonti yemezwe.',
  },

  trust: {
    eyebrow: 'Ibyiringiro by\'Umuguzi',
    title: 'Gura na Beauty Line KGL',
    subtitle: 'Tushaka ko wumva wizera mu nzira yose. Hano ni ibyo gutegereza mu gihe ugurisha natwe.',
    items: [
      { title: 'Nigute ugura?', description: 'Reba ibicuruzwa, ohereza mu gikoresho, hanyuma ucishe kuri WhatsApp. Ikipe yacu izasubiza amakuru y\'agatakuro kawe.' },
      { title: 'Uboneka bw\'Ibicuruzwa', description: 'Twohereze ubutumwa kuri WhatsApp n\'izina ry\'igicuruzwa cyangwa ifoto. Tuzabaguza ku buboneka bw\'iri mu dukka.' },
      { title: 'Amakuru y\'Ishyura', description: 'Uburyo bwo kwishyura n\'amakuru yabwo bisubizwaho mu biganiro bya WhatsApp mbere y\'uko agatakuro kaba akozwe.' },
      { title: 'Ioherezwa', description: 'Ioherezwa mu Kigali n\'ahandi ryaboneka. Tuhore amakuru y\'aho uri kuri WhatsApp.' },
      { title: 'Garuza no Gusubiranya', description: 'Itegeko ryo garuza no gusubiranya risubizwaho mu gihe wagurije. Tuganire natwe mbere y\'uko ugura.' },
      { title: 'Ibibazo mbere yo Kugura', description: 'Tugutegeka kubaza ibibazo ku bimenyetso byose mbere y\'uko ugura. Ikipe yacu ishishikajwe no kugufasha.' },
    ],
  },

  faq: {
    eyebrow: 'Ibibazo n\'Ibisubizo',
    title: 'Ibibazu Bikunze Kubazwa',
    items: [
      { question: 'Nigute nerekana agatakuro?', answer: 'Reba ibicuruzwa, ohereza ibintu mu gikoresho, hanyuma kande "Icisha kuri WhatsApp." Ibi bifungura ikiganiro n\'ikipe yacu kugira ngo twemeze uboneka tugasubize agatakuro kawe. Washobora kandi kutwohereza ubutumwa ku gicuruzwa na byo.' },
      { question: 'Ibicuruzwa n\'ibiciro kuri uru rubuga ni byo bizi?', answer: 'Iri ni urubuga rw\'erekanwa. Amazina y\'ibicuruzwa, amafoto n\'ibiciro byerekanywe hano ni urugero. Mutwohereze ubutumwa kuri WhatsApp kugira ngo mugenzure uboneka n\'ibiciro by\'ukuri mbere yo kugura.' },
      { question: 'Nigute nshobora kumenya niba igicuruzwa kiri?', answer: 'Twohereze ubutumwa kuri WhatsApp n\'izina ry\'igicuruzwa cyangwa ifoto. Ikipe yacu izasubiza ku buboneka bw\'iri mu dukka n\'ibindi byiciro igicuruzwa kitabonetse.' },
      { question: 'Ni hehe hashyurwa?', answer: 'Amakuru y\'uburyo bwo kwishyura asubizwaho mu biganiro bya WhatsApp. Mutuvugane mbere y\'erekana agatakuro kugira ngo tugabanyare amakuru y\'uburyo bwo kwishyura.' },
      { question: 'Mwohereza mu Kigali?', answer: 'Ibyo koherezwa mu Kigali n\'ahandi biganirwaho mu gihe cy\'agatakuro kawe kuri WhatsApp. Mutuvugane n\'aho muri kugira ngo tugufashe.' },
      { question: 'Nshobora garuza cyangwa gusubiranya igicuruzwa?', answer: 'Itegeko ryo garuza no gusubiranya risubizwaho mu gihe wagurije. Mutwohereze ubutumwa mbere yo kugura niba mufite ibyiyumvo byihariye ku gicuruzwa.' },
    ],
  },

  footer: {
    ctaTitle: 'Ufite Ikibazo? Tuganire',
    ctaBody: 'Tuvugane n\'ikipe yacu kuri WhatsApp ku byicuruzwa, agatakuro, cyangwa ibibazo byose.',
    messageUs: 'Tuganire',
    brandTagline: 'Aho uhitemwo guhombo ibiza n\'ibyo kwita ku mubiri mu Kigali, u Rwanda.',
    navigate: 'Ibikorere',
    categories: 'Ibyiciro',
    getInTouch: 'Tuvugane',
    hours: 'Kuwa 1 - Kuwa 6: 8:00 - 19:00',
    hoursSunday: 'Ku cyumweru: 10:00 - 16:00',
    rights: (year, name) => `© ${year} ${name}. Uburenganzira bwose bwizigamiwe.`,
    disclaimer: 'Iri ni urubuga rw\'erekanwa. Ibicuruzwa, ibiciro n\'amategeko yerekanywe ni urugero rw\'erekanwa.',
  },

  products: {
    p1: { name: 'Serumu y\'Ubwiza bw\'Amaso', description: 'Serumu yorohereje yagenewe kurwanya no kunganura ibara ry\'urubari rwawe. Ikoreshwa mu gitondo n\'ijoro kugira ngo ubone ubwiza bw\'kamere.' },
    p2: { name: 'Ruvuke rw\'Ibindikizi — Rosewood', description: 'Ruvuke rw\'ibindikizi rw\'icyatsi cyiza cy\'rosewood. Roroheye, rwitabwaho cyane kandi rufite ibara riryohereye mu kugezaho kamwe.' },
    p3: { name: 'Ibisabune cy\'Umutwe — Kwita n\'Umuparency', description: 'Ibisabune cyoroheje cyo gukarisha umutwe n\'amavuta y\'kamere kugira ngo byita ku masi no kongera umupercency. Bikenewe ku bwoko bwose bw\'amasi.' },
    p4: { name: 'Ibinobirwa by\'Umubiri — Siliki', description: 'Ibinobirwa by\'umubiri bikomeye ariko byoroheje, byinjira vuba mu mubiri byita ku mubiri wawe wose ku munsi. Bifite isuku y\'ibyatsi byoroheje.' },
    p5: { name: 'Ibifashi by\'Makeup by\'Umwuga', description: 'Ibifashi 12 by\'umwuga bya makeup by\'amaaso n\'urubari. Ibifashi byoroheje by\'kamere n\'ibikoresho byiza.' },
    p6: { name: 'Parfüm y\'Amber', description: 'Ibinuka byiza by\'amber, vanilla n\'isandalwood. Bimara igihe kirekire kandi bikenewe mu ijoro.' },
    p7: { name: 'Ibinobirwa by\'Amazi — Hydra Boost', description: 'Ibinobirwa by\'imiryango y\'amazi yo kwita ku muburi ku munsi. Biroheje kandi bihuye n\'ibihe bya Kigali.' },
    p8: { name: 'Ibyiciro by\'Ijisho — Glam', description: 'Ibyiciro 12 by\'ijisho by\'amaaso, bimwe bisha n\'ibindi bikana. Kuva mu bwatsi bworoheye kugera mu barna b\'ijisho ry\'ijoro.' },
    p9: { name: 'Ibivura cy\'Umutwe', description: 'Ibivura cy\'umutwe cy\'ikimezerezo cyita ku masi yari yarangwanye. Ikoreshwa buri cyumweru kugira ngo amasaba abone ubwiza.' },
    p10: { name: 'Amavuta y\'Umubiri — Glow', description: 'Amavuta y\'umubiri atuma umubiri wawe uba n\'ubwiza bworoheje. Yorohejwe n\'amavuta y\'kamere kugira ngo umubiri ube mweru.' },
    p11: { name: 'Ibyongererezo bya Makeup (3)', description: 'Ibyongererezo 3 bya makeup byoroheje kugira ngo ibindikizi byinjire neza. Byiyongera amazi kugira ngo ubone ubwiza bw\'dey.' },
    p12: { name: 'Parfüm ya Velvet', description: 'Ibinuka byoroheje by\'peony, white musk n\'bergamot. Bihuye n\'iminsi yose.' },
  },

  language: {
    label: 'RW',
    aria: 'Hindura ururimi',
  },
};
