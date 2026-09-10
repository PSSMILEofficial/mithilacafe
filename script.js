/* =========================================================
   CAFE MITHILA
   Complete Menu + Cart + Language + WhatsApp + Animation
   ========================================================= */

"use strict";


/* =========================================================
   BASIC SETTINGS
   ========================================================= */

const WHATSAPP_NUMBER = "9779708913951";

const CART_STORAGE_KEY = "cafeMithilaCart";

const LANGUAGE_STORAGE_KEY = "cafeMithilaLanguage";

const THEME_STORAGE_KEY = "cafeMithilaTheme";


/* =========================================================
   LANGUAGE
   ========================================================= */

let currentLanguage =
  localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";


const translations = {

  en: {

    loading: "Preparing Mithila...",

    brandTagline: "Taste of Mithila",

    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navGallery: "Gallery",
    navOrder: "Order",
    navReserve: "Reserve",

    menu: "Menu",
    exploreCafe: "Explore Cafe Mithila",

    heroLocation: "Campus Chowk · Janakpurdham",

    heroTitleOne: "A home of taste,",
    heroTitleTwo: "the heart of Mithila.",

    heroDescription:
      "From traditional Mithila flavors to your favorite cafe comfort food, Cafe Mithila brings the warmth of Janakpur to every plate.",

    viewMenu: "View Menu",
    reserveNow: "Reserve",

    openDaily: "Open Daily · 7 AM – 10 PM",

    aboutEyebrow: "OUR STORY",
    aboutTitle: "A little taste of Mithila.",
    aboutIntro:
      "A cafe inspired by the colors, warmth and flavors of Mithila.",

    aboutQuote:
      "Food is not only for filling the stomach; it is a way of making memories.",

    aboutTextOne:
      "Cafe Mithila celebrates the food culture of Janakpur through comforting local dishes, familiar cafe favorites and colorful Mithila-inspired hospitality.",

    aboutTextTwo:
      "Whether you come for chiya with friends, a traditional plate with family, a quick snack or a relaxed meal, there is always a place for you here.",

    discoverMenu: "Discover our menu",

    statFoods: "Food Choices",
    statDays: "Days Open",
    statYears: "Mithila Flavors",
    statMade: "Made With Love",

    menuEyebrow: "OUR MENU",
    menuTitle: "Find your flavor.",
    menuIntro:
      "Popular favorites first. Then discover our full Mithila, Janakpur and cafe collection.",

    searchFood: "Search food, drinks or sweets...",

    popularEyebrow: "MOST LOVED",
    popularTitle: "Popular",

    fullMenuEyebrow: "EXPLORE",

    noFoodTitle: "No food found",
    noFoodText: "Try another search or category.",
    showAll: "Show All",

    selectedFood: "SELECTED FOOD",
    yourOrder: "Your Order",
    clearAll: "Clear All",

    cartEmpty: "Your order is empty.",
    addFood: "Add food from menu",

    total: "Total",
    details: "DETAILS",
    completeOrder: "Complete Your Order",

    name: "Your Name",
    phone: "Phone Number",

    namePlaceholder: "Enter your name",
    phonePlaceholder: "98XXXXXXXX",

    numberPeople: "Number of People / Chairs",
    peopleHint: "How many people will eat?",

    numberTables: "Number of Tables",
    tablesHint: "How many tables do you need?",

    orderType: "Order Type",

    pickup: "Pickup",
    dineIn: "Dine-in",

    extraDetails: "Extra Details",

    extraDetailsPlaceholder:
      "Any special request, food preference or other details...",

    yourOrderButton: "Your Order",

    reserveEyebrow: "RESERVATION",
    reserveTitle: "Reserve Your Mithila Time.",

    reserveIntro:
      "Morning, afternoon or evening — choose the time that feels right for you.",

    date: "Date",
    time: "Time",

    reservationPlaceholder:
      "Birthday, family gathering, special request or anything else...",

    reserveButton: "Reserve My Table",

    galleryEyebrow: "OUR SPACE",
    galleryTitle: "Colors of Mithila.",

    galleryIntro:
      "Step inside the warmth of Cafe Mithila.",

    galleryPhoto: "Cafe Mithila",
    galleryInterior: "Our Interior",
    galleryFood: "Food & Flavors",
    galleryDrinks: "Chiya & Coffee",

    visitEyebrow: "COME VISIT",
    visitTitle: "See you in Janakpur.",

    visitText:
      "Come hungry. Leave with a little more Mithila in your heart.",

    addressTitle: "Address",
    phoneTitle: "Phone",
    hoursTitle: "Hours",

    hours: "Every day · 7 AM – 10 PM",

    openMaps: "Open in Google Maps",

    goToOrder: "Go to Your Order",

    footerText:
      "A little corner of Janakpur where food, culture and people meet.",

    footerMade: "Made with Mithila love.",

    added: "Added",
    removed: "Removed",

    itemAdded: "Item added to your order.",
    itemRemoved: "Item removed from your order.",

    cartCleared: "Your order has been cleared.",

    fillCart:
      "Please add at least one food item before placing your order.",

    orderSent:
      "Your order details are ready. WhatsApp will open now.",

    reservationSent:
      "Your reservation details are ready. WhatsApp will open now.",

    requiredFields:
      "Please complete all required details.",

    itemsFound: "items found",
    itemFound: "item found",

    searchResultsFor: "Search results for",

    popularEmpty: "Popular items are shown here.",

    qty: "Qty",

    categoryPopular: "Popular",
    categoryAll: "All",
    categoryMithila: "Mithila Favorites",
    categoryJanakpur: "Janakpur Special",
    categoryBreakfast: "Breakfast",
    categorySnacks: "Snacks",
    categoryMain: "Main Course",
    categoryVeg: "Vegetarian",
    categoryNonVeg: "Non-Vegetarian",
    categoryChiya: "Chiya & Coffee",
    categoryDrinks: "Drinks",
    categorySweets: "Sweets & Desserts",

    remove: "Remove"

  },


  ne: {

    loading: "मिथिलाको स्वाद तयार हुँदैछ...",

    brandTagline: "मिथिलाको स्वाद",

    navHome: "गृहपृष्ठ",
    navAbout: "हाम्रो बारेमा",
    navMenu: "मेनु",
    navGallery: "ग्यालरी",
    navOrder: "अर्डर",
    navReserve: "आरक्षण",

    menu: "मेनु",
    exploreCafe: "क्याफे मिथिला हेर्नुहोस्",

    heroLocation: "क्याम्पस चोक · जनकपुरधाम",

    heroTitleOne: "स्वादको घर,",
    heroTitleTwo: "मिथिलाको मन।",

    heroDescription:
      "परम्परागत मिथिला स्वाददेखि तपाईंका मनपर्ने क्याफे परिकारसम्म, क्याफे मिथिलाले जनकपुरको न्यानोपन हरेक प्लेटमा ल्याउँछ।",

    viewMenu: "मेनु हेर्नुहोस्",
    reserveNow: "आरक्षण गर्नुहोस्",

    openDaily: "हरेक दिन खुला · बिहान ७ – राति १० बजे",

    aboutEyebrow: "हाम्रो कथा",
    aboutTitle: "मिथिलाको सानो स्वाद।",
    aboutIntro:
      "मिथिलाका रंग, न्यानोपन र स्वादबाट प्रेरित क्याफे।",

    aboutQuote:
      "खाना पेट भर्नका लागि मात्र होइन; यो सम्झना बनाउने माध्यम हो।",

    aboutTextOne:
      "क्याफे मिथिलाले जनकपुरको खानपान संस्कृतिलाई स्थानीय परिकार, लोकप्रिय क्याफे स्वाद र मिथिलाबाट प्रेरित आतिथ्यतामार्फत मनाउँछ।",

    aboutTextTwo:
      "साथीसँग चिया खान आउनुहोस्, परिवारसँग परम्परागत थाली खानुहोस् वा हल्का नास्ता र आरामदायी भोजनको आनन्द लिनुहोस्। यहाँ तपाईंका लागि सधैं ठाउँ छ।",

    discoverMenu: "हाम्रो मेनु हेर्नुहोस्",

    statFoods: "खानाका विकल्प",
    statDays: "खुला दिन",
    statYears: "मिथिला स्वाद",
    statMade: "मायाले बनाइएको",

    menuEyebrow: "हाम्रो मेनु",
    menuTitle: "आफ्नो स्वाद खोज्नुहोस्।",
    menuIntro:
      "पहिले लोकप्रिय परिकार हेर्नुहोस्। त्यसपछि मिथिला, जनकपुर र क्याफेका सबै स्वाद खोज्नुहोस्।",

    searchFood: "खाना, पेय वा मिठाई खोज्नुहोस्...",

    popularEyebrow: "धेरै मन पराइएका",
    popularTitle: "लोकप्रिय",

    fullMenuEyebrow: "खोज्नुहोस्",

    noFoodTitle: "खाना भेटिएन",
    noFoodText: "अर्को खोज वा श्रेणी प्रयास गर्नुहोस्।",
    showAll: "सबै देखाउनुहोस्",

    selectedFood: "छानिएका परिकार",
    yourOrder: "तपाईंको अर्डर",
    clearAll: "सबै हटाउनुहोस्",

    cartEmpty: "तपाईंको अर्डर खाली छ।",
    addFood: "मेनुबाट खाना थप्नुहोस्",

    total: "जम्मा",
    details: "विवरण",
    completeOrder: "तपाईंको अर्डर पूरा गर्नुहोस्",

    name: "तपाईंको नाम",
    phone: "फोन नम्बर",

    namePlaceholder: "आफ्नो नाम लेख्नुहोस्",
    phonePlaceholder: "९८XXXXXXXX",

    numberPeople: "मानिस / कुर्सी संख्या",
    peopleHint: "कति जना मानिसले खाना खानुहुन्छ?",

    numberTables: "टेबल संख्या",
    tablesHint: "कति वटा टेबल चाहिन्छ?",

    orderType: "अर्डरको प्रकार",

    pickup: "लिएर जाने",
    dineIn: "क्याफेमा खाने",

    extraDetails: "थप विवरण",

    extraDetailsPlaceholder:
      "विशेष अनुरोध, खानाको रुचि वा अन्य विवरण लेख्नुहोस्...",

    yourOrderButton: "तपाईंको अर्डर",

    reserveEyebrow: "आरक्षण",
    reserveTitle: "आफ्नो मिथिला समय आरक्षण गर्नुहोस्।",

    reserveIntro:
      "बिहान, दिउँसो वा साँझ — तपाईंलाई उपयुक्त समय छान्नुहोस्।",

    date: "मिति",
    time: "समय",

    reservationPlaceholder:
      "जन्मदिन, पारिवारिक भेटघाट, विशेष अनुरोध वा अन्य कुरा...",

    reserveButton: "मेरो टेबल आरक्षण गर्नुहोस्",

    galleryEyebrow: "हाम्रो ठाउँ",
    galleryTitle: "मिथिलाका रंगहरू।",

    galleryIntro:
      "क्याफे मिथिलाको न्यानोपनमा प्रवेश गर्नुहोस्।",

    galleryPhoto: "क्याफे मिथिला",
    galleryInterior: "हाम्रो भित्री सजावट",
    galleryFood: "खाना र स्वाद",
    galleryDrinks: "चिया र कफी",

    visitEyebrow: "भेट्न आउनुहोस्",
    visitTitle: "जनकपुरमा भेटौँला।",

    visitText:
      "भोक लिएर आउनुहोस्, हृदयमा अलिकति बढी मिथिला लिएर जानुहोस्।",

    addressTitle: "ठेगाना",
    phoneTitle: "फोन",
    hoursTitle: "समय",

    hours: "हरेक दिन · बिहान ७ – राति १० बजे",

    openMaps: "Google Maps मा खोल्नुहोस्",

    goToOrder: "तपाईंको अर्डरमा जानुहोस्",

    footerText:
      "जनकपुरको एउटा सानो ठाउँ जहाँ खाना, संस्कृति र मानिसहरू भेटिन्छन्।",

    footerMade: "मिथिलाको मायाले बनाइएको।",

    added: "थपियो",
    removed: "हटाइयो",

    itemAdded: "परिकार तपाईंको अर्डरमा थपियो।",
    itemRemoved: "परिकार तपाईंको अर्डरबाट हटाइयो।",

    cartCleared: "तपाईंको अर्डर खाली गरियो।",

    fillCart:
      "अर्डर गर्नुअघि कम्तीमा एउटा परिकार थप्नुहोस्।",

    orderSent:
      "तपाईंको अर्डर विवरण तयार भयो। अब WhatsApp खुल्नेछ।",

    reservationSent:
      "तपाईंको आरक्षण विवरण तयार भयो। अब WhatsApp खुल्नेछ।",

    requiredFields:
      "कृपया आवश्यक सबै विवरण पूरा गर्नुहोस्।",

    itemsFound: "वटा परिकार भेटिए",
    itemFound: "वटा परिकार भेटियो",

    searchResultsFor: "खोजी परिणाम",

    popularEmpty: "लोकप्रिय परिकारहरू यहाँ देखिन्छन्।",

    qty: "मात्रा",

    categoryPopular: "लोकप्रिय",
    categoryAll: "सबै",
    categoryMithila: "मिथिला मनपर्ने",
    categoryJanakpur: "जनकपुर विशेष",
    categoryBreakfast: "बिहानको खाना",
    categorySnacks: "खाजा",
    categoryMain: "मुख्य खाना",
    categoryVeg: "शाकाहारी",
    categoryNonVeg: "मांसाहारी",
    categoryChiya: "चिया र कफी",
    categoryDrinks: "पेय पदार्थ",
    categorySweets: "मिठाई र डेजर्ट",

    remove: "हटाउनुहोस्"

  },


  mai: {

    loading: "मिथिलाक स्वाद तैयार भ' रहल अछि...",

    brandTagline: "मिथिलाक स्वाद",

    navHome: "घर",
    navAbout: "हमरा सभक बारेमे",
    navMenu: "मेनू",
    navGallery: "ग्यालरी",
    navOrder: "ऑर्डर",
    navReserve: "आरक्षण",

    menu: "मेनू",
    exploreCafe: "क्याफे मिथिला देखू",

    heroLocation: "क्याम्पस चोक · जनकपुरधाम",

    heroTitleOne: "स्वादक घर,",
    heroTitleTwo: "मिथिलाक मन।",

    heroDescription:
      "परम्परागत मिथिलाक स्वाद सँ लऽ कऽ अहाँक पसन्दक क्याफे खाना धरि, क्याफे मिथिला जनकपुरक अपनापन हरेक प्लेटमे अनैत अछि।",

    viewMenu: "मेनू देखू",
    reserveNow: "आरक्षण करू",

    openDaily: "सभ दिन खुलल · बिहान ७ – राति १० बजे",

    aboutEyebrow: "हमर कथा",
    aboutTitle: "मिथिलाक एक छोट स्वाद।",
    aboutIntro:
      "मिथिलाक रंग, अपनापन आ स्वाद सँ प्रेरित क्याफे।",

    aboutQuote:
      "भोजन केवल पेट भरबाक लेल नहि; ई याद बनाबयक एक माध्यम अछि।",

    aboutTextOne:
      "क्याफे मिथिला जनकपुरक भोजन संस्कृतिक उत्सव मनबैत अछि — स्थानीय व्यंजन, पसन्दक क्याफे स्वाद आ मिथिलाक अपनापन भरल आतिथ्यक संग।",

    aboutTextTwo:
      "दोस्त संग चिया लेल आबू, परिवार संग परम्परागत थाली खाऊ, जल्दी खाजा करू वा आराम सँ भोजनक आनन्द लिअ — अहाँ लेल एतय सदिखन जगह अछि।",

    discoverMenu: "हमर मेनू देखू",

    statFoods: "खानाक विकल्प",
    statDays: "खुलल दिन",
    statYears: "मिथिला स्वाद",
    statMade: "प्रेम सँ बनल",

    menuEyebrow: "हमर मेनू",
    menuTitle: "अपन स्वाद खोजू।",

    menuIntro:
      "पहिने लोकप्रिय व्यंजन देखू। फेर मिथिला, जनकपुर आ क्याफेक सभ स्वाद खोजू।",

    searchFood: "खाना, पेय वा मिठाई खोजू...",

    popularEyebrow: "बहुत पसन्दक",
    popularTitle: "लोकप्रिय",

    fullMenuEyebrow: "खोजू",

    noFoodTitle: "खाना भेटल नहि",
    noFoodText: "दोसर खोज वा श्रेणी प्रयास करू।",
    showAll: "सभ देखू",

    selectedFood: "छानल खाना",
    yourOrder: "अहाँक ऑर्डर",
    clearAll: "सभ हटाउ",

    cartEmpty: "अहाँक ऑर्डर खाली अछि।",
    addFood: "मेनू सँ खाना जोड़ू",

    total: "कुल",
    details: "विवरण",
    completeOrder: "अहाँक ऑर्डर पूरा करू",

    name: "अहाँक नाम",
    phone: "फोन नम्बर",

    namePlaceholder: "अपन नाम लिखू",
    phonePlaceholder: "९८XXXXXXXX",

    numberPeople: "मानुस / कुर्सी संख्या",
    peopleHint: "कतेक गोटे खाना खायत?",

    numberTables: "टेबल संख्या",
    tablesHint: "कतेक टेबल चाही?",

    orderType: "ऑर्डरक प्रकार",

    pickup: "लऽ जाएब",
    dineIn: "क्याफेमे खायब",

    extraDetails: "अतिरिक्त विवरण",

    extraDetailsPlaceholder:
      "विशेष अनुरोध, खानाक पसन्द वा दोसर विवरण लिखू...",

    yourOrderButton: "अहाँक ऑर्डर",

    reserveEyebrow: "आरक्षण",
    reserveTitle: "अपन मिथिला समय आरक्षण करू।",

    reserveIntro:
      "बिहान, दुपहर वा साँझ — अहाँ लेल ठीक समय चुनू।",

    date: "मिति",
    time: "समय",

    reservationPlaceholder:
      "जन्मदिन, परिवारक भेटघाट, विशेष अनुरोध वा दोसर किछु...",

    reserveButton: "हमर टेबल आरक्षण करू",

    galleryEyebrow: "हमर जगह",
    galleryTitle: "मिथिलाक रंग।",

    galleryIntro:
      "क्याफे मिथिलाक अपनापनमे प्रवेश करू।",

    galleryPhoto: "क्याफे मिथिला",
    galleryInterior: "हमर भितरक सजावट",
    galleryFood: "खाना आ स्वाद",
    galleryDrinks: "चिया आ कफी",

    visitEyebrow: "भेट करबाक लेल आउ",
    visitTitle: "जनकपुरमे भेट होयत।",

    visitText:
      "भूख लऽ कऽ आउ, आ हृदयमे अलिक बेसी मिथिला लऽ कऽ जाउ।",

    addressTitle: "ठेगाना",
    phoneTitle: "फोन",
    hoursTitle: "समय",

    hours: "सभ दिन · बिहान ७ – राति १० बजे",

    openMaps: "Google Maps मे खोलू",

    goToOrder: "अहाँक ऑर्डर दिस जाउ",

    footerText:
      "जनकपुरक एक छोट जगह जतय खाना, संस्कृति आ लोक सभ भेटैत छथि।",

    footerMade: "मिथिलाक प्रेम सँ बनल।",

    added: "जोड़ल गेल",
    removed: "हटाओल गेल",

    itemAdded: "व्यंजन अहाँक ऑर्डरमे जोड़ल गेल।",
    itemRemoved: "व्यंजन अहाँक ऑर्डर सँ हटाओल गेल।",

    cartCleared: "अहाँक ऑर्डर खाली कऽ देल गेल।",

    fillCart:
      "ऑर्डर करबाक पहिने कम सँ कम एकटा खाना जोड़ू।",

    orderSent:
      "अहाँक ऑर्डर विवरण तैयार अछि। आब WhatsApp खुलत।",

    reservationSent:
      "अहाँक आरक्षण विवरण तैयार अछि। आब WhatsApp खुलत।",

    requiredFields:
      "कृपया आवश्यक सभ विवरण पूरा करू।",

    itemsFound: "टा व्यंजन भेटल",
    itemFound: "टा व्यंजन भेटल",

    searchResultsFor: "खोज परिणाम",

    popularEmpty: "लोकप्रिय व्यंजन एतय देखाओल जाएत।",

    qty: "मात्रा",

    categoryPopular: "लोकप्रिय",
    categoryAll: "सभ",
    categoryMithila: "मिथिलाक पसन्द",
    categoryJanakpur: "जनकपुर विशेष",
    categoryBreakfast: "बिहानक खाना",
    categorySnacks: "खाजा",
    categoryMain: "मुख्य खाना",
    categoryVeg: "शाकाहारी",
    categoryNonVeg: "मांसाहारी",
    categoryChiya: "चिया आ कफी",
    categoryDrinks: "पेय",
    categorySweets: "मिठाई आ डेजर्ट",

    remove: "हटाउ"

  }

};


