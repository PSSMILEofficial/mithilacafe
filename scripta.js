/* =========================================================
   CAFE MITHILA
   Full functionality
   ========================================================= */


/* =========================================================
   CONFIG
   ========================================================= */

const WHATSAPP_NUMBER = "9779708913951";

const CART_STORAGE_KEY = "cafeMithilaCart";
const LANGUAGE_STORAGE_KEY = "cafeMithilaLanguage";
const THEME_STORAGE_KEY = "cafeMithilaTheme";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      gallery: "Gallery",
      order: "Order",
      reserve: "Reserve"
    },

    actions: {
      language: "Language",
      theme: "Day / Night"
    },

    hero: {
      location: "Campus Chowk · Janakpurdham",
      line1: "Taste Mithila.",
      line2: "Feel Janakpur.",
      description:
        "A warm corner of Janakpurdham where traditional Mithila flavours meet the comfort of a modern cafe.",
      viewMenu: "View Our Menu",
      reserve: "Reserve Your Time",
      trust1: "Mithila Inspired",
      trust2: "Made With Care",
      trust3: "Cafe Comfort",
      originalPhoto: "View Cafe Photo"
    },

    about: {
      kicker: "Our Story",
      title: "More Than a Cafe. A Little Piece of Mithila.",
      description:
        "Cafe Mithila brings together the warmth of Janakpur, the colours of Mithila and the simple joy of good food.",
      p1:
        "From traditional Mithila favourites to familiar cafe comfort food, every plate is made to feel welcoming, generous and close to home.",
      p2:
        "Whether you come for chiya with friends, a family meal, a quick snack or a peaceful afternoon, Cafe Mithila is your place to pause and enjoy.",
      stat1: "Food Choices",
      stat2: "Languages",
      stat3: "Mithila Spirit"
    },

    menu: {
      kicker: "From Our Kitchen",
      title: "Our Menu",
      description:
        "From Mithila classics to cafe favourites, find something delicious for every mood.",
      search: "Search food...",
      popular: "Popular",
      popularHint: "Loved by our guests",
      clearFilters: "Clear",
      emptyTitle: "No food found",
      emptyText: "Try another search or category.",
      showAll: "Show All Food",
      results: "Showing {count} food items"
    },

    order: {
      kicker: "Your Food, Your Way",
      title: "Your Order",
      description:
        "Choose your favourites, tell us a few details, and send your order directly to Cafe Mithila on WhatsApp.",
      selected: "Selected Food",
      basket: "Your Basket",
      clear: "Clear",
      empty: "Your basket is empty.",
      browse: "Browse Menu",
      total: "Total",
      detailsLabel: "Extra Details",
      detailsTitle: "Order Details",
      whatsapp: "Send Your Order",
      remove: "Remove"
    },

    reserve: {
      kicker: "Make It Special",
      title: "Reserve Your Time",
      description:
        "Planning a family meal, a friends' gathering or simply want your place ready? Tell us when you're coming.",
      point1: "Choose your date",
      point2: "Choose your time",
      point3: "Set people and tables",
      notePlaceholder:
        "Birthday, family gathering, special request...",
      button: "Reserve on WhatsApp"
    },

    form: {
      name: "Your Name",
      namePlaceholder: "Enter your name",
      phone: "Phone Number",
      phonePlaceholder: "98XXXXXXXX",
      people: "Number of People / Chairs",
      peoplePlaceholder: "How many people?",
      peopleHelp: "How many people will eat?",
      tables: "Number of Tables",
      tablesPlaceholder: "Tables required",
      tablesHelp: "How many tables are required for your group?",
      orderType: "Order Type",
      pickup: "Pickup",
      dinein: "Dine-in",
      note: "Extra Note",
      notePlaceholder: "Any special request?",
      date: "Date",
      time: "Time"
    },

    gallery: {
      kicker: "A Glimpse of Cafe Mithila",
      title: "Come, Sit & Feel Mithila",
      view: "View Cafe Photo",
      food: "Food & Flavours",
      space: "Our Space",
      chiya: "Chiya & Coffee"
    },

    visit: {
      kicker: "Come Find Us",
      title: "Your Mithila Corner",
      description:
        "Right in the heart of Janakpurdham, ready to welcome you.",
      locationTitle: "Location",
      phoneTitle: "Phone",
      hoursTitle: "Opening Hours",
      hours: "7:00 AM – 10:00 PM",
      map: "Open in Google Maps"
    },

    cart: {
      label: "Your Selection",
      title: "Your Order",
      goOrder: "Continue to Your Order",
      empty: "Your order is empty.",
      browse: "Browse Our Menu"
    },

    toast: {
      added: "Added",
      addedText: "{name} added to your order.",
      removed: "Removed",
      removedText: "{name} removed from your order.",
      cleared: "Order Cleared",
      clearedText: "Your selected food has been cleared.",
      noItems: "No Food Selected",
      noItemsText: "Please add food from our menu first.",
      orderReady: "Your Order",
      reserveReady: "Reservation",
      invalidPhone: "Please enter a valid phone number.",
      sent: "Opening WhatsApp",
      sentText: "Your details are ready to send."
    },

    categories: {
      popular: "Popular",
      all: "All",
      mithila: "Mithila Special",
      janakpur: "Janakpur Special",
      breakfast: "Breakfast",
      snacks: "Snacks",
      main: "Main Course",
      veg: "Vegetarian",
      nonveg: "Non-Vegetarian",
      chiya: "Chiya & Coffee",
      drinks: "Drinks",
      sweets: "Sweets"
    },

    footer: {
      description: "Taste Mithila. Feel Janakpur.",
      rights: "© 2026 Cafe Mithila. All rights reserved.",
      made: "Made with",
      mithila: "in Mithila"
    }
  },


  ne: {

    nav: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारेमा",
      menu: "मेनु",
      gallery: "ग्यालरी",
      order: "अर्डर",
      reserve: "बुकिङ"
    },

    actions: {
      language: "भाषा",
      theme: "दिन / रात"
    },

    hero: {
      location: "क्याम्पस चोक · जनकपुरधाम",
      line1: "मिथिलाको स्वाद।",
      line2: "जनकपुरको अनुभूति।",
      description:
        "जनकपुरधामको न्यानो ठाउँ, जहाँ परम्परागत मिथिला स्वादले आधुनिक क्याफेको आरामसँग भेट गर्छ।",
      viewMenu: "हाम्रो मेनु हेर्नुहोस्",
      reserve: "आफ्नो समय बुक गर्नुहोस्",
      trust1: "मिथिलाबाट प्रेरित",
      trust2: "मायाले तयार",
      trust3: "क्याफेको आराम",
      originalPhoto: "क्याफेको फोटो हेर्नुहोस्"
    },

    about: {
      kicker: "हाम्रो कथा",
      title: "क्याफे मात्र होइन। मिथिलाको सानो टुक्रा।",
      description:
        "क्याफे मिथिलाले जनकपुरको न्यानोपन, मिथिलाका रङहरू र स्वादिलो खानाको सरल खुसीलाई एकै ठाउँमा ल्याउँछ।",
      p1:
        "परम्परागत मिथिला परिकारदेखि परिचित क्याफे खानासम्म, हरेक परिकारलाई आत्मीय, स्वादिलो र घरजस्तै बनाउन तयार गरिन्छ।",
      p2:
        "साथीसँग चिया खान, परिवारसँग भोजन गर्न, हल्का खाजा खान वा शान्त समय बिताउन—क्याफे मिथिला तपाईंको आफ्नै ठाउँ हो।",
      stat1: "खानाका विकल्प",
      stat2: "भाषा",
      stat3: "मिथिला भावना"
    },

    menu: {
      kicker: "हाम्रो भान्साबाट",
      title: "हाम्रो मेनु",
      description:
        "मिथिलाका परम्परागत परिकारदेखि क्याफेका लोकप्रिय स्वादसम्म, हरेक मनका लागि केही स्वादिलो।",
      search: "खाना खोज्नुहोस्...",
      popular: "लोकप्रिय",
      popularHint: "हाम्रा पाहुनाको रोजाइ",
      clearFilters: "सफा",
      emptyTitle: "कुनै खाना भेटिएन",
      emptyText: "अर्को खोज वा श्रेणी प्रयास गर्नुहोस्।",
      showAll: "सबै खाना हेर्नुहोस्",
      results: "{count} वटा खाना देखाइँदैछ"
    },

    order: {
      kicker: "तपाईंको खाना, तपाईंको तरिका",
      title: "तपाईंको अर्डर",
      description:
        "आफ्ना मनपर्ने परिकार छान्नुहोस्, केही विवरण दिनुहोस् र व्हाट्सएपमार्फत क्याफे मिथिलामा अर्डर पठाउनुहोस्।",
      selected: "छानिएको खाना",
      basket: "तपाईंको बास्केट",
      clear: "सफा",
      empty: "तपाईंको बास्केट खाली छ।",
      browse: "मेनु हेर्नुहोस्",
      total: "जम्मा",
      detailsLabel: "थप विवरण",
      detailsTitle: "अर्डर विवरण",
      whatsapp: "तपाईंको अर्डर पठाउनुहोस्",
      remove: "हटाउनुहोस्"
    },

    reserve: {
      kicker: "विशेष बनाउनुहोस्",
      title: "आफ्नो समय बुक गर्नुहोस्",
      description:
        "परिवारसँग भोजन, साथीहरूको भेटघाट वा आफ्नो ठाउँ पहिले नै तयार चाहनुहुन्छ? तपाईं कहिले आउँदै हुनुहुन्छ बताउनुहोस्।",
      point1: "मिति छान्नुहोस्",
      point2: "समय छान्नुहोस्",
      point3: "मानिस र टेबल संख्या राख्नुहोस्",
      notePlaceholder:
        "जन्मदिन, पारिवारिक भेटघाट, विशेष अनुरोध...",
      button: "व्हाट्सएपमा बुक गर्नुहोस्"
    },

    form: {
      name: "तपाईंको नाम",
      namePlaceholder: "आफ्नो नाम लेख्नुहोस्",
      phone: "फोन नम्बर",
      phonePlaceholder: "98XXXXXXXX",
      people: "मानिस / कुर्सी संख्या",
      peoplePlaceholder: "कति जना?",
      peopleHelp: "कति जना खाना खानुहुन्छ?",
      tables: "टेबल संख्या",
      tablesPlaceholder: "आवश्यक टेबल",
      tablesHelp: "तपाईंको समूहका लागि कति टेबल चाहिन्छ?",
      orderType: "अर्डर प्रकार",
      pickup: "लिएर जाने",
      dinein: "क्याफेमा खाने",
      note: "थप जानकारी",
      notePlaceholder: "कुनै विशेष अनुरोध?",
      date: "मिति",
      time: "समय"
    },

    gallery: {
      kicker: "क्याफे मिथिलाको झलक",
      title: "आउनुहोस्, बस्नुहोस् र मिथिला महसुस गर्नुहोस्",
      view: "क्याफेको फोटो हेर्नुहोस्",
      food: "खाना र स्वाद",
      space: "हाम्रो ठाउँ",
      chiya: "चिया र कफी"
    },

    visit: {
      kicker: "हामीलाई भेट्नुहोस्",
      title: "तपाईंको मिथिला कुनो",
      description:
        "जनकपुरधामको मुटुमा, तपाईंलाई स्वागत गर्न तयार।",
      locationTitle: "स्थान",
      phoneTitle: "फोन",
      hoursTitle: "खुल्ने समय",
      hours: "बिहान ७:०० – राति १०:००",
      map: "गुगल म्यापमा खोल्नुहोस्"
    },

    cart: {
      label: "तपाईंको छनोट",
      title: "तपाईंको अर्डर",
      goOrder: "तपाईंको अर्डरमा जानुहोस्",
      empty: "तपाईंको अर्डर खाली छ।",
      browse: "हाम्रो मेनु हेर्नुहोस्"
    },

    toast: {
      added: "थपियो",
      addedText: "{name} तपाईंको अर्डरमा थपियो।",
      removed: "हटाइयो",
      removedText: "{name} तपाईंको अर्डरबाट हटाइयो।",
      cleared: "अर्डर सफा गरियो",
      clearedText: "छानिएका खानाहरू हटाइयो।",
      noItems: "खाना छानिएको छैन",
      noItemsText: "पहिले मेनुबाट खाना थप्नुहोस्।",
      orderReady: "तपाईंको अर्डर",
      reserveReady: "बुकिङ",
      invalidPhone: "कृपया सही फोन नम्बर राख्नुहोस्।",
      sent: "व्हाट्सएप खुल्दैछ",
      sentText: "तपाईंको विवरण पठाउन तयार छ।"
    },

    categories: {
      popular: "लोकप्रिय",
      all: "सबै",
      mithila: "मिथिला विशेष",
      janakpur: "जनकपुर विशेष",
      breakfast: "बिहानको खाना",
      snacks: "खाजा",
      main: "मुख्य खाना",
      veg: "शाकाहारी",
      nonveg: "मांसाहारी",
      chiya: "चिया र कफी",
      drinks: "पेय पदार्थ",
      sweets: "मिठाई"
    },

    footer: {
      description: "मिथिलाको स्वाद। जनकपुरको अनुभूति।",
      rights: "© २०२६ क्याफे मिथिला। सर्वाधिकार सुरक्षित।",
      made: "मायाले बनाइएको",
      mithila: "मिथिलामा"
    }
  },


  mai: {

    nav: {
      home: "घर",
      about: "हमर बारेमे",
      menu: "मेनू",
      gallery: "फोटो",
      order: "ऑर्डर",
      reserve: "बुकिंग"
    },

    actions: {
      language: "भाषा",
      theme: "दिन / राति"
    },

    hero: {
      location: "क्याम्पस चोक · जनकपुरधाम",
      line1: "मिथिलाक स्वाद।",
      line2: "जनकपुरक अनुभूति।",
      description:
        "जनकपुरधामक एकटा न्यानगर जगह, जतय पारम्परिक मिथिला स्वाद आधुनिक क्याफेक आरामसँ भेट करैत अछि।",
      viewMenu: "हमर मेनू देखू",
      reserve: "अपन समय बुक करू",
      trust1: "मिथिलासँ प्रेरित",
      trust2: "प्रेमसँ बनाओल",
      trust3: "क्याफेक आराम",
      originalPhoto: "क्याफेक फोटो देखू"
    },

    about: {
      kicker: "हमर कथा",
      title: "केवल क्याफे नहि। मिथिलाक एकटा छोट टुकड़ा।",
      description:
        "क्याफे मिथिला जनकपुरक अपनापन, मिथिलाक रंग आ स्वादिष्ट भोजनक सरल खुशी एकठाम अनैत अछि।",
      p1:
        "पारम्परिक मिथिला व्यंजनसँ लऽ कऽ क्याफेक मनपसन्द खानासम्म, प्रत्येक परिकार अपन घरक स्वाद जेकाँ आत्मीय आ स्वादिष्ट बनाओल जाइत अछि।",
      p2:
        "संगीसँ चिया पीबय, परिवारसँ भोजन करय, हल्का नास्ता करय वा शान्त समय बिताबय—क्याफे मिथिला अहाँक अपन जगह अछि।",
      stat1: "खानाक विकल्प",
      stat2: "भाषा",
      stat3: "मिथिला भावना"
    },

    menu: {
      kicker: "हमर भान्सासँ",
      title: "हमर मेनू",
      description:
        "मिथिलाक पारम्परिक परिकारसँ लऽ कऽ क्याफेक लोकप्रिय स्वादधरि, प्रत्येक मन लेल किछु स्वादिष्ट।",
      search: "खाना खोजू...",
      popular: "लोकप्रिय",
      popularHint: "हमर पाहुनक पसन्द",
      clearFilters: "साफ करू",
      emptyTitle: "कोनो खाना नहि भेटल",
      emptyText: "दोसर खोज वा श्रेणी आजमाउ।",
      showAll: "सभ खाना देखू",
      results: "{count}टा खाना देखाओल जा रहल अछि"
    },

    order: {
      kicker: "अहाँक खाना, अहाँक तरीका",
      title: "अहाँक ऑर्डर",
      description:
        "अपन पसन्दक खाना चुनू, किछु विवरण दिअ आ व्हाट्सएपसँ क्याफे मिथिलामे ऑर्डर पठाउ।",
      selected: "चुनल खाना",
      basket: "अहाँक बास्केट",
      clear: "साफ करू",
      empty: "अहाँक बास्केट खाली अछि।",
      browse: "मेनू देखू",
      total: "कुल",
      detailsLabel: "अतिरिक्त विवरण",
      detailsTitle: "ऑर्डरक विवरण",
      whatsapp: "अहाँक ऑर्डर पठाउ",
      remove: "हटाउ"
    },

    reserve: {
      kicker: "एकरा विशेष बनाउ",
      title: "अपन समय बुक करू",
      description:
        "परिवारक भोजन, दोस्तक भेट वा अपन जगह पहिने सँ तैयार चाहैत छी? अहाँ कहिया आबि रहल छी, से बताउ।",
      point1: "तारीख चुनू",
      point2: "समय चुनू",
      point3: "मानुष आ टेबलक संख्या दिअ",
      notePlaceholder:
        "जन्मदिन, परिवारक भेट, विशेष अनुरोध...",
      button: "व्हाट्सएपपर बुक करू"
    },

    form: {
      name: "अहाँक नाम",
      namePlaceholder: "अपन नाम लिखू",
      phone: "फोन नम्बर",
      phonePlaceholder: "98XXXXXXXX",
      people: "मानुष / कुर्सीक संख्या",
      peoplePlaceholder: "कतेक लोक?",
      peopleHelp: "कतेक लोक भोजन करत?",
      tables: "टेबलक संख्या",
      tablesPlaceholder: "आवश्यक टेबल",
      tablesHelp: "अहाँक समूह लेल कतेक टेबल चाही?",
      orderType: "ऑर्डर प्रकार",
      pickup: "लऽ जाएब",
      dinein: "क्याफेमे खायब",
      note: "अतिरिक्त जानकारी",
      notePlaceholder: "कोनो विशेष अनुरोध?",
      date: "तारीख",
      time: "समय"
    },

    gallery: {
      kicker: "क्याफे मिथिलाक झलक",
      title: "आउ, बैसू आ मिथिला महसूस करू",
      view: "क्याफेक फोटो देखू",
      food: "भोजन आ स्वाद",
      space: "हमर जगह",
      chiya: "चिया आ कॉफी"
    },

    visit: {
      kicker: "हमरा लग आउ",
      title: "अहाँक मिथिला कोना",
      description:
        "जनकपुरधामक बीचमे, अहाँक स्वागत लेल तैयार।",
      locationTitle: "स्थान",
      phoneTitle: "फोन",
      hoursTitle: "खुलबाक समय",
      hours: "बिहान ७:०० – राति १०:००",
      map: "गूगल म्यापपर खोलू"
    },

    cart: {
      label: "अहाँक चयन",
      title: "अहाँक ऑर्डर",
      goOrder: "अहाँक ऑर्डरपर जाउ",
      empty: "अहाँक ऑर्डर खाली अछि।",
      browse: "हमर मेनू देखू"
    },

    toast: {
      added: "थपल गेल",
      addedText: "{name} अहाँक ऑर्डरमे थपल गेल।",
      removed: "हटाओल गेल",
      removedText: "{name} अहाँक ऑर्डरसँ हटाओल गेल।",
      cleared: "ऑर्डर साफ",
      clearedText: "चुनल सभ खाना हटाओल गेल।",
      noItems: "कोनो खाना नहि चुनल गेल",
      noItemsText: "पहिने मेनूसँ खाना जोड़ू।",
      orderReady: "अहाँक ऑर्डर",
      reserveReady: "बुकिंग",
      invalidPhone: "कृपया सही फोन नम्बर दिअ।",
      sent: "व्हाट्सएप खुलि रहल अछि",
      sentText: "अहाँक विवरण पठेबाक लेल तैयार अछि।"
    },

    categories: {
      popular: "लोकप्रिय",
      all: "सभ",
      mithila: "मिथिला विशेष",
      janakpur: "जनकपुर विशेष",
      breakfast: "नाश्ता",
      snacks: "खाजा",
      main: "मुख्य भोजन",
      veg: "शाकाहारी",
      nonveg: "मांसाहारी",
      chiya: "चिया आ कॉफी",
      drinks: "पेय",
      sweets: "मिठाई"
    },

    footer: {
      description: "मिथिलाक स्वाद। जनकपुरक अनुभूति।",
      rights: "© २०२६ क्याफे मिथिला। सभ अधिकार सुरक्षित।",
      made: "प्रेमसँ बनाओल",
      mithila: "मिथिलामे"
    }
  }

};