/* =========================================================
   100+ MENU ITEMS
   ========================================================= */

const menuItems = [

  /* ---------- MITHILA ---------- */

  {
    id: 1,
    cat: "mithila",
    popular: true,
    en: "Mithila Thali",
    ne: "मिथिला थाली",
    mai: "मिथिला थाली",
    price: 420,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "A colorful traditional platter with regional flavors."
  },

  {
    id: 2,
    cat: "mithila",
    popular: true,
    en: "Litti Chokha",
    ne: "लिट्टी चोखा",
    mai: "लिट्टी चोखा",
    price: 220,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Roasted wheat balls served with smoky mashed vegetables."
  },

  {
    id: 3,
    cat: "mithila",
    popular: true,
    en: "Dahi Chura",
    ne: "दही चिउरा",
    mai: "दही चूड़ा",
    price: 150,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    desc: "A simple traditional combination of curd and beaten rice."
  },

  {
    id: 4,
    cat: "mithila",
    popular: true,
    en: "Makhana Curry",
    ne: "मखाना तरकारी",
    mai: "मखानाक तरकारी",
    price: 260,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Mithila-style curry made with roasted fox nuts."
  },

  {
    id: 5,
    cat: "mithila",
    popular: true,
    en: "Dal Pitha",
    ne: "दाल पिठा",
    mai: "दाल पिठा",
    price: 180,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=800&q=80",
    desc: "Soft traditional rice dumplings with flavorful dal filling."
  },

  {
    id: 6,
    cat: "mithila",
    en: "Tarua",
    ne: "तरुवा",
    mai: "तरुआ",
    price: 170,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy seasonal vegetables coated in a spiced batter."
  },

  {
    id: 7,
    cat: "mithila",
    en: "Chura Ghugni",
    ne: "चिउरा घुघनी",
    mai: "चूड़ा घुघनी",
    price: 160,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Beaten rice paired with spicy chickpea ghugni."
  },

  {
    id: 8,
    cat: "mithila",
    en: "Makhana Kheer",
    ne: "मखाना खीर",
    mai: "मखाना खीर",
    price: 190,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy traditional dessert made with makhana and milk."
  },

  {
    id: 9,
    cat: "mithila",
    en: "Thekua",
    ne: "ठेकुआ",
    mai: "ठेकुआ",
    price: 100,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional sweet biscuit flavored with jaggery."
  },

  {
    id: 10,
    cat: "mithila",
    en: "Malpua",
    ne: "मालपुवा",
    mai: "मालपुआ",
    price: 140,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Soft sweet pancakes with a festive Mithila touch."
  },

  {
    id: 11,
    cat: "mithila",
    en: "Dal Puri",
    ne: "दाल पुरी",
    mai: "दाल पुरी",
    price: 170,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy puri filled with seasoned lentils."
  },

  {
    id: 12,
    cat: "mithila",
    en: "Chura Dahi",
    ne: "चिउरा दही",
    mai: "चूड़ा दही",
    price: 130,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    desc: "Cool curd with soft beaten rice."
  },

  {
    id: 13,
    cat: "mithila",
    en: "Anarsa",
    ne: "अनरसा",
    mai: "अनरसा",
    price: 120,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional rice-based Mithila sweet."
  },

  {
    id: 14,
    cat: "mithila",
    en: "Tilkut",
    ne: "तिलकुट",
    mai: "तिलकुट",
    price: 130,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Sesame and jaggery sweet with a traditional taste."
  },

  {
    id: 15,
    cat: "mithila",
    en: "Khaja",
    ne: "खाजा",
    mai: "खाजा",
    price: 120,
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=800&q=80",
    desc: "Layered crispy traditional sweet."
  },

  {
    id: 16,
    cat: "mithila",
    en: "Murhi Mix",
    ne: "मुरही मिक्स",
    mai: "मुरही मिक्स",
    price: 100,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Crunchy puffed rice snack with spices."
  },

  {
    id: 17,
    cat: "mithila",
    en: "Aloo Tarua",
    ne: "आलु तरुवा",
    mai: "आलू तरुआ",
    price: 150,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy potato slices with regional spices."
  },

  {
    id: 18,
    cat: "mithila",
    en: "Karela Tarua",
    ne: "करेला तरुवा",
    mai: "करैला तरुआ",
    price: 160,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy bitter gourd prepared Mithila style."
  },

  {
    id: 19,
    cat: "mithila",
    en: "Baingan Tarua",
    ne: "भन्टा तरुवा",
    mai: "बैंगन तरुआ",
    price: 160,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Spiced crispy eggplant slices."
  },

  {
    id: 20,
    cat: "mithila",
    en: "Mithila Kadhi",
    ne: "मिथिला कढी",
    mai: "मिथिला कढ़ी",
    price: 220,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy yogurt curry with regional seasoning."
  },


  /* ---------- JANAKPUR ---------- */

  {
    id: 21,
    cat: "janakpur",
    popular: true,
    en: "Janakpur Special Thali",
    ne: "जनकपुर विशेष थाली",
    mai: "जनकपुर विशेष थाली",
    price: 480,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "A generous platter inspired by Janakpur flavors."
  },

  {
    id: 22,
    cat: "janakpur",
    popular: true,
    en: "Fish Thali",
    ne: "माछा थाली",
    mai: "माछ थाली",
    price: 520,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    desc: "Rice, dal, vegetables and flavorful fish curry."
  },

  {
    id: 23,
    cat: "janakpur",
    en: "Veg Mithila Thali",
    ne: "शाकाहारी मिथिला थाली",
    mai: "शाकाहारी मिथिला थाली",
    price: 360,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "Vegetarian regional platter with seasonal sides."
  },

  {
    id: 24,
    cat: "janakpur",
    en: "Chicken Mithila Thali",
    ne: "चिकेन मिथिला थाली",
    mai: "चिकेन मिथिला थाली",
    price: 490,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    desc: "Traditional platter with chicken curry."
  },

  {
    id: 25,
    cat: "janakpur",
    en: "Local Goat Curry",
    ne: "स्थानीय खसीको मासु",
    mai: "स्थानीय बकराक मासु",
    price: 390,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Slow-cooked goat curry with aromatic spices."
  },

  {
    id: 26,
    cat: "janakpur",
    en: "Mithila Fish Curry",
    ne: "मिथिला माछा करी",
    mai: "मिथिला माछक करी",
    price: 330,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    desc: "Spiced fish curry inspired by regional cooking."
  },

  {
    id: 27,
    cat: "janakpur",
    en: "Aloo Tama",
    ne: "आलु तामा",
    mai: "आलू तामा",
    price: 230,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Comforting potato and bamboo shoot curry."
  },

  {
    id: 28,
    cat: "janakpur",
    en: "Seasonal Saag",
    ne: "मौसमी साग",
    mai: "मौसमी साग",
    price: 150,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Fresh seasonal greens prepared with spices."
  },

  {
    id: 29,
    cat: "janakpur",
    en: "Mithila Mixed Vegetables",
    ne: "मिथिला मिश्रित तरकारी",
    mai: "मिथिला मिश्रित तरकारी",
    price: 210,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    desc: "Seasonal vegetables cooked with Mithila spices."
  },

  {
    id: 30,
    cat: "janakpur",
    en: "Traditional Dal Bhat",
    ne: "परम्परागत दाल भात",
    mai: "परम्परागत दाल भात",
    price: 280,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "Rice, lentils and homestyle seasonal sides."
  },


  /* ---------- BREAKFAST ---------- */

  {
    id: 31,
    cat: "breakfast",
    popular: true,
    en: "Puri Tarkari",
    ne: "पुरी तरकारी",
    mai: "पुरी तरकारी",
    price: 150,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Fresh puri served with flavorful potato curry."
  },

  {
    id: 32,
    cat: "breakfast",
    en: "Aloo Paratha",
    ne: "आलु पराठा",
    mai: "आलू पराठा",
    price: 140,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy stuffed flatbread with potato filling."
  },

  {
    id: 33,
    cat: "breakfast",
    en: "Plain Paratha",
    ne: "सादा पराठा",
    mai: "सादा पराठा",
    price: 100,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Flaky layered flatbread."
  },

  {
    id: 34,
    cat: "breakfast",
    en: "Egg Paratha",
    ne: "अण्डा पराठा",
    mai: "अंडा पराठा",
    price: 170,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Paratha filled with seasoned egg."
  },

  {
    id: 35,
    cat: "breakfast",
    en: "Chura Tarkari",
    ne: "चिउरा तरकारी",
    mai: "चूड़ा तरकारी",
    price: 150,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Beaten rice with spicy vegetable curry."
  },

  {
    id: 36,
    cat: "breakfast",
    en: "Chole Bhature",
    ne: "छोले भटुरे",
    mai: "छोला भटूरा",
    price: 220,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
    desc: "Fluffy bhatura with spiced chickpeas."
  },

  {
    id: 37,
    cat: "breakfast",
    en: "Masala Omelette",
    ne: "मसला आमलेट",
    mai: "मसाला आमलेट",
    price: 140,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    desc: "Egg omelette with herbs, onion and spices."
  },

  {
    id: 38,
    cat: "breakfast",
    en: "Cheese Omelette",
    ne: "चिज आमलेट",
    mai: "चीज आमलेट",
    price: 180,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    desc: "Soft omelette with melted cheese."
  },

  {
    id: 39,
    cat: "breakfast",
    en: "French Toast",
    ne: "फ्रेन्च टोस्ट",
    mai: "फ्रेन्च टोस्ट",
    price: 170,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    desc: "Golden toast with a lightly sweet finish."
  },

  {
    id: 40,
    cat: "breakfast",
    en: "Pancake Stack",
    ne: "प्यानकेक स्ट्याक",
    mai: "प्यानकेक स्ट्याक",
    price: 220,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    desc: "Fluffy pancakes served with sweet toppings."
  },


  /* ---------- SNACKS ---------- */

  {
    id: 41,
    cat: "snacks",
    popular: true,
    en: "Veg Momo",
    ne: "भेज मोमो",
    mai: "भेज मोमो",
    price: 150,
    image: "https://images.unsplash.com/photo-1496116218417-1e6f6b3f2f2c?auto=format&fit=crop&w=800&q=80",
    desc: "Steamed dumplings filled with seasoned vegetables."
  },

  {
    id: 42,
    cat: "snacks",
    popular: true,
    en: "Chicken Momo",
    ne: "चिकेन मोमो",
    mai: "चिकेन मोमो",
    price: 190,
    image: "https://images.unsplash.com/photo-1496116218417-1e6f6b3f2f2c?auto=format&fit=crop&w=800&q=80",
    desc: "Juicy chicken dumplings with house chutney."
  },

  {
    id: 43,
    cat: "snacks",
    en: "Jhol Momo",
    ne: "झोल मोमो",
    mai: "झोल मोमो",
    price: 190,
    image: "https://images.unsplash.com/photo-1496116218417-1e6f6b3f2f2c?auto=format&fit=crop&w=800&q=80",
    desc: "Momo covered in a rich spicy sesame broth."
  },

  {
    id: 44,
    cat: "snacks",
    en: "Fried Momo",
    ne: "फ्राइड मोमो",
    mai: "फ्राइड मोमो",
    price: 200,
    image: "https://images.unsplash.com/photo-1496116218417-1e6f6b3f2f2c?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy fried dumplings with spicy dip."
  },

  {
    id: 45,
    cat: "snacks",
    en: "Samosa",
    ne: "समोसा",
    mai: "समोसा",
    price: 70,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy pastry filled with spiced potato."
  },

  {
    id: 46,
    cat: "snacks",
    en: "Paneer Pakora",
    ne: "पनीर पकौडा",
    mai: "पनीर पकौड़ा",
    price: 170,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy gram-flour coated paneer bites."
  },

  {
    id: 47,
    cat: "snacks",
    en: "Aloo Chop",
    ne: "आलु चप",
    mai: "आलू चप",
    price: 100,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy potato snack with spicy seasoning."
  },

  {
    id: 48,
    cat: "snacks",
    en: "Veg Pakora",
    ne: "भेज पकौडा",
    mai: "भेज पकौड़ा",
    price: 130,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Mixed vegetable fritters served hot."
  },

  {
    id: 49,
    cat: "snacks",
    en: "Chicken Pakora",
    ne: "चिकेन पकौडा",
    mai: "चिकेन पकौड़ा",
    price: 190,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy spiced chicken bites."
  },

  {
    id: 50,
    cat: "snacks",
    en: "French Fries",
    ne: "फ्रेन्च फ्राइज",
    mai: "फ्रेन्च फ्राइज",
    price: 130,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    desc: "Golden crispy fries."
  },

  {
    id: 51,
    cat: "snacks",
    en: "Cheese Fries",
    ne: "चिज फ्राइज",
    mai: "चीज फ्राइज",
    price: 180,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
    desc: "Fries topped with creamy cheese."
  },

  {
    id: 52,
    cat: "snacks",
    en: "Chilli Potato",
    ne: "चिल्ली पोटेटो",
    mai: "चिल्ली पोटेटो",
    price: 180,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy potatoes tossed in spicy sauce."
  },

  {
    id: 53,
    cat: "snacks",
    en: "Chilli Paneer",
    ne: "चिल्ली पनीर",
    mai: "चिल्ली पनीर",
    price: 230,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Paneer cubes tossed with peppers and sauce."
  },

  {
    id: 54,
    cat: "snacks",
    en: "Chicken Wings",
    ne: "चिकेन विंग्स",
    mai: "चिकेन विंग्स",
    price: 280,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy chicken wings with house seasoning."
  },

  {
    id: 55,
    cat: "snacks",
    en: "Chicken Chilli",
    ne: "चिकेन चिल्ली",
    mai: "चिकेन चिल्ली",
    price: 280,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    desc: "Tender chicken with peppers and spicy sauce."
  },


  /* ---------- MAIN COURSE ---------- */

  {
    id: 56,
    cat: "main",
    popular: true,
    en: "Dal Bhat Set",
    ne: "दाल भात सेट",
    mai: "दाल भात सेट",
    price: 280,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "Rice, dal, vegetables, pickle and seasonal sides."
  },

  {
    id: 57,
    cat: "main",
    en: "Veg Fried Rice",
    ne: "भेज फ्राइड राइस",
    mai: "भेज फ्राइड राइस",
    price: 190,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    desc: "Wok-tossed rice with fresh vegetables."
  },

  {
    id: 58,
    cat: "main",
    en: "Chicken Fried Rice",
    ne: "चिकेन फ्राइड राइस",
    mai: "चिकेन फ्राइड राइस",
    price: 240,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    desc: "Fried rice with seasoned chicken."
  },

  {
    id: 59,
    cat: "main",
    en: "Egg Fried Rice",
    ne: "अण्डा फ्राइड राइस",
    mai: "अंडा फ्राइड राइस",
    price: 220,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    desc: "Fried rice with fluffy scrambled egg."
  },

  {
    id: 60,
    cat: "main",
    en: "Veg Chowmein",
    ne: "भेज चाउमिन",
    mai: "भेज चाउमिन",
    price: 180,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    desc: "Stir-fried noodles with vegetables."
  },

  {
    id: 61,
    cat: "main",
    en: "Chicken Chowmein",
    ne: "चिकेन चाउमिन",
    mai: "चिकेन चाउमिन",
    price: 230,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    desc: "Stir-fried noodles with chicken."
  },

  {
    id: 62,
    cat: "main",
    en: "Egg Chowmein",
    ne: "अण्डा चाउमिन",
    mai: "अंडा चाउमिन",
    price: 210,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    desc: "Noodles tossed with egg and vegetables."
  },

  {
    id: 63,
    cat: "main",
    en: "Veg Thukpa",
    ne: "भेज थुक्पा",
    mai: "भेज थुक्पा",
    price: 200,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    desc: "Warm noodle soup with vegetables."
  },

  {
    id: 64,
    cat: "main",
    en: "Chicken Thukpa",
    ne: "चिकेन थुक्पा",
    mai: "चिकेन थुक्पा",
    price: 250,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    desc: "Comforting noodle soup with chicken."
  },

  {
    id: 65,
    cat: "main",
    en: "Veg Pasta",
    ne: "भेज पास्ता",
    mai: "भेज पास्ता",
    price: 230,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy pasta with fresh vegetables."
  },

  {
    id: 66,
    cat: "main",
    en: "Chicken Pasta",
    ne: "चिकेन पास्ता",
    mai: "चिकेन पास्ता",
    price: 280,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy pasta with tender chicken."
  },

  {
    id: 67,
    cat: "main",
    en: "White Sauce Pasta",
    ne: "ह्वाइट सस पास्ता",
    mai: "ह्वाइट सस पास्ता",
    price: 250,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy white sauce pasta."
  },

  {
    id: 68,
    cat: "main",
    en: "Red Sauce Pasta",
    ne: "रेड सस पास्ता",
    mai: "रेड सस पास्ता",
    price: 240,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
    desc: "Pasta in a rich tomato sauce."
  },

  {
    id: 69,
    cat: "main",
    en: "Margherita Pizza",
    ne: "मार्गेरिटा पिज्जा",
    mai: "मार्गेरिटा पिज्जा",
    price: 320,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    desc: "Classic pizza with tomato, cheese and herbs."
  },

  {
    id: 70,
    cat: "main",
    en: "Veg Loaded Pizza",
    ne: "भेज लोडेड पिज्जा",
    mai: "भेज लोडेड पिज्जा",
    price: 380,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    desc: "Pizza loaded with colorful vegetables."
  },


  /* ---------- VEGETARIAN ---------- */

  {
    id: 71,
    cat: "veg",
    popular: true,
    en: "Paneer Butter Masala",
    ne: "पनीर बटर मसला",
    mai: "पनीर बटर मसाला",
    price: 280,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    desc: "Soft paneer in a rich creamy tomato gravy."
  },

  {
    id: 72,
    cat: "veg",
    en: "Kadai Paneer",
    ne: "कडाई पनीर",
    mai: "कड़ाही पनीर",
    price: 290,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    desc: "Paneer cooked with peppers and aromatic spices."
  },

  {
    id: 73,
    cat: "veg",
    en: "Palak Paneer",
    ne: "पालक पनीर",
    mai: "पालक पनीर",
    price: 280,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    desc: "Paneer in a smooth spinach gravy."
  },

  {
    id: 74,
    cat: "veg",
    en: "Dal Tadka",
    ne: "दाल तड्का",
    mai: "दाल तड़का",
    price: 180,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "Lentils tempered with aromatic spices."
  },

  {
    id: 75,
    cat: "veg",
    en: "Dal Makhani",
    ne: "दाल मखनी",
    mai: "दाल मखनी",
    price: 220,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    desc: "Slow-cooked creamy black lentils."
  },

  {
    id: 76,
    cat: "veg",
    en: "Aloo Jeera",
    ne: "आलु जीरा",
    mai: "आलू जीरा",
    price: 170,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Potatoes tossed with cumin and herbs."
  },

  {
    id: 77,
    cat: "veg",
    en: "Mix Veg Curry",
    ne: "मिश्रित तरकारी",
    mai: "मिश्रित तरकारी",
    price: 210,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    desc: "Fresh vegetables in a flavorful curry."
  },

  {
    id: 78,
    cat: "veg",
    en: "Mushroom Chilli",
    ne: "मशरूम चिल्ली",
    mai: "मशरूम चिल्ली",
    price: 230,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Mushrooms tossed with peppers and sauce."
  },

  {
    id: 79,
    cat: "veg",
    en: "Veg Manchurian",
    ne: "भेज मन्चुरियन",
    mai: "भेज मन्चुरियन",
    price: 220,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy vegetable balls in savory sauce."
  },

  {
    id: 80,
    cat: "veg",
    en: "Jeera Rice",
    ne: "जीरा राइस",
    mai: "जीरा राइस",
    price: 160,
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80",
    desc: "Fragrant basmati rice with cumin."
  },


  /* ---------- NON VEG ---------- */

  {
    id: 81,
    cat: "nonveg",
    popular: true,
    en: "Butter Chicken",
    ne: "बटर चिकेन",
    mai: "बटर चिकेन",
    price: 320,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    desc: "Tender chicken in a rich buttery tomato gravy."
  },

  {
    id: 82,
    cat: "nonveg",
    en: "Chicken Curry",
    ne: "चिकेन करी",
    mai: "चिकेन करी",
    price: 300,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    desc: "Homestyle chicken curry with aromatic spices."
  },

  {
    id: 83,
    cat: "nonveg",
    en: "Kadai Chicken",
    ne: "कडाई चिकेन",
    mai: "कड़ाही चिकेन",
    price: 330,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    desc: "Chicken cooked with peppers and spices."
  },

  {
    id: 84,
    cat: "nonveg",
    en: "Chicken Tikka",
    ne: "चिकेन टिक्का",
    mai: "चिकेन टिक्का",
    price: 300,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    desc: "Char-grilled marinated chicken pieces."
  },

  {
    id: 85,
    cat: "nonveg",
    en: "Chicken Seekh Kebab",
    ne: "चिकेन सीख कबाब",
    mai: "चिकेन सीख कबाब",
    price: 320,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
    desc: "Juicy spiced chicken kebab."
  },

  {
    id: 86,
    cat: "nonveg",
    en: "Fish Fry",
    ne: "फ्राइड माछा",
    mai: "फ्राइड माछ",
    price: 280,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy seasoned fish fillet."
  },

  {
    id: 87,
    cat: "nonveg",
    en: "Fish Curry",
    ne: "माछा करी",
    mai: "माछक करी",
    price: 300,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    desc: "Fish simmered in aromatic curry."
  },

  {
    id: 88,
    cat: "nonveg",
    en: "Chicken Biryani",
    ne: "चिकेन बिरयानी",
    mai: "चिकेन बिरयानी",
    price: 320,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
    desc: "Fragrant rice layered with spiced chicken."
  },

  {
    id: 89,
    cat: "nonveg",
    en: "Mutton Biryani",
    ne: "मटन बिरयानी",
    mai: "मटन बिरयानी",
    price: 390,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
    desc: "Aromatic rice with tender spiced mutton."
  },

  {
    id: 90,
    cat: "nonveg",
    en: "Egg Curry",
    ne: "अण्डा करी",
    mai: "अंडा करी",
    price: 220,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80",
    desc: "Boiled eggs in a rich curry sauce."
  },


  /* ---------- CHIYA / COFFEE ---------- */

  {
    id: 91,
    cat: "chiya",
    popular: true,
    en: "Masala Chiya",
    ne: "मसला चिया",
    mai: "मसाला चिया",
    price: 70,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
    desc: "Warm milk tea with aromatic spices."
  },

  {
    id: 92,
    cat: "chiya",
    popular: true,
    en: "Milk Chiya",
    ne: "दूध चिया",
    mai: "दूध चिया",
    price: 60,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
    desc: "Classic Nepal-style milk tea."
  },

  {
    id: 93,
    cat: "chiya",
    en: "Black Tea",
    ne: "ब्ल्याक टी",
    mai: "ब्लैक टी",
    price: 50,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    desc: "Light and refreshing black tea."
  },

  {
    id: 94,
    cat: "chiya",
    en: "Lemon Tea",
    ne: "लेमन टी",
    mai: "लेमन टी",
    price: 70,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    desc: "Refreshing tea with lemon."
  },

  {
    id: 95,
    cat: "chiya",
    en: "Ginger Tea",
    ne: "अदुवा चिया",
    mai: "अदुवा चिया",
    price: 70,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80",
    desc: "Warm tea infused with fresh ginger."
  },

  {
    id: 96,
    cat: "chiya",
    en: "Espresso",
    ne: "एस्प्रेसो",
    mai: "एस्प्रेसो",
    price: 130,
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
    desc: "Rich concentrated coffee shot."
  },

  {
    id: 97,
    cat: "chiya",
    en: "Cappuccino",
    ne: "क्यापुचिनो",
    mai: "क्यापुचिनो",
    price: 190,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    desc: "Espresso with steamed milk and foam."
  },

  {
    id: 98,
    cat: "chiya",
    en: "Cafe Latte",
    ne: "क्याफे ल्याटे",
    mai: "क्याफे ल्याटे",
    price: 200,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    desc: "Smooth espresso with creamy steamed milk."
  },

  {
    id: 99,
    cat: "chiya",
    en: "Cold Coffee",
    ne: "कोल्ड कफी",
    mai: "कोल्ड कफी",
    price: 220,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
    desc: "Chilled creamy coffee."
  },

  {
    id: 100,
    cat: "chiya",
    en: "Hazelnut Coffee",
    ne: "हेजलनट कफी",
    mai: "हेजलनट कफी",
    price: 240,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80",
    desc: "Coffee with a sweet hazelnut aroma."
  },


  /* ---------- DRINKS ---------- */

  {
    id: 101,
    cat: "drinks",
    popular: true,
    en: "Sweet Lassi",
    ne: "मीठो लस्सी",
    mai: "मीठ लस्सी",
    price: 130,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
    desc: "Cool creamy yogurt drink."
  },

  {
    id: 102,
    cat: "drinks",
    en: "Mango Lassi",
    ne: "आँप लस्सी",
    mai: "आमक लस्सी",
    price: 170,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy lassi blended with mango."
  },

  {
    id: 103,
    cat: "drinks",
    en: "Plain Lassi",
    ne: "सादा लस्सी",
    mai: "सादा लस्सी",
    price: 110,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80",
    desc: "Fresh yogurt drink."
  },

  {
    id: 104,
    cat: "drinks",
    en: "Fresh Lemonade",
    ne: "फ्रेस लेमोनेड",
    mai: "फ्रेश लेमोनेड",
    price: 120,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    desc: "Fresh lemon drink served chilled."
  },

  {
    id: 105,
    cat: "drinks",
    en: "Lemon Soda",
    ne: "लेमन सोडा",
    mai: "लेमन सोडा",
    price: 130,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    desc: "Sparkling lemon refresher."
  },

  {
    id: 106,
    cat: "drinks",
    en: "Mango Shake",
    ne: "आँप शेक",
    mai: "आमक शेक",
    price: 180,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    desc: "Thick creamy mango shake."
  },

  {
    id: 107,
    cat: "drinks",
    en: "Banana Shake",
    ne: "केरा शेक",
    mai: "केराक शेक",
    price: 160,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy banana milkshake."
  },

  {
    id: 108,
    cat: "drinks",
    en: "Chocolate Shake",
    ne: "चकलेट शेक",
    mai: "चकलेट शेक",
    price: 190,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    desc: "Rich chocolate milkshake."
  },


  /* ---------- SWEETS ---------- */

  {
    id: 109,
    cat: "sweets",
    popular: true,
    en: "Gulab Jamun",
    ne: "गुलाब जामुन",
    mai: "गुलाब जामुन",
    price: 100,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Soft milk-solid sweets soaked in syrup."
  },

  {
    id: 110,
    cat: "sweets",
    en: "Rasmalai",
    ne: "रसमलाई",
    mai: "रसमलाई",
    price: 160,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Soft cheese dumplings in sweetened milk."
  },

  {
    id: 111,
    cat: "sweets",
    en: "Rice Kheer",
    ne: "चामलको खीर",
    mai: "चाउरक खीर",
    price: 150,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy rice pudding with cardamom."
  },

  {
    id: 112,
    cat: "sweets",
    en: "Carrot Halwa",
    ne: "गाजरको हलुवा",
    mai: "गाजरक हलुआ",
    price: 160,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Warm carrot dessert with milk and nuts."
  },

  {
    id: 113,
    cat: "sweets",
    en: "Brownie",
    ne: "ब्राउनी",
    mai: "ब्राउनी",
    price: 180,
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80",
    desc: "Rich chocolate brownie."
  },

  {
    id: 114,
    cat: "sweets",
    en: "Chocolate Cake",
    ne: "चकलेट केक",
    mai: "चकलेट केक",
    price: 190,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    desc: "Moist chocolate cake."
  },

  {
    id: 115,
    cat: "sweets",
    en: "Cheesecake",
    ne: "चिजकेक",
    mai: "चीजकेक",
    price: 240,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
    desc: "Creamy cheesecake with a soft crust."
  },

  {
    id: 116,
    cat: "sweets",
    en: "Vanilla Ice Cream",
    ne: "भेनिला आइसक्रिम",
    mai: "भेनिला आइसक्रिम",
    price: 120,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    desc: "Classic creamy vanilla ice cream."
  },

  {
    id: 117,
    cat: "sweets",
    en: "Chocolate Ice Cream",
    ne: "चकलेट आइसक्रिम",
    mai: "चकलेट आइसक्रिम",
    price: 130,
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    desc: "Smooth chocolate ice cream."
  },

  {
    id: 118,
    cat: "sweets",
    en: "Fruit Cream",
    ne: "फ्रुट क्रिम",
    mai: "फ्रुट क्रिम",
    price: 180,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
    desc: "Fresh fruit folded into chilled cream."
  }

];