/* =========================================================
   FOOD DATA
   110+ ITEMS
   ========================================================= */

const foodItems = [

  /* ---------- MITHILA SPECIAL ---------- */

  {
    id: "litti-chokha",
    category: "mithila",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Litti Chokha", "Smoky litti served with rustic chokha."],
    ne: ["लिट्टी चोखा", "परम्परागत चोखासँग स्वादिलो लिट्टी।"],
    mai: ["लिट्टी चोखा", "परम्परागत चोखाक संग स्वादिष्ट लिट्टी।"]
  },

  {
    id: "mithila-thali",
    category: "mithila",
    price: 420,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Mithila Thali", "A generous platter inspired by Mithila flavours."],
    ne: ["मिथिला थाली", "मिथिलाका स्वादले भरिएको विशेष थाली।"],
    mai: ["मिथिला थाली", "मिथिलाक स्वादसँ भरल विशेष थाली।"]
  },

  {
    id: "veg-mithila-thali",
    category: "mithila",
    price: 350,
    popular: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Mithila Thali", "Vegetarian Mithila-style complete meal."],
    ne: ["शाकाहारी मिथिला थाली", "मिथिला शैलीको पूर्ण शाकाहारी भोजन।"],
    mai: ["शाकाहारी मिथिला थाली", "मिथिला शैलीक पूरा शाकाहारी भोजन।"]
  },

  {
    id: "dahi-chura",
    category: "mithila",
    price: 130,
    popular: true,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80",
    en: ["Dahi Chura", "Cool curd with flattened rice, a Mithila favourite."],
    ne: ["दही चिउरा", "दही र चिउराको सरल मिथिला स्वाद।"],
    mai: ["दही चूड़ा", "दही आ चूड़ाक सरल मिथिला स्वाद।"]
  },

  {
    id: "makhana-kheer",
    category: "mithila",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=700&q=80",
    en: ["Makhana Kheer", "Creamy dessert made with fox nuts."],
    ne: ["मखाना खीर", "मखानाबाट बनेको मीठो र क्रीमी खीर।"],
    mai: ["मखाना खीर", "मखानासँ बनल मीठ आ क्रीमी खीर।"]
  },

  {
    id: "makhana-curry",
    category: "mithila",
    price: 230,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Makhana Curry", "Creamy fox nut curry with aromatic spices."],
    ne: ["मखाना करी", "सुगन्धित मसालासहित स्वादिलो मखाना करी।"],
    mai: ["मखाना करी", "सुगन्धित मसालाक संग स्वादिष्ट मखाना करी।"]
  },

  {
    id: "tarua",
    category: "mithila",
    price: 150,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Tarua", "Crispy vegetable fritters inspired by Mithila kitchens."],
    ne: ["तरुवा", "मिथिला शैलीको कुरकुरे तरकारी फ्राई।"],
    mai: ["तरुआ", "मिथिला शैलीक कुरकुरे तरकारी फ्राई।"]
  },

  {
    id: "dal-pitha",
    category: "mithila",
    price: 160,
    popular: true,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    en: ["Dal Pitha", "Soft rice dumplings filled with spiced dal."],
    ne: ["दाल पिठा", "मसलेदार दाल भरिएको नरम चामलको पिठा।"],
    mai: ["दाल पिठा", "मसालेदार दाल भरल नरम चाउरक पिठा।"]
  },

  {
    id: "dal-puri",
    category: "mithila",
    price: 140,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Dal Puri", "Crispy puri stuffed with seasoned lentils."],
    ne: ["दाल पुरी", "मसलेदार दाल भरिएको कुरकुरे पुरी।"],
    mai: ["दाल पूरी", "मसालेदार दाल भरल कुरकुरे पूरी।"]
  },

  {
    id: "thekua",
    category: "mithila",
    price: 90,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Thekua", "Traditional sweet wheat snack."],
    ne: ["ठेकुवा", "परम्परागत मिठो गहुँको परिकार।"],
    mai: ["ठेकुआ", "पारम्परिक मीठ गहूँक पकवान।"]
  },

  {
    id: "malpua",
    category: "mithila",
    price: 120,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Malpua", "Soft sweet pancakes with a golden edge."],
    ne: ["मालपुवा", "नरम र सुनौलो मीठो मालपुवा।"],
    mai: ["मालपुआ", "नरम आ सुनहरा मीठ मालपुआ।"]
  },

  {
    id: "khaja",
    category: "mithila",
    price: 110,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Mithila Khaja", "Crispy layered traditional snack."],
    ne: ["मिथिला खाजा", "कुरकुरे परम्परागत खाजा।"],
    mai: ["मिथिला खाजा", "कुरकुरे पारम्परिक खाजा।"]
  },

  {
    id: "chura-ghugni",
    category: "mithila",
    price: 150,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Chura Ghugni", "Flattened rice with spiced chickpea curry."],
    ne: ["चिउरा घुघनी", "मसलेदार चनाको तरकारीसँग चिउरा।"],
    mai: ["चूड़ा घुघनी", "मसालेदार चनाक तरकारीक संग चूड़ा।"]
  },

  {
    id: "chura-dahi",
    category: "mithila",
    price: 120,
    popular: false,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80",
    en: ["Chura Dahi", "Refreshing flattened rice with creamy curd."],
    ne: ["चिउरा दही", "दहीसँगको ताजा र सरल चिउरा।"],
    mai: ["चूड़ा दही", "दहीक संग ताजा आ सरल चूड़ा।"]
  },

  {
    id: "makhana-roast",
    category: "mithila",
    price: 100,
    popular: false,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=700&q=80",
    en: ["Roasted Makhana", "Lightly spiced roasted fox nuts."],
    ne: ["भुटेको मखाना", "हल्का मसला हालिएको भुटेको मखाना।"],
    mai: ["भुजल मखाना", "हल्का मसाला देल भुजल मखाना।"]
  },

  {
    id: "tilkut",
    category: "mithila",
    price: 100,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Tilkut", "Sesame-based traditional sweet."],
    ne: ["तिलकुट", "तिलबाट बनेको परम्परागत मिठाई।"],
    mai: ["तिलकुट", "तिलसँ बनल पारम्परिक मिठाई।"]
  },

  {
    id: "anarsa",
    category: "mithila",
    price: 120,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Anarsa", "Traditional sweet rice snack."],
    ne: ["अनरसा", "परम्परागत चामलको मिठो परिकार।"],
    mai: ["अनरसा", "पारम्परिक चाउरक मीठ पकवान।"]
  },

  {
    id: "lai",
    category: "mithila",
    price: 90,
    popular: false,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=700&q=80",
    en: ["Mithila Lai", "Light crunchy puffed-grain sweet."],
    ne: ["मिथिला लाई", "हल्का कुरकुरे मिठो परिकार।"],
    mai: ["मिथिला लाई", "हल्का कुरकुरे मीठ पकवान।"]
  },

  {
    id: "murhi-mixture",
    category: "mithila",
    price: 100,
    popular: false,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=700&q=80",
    en: ["Murhi Mixture", "Crunchy puffed rice snack with spices."],
    ne: ["मुरही मिक्सचर", "मसला मिसाइएको कुरकुरे मुरही।"],
    mai: ["मुरही मिक्सचर", "मसाला मिलाओल कुरकुरे मुरही।"]
  },

  {
    id: "sattu-drink",
    category: "mithila",
    price: 100,
    popular: false,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80",
    en: ["Sattu Drink", "Refreshing roasted gram flour drink."],
    ne: ["सत्तु पेय", "भुटेको चनाको सत्तुबाट बनेको ताजा पेय।"],
    mai: ["सत्तू पेय", "भुजल चनाक सत्तूसँ बनल ताजा पेय।"]
  },

  {
    id: "mithila-salad",
    category: "mithila",
    price: 130,
    popular: false,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80",
    en: ["Mithila Fresh Salad", "Fresh seasonal vegetables with local-style dressing."],
    ne: ["मिथिला फ्रेश सलाद", "स्थानीय स्वादको ड्रेसिङसहित ताजा सलाद।"],
    mai: ["मिथिला फ्रेश सलाद", "स्थानीय स्वादक ड्रेसिंग संग ताजा सलाद।"]
  },


  /* ---------- JANAKPUR SPECIAL ---------- */

  {
    id: "janakpur-thali",
    category: "janakpur",
    price: 450,
    popular: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Janakpur Special Thali", "A complete meal inspired by Janakpur."],
    ne: ["जनकपुर स्पेशल थाली", "जनकपुरको स्वादबाट प्रेरित पूर्ण भोजन।"],
    mai: ["जनकपुर स्पेशल थाली", "जनकपुरक स्वादसँ प्रेरित पूरा भोजन।"]
  },

  {
    id: "fish-thali",
    category: "janakpur",
    price: 480,
    popular: true,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    en: ["Fish Thali", "Rice, dal, vegetables and local-style fish curry."],
    ne: ["फिस थाली", "भात, दाल, तरकारी र माछाको स्वादिलो करी।"],
    mai: ["माछ थाली", "भात, दाल, तरकारी आ स्वादिष्ट माछ करी।"]
  },

  {
    id: "chicken-thali",
    category: "janakpur",
    price: 490,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Thali", "Comforting chicken curry with rice and sides."],
    ne: ["चिकेन थाली", "चिकेन करी, भात र परिकारसहित पूर्ण भोजन।"],
    mai: ["चिकेन थाली", "चिकेन करी, भात आ संगक परिकार।"]
  },

  {
    id: "goat-curry",
    category: "janakpur",
    price: 360,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Local Goat Curry", "Slow-cooked goat curry with aromatic spices."],
    ne: ["लोकल खसी करी", "सुगन्धित मसालामा पकाइएको खसीको करी।"],
    mai: ["लोकल खसी करी", "सुगन्धित मसालामे पकाओल खसीक करी।"]
  },

  {
    id: "fish-curry",
    category: "janakpur",
    price: 300,
    popular: true,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    en: ["Mithila Fish Curry", "Spiced fish curry with a homestyle touch."],
    ne: ["मिथिला माछा करी", "घरायसी स्वादको मसलेदार माछा करी।"],
    mai: ["मिथिला माछ करी", "घरक स्वादक मसालेदार माछ करी।"]
  },

  {
    id: "chicken-curry",
    category: "janakpur",
    price: 290,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Curry", "Rich homestyle chicken curry."],
    ne: ["चिकेन करी", "गाढा र स्वादिलो घरायसी चिकेन करी।"],
    mai: ["चिकेन करी", "गाढ़ आ स्वादिष्ट घरक चिकेन करी।"]
  },

  {
    id: "aloo-tama",
    category: "janakpur",
    price: 210,
    popular: false,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    en: ["Aloo Tama", "Potato and bamboo shoot curry."],
    ne: ["आलु तामा", "आलु र तामाको स्वादिलो करी।"],
    mai: ["आलू तामा", "आलू आ तामाक स्वादिष्ट करी।"]
  },

  {
    id: "local-veg-curry",
    category: "janakpur",
    price: 190,
    popular: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Local Vegetable Curry", "Seasonal vegetables cooked with local spices."],
    ne: ["लोकल तरकारी करी", "स्थानीय मसालासहित मौसमी तरकारी।"],
    mai: ["लोकल तरकारी करी", "स्थानीय मसालाक संग मौसमी तरकारी।"]
  },


  /* ---------- BREAKFAST ---------- */

  {
    id: "puri-tarkari",
    category: "breakfast",
    price: 150,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Puri Tarkari", "Crispy puri served with spiced potato curry."],
    ne: ["पुरी तरकारी", "मसलेदार आलु तरकारीसँग कुरकुरे पुरी।"],
    mai: ["पूरी तरकारी", "मसालेदार आलू तरकारीक संग कुरकुरे पूरी।"]
  },

  {
    id: "aloo-paratha",
    category: "breakfast",
    price: 160,
    popular: true,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    en: ["Aloo Paratha", "Crispy stuffed paratha with potato filling."],
    ne: ["आलु पराठा", "आलुको भराइ भएको कुरकुरे पराठा।"],
    mai: ["आलू पराठा", "आलूक भरल कुरकुरे पराठा।"]
  },

  {
    id: "plain-paratha",
    category: "breakfast",
    price: 110,
    popular: false,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    en: ["Plain Paratha", "Flaky golden paratha."],
    ne: ["प्लेन पराठा", "तहदार र सुनौलो पराठा।"],
    mai: ["प्लेन पराठा", "तहदार आ सुनहरा पराठा।"]
  },

  {
    id: "egg-paratha",
    category: "breakfast",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    en: ["Egg Paratha", "Paratha filled with seasoned egg."],
    ne: ["अण्डा पराठा", "मसला हालिएको अण्डा भरिएको पराठा।"],
    mai: ["अंडा पराठा", "मसाला देल अंडा भरल पराठा।"]
  },

  {
    id: "bread-omelette",
    category: "breakfast",
    price: 140,
    popular: true,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80",
    en: ["Bread Omelette", "Fluffy omelette with toasted bread."],
    ne: ["ब्रेड ओमलेट", "फुलफुले ओमलेट र टोस्टेड ब्रेड।"],
    mai: ["ब्रेड ऑमलेट", "फुलका ऑमलेट आ टोस्ट ब्रेड।"]
  },

  {
    id: "masala-omelette",
    category: "breakfast",
    price: 120,
    popular: false,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80",
    en: ["Masala Omelette", "Egg omelette with onion, tomato and spices."],
    ne: ["मसला ओमलेट", "प्याज, गोलभेडा र मसालासहित ओमलेट।"],
    mai: ["मसाला ऑमलेट", "प्याज, टमाटर आ मसालाक संग ऑमलेट।"]
  },

  {
    id: "aloo-puri",
    category: "breakfast",
    price: 145,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Aloo Puri", "Puri with homestyle potato curry."],
    ne: ["आलु पुरी", "घरायसी आलु तरकारीसँग पुरी।"],
    mai: ["आलू पूरी", "घरक आलू तरकारीक संग पूरी।"]
  },

  {
    id: "chura-tarkari",
    category: "breakfast",
    price: 130,
    popular: false,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80",
    en: ["Chura Tarkari", "Flattened rice with seasonal vegetable curry."],
    ne: ["चिउरा तरकारी", "मौसमी तरकारीसँग चिउरा।"],
    mai: ["चूड़ा तरकारी", "मौसमी तरकारीक संग चूड़ा।"]
  },

  {
    id: "toast-butter",
    category: "breakfast",
    price: 100,
    popular: false,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=700&q=80",
    en: ["Butter Toast", "Crispy toast with butter."],
    ne: ["बटर टोस्ट", "बटरसँग कुरकुरे टोस्ट।"],
    mai: ["बटर टोस्ट", "बटरक संग कुरकुरे टोस्ट।"]
  },

  {
    id: "pancake",
    category: "breakfast",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=700&q=80",
    en: ["Pancake Stack", "Soft pancakes with sweet topping."],
    ne: ["प्यानकेक स्ट्याक", "मिठो टपिङसहित नरम प्यानकेक।"],
    mai: ["पैनकेक स्टैक", "मीठ टपिंगक संग नरम पैनकेक।"]
  },


  /* ---------- SNACKS ---------- */

  {
    id: "samosa",
    category: "snacks",
    price: 60,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Samosa", "Crispy pastry filled with spiced potato."],
    ne: ["समोसा", "मसलेदार आलु भरिएको कुरकुरे समोसा।"],
    mai: ["समोसा", "मसालेदार आलू भरल कुरकुरे समोसा।"]
  },

  {
    id: "veg-pakora",
    category: "snacks",
    price: 120,
    popular: true,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Pakora", "Crispy mixed vegetable fritters."],
    ne: ["भेज पकौडा", "मिक्स तरकारीको कुरकुरे पकौडा।"],
    mai: ["वेज पकौड़ा", "मिक्स तरकारीक कुरकुरे पकौड़ा।"]
  },

  {
    id: "paneer-pakora",
    category: "snacks",
    price: 170,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Paneer Pakora", "Crispy paneer fritters."],
    ne: ["पनीर पकौडा", "कुरकुरे पनीर पकौडा।"],
    mai: ["पनीर पकौड़ा", "कुरकुरे पनीर पकौड़ा।"]
  },

  {
    id: "aloo-chop",
    category: "snacks",
    price: 80,
    popular: true,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    en: ["Aloo Chop", "Crispy spiced potato snack."],
    ne: ["आलु चप", "मसलेदार कुरकुरे आलु चप।"],
    mai: ["आलू चॉप", "मसालेदार कुरकुरे आलू चॉप।"]
  },

  {
    id: "veg-momo",
    category: "snacks",
    price: 150,
    popular: true,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Momo", "Steamed dumplings filled with vegetables."],
    ne: ["भेज मोमो", "तरकारी भरिएको स्टीम मोमो।"],
    mai: ["वेज मोमो", "तरकारी भरल स्टीम मोमो।"]
  },

  {
    id: "chicken-momo",
    category: "snacks",
    price: 190,
    popular: true,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Momo", "Juicy chicken-filled dumplings."],
    ne: ["चिकेन मोमो", "रसिलो चिकेन भरिएको मोमो।"],
    mai: ["चिकेन मोमो", "रसदार चिकेन भरल मोमो।"]
  },

  {
    id: "jhol-momo",
    category: "snacks",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80",
    en: ["Jhol Momo", "Momo served in spicy sesame jhol."],
    ne: ["झोल मोमो", "मसलेदार तिलको झोलसँग मोमो।"],
    mai: ["झोल मोमो", "मसालेदार तिलक झोलमे मोमो।"]
  },

  {
    id: "fried-momo",
    category: "snacks",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80",
    en: ["Fried Momo", "Golden fried dumplings with dip."],
    ne: ["फ्राइड मोमो", "डिपसँग सुनौलो फ्राइड मोमो।"],
    mai: ["फ्राइड मोमो", "डिपक संग सुनहरा फ्राइड मोमो।"]
  },

  {
    id: "chowmein-veg",
    category: "snacks",
    price: 160,
    popular: true,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Chowmein", "Stir-fried noodles with fresh vegetables."],
    ne: ["भेज चाउमिन", "ताजा तरकारीसँग फ्राइड नुडल्स।"],
    mai: ["वेज चाउमिन", "ताजा तरकारीक संग फ्राइड नूडल्स।"]
  },

  {
    id: "chowmein-chicken",
    category: "snacks",
    price: 200,
    popular: true,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Chowmein", "Stir-fried noodles with chicken."],
    ne: ["चिकेन चाउमिन", "चिकेनसँग फ्राइड नुडल्स।"],
    mai: ["चिकेन चाउमिन", "चिकेनक संग फ्राइड नूडल्स।"]
  },

  {
    id: "french-fries",
    category: "snacks",
    price: 130,
    popular: true,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    en: ["French Fries", "Crispy golden fries."],
    ne: ["फ्रेन्च फ्राइज", "कुरकुरे सुनौला फ्राइज।"],
    mai: ["फ्रेन्च फ्राइज", "कुरकुरे सुनहरा फ्राइज।"]
  },

  {
    id: "peri-peri-fries",
    category: "snacks",
    price: 160,
    popular: false,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    en: ["Peri Peri Fries", "Fries with spicy peri peri seasoning."],
    ne: ["पेरी पेरी फ्राइज", "मसलेदार पेरी पेरी स्वादका फ्राइज।"],
    mai: ["पेरी पेरी फ्राइज", "मसालेदार पेरी पेरी स्वादक फ्राइज।"]
  },

  {
    id: "chilli-potato",
    category: "snacks",
    price: 190,
    popular: false,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    en: ["Chilli Potato", "Crispy potato tossed in chilli sauce."],
    ne: ["चिल्ली पोटेटो", "चिल्ली ससमा मिसाइएको कुरकुरे आलु।"],
    mai: ["चिल्ली पोटेटो", "चिल्ली सॉसमे मिलाओल कुरकुरे आलू।"]
  },

  {
    id: "chilli-paneer",
    category: "snacks",
    price: 240,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Chilli Paneer", "Paneer tossed with peppers and chilli sauce."],
    ne: ["चिल्ली पनीर", "शिमला खुर्सानी र चिल्ली सससँग पनीर।"],
    mai: ["चिल्ली पनीर", "शिमला मिर्च आ चिल्ली सॉसक संग पनीर।"]
  },

  {
    id: "spring-roll",
    category: "snacks",
    price: 150,
    popular: false,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Spring Roll", "Crispy rolls with vegetable filling."],
    ne: ["भेज स्प्रिङ रोल", "तरकारी भरिएको कुरकुरे रोल।"],
    mai: ["वेज स्प्रिङ रोल", "तरकारी भरल कुरकुरे रोल।"]
  },

  {
    id: "cheese-ball",
    category: "snacks",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    en: ["Cheese Balls", "Crispy golden cheese bites."],
    ne: ["चिज बल्स", "कुरकुरे सुनौला चिज बल्स।"],
    mai: ["चीज बल्स", "कुरकुरे सुनहरा चीज बल्स।"]
  },

  {
    id: "club-sandwich",
    category: "snacks",
    price: 220,
    popular: true,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
    en: ["Club Sandwich", "Layered sandwich with fresh fillings."],
    ne: ["क्लब स्यान्डविच", "ताजा सामग्रीले भरिएको लेयर्ड स्यान्डविच।"],
    mai: ["क्लब सैंडविच", "ताजा सामग्रीसँ भरल लेयर्ड सैंडविच।"]
  },

  {
    id: "veg-sandwich",
    category: "snacks",
    price: 170,
    popular: false,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Sandwich", "Fresh vegetable sandwich."],
    ne: ["भेज स्यान्डविच", "ताजा तरकारीको स्यान्डविच।"],
    mai: ["वेज सैंडविच", "ताजा तरकारीक सैंडविच।"]
  },

  {
    id: "chicken-sandwich",
    category: "snacks",
    price: 210,
    popular: false,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Sandwich", "Toasted sandwich with chicken filling."],
    ne: ["चिकेन स्यान्डविच", "चिकेन भरिएको टोस्टेड स्यान्डविच।"],
    mai: ["चिकेन सैंडविच", "चिकेन भरल टोस्ट सैंडविच।"]
  },


  /* ---------- MAIN COURSE ---------- */

  {
    id: "dal-bhat",
    category: "main",
    price: 280,
    popular: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Dal Bhat Set", "Rice, lentils, vegetables and sides."],
    ne: ["दाल भात सेट", "भात, दाल, तरकारी र परिकारसहित।"],
    mai: ["दाल भात सेट", "भात, दाल, तरकारी आ संगक परिकार।"]
  },

  {
    id: "veg-rice",
    category: "main",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Steamed Rice", "Freshly cooked aromatic rice."],
    ne: ["सेतो भात", "ताजा पकाइएको सुगन्धित भात।"],
    mai: ["सादा भात", "ताजा पकाओल सुगन्धित भात।"]
  },

  {
    id: "jeera-rice",
    category: "main",
    price: 190,
    popular: false,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    en: ["Jeera Rice", "Fragrant rice with cumin."],
    ne: ["जिरा राइस", "जिराको सुगन्ध भएको भात।"],
    mai: ["जीरा राइस", "जीराक सुगन्ध वाला भात।"]
  },

  {
    id: "veg-fried-rice",
    category: "main",
    price: 190,
    popular: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Fried Rice", "Wok-fried rice with vegetables."],
    ne: ["भेज फ्राइड राइस", "तरकारीसँग वोकमा फ्राइड गरिएको भात।"],
    mai: ["वेज फ्राइड राइस", "तरकारीक संग वोकमे फ्राइड भात।"]
  },

  {
    id: "chicken-fried-rice",
    category: "main",
    price: 230,
    popular: true,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Fried Rice", "Fried rice with chicken and vegetables."],
    ne: ["चिकेन फ्राइड राइस", "चिकेन र तरकारीसँग फ्राइड राइस।"],
    mai: ["चिकेन फ्राइड राइस", "चिकेन आ तरकारीक संग फ्राइड राइस।"]
  },

  {
    id: "veg-thukpa",
    category: "main",
    price: 190,
    popular: false,
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Thukpa", "Warm noodle soup with vegetables."],
    ne: ["भेज थुक्पा", "तरकारीसहित तातो नुडल सुप।"],
    mai: ["वेज थुक्पा", "तरकारीक संग गरम नूडल सुप।"]
  },

  {
    id: "chicken-thukpa",
    category: "main",
    price: 230,
    popular: false,
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Thukpa", "Warm noodle soup with chicken."],
    ne: ["चिकेन थुक्पा", "चिकेनसहित तातो नुडल सुप।"],
    mai: ["चिकेन थुक्पा", "चिकेनक संग गरम नूडल सुप।"]
  },

  {
    id: "veg-pasta",
    category: "main",
    price: 240,
    popular: false,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
    en: ["Creamy Veg Pasta", "Creamy pasta with seasonal vegetables."],
    ne: ["क्रीमी भेज पास्ता", "मौसमी तरकारीसहित क्रीमी पास्ता।"],
    mai: ["क्रीमी वेज पास्ता", "मौसमी तरकारीक संग क्रीमी पास्ता।"]
  },

  {
    id: "chicken-pasta",
    category: "main",
    price: 280,
    popular: false,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Pasta", "Creamy pasta with chicken."],
    ne: ["चिकेन पास्ता", "चिकेनसँग क्रीमी पास्ता।"],
    mai: ["चिकेन पास्ता", "चिकेनक संग क्रीमी पास्ता।"]
  },

  {
    id: "veg-pizza",
    category: "main",
    price: 350,
    popular: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Pizza", "Cheesy pizza with fresh vegetables."],
    ne: ["भेज पिज्जा", "ताजा तरकारीसहित चिजी पिज्जा।"],
    mai: ["वेज पिज्जा", "ताजा तरकारीक संग चीज वाला पिज्जा।"]
  },

  {
    id: "chicken-pizza",
    category: "main",
    price: 390,
    popular: true,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Pizza", "Cheesy pizza topped with chicken."],
    ne: ["चिकेन पिज्जा", "चिकेन टपिङसहित चिजी पिज्जा।"],
    mai: ["चिकेन पिज्जा", "चिकेन टपिंगक संग चीज वाला पिज्जा।"]
  },

  {
    id: "margherita-pizza",
    category: "main",
    price: 320,
    popular: false,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
    en: ["Margherita Pizza", "Classic tomato, cheese and herb pizza."],
    ne: ["मार्घेरिटा पिज्जा", "टमाटर, चिज र हर्बको क्लासिक पिज्जा।"],
    mai: ["मार्घेरिटा पिज्जा", "टमाटर, चीज आ हर्बक क्लासिक पिज्जा।"]
  },

  {
    id: "veg-burger",
    category: "main",
    price: 220,
    popular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Burger", "Crispy vegetable patty burger."],
    ne: ["भेज बर्गर", "कुरकुरे भेज प्याटीसहित बर्गर।"],
    mai: ["वेज बर्गर", "कुरकुरे तरकारी प्याटीक संग बर्गर।"]
  },

  {
    id: "chicken-burger",
    category: "main",
    price: 260,
    popular: true,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Burger", "Juicy chicken burger with fresh toppings."],
    ne: ["चिकेन बर्गर", "ताजा टपिङसहित रसिलो चिकेन बर्गर।"],
    mai: ["चिकेन बर्गर", "ताजा टपिंगक संग रसदार चिकेन बर्गर।"]
  },


  /* ---------- VEGETARIAN ---------- */

  {
    id: "dal-tadka",
    category: "veg",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Dal Tadka", "Creamy lentils tempered with spices."],
    ne: ["दाल तड्का", "मसालाको झोक लगाइएको स्वादिलो दाल।"],
    mai: ["दाल तड़का", "मसालाक झोक देल स्वादिष्ट दाल।"]
  },

  {
    id: "mixed-veg",
    category: "veg",
    price: 190,
    popular: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Mixed Vegetable", "Seasonal mixed vegetables in light spices."],
    ne: ["मिक्स भेजिटेबल", "हल्का मसालामा मौसमी मिश्रित तरकारी।"],
    mai: ["मिक्स वेजिटेबल", "हल्का मसालामे मौसमी मिश्रित तरकारी।"]
  },

  {
    id: "paneer-butter-masala",
    category: "veg",
    price: 260,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Paneer Butter Masala", "Paneer in creamy tomato gravy."],
    ne: ["पनीर बटर मसला", "क्रीमी टमाटर ग्रेभीमा पनीर।"],
    mai: ["पनीर बटर मसाला", "क्रीमी टमाटर ग्रेवीमे पनीर।"]
  },

  {
    id: "palak-paneer",
    category: "veg",
    price: 250,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Palak Paneer", "Paneer cooked in creamy spinach gravy."],
    ne: ["पालक पनीर", "पालकको क्रीमी ग्रेभीमा पकाइएको पनीर।"],
    mai: ["पालक पनीर", "क्रीमी पालक ग्रेवीमे पकाओल पनीर।"]
  },

  {
    id: "shahi-paneer",
    category: "veg",
    price: 270,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Shahi Paneer", "Rich creamy paneer curry."],
    ne: ["शाही पनीर", "गाढा र क्रीमी शाही पनीर करी।"],
    mai: ["शाही पनीर", "गाढ़ आ क्रीमी शाही पनीर करी।"]
  },

  {
    id: "chana-masala",
    category: "veg",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Chana Masala", "Chickpeas cooked with aromatic spices."],
    ne: ["चना मसला", "सुगन्धित मसालासहित पकाइएको चना।"],
    mai: ["चना मसाला", "सुगन्धित मसालाक संग पकाओल चना।"]
  },

  {
    id: "rajma-masala",
    category: "veg",
    price: 190,
    popular: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Rajma Masala", "Comforting kidney bean curry."],
    ne: ["राजमा मसला", "स्वादिलो राजमाको करी।"],
    mai: ["राजमा मसाला", "स्वादिष्ट राजमाक करी।"]
  },

  {
    id: "aloo-gobi",
    category: "veg",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Aloo Gobi", "Potato and cauliflower with spices."],
    ne: ["आलु गोभी", "मसालासहित आलु र काउली।"],
    mai: ["आलू गोभी", "मसालाक संग आलू आ फूलगोभी।"]
  },

  {
    id: "matar-paneer",
    category: "veg",
    price: 250,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Matar Paneer", "Green peas and paneer in tomato gravy."],
    ne: ["मटर पनीर", "टमाटर ग्रेभीमा मटर र पनीर।"],
    mai: ["मटर पनीर", "टमाटर ग्रेवीमे मटर आ पनीर।"]
  },

  {
    id: "veg-kofta",
    category: "veg",
    price: 250,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Veg Kofta", "Vegetable dumplings in rich gravy."],
    ne: ["भेज कोफ्ता", "गाढा ग्रेभीमा भेज कोफ्ता।"],
    mai: ["वेज कोफ्ता", "गाढ़ ग्रेवीमे वेज कोफ्ता।"]
  },


  /* ---------- NON-VEGETARIAN ---------- */

  {
    id: "chicken-tikka",
    category: "nonveg",
    price: 320,
    popular: true,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Tikka", "Grilled chicken pieces with spices."],
    ne: ["चिकेन टिक्का", "मसालासहित ग्रिल गरिएको चिकेन।"],
    mai: ["चिकेन टिक्का", "मसालाक संग ग्रिल कएल चिकेन।"]
  },

  {
    id: "chicken-wings",
    category: "nonveg",
    price: 280,
    popular: true,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Wings", "Crispy seasoned chicken wings."],
    ne: ["चिकेन विङ्स", "मसला हालिएका कुरकुरे चिकेन विङ्स।"],
    mai: ["चिकेन विंग्स", "मसाला देल कुरकुरे चिकेन विंग्स।"]
  },

  {
    id: "chicken-chilli",
    category: "nonveg",
    price: 290,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Chilli", "Chicken tossed with peppers and chilli sauce."],
    ne: ["चिकेन चिल्ली", "शिमला खुर्सानी र चिल्ली सससँग चिकेन।"],
    mai: ["चिकेन चिल्ली", "शिमला मिर्च आ चिल्ली सॉसक संग चिकेन।"]
  },

  {
    id: "chicken-65",
    category: "nonveg",
    price: 280,
    popular: false,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken 65", "Crispy spiced fried chicken."],
    ne: ["चिकेन ६५", "मसालेदार कुरकुरे फ्राइड चिकेन।"],
    mai: ["चिकेन ६५", "मसालेदार कुरकुरे फ्राइड चिकेन।"]
  },

  {
    id: "mutton-curry",
    category: "nonveg",
    price: 390,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Mutton Curry", "Slow-cooked mutton with aromatic spices."],
    ne: ["मटन करी", "सुगन्धित मसालासहित बिस्तारै पकाइएको मटन।"],
    mai: ["मटन करी", "सुगन्धित मसालाक संग धीरे पकाओल मटन।"]
  },

  {
    id: "fish-fry",
    category: "nonveg",
    price: 300,
    popular: true,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    en: ["Fish Fry", "Crispy spiced fish fillet."],
    ne: ["फिस फ्राइ", "मसालेदार कुरकुरे माछा।"],
    mai: ["फिस फ्राइ", "मसालेदार कुरकुरे माछ।"]
  },

  {
    id: "egg-curry",
    category: "nonveg",
    price: 200,
    popular: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    en: ["Egg Curry", "Boiled eggs in spiced gravy."],
    ne: ["अण्डा करी", "मसलेदार ग्रेभीमा अण्डा।"],
    mai: ["अंडा करी", "मसालेदार ग्रेवीमे अंडा।"]
  },

  {
    id: "chicken-sekuwa",
    category: "nonveg",
    price: 320,
    popular: true,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80",
    en: ["Chicken Sekuwa", "Char-grilled chicken with Nepali spices."],
    ne: ["चिकेन सेकुवा", "नेपाली मसालासहित चार-ग्रिल गरिएको चिकेन।"],
    mai: ["चिकेन सेकुवा", "नेपाली मसालाक संग चार-ग्रिल कएल चिकेन।"]
  },

  {
    id: "buff-chilli",
    category: "nonveg",
    price: 300,
    popular: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    en: ["Buff Chilli", "Spicy buff tossed with peppers."],
    ne: ["बफ चिल्ली", "खुर्सानी र मसालासहित मसलेदार बफ।"],
    mai: ["बफ चिल्ली", "मिर्च आ मसालाक संग मसालेदार बफ।"]
  },


  /* ---------- CHIYA & COFFEE ---------- */

  {
    id: "milk-tea",
    category: "chiya",
    price: 50,
    popular: true,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    en: ["Milk Chiya", "Classic warm milk tea."],
    ne: ["दूध चिया", "क्लासिक तातो दूध चिया।"],
    mai: ["दूध चिया", "क्लासिक गरम दूध चिया।"]
  },

  {
    id: "masala-chiya",
    category: "chiya",
    price: 70,
    popular: true,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    en: ["Masala Chiya", "Aromatic tea brewed with warming spices."],
    ne: ["मसला चिया", "सुगन्धित मसालासहित तातो चिया।"],
    mai: ["मसाला चिया", "सुगन्धित मसालाक संग गरम चिया।"]
  },

  {
    id: "black-tea",
    category: "chiya",
    price: 45,
    popular: false,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=80",
    en: ["Black Tea", "Simple refreshing black tea."],
    ne: ["ब्ल्याक टी", "सरल र ताजा ब्ल्याक टी।"],
    mai: ["ब्लैक टी", "सरल आ ताजा ब्लैक टी।"]
  },

  {
    id: "lemon-tea",
    category: "chiya",
    price: 65,
    popular: true,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=700&q=80",
    en: ["Lemon Tea", "Refreshing tea with lemon."],
    ne: ["लेमन टी", "कागतीको ताजापन भएको चिया।"],
    mai: ["लेमन टी", "कागतीक ताजगी वाला चिया।"]
  },

  {
    id: "ginger-tea",
    category: "chiya",
    price: 65,
    popular: false,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
    en: ["Ginger Tea", "Warm tea with fresh ginger."],
    ne: ["अदुवा चिया", "ताजा अदुवासहित तातो चिया।"],
    mai: ["अदरक चिया", "ताजा अदरकक संग गरम चिया।"]
  },

  {
    id: "espresso",
    category: "chiya",
    price: 130,
    popular: true,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=80",
    en: ["Espresso", "Bold and rich espresso."],
    ne: ["एस्प्रेसो", "गाढा र बलियो एस्प्रेसो।"],
    mai: ["एस्प्रेसो", "गाढ़ आ मजबूत एस्प्रेसो।"]
  },

  {
    id: "americano",
    category: "chiya",
    price: 150,
    popular: true,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=700&q=80",
    en: ["Americano", "Smooth espresso with hot water."],
    ne: ["अमेरिकानो", "तातो पानीसँगको स्मुथ कफी।"],
    mai: ["अमेरिकानो", "गरम पानिक संग स्मूथ कॉफी।"]
  },

  {
    id: "cappuccino",
    category: "chiya",
    price: 190,
    popular: true,
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=700&q=80",
    en: ["Cappuccino", "Espresso with steamed milk and foam."],
    ne: ["क्यापुचिनो", "स्टीम्ड दूध र फोमसहित एस्प्रेसो।"],
    mai: ["कैपुचिनो", "स्टीम दूध आ फोमक संग एस्प्रेसो।"]
  },

  {
    id: "cafe-latte",
    category: "chiya",
    price: 200,
    popular: true,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=80",
    en: ["Cafe Latte", "Smooth espresso with creamy milk."],
    ne: ["क्याफे ल्याटे", "क्रीमी दूधसँग स्मुथ एस्प्रेसो।"],
    mai: ["कैफे लाटे", "क्रीमी दूधक संग स्मूथ एस्प्रेसो।"]
  },

  {
    id: "cold-coffee",
    category: "chiya",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
    en: ["Cold Coffee", "Chilled creamy coffee."],
    ne: ["कोल्ड कफी", "चिसो र क्रीमी कफी।"],
    mai: ["कोल्ड कॉफी", "ठंढा आ क्रीमी कॉफी।"]
  },

  {
    id: "iced-latte",
    category: "chiya",
    price: 210,
    popular: false,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
    en: ["Iced Latte", "Chilled espresso with creamy milk."],
    ne: ["आइस्ड ल्याटे", "चिसो दूधसँग एस्प्रेसो।"],
    mai: ["आइस्ड लाटे", "ठंढा दूधक संग एस्प्रेसो।"]
  },

  {
    id: "mocha",
    category: "chiya",
    price: 220,
    popular: false,
    image: "https://images.unsplash.com/photo-1579306194872-64d3d7c52a3f?auto=format&fit=crop&w=700&q=80",
    en: ["Cafe Mocha", "Coffee blended with chocolate and milk."],
    ne: ["क्याफे मोचा", "चकलेट र दूधसँग मिलाइएको कफी।"],
    mai: ["कैफे मोका", "चॉकलेट आ दूधक संग मिलाओल कॉफी।"]
  },


  /* ---------- DRINKS ---------- */

  {
    id: "sweet-lassi",
    category: "drinks",
    price: 140,
    popular: true,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
    en: ["Sweet Lassi", "Cool creamy traditional lassi."],
    ne: ["मीठो लस्सी", "चिसो र क्रीमी परम्परागत लस्सी।"],
    mai: ["मीठ लस्सी", "ठंढा आ क्रीमी पारम्परिक लस्सी।"]
  },

  {
    id: "mango-lassi",
    category: "drinks",
    price: 170,
    popular: true,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
    en: ["Mango Lassi", "Creamy mango and yogurt drink."],
    ne: ["आम लस्सी", "आम र दहीको क्रीमी पेय।"],
    mai: ["आम लस्सी", "आम आ दहीक क्रीमी पेय।"]
  },

  {
    id: "salt-lassi",
    category: "drinks",
    price: 130,
    popular: false,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
    en: ["Salted Lassi", "Refreshing savoury lassi."],
    ne: ["नुनिलो लस्सी", "ताजा नुनिलो लस्सी।"],
    mai: ["नुनगर लस्सी", "ताजा नमकीन लस्सी।"]
  },

  {
    id: "lemon-soda",
    category: "drinks",
    price: 110,
    popular: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
    en: ["Lemon Soda", "Sparkling lemon refresher."],
    ne: ["लेमन सोडा", "फिजी र ताजा लेमन सोडा।"],
    mai: ["लेमन सोडा", "फिजी आ ताजा लेमन सोडा।"]
  },

  {
    id: "mint-lemonade",
    category: "drinks",
    price: 140,
    popular: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
    en: ["Mint Lemonade", "Fresh lemon and mint cooler."],
    ne: ["मिन्ट लेमोनेड", "कागती र पुदिनाको ताजा पेय।"],
    mai: ["मिन्ट लेमोनेड", "कागती आ पुदिनाक ताजा पेय।"]
  },

  {
    id: "mango-shake",
    category: "drinks",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
    en: ["Mango Shake", "Thick creamy mango shake."],
    ne: ["म्याङ्गो शेक", "गाढा र क्रीमी आँपको शेक।"],
    mai: ["आम शेक", "गाढ़ आ क्रीमी आमक शेक।"]
  },

  {
    id: "banana-shake",
    category: "drinks",
    price: 160,
    popular: false,
    image: "https://images.unsplash.com/photo-1553787499-6f9133860279?auto=format&fit=crop&w=700&q=80",
    en: ["Banana Shake", "Creamy banana milkshake."],
    ne: ["केरा शेक", "क्रीमी केराको मिल्कशेक।"],
    mai: ["केरा शेक", "क्रीमी केराक मिल्कशेक।"]
  },

  {
    id: "chocolate-shake",
    category: "drinks",
    price: 190,
    popular: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
    en: ["Chocolate Shake", "Rich chocolate milkshake."],
    ne: ["चकलेट शेक", "गाढा चकलेट मिल्कशेक।"],
    mai: ["चॉकलेट शेक", "गाढ़ चॉकलेट मिल्कशेक।"]
  },

  {
    id: "oreo-shake",
    category: "drinks",
    price: 210,
    popular: false,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80",
    en: ["Oreo Shake", "Creamy cookie milkshake."],
    ne: ["ओरियो शेक", "कुकी र क्रीमी मिल्कशेक।"],
    mai: ["ओरियो शेक", "कुकी आ क्रीमी मिल्कशेक।"]
  },

  {
    id: "fresh-orange",
    category: "drinks",
    price: 150,
    popular: false,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80",
    en: ["Fresh Orange Juice", "Freshly squeezed orange juice."],
    ne: ["ताजा सुन्तला जुस", "ताजा निचोरेको सुन्तलाको जुस।"],
    mai: ["ताजा संतरा जूस", "ताजा निचोड़ल संतरेक जूस।"]
  },

  {
    id: "watermelon-juice",
    category: "drinks",
    price: 140,
    popular: false,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80",
    en: ["Watermelon Juice", "Cool refreshing watermelon juice."],
    ne: ["तरबुजा जुस", "चिसो र ताजा तरबुजाको जुस।"],
    mai: ["तरबूज जूस", "ठंढा आ ताजा तरबूजक जूस।"]
  },

  {
    id: "lassi-mix",
    category: "drinks",
    price: 180,
    popular: false,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=80",
    en: ["Fruit Lassi", "Creamy yogurt blended with seasonal fruit."],
    ne: ["फ्रुट लस्सी", "मौसमी फलसँग मिसाइएको क्रीमी लस्सी।"],
    mai: ["फ्रूट लस्सी", "मौसमी फलसँ मिलाओल क्रीमी लस्सी।"]
  },


  /* ---------- SWEETS ---------- */

  {
    id: "gulab-jamun",
    category: "sweets",
    price: 100,
    popular: true,
    image: "https://images.unsplash.com/photo-1666190094769-8e0d5b9b1d9e?auto=format&fit=crop&w=700&q=80",
    en: ["Gulab Jamun", "Soft sweet dumplings in warm syrup."],
    ne: ["गुलाब जामुन", "चास्नीमा डुबेको नरम मिठाई।"],
    mai: ["गुलाब जामुन", "चासनीमे डूबल नरम मिठाई।"]
  },

  {
    id: "rasmalai",
    category: "sweets",
    price: 150,
    popular: true,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80",
    en: ["Rasmalai", "Soft cheese dumplings in creamy milk."],
    ne: ["रसमलाई", "क्रीमी दूधमा नरम रसमलाई।"],
    mai: ["रसमलाई", "क्रीमी दूधमे नरम रसमलाई।"]
  },

  {
    id: "kheer",
    category: "sweets",
    price: 130,
    popular: true,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=700&q=80",
    en: ["Rice Kheer", "Creamy rice pudding with cardamom."],
    ne: ["चामलको खीर", "अलैंचीको सुगन्ध भएको क्रीमी खीर।"],
    mai: ["चाउरक खीर", "इलाइची सुगन्ध वाला क्रीमी खीर।"]
  },

  {
    id: "fruit-custard",
    category: "sweets",
    price: 160,
    popular: false,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    en: ["Fruit Custard", "Creamy custard with fresh fruits."],
    ne: ["फ्रुट कस्टर्ड", "ताजा फलसहित क्रीमी कस्टर्ड।"],
    mai: ["फ्रूट कस्टर्ड", "ताजा फलसँ भरल क्रीमी कस्टर्ड।"]
  },

  {
    id: "brownie",
    category: "sweets",
    price: 180,
    popular: true,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=700&q=80",
    en: ["Chocolate Brownie", "Rich soft chocolate brownie."],
    ne: ["चकलेट ब्राउनी", "गाढा र नरम चकलेट ब्राउनी।"],
    mai: ["चॉकलेट ब्राउनी", "गाढ़ आ नरम चॉकलेट ब्राउनी।"]
  },

  {
    id: "ice-cream-vanilla",
    category: "sweets",
    price: 100,
    popular: true,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80",
    en: ["Vanilla Ice Cream", "Classic creamy vanilla ice cream."],
    ne: ["भेनिला आइसक्रिम", "क्लासिक क्रीमी भेनिला आइसक्रिम।"],
    mai: ["भेनिला आइसक्रिम", "क्लासिक क्रीमी भेनिला आइसक्रिम।"]
  },

  {
    id: "ice-cream-chocolate",
    category: "sweets",
    price: 110,
    popular: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80",
    en: ["Chocolate Ice Cream", "Rich chocolate ice cream."],
    ne: ["चकलेट आइसक्रिम", "गाढा चकलेट आइसक्रिम।"],
    mai: ["चॉकलेट आइसक्रिम", "गाढ़ चॉकलेट आइसक्रिम।"]
  },

  {
    id: "fruit-cream",
    category: "sweets",
    price: 170,
    popular: false,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    en: ["Fruit Cream", "Fresh fruits folded into creamy dessert."],
    ne: ["फ्रुट क्रिम", "क्रीमी डेजर्टमा ताजा फल।"],
    mai: ["फ्रूट क्रीम", "क्रीमी डेजर्टमे ताजा फल।"]
  },

  {
    id: "chocolate-cake",
    category: "sweets",
    price: 190,
    popular: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80",
    en: ["Chocolate Cake", "Soft chocolate cake slice."],
    ne: ["चकलेट केक", "नरम चकलेट केकको स्लाइस।"],
    mai: ["चॉकलेट केक", "नरम चॉकलेट केकक स्लाइस।"]
  },

  {
    id: "cheesecake",
    category: "sweets",
    price: 220,
    popular: false,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
    en: ["Cheesecake", "Creamy cheesecake slice."],
    ne: ["चिजकेक", "क्रीमी चिजकेकको स्लाइस।"],
    mai: ["चीजकेक", "क्रीमी चीजकेकक स्लाइस।"]
  },

  {
    id: "mango-dessert",
    category: "sweets",
    price: 170,
    popular: false,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80",
    en: ["Mango Cream", "Creamy mango dessert."],
    ne: ["म्याङ्गो क्रिम", "क्रीमी आँपको मिठाई।"],
    mai: ["आम क्रीम", "क्रीमी आमक मिठाई।"]
  }

];