/* =========================================================
   CATEGORY CONFIG
   ========================================================= */

const categories = [

  {
    id: "popular",
    key: "categoryPopular"
  },

  {
    id: "all",
    key: "categoryAll"
  },

  {
    id: "mithila",
    key: "categoryMithila"
  },

  {
    id: "janakpur",
    key: "categoryJanakpur"
  },

  {
    id: "breakfast",
    key: "categoryBreakfast"
  },

  {
    id: "snacks",
    key: "categorySnacks"
  },

  {
    id: "main",
    key: "categoryMain"
  },

  {
    id: "veg",
    key: "categoryVeg"
  },

  {
    id: "nonveg",
    key: "categoryNonVeg"
  },

  {
    id: "chiya",
    key: "categoryChiya"
  },

  {
    id: "drinks",
    key: "categoryDrinks"
  },

  {
    id: "sweets",
    key: "categorySweets"
  }

];


/* =========================================================
   APP STATE
   ========================================================= */

let activeCategory = "all";

let searchQuery = "";

let cart = loadCart();


/* =========================================================
   DOM
   ========================================================= */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  document.querySelectorAll(selector);


/* =========================================================
   TRANSLATION HELPER
   ========================================================= */

function t(key) {

  return (
    translations[currentLanguage]?.[key] ??
    translations.en[key] ??
    key
  );

}