/* =========================================================
   STATE
   ========================================================= */

let currentLanguage =
  localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";

let currentCategory = "popular";

let searchTerm = "";

let cart = loadCart();


/* =========================================================
   DOM
   ========================================================= */

const body = document.body;

const languageBtn =
  document.getElementById("languageBtn");

const mobileLanguageBtn =
  document.getElementById("mobileLanguageBtn");

const currentLanguageEl =
  document.getElementById("currentLanguage");

const themeToggle =
  document.getElementById("themeToggle");

const mobileThemeBtn =
  document.getElementById("mobileThemeBtn");

const mobileMenuToggle =
  document.getElementById("mobileMenuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");

const mobileMenuOverlay =
  document.getElementById("mobileMenuOverlay");

const mobileMenuClose =
  document.getElementById("mobileMenuClose");

const menuSearch =
  document.getElementById("menuSearch");

const clearSearch =
  document.getElementById("clearSearch");

const menuTabs =
  document.getElementById("menuTabs");

const menuGrid =
  document.getElementById("menuGrid");

const menuEmpty =
  document.getElementById("menuEmpty");

const menuResultText =
  document.getElementById("menuResultText");

const clearFilters =
  document.getElementById("clearFilters");

const emptyResetBtn =
  document.getElementById("emptyResetBtn");

const popularList =
  document.getElementById("popularList");

const orderCartItems =
  document.getElementById("orderCartItems");

const orderTotal =
  document.getElementById("orderTotal");

const drawerItems =
  document.getElementById("drawerItems");

const drawerTotal =
  document.getElementById("drawerTotal");

const headerCartCount =
  document.getElementById("headerCartCount");

const cartOpenBtn =
  document.getElementById("cartOpenBtn");

const cartCloseBtn =
  document.getElementById("cartCloseBtn");

const cartOverlay =
  document.getElementById("cartOverlay");

const cartDrawer =
  document.getElementById("cartDrawer");

const clearCartBtn =
  document.getElementById("clearCartBtn");

const drawerOrderBtn =
  document.getElementById("drawerOrderBtn");

const orderForm =
  document.getElementById("orderForm");

const reserveForm =
  document.getElementById("reserveForm");

const toast =
  document.getElementById("toast");

const toastTitle =
  document.getElementById("toastTitle");

const toastText =
  document.getElementById("toastText");

const siteHeader =
  document.getElementById("siteHeader");


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  applyTheme();

  applyTranslations();

  renderPopular();

  renderCategories();

  renderMenu();

  renderCart();

  setMinimumDate();

  setupNavigation();

});


/* =========================================================
   HELPERS
   ========================================================= */