/* =========================================================
   NUMBER LOCALIZATION
   ========================================================= */

function localizeNumber(value) {

  const str = String(value);

  if (currentLanguage === "en") {
    return str;
  }

  const map = {
    "0": "०",
    "1": "१",
    "2": "२",
    "3": "३",
    "4": "४",
    "5": "५",
    "6": "६",
    "7": "७",
    "8": "८",
    "9": "९"
  };

  return str.replace(
    /\d/g,
    digit => map[digit]
  );

}


function formatMoney(amount) {

  return currentLanguage === "en"
    ? `NPR ${amount}`
    : `रु ${localizeNumber(amount)}`;

}


/* =========================================================
   GET ITEM NAME
   ========================================================= */

function getItemName(item) {

  return item[currentLanguage] || item.en;

}


/* =========================================================
   GET DESCRIPTION
   ========================================================= */

function getItemDescription(item) {

  if (currentLanguage === "en") {
    return item.desc;
  }

  const descriptions = {

    ne: {
      mithila:
        "परम्परागत स्वाद र स्थानीय सामग्रीबाट तयार गरिएको परिकार।",

      janakpur:
        "जनकपुर र मिथिलाको स्वादबाट प्रेरित विशेष परिकार।",

      breakfast:
        "बिहानका लागि ताजा र स्वादिलो परिकार।",

      snacks:
        "चिया वा साथीभाइसँग खान मिल्ने स्वादिलो खाजा।",

      main:
        "पेट भरिने स्वादिलो मुख्य भोजन।",

      veg:
        "ताजा सामग्रीबाट तयार गरिएको शाकाहारी परिकार।",

      nonveg:
        "मसला र स्वादले भरिएको मांसाहारी परिकार।",

      chiya:
        "तातो चिया वा कफीको न्यानो स्वाद।",

      drinks:
        "ताजा र चिसो पेय पदार्थ।",

      sweets:
        "भोजनपछि रमाइलो गर्न मिल्ने मिठो परिकार।"

    },

    mai: {
      mithila:
        "परम्परागत स्वाद आ स्थानीय सामग्री सँ तैयार व्यंजन।",

      janakpur:
        "जनकपुर आ मिथिलाक स्वाद सँ प्रेरित विशेष व्यंजन।",

      breakfast:
        "बिहान लेल ताजा आ स्वादिष्ट खाना।",

      snacks:
        "चिया वा दोस्त सभक संग खाय लेल स्वादिष्ट खाजा।",

      main:
        "पेट भरबाक स्वादिष्ट मुख्य भोजन।",

      veg:
        "ताजा सामग्री सँ तैयार शाकाहारी व्यंजन।",

      nonveg:
        "मसाला आ स्वाद सँ भरल मांसाहारी व्यंजन।",

      chiya:
        "गरम चिया वा कफीक अपनापन भरल स्वाद।",

      drinks:
        "ताजा आ चिस पेय।",

      sweets:
        "भोजनक बाद आनन्द लेल मीठ व्यंजन।"

    }

  };

  return (
    descriptions[currentLanguage]?.[item.cat] ||
    descriptions.ne[item.cat] ||
    item.desc
  );

}


/* =========================================================
   CATEGORY NAME
   ========================================================= */

function getCategoryName(categoryId) {

  if (categoryId === "all") {
    return t("categoryAll");
  }

  if (categoryId === "popular") {
    return t("categoryPopular");
  }

  const category = categories.find(
    item => item.id === categoryId
  );

  return category
    ? t(category.key)
    : categoryId;
}


/* =========================================================
   RENDER TRANSLATIONS
   ========================================================= */

function renderTranslations() {

  document.documentElement.lang =
    currentLanguage === "en"
      ? "en"
      : currentLanguage === "ne"
        ? "ne"
        : "mai";


  $$("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    const value = t(key);

    if (value !== undefined) {
      element.textContent = value;
    }

  });


  $$("[data-i18n-placeholder]").forEach(element => {

    const key = element.dataset.i18nPlaceholder;

    element.placeholder = t(key);

  });


  $("#currentLanguage").textContent =
    currentLanguage === "en"
      ? "EN"
      : currentLanguage === "ne"
        ? "ने"
        : "मै";


  updateOrderTypeOptions();

  updateSearchHint();

  renderMenu();

  renderCart();

}


/* =========================================================
   ORDER TYPE TRANSLATION
   ========================================================= */

function updateOrderTypeOptions() {

  const select = $("#orderType");

  if (!select) return;

  select.options[0].textContent =
    t("pickup");

  select.options[1].textContent =
    t("dineIn");

}