function getText(key) {

  const parts = key.split(".");

  let value = translations[currentLanguage];

  for (const part of parts) {

    if (value && Object.prototype.hasOwnProperty.call(value, part)) {
      value = value[part];
    } else {
      return key;
    }

  }

  return value;
}


function replaceTokens(text, tokens = {}) {

  let result = text;

  Object.entries(tokens).forEach(([key, value]) => {

    result = result.replaceAll(
      `{${key}}`,
      value
    );

  });

  return result;
}


function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function getFoodText(food) {

  const languageData =
    food[currentLanguage] || food.en;

  return {
    name: languageData[0],
    description: languageData[1]
  };

}


function getCategoryName(category) {

  return (
    translations[currentLanguage]
      .categories[category] ||
    category
  );

}


function formatPrice(price) {

  return `NPR ${price.toLocaleString("en-IN")}`;

}


/* =========================================================
   TRANSLATIONS
   ========================================================= */

function applyTranslations() {

  document.documentElement.lang =
    currentLanguage === "mai"
      ? "mai"
      : currentLanguage;

  currentLanguageEl.textContent =
    currentLanguage.toUpperCase();

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n");

      const value =
        getText(key);

      if (value !== key) {
        element.textContent = value;
      }

    });


  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n-placeholder");

      const value =
        getText(key);

      if (value !== key) {
        element.placeholder = value;
      }

    });


  renderPopular();
  renderCategories();
  renderMenu();
  renderCart();

}