/* =========================================================
   LANGUAGE MENU
   ========================================================= */

function setupLanguage() {

  const button = $("#languageButton");

  const menu = $("#languageMenu");


  button.addEventListener("click", event => {

    event.stopPropagation();

    menu.classList.toggle("open");

    button.setAttribute(
      "aria-expanded",
      menu.classList.contains("open")
    );

  });


  $$("#languageMenu button").forEach(languageButton => {

    languageButton.addEventListener("click", () => {

      currentLanguage =
        languageButton.dataset.language;

      localStorage.setItem(
        LANGUAGE_STORAGE_KEY,
        currentLanguage
      );

      menu.classList.remove("open");

      button.setAttribute(
        "aria-expanded",
        "false"
      );

      renderTranslations();

      showToast(
        t("added"),
        currentLanguage === "en"
          ? "Language changed."
          : currentLanguage === "ne"
            ? "भाषा परिवर्तन भयो।"
            : "भाषा बदलि गेल।"
      );

    });

  });


  document.addEventListener("click", event => {

    if (!event.target.closest(".language-control")) {

      menu.classList.remove("open");

    }

  });

}


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

  const savedTheme =
    localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "night") {
    document.body.classList.add("night");
  }

  updateThemeIcon();


  $("#themeToggle").addEventListener(
    "click",
    () => {

      document.body.classList.toggle("night");

      localStorage.setItem(
        THEME_STORAGE_KEY,
        document.body.classList.contains("night")
          ? "night"
          : "day"
      );

      updateThemeIcon();

    }
  );

}


function updateThemeIcon() {

  const icon =
    $("#themeToggle i");

  if (!icon) return;

  icon.className =
    document.body.classList.contains("night")
      ? "fa-solid fa-sun"
      : "fa-solid fa-moon";

}


/* =========================================================
   CATEGORY TABS
   ========================================================= */