/* =========================================================
   LANGUAGE
   ========================================================= */

function changeLanguage() {

  const languages = ["en", "ne", "mai"];

  const currentIndex =
    languages.indexOf(currentLanguage);

  currentLanguage =
    languages[
      (currentIndex + 1) % languages.length
    ];

  localStorage.setItem(
    LANGUAGE_STORAGE_KEY,
    currentLanguage
  );

  applyTranslations();

}


languageBtn.addEventListener(
  "click",
  changeLanguage
);

mobileLanguageBtn.addEventListener(
  "click",
  () => {

    changeLanguage();

    closeMobileMenu();

  }
);


/* =========================================================
   THEME
   ========================================================= */

function applyTheme() {

  const savedTheme =
    localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark") {

    body.classList.add("dark");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-sun"></i>';

  } else {

    body.classList.remove("dark");

    themeToggle.innerHTML =
      '<i class="fa-solid fa-moon"></i>';

  }

}


function toggleTheme() {

  const dark =
    body.classList.toggle("dark");

  localStorage.setItem(
    THEME_STORAGE_KEY,
    dark ? "dark" : "light"
  );

  themeToggle.innerHTML = dark
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

}


themeToggle.addEventListener(
  "click",
  toggleTheme
);

mobileThemeBtn.addEventListener(
  "click",
  () => {

    toggleTheme();

    closeMobileMenu();

  }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

function openMobileMenu() {

  mobileMenu.classList.add("open");
  mobileMenuOverlay.classList.add("open");

  mobileMenuToggle.classList.add("open");

  mobileMenuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

  body.classList.add("menu-open");

}


function closeMobileMenu() {

  mobileMenu.classList.remove("open");
  mobileMenuOverlay.classList.remove("open");

  mobileMenuToggle.classList.remove("open");

  mobileMenuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

  body.classList.remove("menu-open");

}


mobileMenuToggle.addEventListener(
  "click",
  () => {

    if (
      mobileMenu.classList.contains("open")
    ) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }

  }
);