function renderCategoryTabs() {

  const container = $("#menuTabs");

  container.innerHTML = "";


  categories.forEach(category => {

    const button =
      document.createElement("button");

    button.className =
      "menu-tab";

    if (activeCategory === category.id) {
      button.classList.add("active");
    }

    button.textContent =
      t(category.key);

    button.dataset.category =
      category.id;


    button.addEventListener(
      "click",
      () => {

        activeCategory =
          category.id;

        renderCategoryTabs();

        renderMenu();

        $("#menu").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );


    container.appendChild(button);

  });

}


/* =========================================================
   FILTER
   ========================================================= */

function getFilteredItems() {

  const normalizedSearch =
    searchQuery
      .trim()
      .toLowerCase();


  let result;


  /* IMPORTANT BUG FIX:
     Empty search MUST NOT produce "No food found".
  */

  if (
    activeCategory === "all" ||
    activeCategory === "popular"
  ) {

    result = [...menuItems];

  } else {

    result =
      menuItems.filter(
        item =>
          item.cat === activeCategory
      );

  }


  if (activeCategory === "popular") {

    result =
      result.filter(
        item => item.popular
      );

  }


  if (normalizedSearch) {

    result =
      result.filter(item => {

        const searchableText = [

          item.en,
          item.ne,
          item.mai,
          item.desc,
          item.cat

        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(
          normalizedSearch
        );

      });

  }


  return result;

}


/* =========================================================
   RENDER MENU
   ========================================================= */

function renderMenu() {

  renderCategoryTabs();

  renderPopular();


  const grid =
    $("#foodGrid");

  const empty =
    $("#emptyMenu");

  const title =
    $("#activeCategoryTitle");

  const count =
    $("#menuCount");


  const items =
    getFilteredItems();


  title.textContent =
    getCategoryName(activeCategory);


  count.textContent =
    `${localizeNumber(items.length)} ${
      items.length === 1
        ? t("itemFound")
        : t("itemsFound")
    }`;


  grid.innerHTML = "";


  if (items.length === 0) {

    grid.hidden = true;

    empty.hidden = false;

    return;

  }


  grid.hidden = false;

  empty.hidden = true;


  const fragment =
    document.createDocumentFragment();


  items.forEach(item => {

    fragment.appendChild(
      createFoodCard(item)
    );

  });


  grid.appendChild(fragment);

  updateSearchHint();

}


/* =========================================================
   POPULAR
   ========================================================= */

function renderPopular() {

  const list =
    $("#popularList");

  const count =
    $("#popularCount");


  const popular =
    menuItems.filter(
      item => item.popular
    );


  count.textContent =
    `${localizeNumber(popular.length)} ${
      popular.length === 1
        ? t("itemFound")
        : t("itemsFound")
    }`;


  list.innerHTML = "";


  popular.forEach(item => {

    const button =
      document.createElement("div");

    button.className =
      "popular-item";


    button.innerHTML = `

      <span class="popular-item-name">
        ${escapeHTML(getItemName(item))}
      </span>

      <span class="popular-item-price">
        ${formatMoney(item.price)}
      </span>

      <button
        class="mini-add"
        data-add-id="${item.id}"
        aria-label="${escapeHTML(t("addFood"))}">
        <i class="fa-solid fa-plus"></i>
      </button>

    `;


    list.appendChild(button);

  });

}


/* =========================================================
   FOOD CARD
   ========================================================= */

function createFoodCard(item) {

  const article =
    document.createElement("article");

  article.className =
    "food-card";


  article.dataset.id =
    item.id;


  article.innerHTML = `

    <div class="food-image">

      <img
        src="${item.image}"
        alt="${escapeHTML(getItemName(item))}"
        loading="lazy"
        onerror="this.style.display='none';">

      <span class="food-category">
        ${escapeHTML(getCategoryName(item.cat))}
      </span>

    </div>


    <div class="food-body">

      <h4>
        ${escapeHTML(getItemName(item))}
      </h4>

      <p class="food-description">
        ${escapeHTML(getItemDescription(item))}
      </p>


      <div class="food-bottom">

        <span class="food-price">
          ${formatMoney(item.price)}
        </span>


        <button
          class="add-food"
          data-add-id="${item.id}"
          aria-label="${escapeHTML(t("addFood"))}">

          <i class="fa-solid fa-plus"></i>

        </button>

      </div>

    </div>

  `;


  return article;

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   MENU EVENTS
   ========================================================= */

function setupMenuEvents() {

  document.addEventListener(
    "click",
    event => {

      const addButton =
        event.target.closest(
          "[data-add-id]"
        );


      if (addButton) {

        const id =
          Number(addButton.dataset.addId);

        animateAddButton(addButton);

        addToCart(id);

        return;

      }


      const quantityButton =
        event.target.closest(
          "[data-cart-action]"
        );


      if (quantityButton) {

        const id =
          Number(quantityButton.dataset.id);

        const action =
          quantityButton.dataset.cartAction;


        if (action === "increase") {
          changeQuantity(id, 1);
        }

        if (action === "decrease") {
          changeQuantity(id, -1);
        }

        if (action === "remove") {
          removeFromCart(id);
        }

      }

    }
  );


  $("#menuSearch")
    .addEventListener(
      "input",
      event => {

        searchQuery =
          event.target.value;

        $("#clearSearch")
          .classList.toggle(
            "show",
            Boolean(searchQuery)
          );

        renderMenu();

      }
    );


  $("#clearSearch")
    .addEventListener(
      "click",
      () => {

        $("#menuSearch").value = "";

        searchQuery = "";

        $("#clearSearch")
          .classList.remove("show");

        renderMenu();

        $("#menuSearch").focus();

      }
    );


  $("#resetMenu")
    .addEventListener(
      "click",
      () => {

        activeCategory = "all";

        searchQuery = "";

        $("#menuSearch").value = "";

        $("#clearSearch")
          .classList.remove("show");

        renderMenu();

      }
    );

}


/* =========================================================
   SEARCH HINT
   ========================================================= */

function updateSearchHint() {

  const hint =
    $("#searchHint");

  if (!hint) return;


  const query =
    searchQuery.trim();


  if (!query) {

    hint.textContent = "";

    return;

  }


  const items =
    getFilteredItems();


  hint.textContent =
    `${t("searchResultsFor")} “${query}” · ${
      localizeNumber(items.length)
    } ${
      items.length === 1
        ? t("itemFound")
        : t("itemsFound")
    }`;

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(id) {

  const item =
    menuItems.find(
      product => product.id === id
    );


  if (!item) return;


  const existing =
    cart.find(
      cartItem => cartItem.id === id
    );


  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({
      id,
      qty: 1
    });

  }


  saveCart();

  renderCart();

  animateCartButton();

  showToast(
    t("added"),
    `${getItemName(item)} · ${t("itemAdded")}`
  );

}


/* =========================================================
   CHANGE QUANTITY
   ========================================================= */

function changeQuantity(id, change) {

  const item =
    cart.find(
      cartItem => cartItem.id === id
    );


  if (!item) return;


  item.qty += change;


  if (item.qty <= 0) {

    cart =
      cart.filter(
        cartItem => cartItem.id !== id
      );

  }


  saveCart();

  renderCart();

}


/* =========================================================
   REMOVE CART
   ========================================================= */

function removeFromCart(id) {

  const item =
    menuItems.find(
      product => product.id === id
    );


  cart =
    cart.filter(
      cartItem => cartItem.id !== id
    );


  saveCart();

  renderCart();


  if (item) {

    showToast(
      t("removed"),
      `${getItemName(item)} · ${t("itemRemoved")}`
    );

  }

}


/* =========================================================
   CLEAR CART
   ========================================================= */

function clearCart() {

  if (!cart.length) return;


  cart = [];

  saveCart();

  renderCart();

  showToast(
    t("removed"),
    t("cartCleared")
  );

}


/* =========================================================
   CART STORAGE
   ========================================================= */

function loadCart() {

  try {

    const stored =
      localStorage.getItem(
        CART_STORAGE_KEY
      );


    if (!stored) return [];


    const parsed =
      JSON.parse(stored);


    if (!Array.isArray(parsed)) {
      return [];
    }


    return parsed.filter(
      item =>
        Number.isFinite(item.id) &&
        Number.isFinite(item.qty) &&
        item.qty > 0
    );

  } catch {

    return [];

  }

}


function saveCart() {

  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify(cart)
  );

}


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

  const orderItems =
    $("#orderItems");

  const drawerItems =
    $("#drawerCartItems");


  const count =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  const total =
    getCartTotal();


  $("#cartCount").textContent =
    localizeNumber(count);


  $("#orderTotal").textContent =
    formatMoney(total);


  $("#drawerTotal").textContent =
    formatMoney(total);


  if (!cart.length) {

    orderItems.innerHTML = `

      <div class="cart-empty">

        <i class="fa-solid fa-basket-shopping"></i>

        <p>${escapeHTML(t("cartEmpty"))}</p>

        <a href="#menu" class="text-link">

          <span>
            ${escapeHTML(t("addFood"))}
          </span>

          <i class="fa-solid fa-arrow-right"></i>

        </a>

      </div>

    `;


    drawerItems.innerHTML = `

      <div class="cart-empty">

        <i class="fa-solid fa-basket-shopping"></i>

        <p>${escapeHTML(t("cartEmpty"))}</p>

      </div>

    `;


    return;

  }


  orderItems.innerHTML =
    cart
      .map(
        item => createCartItem(item)
      )
      .join("");


  drawerItems.innerHTML =
    cart
      .map(
        item => createCartItem(item)
      )
      .join("");

}


/* =========================================================
   CART ITEM
   ========================================================= */

function createCartItem(cartItem) {

  const item =
    menuItems.find(
      product =>
        product.id === cartItem.id
    );


  if (!item) return "";


  const subtotal =
    item.price * cartItem.qty;


  return `

    <div class="cart-item">

      <div class="cart-item-image">

        <img
          src="${item.image}"
          alt="${escapeHTML(getItemName(item))}"
          loading="lazy">

      </div>


      <div class="cart-item-info">

        <h4>
          ${escapeHTML(getItemName(item))}
        </h4>

        <small>
          ${formatMoney(item.price)}
        </small>


        <div class="quantity-control">

          <button
            type="button"
            data-cart-action="decrease"
            data-id="${item.id}"
            aria-label="Decrease">
            −
          </button>

          <span>
            ${localizeNumber(cartItem.qty)}
          </span>

          <button
            type="button"
            data-cart-action="increase"
            data-id="${item.id}"
            aria-label="Increase">
            +
          </button>

        </div>

      </div>


      <div class="cart-item-side">

        <strong>
          ${formatMoney(subtotal)}
        </strong>

        <button
          type="button"
          class="remove-cart-item"
          data-cart-action="remove"
          data-id="${item.id}">

          ${escapeHTML(t("remove"))}

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   CART TOTAL
   ========================================================= */

function getCartTotal() {

  return cart.reduce(
    (total, cartItem) => {

      const item =
        menuItems.find(
          product =>
            product.id === cartItem.id
        );


      if (!item) {
        return total;
      }


      return total +
        item.price *
        cartItem.qty;

    },
    0
  );

}


/* =========================================================
   CART DRAWER
   ========================================================= */

function setupCartDrawer() {

  const drawer =
    $("#cartDrawer");

  const overlay =
    $("#cartOverlay");


  function openCart() {

    drawer.classList.add("open");

    overlay.classList.add("open");

    document.body.classList.add("cart-open");

  }


  function closeCart() {

    drawer.classList.remove("open");

    overlay.classList.remove("open");

    document.body.classList.remove("cart-open");

  }


  $("#cartButton")
    .addEventListener(
      "click",
      openCart
    );


  $("#cartClose")
    .addEventListener(
      "click",
      closeCart
    );


  overlay
    .addEventListener(
      "click",
      closeCart
    );


  $("#drawerOrderButton")
    .addEventListener(
      "click",
      closeCart
    );


  $("#clearCart")
    .addEventListener(
      "click",
      clearCart
    );

}


/* =========================================================
   ADD ANIMATION
   ========================================================= */

function animateAddButton(button) {

  const ripple =
    document.createElement("span");

  ripple.className =
    "ripple";


  const rect =
    button.getBoundingClientRect();


  const x =
    rect.width / 2;

  const y =
    rect.height / 2;


  ripple.style.left =
    `${x}px`;

  ripple.style.top =
    `${y}px`;


  button.appendChild(ripple);


  setTimeout(
    () => ripple.remove(),
    600
  );


  const card =
    button.closest(".food-card");


  if (card) {

    card.classList.remove(
      "added-animation"
    );


    requestAnimationFrame(
      () => {

        card.classList.add(
          "added-animation"
        );

      }
    );

  }

}


function animateCartButton() {

  const button =
    $("#cartButton");


  button.classList.remove("bump");


  requestAnimationFrame(
    () => {

      button.classList.add("bump");

    }
  );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(title, message) {

  const toast =
    $("#toast");


  $("#toastTitle").textContent =
    title;

  $("#toastMessage").textContent =
    message;


  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2600
    );

}


/* =========================================================
   ORDER WHATSAPP
   ========================================================= */

function setupOrderForm() {

  $("#orderForm")
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();


        if (!cart.length) {

          showToast(
            t("yourOrder"),
            t("fillCart")
          );

          document
            .querySelector("#menu")
            .scrollIntoView({
              behavior: "smooth"
            });

          return;

        }


        const name =
          $("#orderName").value.trim();

        const phone =
          $("#orderPhone").value.trim();

        const people =
          $("#orderPeople").value;

        const tables =
          $("#orderTables").value || "0";

        const type =
          $("#orderType").value;

        const note =
          $("#orderNote").value.trim();


        if (!name || !phone || !people) {

          showToast(
            t("yourOrder"),
            t("requiredFields")
          );

          return;

        }


        const orderType =
          type === "pickup"
            ? t("pickup")
            : t("dineIn");


        let message = "";

        message +=
          `*${t("yourOrder")} — Cafe Mithila*\n\n`;


        message +=
          `*${t("name")}:* ${name}\n`;

        message +=
          `*${t("phone")}:* ${phone}\n`;

        message +=
          `*${t("numberPeople")}:* ${localizeNumber(people)}\n`;

        message +=
          `*${t("numberTables")}:* ${localizeNumber(tables)}\n`;

        message +=
          `*${t("orderType")}:* ${orderType}\n\n`;


        message +=
          `*${t("selectedFood")}:*\n`;


        cart.forEach(
          cartItem => {

            const item =
              menuItems.find(
                product =>
                  product.id === cartItem.id
              );


            if (!item) return;


            const subtotal =
              item.price *
              cartItem.qty;


            message +=
              `• ${getItemName(item)} × ${localizeNumber(cartItem.qty)} — ${formatMoney(subtotal)}\n`;

          }
        );


        message +=
          `\n*${t("total")}:* ${formatMoney(getCartTotal())}\n`;


        if (note) {

          message +=
            `\n*${t("extraDetails")}:* ${note}\n`;

        }


        message +=
          `\nCafe Mithila, Campus Chowk, Janakpurdham`;


        const url =
          `https://wa.me/${WHATSAPP_NUMBER}?text=${
            encodeURIComponent(message)
          }`;


        showToast(
          t("yourOrder"),
          t("orderSent")
        );


        window.open(
          url,
          "_blank",
          "noopener"
        );

      }
    );

}


/* =========================================================
   RESERVATION WHATSAPP
   ========================================================= */

function setupReservationForm() {

  $("#reservationForm")
    .addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const name =
          $("#reserveName").value.trim();

        const phone =
          $("#reservePhone").value.trim();

        const people =
          $("#reservePeople").value;

        const tables =
          $("#reserveTables").value;

        const date =
          $("#reserveDate").value;

        const time =
          $("#reserveTime").value;

        const note =
          $("#reserveNote").value.trim();


        if (
          !name ||
          !phone ||
          !people ||
          !tables ||
          !date ||
          !time
        ) {

          showToast(
            t("reserveEyebrow"),
            t("requiredFields")
          );

          return;

        }


        let message = "";


        message +=
          `*Cafe Mithila — ${t("reserveEyebrow")}*\n\n`;


        message +=
          `*${t("name")}:* ${name}\n`;

        message +=
          `*${t("phone")}:* ${phone}\n`;

        message +=
          `*${t("numberPeople")}:* ${localizeNumber(people)}\n`;

        message +=
          `*${t("numberTables")}:* ${localizeNumber(tables)}\n`;

        message +=
          `*${t("date")}:* ${date}\n`;

        message +=
          `*${t("time")}:* ${time}\n`;


        if (note) {

          message +=
            `*${t("extraDetails")}:* ${note}\n`;

        }


        message +=
          `\nCampus Chowk, Janakpurdham`;


        const url =
          `https://wa.me/${WHATSAPP_NUMBER}?text=${
            encodeURIComponent(message)
          }`;


        showToast(
          t("reserveEyebrow"),
          t("reservationSent")
        );


        window.open(
          url,
          "_blank",
          "noopener"
        );

      }
    );

}


/* =========================================================
   MOBILE NAV
   ========================================================= */

function setupMobileDrawer() {

  const toggle =
    $("#mobileMenuToggle");

  const drawer =
    $("#mobileDrawer");

  const overlay =
    $("#mobileOverlay");

  const close =
    $("#drawerClose");


  function openDrawer() {

    toggle.classList.add("active");

    drawer.classList.add("open");

    overlay.classList.add("open");

    document.body.classList.add("drawer-open");

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

  }


  function closeDrawer() {

    toggle.classList.remove("active");

    drawer.classList.remove("open");

    overlay.classList.remove("open");

    document.body.classList.remove("drawer-open");

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }


  toggle.addEventListener(
    "click",
    () => {

      drawer.classList.contains("open")
        ? closeDrawer()
        : openDrawer();

    }
  );


  close.addEventListener(
    "click",
    closeDrawer
  );


  overlay.addEventListener(
    "click",
    closeDrawer
  );


  $$(".mobile-nav a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeDrawer
      );

    });


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeDrawer();

      }

    }
  );

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

function setupHeaderScroll() {

  const header =
    $("#siteHeader");


  function update() {

    header.classList.toggle(
      "scrolled",
      window.scrollY > 30
    );

  }


  update();

  window.addEventListener(
    "scroll",
    update,
    { passive: true }
  );

}


/* =========================================================
   ACTIVE NAV
   ========================================================= */

function setupActiveNavigation() {

  const sections =
    $$("main section[id]");


  const links =
    $$(".desktop-nav a");


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (!entry.isIntersecting) {
              return;
            }


            links.forEach(link => {

              link.classList.toggle(
                "active",
                link.dataset.nav ===
                  entry.target.id
              );

            });

          }
        );

      },
      {
        threshold: .2,
        rootMargin: "-25% 0px -60% 0px"
      }
    );


  sections.forEach(
    section =>
      observer.observe(section)
  );

}


/* =========================================================
   REVEAL OBSERVER
   ========================================================= */

function setupReveal() {

  const elements =
    $$(".reveal");


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: .08
      }
    );


  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =========================================================
   DATE
   ========================================================= */

function setupDate() {

  const input =
    $("#reserveDate");


  if (!input) return;


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


  input.min =
    `${year}-${month}-${day}`;

}


/* =========================================================
   YEAR
   ========================================================= */

function setupYear() {

  $("#currentYear").textContent =
    new Date().getFullYear();

}


/* =========================================================
   KEYBOARD SHORTCUT
   ========================================================= */

function setupSearchShortcut() {

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ) {

        event.preventDefault();

        $("#menuSearch").focus();

        $("#menu").scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );

}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(
      () => {

        $("#pageLoader")
          .classList.add("hide");

      },
      600
    );


    setupTheme();

    setupLanguage();

    setupMenuEvents();

    setupCartDrawer();

    setupOrderForm();

    setupReservationForm();

    setupMobileDrawer();

    setupHeaderScroll();

    setupActiveNavigation();

    setupDate();

    setupYear();

    setupSearchShortcut();

    renderTranslations();

    setupReveal();

  }
);