mobileMenuClose.addEventListener(
  "click",
  closeMobileMenu
);

mobileMenuOverlay.addEventListener(
  "click",
  closeMobileMenu
);

document
  .querySelectorAll("[data-mobile-link]")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMobileMenu
    );

  });


/* =========================================================
   MENU CATEGORIES
   ========================================================= */

const categoryOrder = [

  "popular",
  "all",
  "mithila",
  "janakpur",
  "breakfast",
  "snacks",
  "main",
  "veg",
  "nonveg",
  "chiya",
  "drinks",
  "sweets"

];


function renderCategories() {

  menuTabs.innerHTML = "";

  categoryOrder.forEach(category => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "menu-tab" +
      (
        currentCategory === category
          ? " active"
          : ""
      );

    button.textContent =
      getCategoryName(category);

    button.addEventListener(
      "click",
      () => {

        currentCategory = category;

        renderCategories();
        renderMenu();

        document
          .querySelector(".menu-tabs-wrapper")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
          });

      }
    );

    menuTabs.appendChild(button);

  });

}


/* =========================================================
   POPULAR
   ========================================================= */

function renderPopular() {

  popularList.innerHTML = "";

  const popular =
    foodItems
      .filter(item => item.popular)
      .slice(0, 16);

  popular.forEach(food => {

    const text =
      getFoodText(food);

    const item =
      document.createElement("div");

    item.className =
      "popular-item";

    item.innerHTML = `

      <span>${escapeHTML(text.name)}</span>

      <button
        type="button"
        aria-label="Add ${escapeHTML(text.name)}"
      >
        <i class="fa-solid fa-plus"></i>
      </button>

    `;

    item
      .querySelector("button")
      .addEventListener(
        "click",
        event => {

          event.stopPropagation();

          addToCart(
            food.id,
            item.querySelector("button")
          );

        }
      );

    item.addEventListener(
      "click",
      () => {

        addToCart(
          food.id,
          item.querySelector("button")
        );

      }
    );

    popularList.appendChild(item);

  });

}


/* =========================================================
   SEARCH
   ========================================================= */

function getFilteredFoods() {

  let foods = [...foodItems];

  if (currentCategory === "popular") {

    foods =
      foods.filter(
        food => food.popular
      );

  } else if (currentCategory !== "all") {

    foods =
      foods.filter(
        food =>
          food.category === currentCategory
      );

  }


  const search =
    searchTerm
      .trim()
      .toLocaleLowerCase();

  if (!search) {
    return foods;
  }


  return foods.filter(food => {

    const text =
      getFoodText(food);

    const category =
      getCategoryName(food.category);

    const searchable = [

      text.name,
      text.description,
      category,
      food.en[0],
      food.ne[0],
      food.mai[0]

    ]
      .join(" ")
      .toLocaleLowerCase();

    return searchable.includes(search);

  });

}


menuSearch.addEventListener(
  "input",
  event => {

    searchTerm =
      event.target.value;

    currentCategory = searchTerm
      ? "all"
      : currentCategory;

    renderCategories();
    renderMenu();

  }
);


clearSearch.addEventListener(
  "click",
  () => {

    menuSearch.value = "";

    searchTerm = "";

    renderMenu();

    menuSearch.focus();

  }
);


/* =========================================================
   MENU RENDERING
   ========================================================= */

function renderMenu() {

  const foods =
    getFilteredFoods();

  menuGrid.innerHTML = "";

  const hasSearch =
    searchTerm.trim().length > 0;

  const shouldShowClear =
    hasSearch ||
    currentCategory !== "popular";

  clearFilters.classList.toggle(
    "visible",
    shouldShowClear
  );


  if (foods.length === 0) {

    menuGrid.style.display = "none";

    menuEmpty.hidden = false;

    menuResultText.textContent = "";

    return;

  }


  menuGrid.style.display = "";

  menuEmpty.hidden = true;


  menuResultText.textContent =
    replaceTokens(
      getText("menu.results"),
      {
        count: foods.length
      }
    );


  foods.forEach(food => {

    menuGrid.appendChild(
      createFoodCard(food)
    );

  });

}


function createFoodCard(food) {

  const text =
    getFoodText(food);

  const card =
    document.createElement("article");

  card.className =
    "food-card";

  card.dataset.foodId =
    food.id;


  const badge =
    food.popular
      ? `<span class="food-badge">
           ${escapeHTML(getText("menu.popular"))}
         </span>`
      : "";


  card.innerHTML = `

    <div class="food-image">

      <img
        src="${food.image}"
        alt="${escapeHTML(text.name)}"
        loading="lazy"
        onerror="this.style.display='none';"
      >

      ${badge}

    </div>


    <div class="food-body">

      <div class="food-title-row">

        <h3 class="food-name">
          ${escapeHTML(text.name)}
        </h3>

        <strong class="food-price">
          ${formatPrice(food.price)}
        </strong>

      </div>


      <p class="food-description">
        ${escapeHTML(text.description)}
      </p>


      <div class="food-bottom">

        <span class="food-category">
          ${escapeHTML(
            getCategoryName(food.category)
          )}
        </span>


        <button
          class="add-food-btn"
          type="button"
          aria-label="Add ${escapeHTML(text.name)}"
        >
          <i class="fa-solid fa-plus"></i>
        </button>

      </div>

    </div>

  `;


  const addButton =
    card.querySelector(".add-food-btn");


  addButton.addEventListener(
    "click",
    event => {

      event.stopPropagation();

      addToCart(
        food.id,
        addButton,
        card
      );

    }
  );


  return card;

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function resetMenuFilters() {

  searchTerm = "";

  menuSearch.value = "";

  currentCategory = "popular";

  renderCategories();
  renderMenu();

}


clearFilters.addEventListener(
  "click",
  resetMenuFilters
);

emptyResetBtn.addEventListener(
  "click",
  resetMenuFilters
);


/* =========================================================
   CART STORAGE
   ========================================================= */

function loadCart() {

  try {

    const saved =
      localStorage.getItem(
        CART_STORAGE_KEY
      );

    const parsed =
      saved ? JSON.parse(saved) : {};

    if (
      parsed &&
      typeof parsed === "object"
    ) {
      return parsed;
    }

  } catch (error) {

    console.warn(
      "Could not load cart:",
      error
    );

  }

  return {};

}


function saveCart() {

  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart)
  );

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(
  foodId,
  button = null,
  card = null
) {

  const food =
    foodItems.find(
      item => item.id === foodId
    );

  if (!food) return;


  if (!cart[foodId]) {
    cart[foodId] = 0;
  }

  cart[foodId]++;

  saveCart();

  renderCart();

  animateAdd(
    card,
    button
  );

  showToast(
    getText("toast.added"),
    replaceTokens(
      getText("toast.addedText"),
      {
        name:
          getFoodText(food).name
      }
    )
  );

}


/* =========================================================
   ADD ANIMATION
   ========================================================= */

function animateAdd(card, button) {

  if (button) {

    button.classList.remove("added");

    void button.offsetWidth;

    button.classList.add("added");

  }


  const cartTarget =
    cartOpenBtn;

  if (!cartTarget) return;


  let source = card;


  if (!source && button) {
    source = button.closest(
      ".popular-item"
    );
  }


  if (!source) {

    bounceCart();

    return;

  }


  const sourceRect =
    source.getBoundingClientRect();

  const targetRect =
    cartTarget.getBoundingClientRect();


  const clone =
    source.cloneNode(true);

  clone.classList.add(
    "fly-clone"
  );


  clone.style.left =
    `${sourceRect.left}px`;

  clone.style.top =
    `${sourceRect.top}px`;

  clone.style.width =
    `${sourceRect.width}px`;

  clone.style.height =
    `${sourceRect.height}px`;

  clone.style.opacity = "0.95";


  document.body.appendChild(clone);


  requestAnimationFrame(() => {

    clone.style.left =
      `${targetRect.left + targetRect.width / 2}px`;

    clone.style.top =
      `${targetRect.top + targetRect.height / 2}px`;

    clone.style.width = "25px";
    clone.style.height = "25px";

    clone.style.opacity = "0";

    clone.style.transform =
      "translate(-50%, -50%) scale(.3) rotate(20deg)";

  });


  setTimeout(() => {

    clone.remove();

    bounceCart();

  }, 680);

}


function bounceCart() {

  cartOpenBtn.classList.remove(
    "cart-bounce"
  );

  void cartOpenBtn.offsetWidth;

  cartOpenBtn.classList.add(
    "cart-bounce"
  );

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(
  foodId,
  amount
) {

  if (!cart[foodId]) {
    return;
  }

  cart[foodId] += amount;


  if (cart[foodId] <= 0) {

    delete cart[foodId];

  }


  saveCart();

  renderCart();

}


/* =========================================================
   REMOVE ITEM
   ========================================================= */

function removeFromCart(foodId) {

  const food =
    foodItems.find(
      item => item.id === foodId
    );

  delete cart[foodId];

  saveCart();

  renderCart();

  if (food) {

    showToast(
      getText("toast.removed"),
      replaceTokens(
        getText("toast.removedText"),
        {
          name:
            getFoodText(food).name
        }
      )
    );

  }

}


/* =========================================================
   CLEAR CART
   ========================================================= */

function clearCart() {

  if (
    Object.keys(cart).length === 0
  ) {
    return;
  }

  cart = {};

  saveCart();

  renderCart();

  showToast(
    getText("toast.cleared"),
    getText("toast.clearedText")
  );

}


clearCartBtn.addEventListener(
  "click",
  clearCart
);


/* =========================================================
   CART RENDERING
   ========================================================= */

function getCartItems() {

  return Object.entries(cart)
    .map(([id, quantity]) => {

      const food =
        foodItems.find(
          item => item.id === id
        );

      if (!food) {
        return null;
      }

      return {
        food,
        quantity
      };

    })
    .filter(Boolean);

}


function getCartCount() {

  return getCartItems()
    .reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

}


function getCartTotal() {

  return getCartItems()
    .reduce(
      (sum, item) =>
        sum +
        item.food.price *
        item.quantity,
      0
    );

}


function renderCart() {

  const items =
    getCartItems();

  const count =
    getCartCount();

  const total =
    getCartTotal();


  headerCartCount.textContent =
    count > 99
      ? "99+"
      : count;


  orderTotal.textContent =
    formatPrice(total);

  drawerTotal.textContent =
    formatPrice(total);


  renderOrderCart(items);

  renderDrawerCart(items);

}


function renderOrderCart(items) {

  if (items.length === 0) {

    orderCartItems.innerHTML = `

      <div class="cart-empty">

        <i class="fa-solid fa-basket-shopping"></i>

        <p>
          ${escapeHTML(
            getText("order.empty")
          )}
        </p>

        <a
          href="#menu"
          class="small-link"
        >
          ${escapeHTML(
            getText("order.browse")
          )}
        </a>

      </div>

    `;

    return;

  }


  orderCartItems.innerHTML =
    items.map(
      ({ food, quantity }) =>
        cartRowHTML(
          food,
          quantity
        )
    ).join("");

  attachCartEvents(
    orderCartItems
  );

}


function renderDrawerCart(items) {

  if (items.length === 0) {

    drawerItems.innerHTML = `

      <div class="drawer-empty">

        <i class="fa-solid fa-basket-shopping"></i>

        <p>
          ${escapeHTML(
            getText("cart.empty")
          )}
        </p>

        <a
          href="#menu"
          class="small-link"
        >
          ${escapeHTML(
            getText("cart.browse")
          )}
        </a>

      </div>

    `;

    return;

  }


  drawerItems.innerHTML =
    items.map(
      ({ food, quantity }) =>
        cartRowHTML(
          food,
          quantity,
          true
        )
    ).join("");

  attachCartEvents(
    drawerItems
  );

}


function cartRowHTML(
  food,
  quantity,
  compact = false
) {

  const text =
    getFoodText(food);

  return `

    <div
      class="cart-row"
      data-cart-id="${food.id}"
    >

      <div class="cart-row-image">

        <img
          src="${food.image}"
          alt="${escapeHTML(text.name)}"
          loading="lazy"
        >

      </div>


      <div class="cart-row-info">

        <strong>
          ${escapeHTML(text.name)}
        </strong>

        <small>
          ${formatPrice(food.price)}
        </small>


        <div class="quantity-control">

          <button
            type="button"
            data-action="minus"
            aria-label="Decrease quantity"
          >
            <i class="fa-solid fa-minus"></i>
          </button>


          <span>
            ${quantity}
          </span>


          <button
            type="button"
            data-action="plus"
            aria-label="Increase quantity"
          >
            <i class="fa-solid fa-plus"></i>
          </button>

        </div>

      </div>


      <div class="cart-row-price">

        <strong>
          ${formatPrice(
            food.price * quantity
          )}
        </strong>

        <button
          type="button"
          class="cart-remove"
          data-action="remove"
        >
          ${escapeHTML(
            getText("order.remove")
          )}
        </button>

      </div>

    </div>

  `;

}


function attachCartEvents(container) {

  container
    .querySelectorAll(".cart-row")
    .forEach(row => {

      const id =
        row.dataset.cartId;

      row
        .querySelector(
          '[data-action="minus"]'
        )
        ?.addEventListener(
          "click",
          () => {
            changeQuantity(id, -1);
          }
        );

      row
        .querySelector(
          '[data-action="plus"]'
        )
        ?.addEventListener(
          "click",
          () => {
            changeQuantity(id, 1);
          }
        );

      row
        .querySelector(
          '[data-action="remove"]'
        )
        ?.addEventListener(
          "click",
          () => {
            removeFromCart(id);
          }
        );

    });

}


/* =========================================================
   CART DRAWER
   ========================================================= */

function openCart() {

  cartDrawer.classList.add("open");

  cartOverlay.classList.add("open");

  body.classList.add("cart-open");

}


function closeCart() {

  cartDrawer.classList.remove("open");

  cartOverlay.classList.remove("open");

  body.classList.remove("cart-open");

}


cartOpenBtn.addEventListener(
  "click",
  openCart
);

cartCloseBtn.addEventListener(
  "click",
  closeCart
);

cartOverlay.addEventListener(
  "click",
  closeCart
);


drawerOrderBtn.addEventListener(
  "click",
  () => {

    closeCart();

    setTimeout(() => {

      document
        .getElementById("order")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }, 100);

  }
);


/* =========================================================
   ORDER FORM
   ========================================================= */

orderForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const items =
      getCartItems();


    if (items.length === 0) {

      showToast(
        getText("toast.noItems"),
        getText("toast.noItemsText")
      );

      document
        .getElementById("menu")
        ?.scrollIntoView({
          behavior: "smooth"
        });

      return;

    }


    const name =
      document
        .getElementById("orderName")
        .value.trim();

    const phone =
      document
        .getElementById("orderPhone")
        .value.trim();

    const people =
      document
        .getElementById("orderPeople")
        .value;

    const tables =
      document
        .getElementById("orderTables")
        .value;

    const note =
      document
        .getElementById("orderNote")
        .value.trim();

    const orderType =
      document
        .querySelector(
          'input[name="orderType"]:checked'
        )
        ?.value || "pickup";


    if (!isValidPhone(phone)) {

      showToast(
        getText("toast.noItems"),
        getText("toast.invalidPhone")
      );

      return;

    }


    const orderTypeText =
      orderType === "pickup"
        ? getText("form.pickup")
        : getText("form.dinein");


    const foodLines =
      items.map(
        ({ food, quantity }) => {

          const text =
            getFoodText(food);

          return (
            `• ${text.name} × ${quantity}` +
            ` — ${formatPrice(
              food.price * quantity
            )}`
          );

        }
      ).join("\n");


    const total =
      formatPrice(
        getCartTotal()
      );


    const message = [

      `🍽️ ${getText("toast.orderReady")}`,

      ``,

      `👤 ${getText("form.name")}: ${name}`,
      `📞 ${getText("form.phone")}: ${phone}`,
      `👥 ${getText("form.people")}: ${people}`,
      `🪑 ${getText("form.tables")}: ${tables}`,
      `🥡 ${getText("form.orderType")}: ${orderTypeText}`,

      ``,

      `🍴 ${getText("order.selected")}:`,
      foodLines,

      ``,

      `💰 ${getText("order.total")}: ${total}`,

      note
        ? `📝 ${getText("form.note")}: ${note}`
        : ""

    ]
      .filter(Boolean)
      .join("\n");


    openWhatsApp(message);


    showToast(
      getText("toast.sent"),
      getText("toast.sentText")
    );

  }
);


/* =========================================================
   RESERVATION
   ========================================================= */

reserveForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const name =
      document
        .getElementById("reserveName")
        .value.trim();

    const phone =
      document
        .getElementById("reservePhone")
        .value.trim();

    const date =
      document
        .getElementById("reserveDate")
        .value;

    const time =
      document
        .getElementById("reserveTime")
        .value;

    const people =
      document
        .getElementById("reservePeople")
        .value;

    const tables =
      document
        .getElementById("reserveTables")
        .value;

    const note =
      document
        .getElementById("reserveNote")
        .value.trim();


    if (!isValidPhone(phone)) {

      showToast(
        getText("toast.reserveReady"),
        getText("toast.invalidPhone")
      );

      return;

    }


    const message = [

      `📅 ${getText("toast.reserveReady")}`,

      ``,

      `👤 ${getText("form.name")}: ${name}`,
      `📞 ${getText("form.phone")}: ${phone}`,
      `📅 ${getText("form.date")}: ${date}`,
      `⏰ ${getText("form.time")}: ${time}`,
      `👥 ${getText("form.people")}: ${people}`,
      `🪑 ${getText("form.tables")}: ${tables}`,

      note
        ? `📝 ${getText("form.note")}: ${note}`
        : ""

    ]
      .filter(Boolean)
      .join("\n");


    openWhatsApp(message);


    showToast(
      getText("toast.sent"),
      getText("toast.sentText")
    );

  }
);


/* =========================================================
   PHONE VALIDATION
   ========================================================= */

function isValidPhone(phone) {

  const cleaned =
    phone.replace(/\D/g, "");

  return (
    cleaned.length >= 9 &&
    cleaned.length <= 15
  );

}


/* =========================================================
   WHATSAPP
   ========================================================= */

function openWhatsApp(message) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(message);

  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer = null;


function showToast(
  title,
  text
) {

  toastTitle.textContent =
    title;

  toastText.textContent =
    text;

  toast.classList.add("show");


  clearTimeout(toastTimer);

  toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2800);

}


/* =========================================================
   DATE
   ========================================================= */

function setMinimumDate() {

  const today =
    new Date();

  const year =
    today.getFullYear();

  const month =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      today.getDate()
    ).padStart(2, "0");


  const dateString =
    `${year}-${month}-${day}`;


  const reserveDate =
    document.getElementById(
      "reserveDate"
    );

  if (reserveDate) {
    reserveDate.min =
      dateString;
  }

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

window.addEventListener(
  "scroll",
  () => {

    siteHeader.classList.toggle(
      "scrolled",
      window.scrollY > 20
    );

  },
  { passive: true }
);


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".desktop-nav a"
    );


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          const id =
            entry.target.id;

          navLinks.forEach(link => {

            link.classList.toggle(
              "active",
              link.getAttribute("href") ===
              `#${id}`
            );

          });

        });

      },
      {
        threshold: .25,
        rootMargin: "-80px 0px -45% 0px"
      }
    );


  sections.forEach(
    section =>
      observer.observe(section)
  );

}


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeMobileMenu();

      closeCart();

    }

  }
);


/* =========================================================
   KEEP CART DATA VALID
   ========================================================= */

function cleanCart() {

  const validIds =
    new Set(
      foodItems.map(
        food => food.id
      )
    );


  Object.keys(cart)
    .forEach(id => {

      if (
        !validIds.has(id) ||
        !Number.isFinite(
          Number(cart[id])
        ) ||
        Number(cart[id]) <= 0
      ) {

        delete cart[id];

      }

    });


  saveCart();

}

cleanCart();


/* =========================================================
   FINAL RENDER
   ========================================================= */

applyTranslations();
renderPopular();
renderCategories();
renderMenu();
renderCart();