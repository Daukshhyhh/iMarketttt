const yearElement = document.getElementById("year");
const metaDescription = document.getElementById("meta-description");

const cityModal = document.getElementById("city-modal");
const cityButtons = document.querySelectorAll(".city-choice");
const citySwitch = document.getElementById("city-switch");
const citySwitchLabel = document.getElementById("city-switch-label");
const selectedCityLabel = document.getElementById("selected-city-label");

const langButtons = document.querySelectorAll(".lang-button");
const headerInstagram = document.getElementById("header-instagram");
const headerWhatsapp = document.getElementById("header-whatsapp");
const heroWhatsapp = document.getElementById("hero-whatsapp");
const heroCatalogLink = document.getElementById("hero-catalog-link");
const contactWhatsapp = document.getElementById("contact-whatsapp");
const contactInstagram = document.getElementById("contact-instagram");
const deliveryWhatsapp = document.getElementById("delivery-whatsapp");
const tradeinWhatsapp = document.getElementById("tradein-whatsapp");
const tradeinSection = document.getElementById("tradein");
const tradeinLayout = document.getElementById("tradein-layout");
const tradeinStoreNote = document.getElementById("tradein-store-note");
const tradeinStoreTitle = document.getElementById("tradein-store-title");
const tradeinStoreText = document.getElementById("tradein-store-text");
const productLinks = document.querySelectorAll(".product-link");
const storeCards = document.querySelectorAll("[data-store-card]");

const tradeinModel = document.getElementById("tradein-model");
const tradeinStorage = document.getElementById("tradein-storage");
const tradeinCondition = document.getElementById("tradein-condition");
const batteryHealth = document.getElementById("battery-health");
const batteryValue = document.getElementById("battery-value");
const tradeinPrice = document.getElementById("tradein-price");

const summaryCondition = document.getElementById("summary-condition");
const summaryStorage = document.getElementById("summary-storage");
const summaryBattery = document.getElementById("summary-battery");
const summaryRepaired = document.getElementById("summary-repaired");

const cityConfig = {
  "Уральск": {
    key: "uralsk",
    label: { ru: "Уральск", kz: "Орал" },
    phone: "77718450707",
    phoneDisplay: "+7 771 845 0707",
    address: "Abai 88, Oral, Kazakhstan",
    instagram: "https://www.instagram.com/imarket.uralsk?igsh=MWd2dDJmcTZxeHB1Mg%3D%3D",
    map: "https://go.2gis.com/mlqUp",
  },
  "Атырау": {
    key: "atyrau",
    label: { ru: "Атырау", kz: "Атырау" },
    phone: "77078450606",
    phoneDisplay: "+7 707 845 0606",
    address: "Кулманова 105 а",
    instagram: "https://www.instagram.com/imarket.atyrau?igsh=d284Mjc1cTl4cDV5",
    map: "https://2gis.kz/atyrau/search/iMarket%2C%20%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%20%D0%B8%20%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D0%BE%D0%B2/firm/70000001098329895/51.902173%2C47.108669?m=51.902173%2C47.108669%2F17.63",
  },
  "Астана": {
    key: "astana",
    label: { ru: "Астана", kz: "Астана" },
    phone: "77087030101",
    phoneDisplay: "+7 708 703 0101",
    address: "Бұқар жырау 26",
    instagram: "https://www.instagram.com/imarket_astana?igsh=dDNjMXFwdGZqY2lt",
    map: "https://2gis.kz/astana/search/iMarket%2C%20%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%20%D0%B8%20%D0%B0%D0%BA%D1%81%D0%B5%D1%81%D1%81%D1%83%D0%B0%D1%80%D0%BE%D0%B2/firm/70000001111683450/71.410301%2C51.101973?m=71.410301%2C51.101973%2F17.63",
  },
};

const tradeinBasePrices = {
  "iPhone 11": 110000,
  "iPhone 11 Pro": 170000,
  "iPhone 11 Pro Max": 220000,
  "iPhone 12": 195000,
  "iPhone 12 Pro": 287500,
  "iPhone 12 Pro Max": 355000,
  "iPhone 13": 320000,
  "iPhone 13 Pro": 480000,
  "iPhone 13 Pro Max": 515000,
  "iPhone 14": 455000,
  "iPhone 14 Pro": 667500,
  "iPhone 14 Pro Max": 792500,
  "iPhone 15": 682500,
  "iPhone 15 Pro": 952500,
  "iPhone 15 Pro Max": 1097500,
  "iPhone 16": 952500,
  "iPhone 16 Pro": 1207500,
  "iPhone 16 Pro Max": 1282500,
  "iPhone 17": 1172500,
  "iPhone 17 Pro": 1520000,
  "iPhone 17 Pro Max": 1670000,
};

const conditionFactors = {
  "Идеальное": 1,
  "Хорошее": 0.93,
  "Есть заметные следы": 0.83,
};

const storageFactors = {
  "128 GB": 1,
  "256 GB": 1.12,
  "512 GB": 1.26,
  "1 TB": 1.42,
};

const translations = {
  ru: {
    htmlLang: "ru",
    metaTitle: "iMarket | Премиальные iPhone, трейд-ин и сервис нового уровня",
    metaDescription:
      "iMarket: премиальный магазин iPhone и аксессуаров в Уральске, Атырау и Астане. Оригинальная техника, выгодные цены, трейд-ин, подарки и быстрая консультация в WhatsApp.",
    citySwitchLabel: "Филиал:",
    announcement:
      "Премиальный магазин с iPhone, трейд-ином и сервисом, о котором пишут в отзывах",
    cityModalEyebrow: "Выбор города",
    cityModalTitle: "Выберите ваш филиал iMarket",
    cityModalText:
      "Покажем нужные контакты, Instagram и маршрут до магазина в Уральске, Атырау или Астане.",
    nav: ["Каталог", "Трейд-ин", "Отзывы", "Филиалы", "Доставка", "Контакты"],
    hero: {
      eyebrow: "Премиальный магазин техники",
      title: "iMarket",
      subtitle: "iPhone по выгодной цене.",
      text: "iPhone, выгодные цены, трейд-ин и быстрая консультация.",
      primary: "Получить консультацию",
      secondary: "Смотреть каталог",
      card1Label: "Филиал",
      card2Label: "Почему выбирают iMarket",
      card2Title: "Быстрый сервис и удобная покупка",
      card2Text: "Подберём модель, ответим на вопросы и поможем с настройкой.",
    },
    experience: {
      eyebrow: "Почему iMarket",
      title: "Удобно выбрать, быстро купить и спокойно быть уверенным в покупке.",
      cards: [
        {
          title: "Широкий выбор iPhone",
          text: "Популярные модели, разные объёмы памяти и помощь с выбором под ваш бюджет.",
        },
        {
          title: "Трейд-ин и консультация",
          text: "Можно быстро оценить свой телефон и сразу связаться с нужным филиалом.",
        },
        {
          title: "Удобно купить",
          text: "Каталог, контакты, адреса филиалов и WhatsApp собраны в одном месте.",
        },
      ],
    },
    brandManifesto: {
      text: "Лучшее сочетание цены и качества для вашего нового iPhone.",
    },
    catalog: {
      eyebrow: "Каталог",
      title: "Выберите свой iPhone.",
      spotlightLabel: "Быстрый выбор",
      spotlightText: "Популярные модели с актуальными ценами и быстрым переходом в WhatsApp.",
      spotlightButton: "Уточнить весь ассортимент",
      cards: {
        "iPhone 17 Pro Max": {
          badge: "Флагманский выбор",
          note: "Новая вершина",
          text: "Для тех, кто хочет максимум статуса, камеры и мощности.",
          points: ["Флагманская линейка", "Для тех, кто любит топ", "Подходит для апгрейда по трейд-ину"],
          cta: "Узнать наличие",
        },
        "iPhone 16 Pro": {
          badge: "Выбор Pro",
          note: "Баланс мощи",
          text: "Сильная модель для тех, кто хочет новое поколение и уверенную камеру.",
          cta: "Спросить цену",
        },
        "iPhone 15": {
          badge: "Умный апгрейд",
          note: "Популярный выбор",
          text: "Комфортный вариант по цене и возможностям на каждый день.",
          cta: "Спросить цену",
        },
        "iPhone 13": {
          badge: "Проверенная классика",
          note: "Вход в Apple",
          text: "Надёжный iPhone для тех, кто хочет удобную цену и хороший опыт.",
          cta: "Спросить цену",
        },
        "Б/у iPhone": {
          badge: "Проверенные б/у",
          note: "Наличие после трейд-ина",
          text: "Подобранные устройства для тех, кто хочет купить ещё выгоднее.",
          cta: "Узнать варианты",
        },
        "Аксессуары": {
          badge: "Аксессуары",
          note: "Подарки и допы",
          text: "Чехлы, стёкла, адаптеры и наушники в одном месте.",
          cta: "Подобрать комплект",
        },
      },
    },
    tradein: {
      eyebrow: "Трейд-ин",
      title: "Рассчитайте примерную стоимость вашего iPhone.",
      label: "Оценка устройства",
      subtitle: "Укажите параметры вашего iPhone",
      fields: ["Модель iPhone", "Память", "Внешнее состояние", "Ёмкость батареи"],
      conditions: ["Идеальное", "Хорошее", "Есть заметные следы"],
      legends: ["Есть сколы или трещины?", "Батарея менялась?", "Есть коробка?", "Был ли в ремонте?"],
      yes: "Да",
      no: "Нет",
      estimate: "Предварительная оценка",
      note: "Сумма ориентировочная. Финальная оценка подтверждается после осмотра устройства в магазине.",
      summary: ["Состояние", "Память", "Батарея", "Был в ремонте"],
      send: "Отправить оценку в WhatsApp",
      storeOnlyTitle: "Трейд-ин для этого города оформляется только в магазине.",
      storeOnlyText:
        "Для клиентов из {city} трейд-ин доступен только при личном посещении филиала. Подойдите в магазин, и консультанты помогут с оценкой устройства.",
    },
    reviews: {
      eyebrow: "Отзывы",
      title: "Реальные отзывы клиентов о сервисе, цене и уровне обслуживания.",
      badges: ["Тёплый отзыв", "Сервис", "Выгодная цена"],
      confirmed: "Подтверждённый отзыв",
    },
    stores: {
      eyebrow: "Филиалы",
      title: "Три города. Один уровень сервиса.",
      descriptions: [
        "Филиал с сильным локальным доверием, хорошими отзывами и высоким сервисом.",
        "Тот же высокий сервис: подбор модели, консультация и удобный маршрут покупки.",
        "Столичный филиал с тем же уровнем сервиса и удобной выдачей техники.",
      ],
      map: "Открыть карту",
    },
    contact: {
      eyebrow: "Контакты",
      title: "За более подробной информацией свяжитесь с нами в WhatsApp или Instagram.",
      textBefore: "Текущий филиал:",
      textAfter: "Мы уже подставили нужный номер, Instagram и адрес для быстрого перехода к покупке.",
      whatsapp: "Написать в WhatsApp",
      instagram: "Открыть Instagram",
      labels: ["Телефон", "Адрес", "Карта"],
      map: "Открыть в 2GIS",
    },
    delivery: {
      eyebrow: "Доставка",
      title: "Доставка по всему Казахстану.",
      text:
        "Доставка доступна для клиентов из Уральска, Атырау и Астаны, а также по всему Казахстану. Напишите нам в WhatsApp, чтобы уточнить сроки, наличие и оформить заказ.",
      button: "Заказать через WhatsApp",
    },
    footer: {
      description: "Магазин iPhone и аксессуаров с филиалами в Уральске, Атырау и Астане.",
      links: ["Каталог", "Трейд-ин", "Отзывы", "Филиалы", "Доставка", "Контакты"],
      copy: "Premium Apple retail experience in Kazakhstan.",
    },
    whatsapp: {
      buyHello: "Здравствуйте! Хочу купить iPhone.",
      askPrice: "Подскажите наличие и актуальные цены.",
      consultHello: "Здравствуйте! Хочу получить консультацию.",
      deliveryHello: "Здравствуйте! Хочу узнать подробнее о доставке.",
      address: "Удобный адрес:",
      productHello: "Здравствуйте! Хочу узнать наличие и цену.",
      interest: "Интересует:",
      deliveryCity: "Город",
      deliveryAsk: "Подскажите условия доставки и сроки.",
      tradeinHello: "Здравствуйте! Хочу сдать iPhone в трейд-ин.",
      branch: "Филиал",
      model: "Модель",
      storage: "Память",
      condition: "Состояние",
      battery: "Ёмкость батареи",
      damage: "Сколы/трещины",
      batteryChanged: "Батарея менялась",
      hasBox: "Есть коробка",
      repaired: "Был в ремонте",
      estimate: "Оценка на сайте",
    },
  },
  kz: {
    htmlLang: "kk",
    metaTitle: "iMarket | iPhone, трейд-ин және ыңғайлы сервис",
    metaDescription:
      "iMarket: Орал, Атырау және Астанадағы iPhone мен аксессуарлар дүкені. Тиімді бағалар, трейд-ин, сыйлықтар және WhatsApp арқылы жылдам кеңес.",
    citySwitchLabel: "Филиал:",
    announcement: "iPhone, трейд-ин және клиенттер ұсынатын сервисті бір жерден табыңыз",
    cityModalEyebrow: "Қаланы таңдау",
    cityModalTitle: "iMarket филиалын таңдаңыз",
    cityModalText: "Қажетті байланыстарды, Instagram-ды және дүкенге баратын бағытты көрсетеміз.",
    nav: ["Каталог", "Трейд-ин", "Пікірлер", "Филиалдар", "Жеткізу", "Байланыс"],
    hero: {
      eyebrow: "Техника дүкені",
      title: "iMarket",
      subtitle: "iPhone тиімді бағамен.",
      text: "iPhone, тиімді бағалар, трейд-ин және жылдам кеңес.",
      primary: "Кеңес алу",
      secondary: "Каталогты көру",
      card1Label: "Филиал",
      card2Label: "Неге iMarket",
      card2Title: "Жылдам сервис және ыңғайлы сатып алу",
      card2Text: "Модельді таңдауға көмектесеміз, сұрақтарға жауап береміз және баптауға жәрдемдесеміз.",
    },
    experience: {
      eyebrow: "Неге iMarket",
      title: "Таңдау оңай, сатып алу жылдам, ал шешім сенімді.",
      cards: [
        {
          title: "iPhone таңдауы кең",
          text: "Танымал модельдер, әртүрлі жады нұсқалары және бюджетке сай таңдау көмегі.",
        },
        {
          title: "Трейд-ин және кеңес",
          text: "Телефоныңызды тез бағалап, бірден қажетті филиалмен байланыса аласыз.",
        },
        {
          title: "Сатып алу ыңғайлы",
          text: "Каталог, байланыс, филиал мекенжайлары және WhatsApp бір жерде жиналған.",
        },
      ],
    },
    brandManifesto: {
      text: "Жаңа iPhone үшін баға мен сапаның ең үздік үйлесімі.",
    },
    catalog: {
      eyebrow: "Каталог",
      title: "Өзіңізге лайық iPhone таңдаңыз.",
      spotlightLabel: "Жылдам таңдау",
      spotlightText: "Танымал модельдер, өзекті бағалар және WhatsApp-қа жылдам өту.",
      spotlightButton: "Барлық ассортиментті нақтылау",
      cards: {
        "iPhone 17 Pro Max": {
          badge: "Флагман таңдау",
          note: "Жаңа деңгей",
          text: "Статус, камера және қуатты қалайтындар үшін.",
          points: ["Флагман желісі", "Топты қалайтындар үшін", "Трейд-инмен жаңартуға ыңғайлы"],
          cta: "Қолжетімділігін білу",
        },
        "iPhone 16 Pro": {
          badge: "Pro таңдауы",
          note: "Қуат балансы",
          text: "Жаңа буын мен сенімді камера іздейтіндерге арналған мықты модель.",
          cta: "Бағасын сұрау",
        },
        "iPhone 15": {
          badge: "Тиімді жаңарту",
          note: "Танымал таңдау",
          text: "Күнделікті қолдануға баға мен мүмкіндік арасындағы ыңғайлы нұсқа.",
          cta: "Бағасын сұрау",
        },
        "iPhone 13": {
          badge: "Сенімді классика",
          note: "Apple-ге кіріспе",
          text: "Жақсы тәжірибе мен қолайлы баға іздейтіндерге арналған сенімді iPhone.",
          cta: "Бағасын сұрау",
        },
        "Б/у iPhone": {
          badge: "Тексерілген б/у",
          note: "Трейд-иннен кейінгі нұсқалар",
          text: "Тиімдірек алғысы келетіндер үшін таңдалған құрылғылар.",
          cta: "Нұсқаларды көру",
        },
        "Аксессуары": {
          badge: "Аксессуарлар",
          note: "Сыйлықтар мен қосымшалар",
          text: "Қаптар, әйнектер, адаптерлер және құлаққаптар бір жерде.",
          cta: "Жинақ таңдау",
        },
      },
    },
    tradein: {
      eyebrow: "Трейд-ин",
      title: "iPhone-ыңыздың шамамен бағасын есептеңіз.",
      label: "Құрылғыны бағалау",
      subtitle: "iPhone параметрлерін көрсетіңіз",
      fields: ["iPhone моделі", "Жады", "Сыртқы күйі", "Батарея сыйымдылығы"],
      conditions: ["Мінсіз", "Жақсы", "Айқын іздері бар"],
      legends: ["Сызат немесе жарық бар ма?", "Батарея ауыстырылған ба?", "Қорабы бар ма?", "Жөндеуде болды ма?"],
      yes: "Иә",
      no: "Жоқ",
      estimate: "Алдын ала баға",
      note: "Сома шамамен көрсетіледі. Соңғы баға дүкендегі тексеруден кейін нақтыланады.",
      summary: ["Күйі", "Жады", "Батарея", "Жөндеуде болды"],
      send: "Бағаны WhatsApp-қа жіберу",
      storeOnlyTitle: "Бұл қала үшін трейд-ин тек дүкенде рәсімделеді.",
      storeOnlyText:
        "{city} қаласындағы клиенттер үшін трейд-ин тек филиалға келген кезде қолжетімді. Дүкенге келіңіз, кеңесшілер құрылғыңызды бағалауға көмектеседі.",
    },
    reviews: {
      eyebrow: "Пікірлер",
      title: "Клиенттердің сервис, баға және қызмет деңгейі туралы шынайы пікірлері.",
      badges: ["Жылы пікір", "Сервис", "Тиімді баға"],
      confirmed: "Расталған пікір",
    },
    stores: {
      eyebrow: "Филиалдар",
      title: "Үш қала. Бірдей сервис деңгейі.",
      descriptions: [
        "Сервисі жоғары, жергілікті сенімі мықты және жақсы пікірлері бар филиал.",
        "Дәл сол жоғары сервис: модель таңдау, кеңес беру және ыңғайлы сатып алу.",
        "Астанадағы филиал да дәл сол деңгейдегі сервис пен ыңғайлы техника алуды ұсынады.",
      ],
      map: "Картаны ашу",
    },
    contact: {
      eyebrow: "Байланыс",
      title: "Толығырақ ақпарат алу үшін WhatsApp немесе Instagram арқылы жазыңыз.",
      textBefore: "Қазіргі филиал:",
      textAfter: "Сатып алуға тез өту үшін телефон, Instagram және мекенжай дайын тұр.",
      whatsapp: "WhatsApp-қа жазу",
      instagram: "Instagram ашу",
      labels: ["Телефон", "Мекенжай", "Карта"],
      map: "2GIS-те ашу",
    },
    delivery: {
      eyebrow: "Жеткізу",
      title: "Қазақстан бойынша жеткізу бар.",
      text:
        "Жеткізу Орал, Атырау және Астана клиенттеріне, сондай-ақ Қазақстанның барлық қалаларына қолжетімді. WhatsApp арқылы жазып, мерзімін, қолжетімділігін және тапсырыс шарттарын нақтылай аласыз.",
      button: "WhatsApp арқылы тапсырыс беру",
    },
    footer: {
      description: "Орал, Атырау және Астанада филиалдары бар iPhone және аксессуарлар дүкені.",
      links: ["Каталог", "Трейд-ин", "Пікірлер", "Филиалдар", "Жеткізу", "Байланыс"],
      copy: "iPhone мен аксессуарларды ыңғайлы сатып алыңыз.",
    },
    whatsapp: {
      buyHello: "Сәлеметсіз бе! iPhone сатып алғым келеді.",
      askPrice: "Қолжетімділігі мен өзекті бағаларын айтып жіберіңізші.",
      consultHello: "Сәлеметсіз бе! Кеңес алғым келеді.",
      deliveryHello: "Сәлеметсіз бе! Жеткізу туралы толығырақ білгім келеді.",
      address: "Ыңғайлы мекенжай:",
      productHello: "Сәлеметсіз бе! Бағасы мен қолжетімділігін білгім келеді.",
      interest: "Қызықтырады:",
      deliveryCity: "Қала",
      deliveryAsk: "Жеткізу шарттары мен мерзімін айтып жіберіңізші.",
      tradeinHello: "Сәлеметсіз бе! iPhone-ымды трейд-инге өткізгім келеді.",
      branch: "Филиал",
      model: "Модель",
      storage: "Жады",
      condition: "Күйі",
      battery: "Батарея сыйымдылығы",
      damage: "Сызат/жарық",
      batteryChanged: "Батарея ауыстырылған",
      hasBox: "Қорабы бар",
      repaired: "Жөндеуде болған",
      estimate: "Сайттағы баға",
    },
  },
};

const formatPrice = (value) => `${new Intl.NumberFormat("ru-RU").format(value)} ₸`;

const getActiveCity = () => {
  const savedCity = localStorage.getItem("imarket-city");
  return cityConfig[savedCity] ? savedCity : "Астана";
};

const getActiveLanguage = () => {
  const savedLanguage = localStorage.getItem("imarket-language");
  return savedLanguage === "kz" ? "kz" : "ru";
};

const getRadioValue = (name) => {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "Нет";
};

const createWhatsappUrl = (phone, lines) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`;

const getCurrentTexts = () => translations[getActiveLanguage()];

const getCityLabel = (city) => cityConfig[city].label[getActiveLanguage()];

const getConditionDisplay = (value) => {
  const lang = getActiveLanguage();
  const map = {
    "Идеальное": { ru: "Идеальное", kz: "Мінсіз" },
    "Хорошее": { ru: "Хорошее", kz: "Жақсы" },
    "Есть заметные следы": { ru: "Есть заметные следы", kz: "Айқын іздері бар" },
  };
  return map[value] ? map[value][lang] : value;
};

const getYesNoDisplay = (value) => {
  const lang = getActiveLanguage();
  if (value === "Да") {
    return lang === "kz" ? "Иә" : "Да";
  }
  return lang === "kz" ? "Жоқ" : "Нет";
};

const isTradeinAvailable = (city) => city === "Астана";

const openCityModal = () => {
  if (!cityModal) {
    return;
  }

  cityModal.classList.add("is-open");
  cityModal.setAttribute("aria-hidden", "false");
};

const closeCityModal = () => {
  if (!cityModal) {
    return;
  }

  cityModal.classList.remove("is-open");
  cityModal.setAttribute("aria-hidden", "true");
};

const updateLanguageButtons = () => {
  const lang = getActiveLanguage();
  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
};

const applyStaticTranslations = () => {
  const lang = getActiveLanguage();
  const t = translations[lang];

  document.documentElement.lang = t.htmlLang;
  document.title = t.metaTitle;

  if (metaDescription) {
    metaDescription.content = t.metaDescription;
  }

  const cityModalEyebrow = document.getElementById("city-modal-eyebrow");
  const cityModalTitle = document.getElementById("city-modal-title");
  const cityModalText = document.getElementById("city-modal-text");
  const announcementText = document.getElementById("announcement-text");
  const heroEyebrow = document.querySelector(".hero-copy .eyebrow");
  const heroTitle = document.querySelector(".hero-copy h1");
  const heroText = document.querySelector(".hero-text");
  const heroCards = document.querySelectorAll(".hero-simple-card");
  const experienceEyebrow = document.querySelector(".experience-section .section-heading .eyebrow");
  const experienceTitle = document.querySelector(".experience-section .section-heading h2");
  const experienceCards = document.querySelectorAll(".experience-card");
  const brandManifestoText = document.querySelector(".brand-manifesto-text");
  const catalogEyebrow = document.querySelector(".catalog-section .section-heading .eyebrow");
  const catalogTitle = document.querySelector(".catalog-section .section-heading h2");
  const catalogSpotlightLabel = document.querySelector(".catalog-spotlight-label");
  const catalogSpotlightTitle = document.querySelector(".catalog-spotlight h3");
  const catalogSpotlightButton = document.querySelector(".catalog-spotlight .button");
  const tradeinEyebrow = document.querySelector(".tradein-section .section-heading .eyebrow");
  const tradeinTitle = document.querySelector(".tradein-section .section-heading h2");
  const tradeinLabel = document.querySelector(".tradein-topbar .tradein-label");
  const tradeinSubtitle = document.querySelector(".tradein-topbar h3");
  const tradeinFieldLabels = document.querySelectorAll(".tradein-grid > label");
  const tradeinLegends = document.querySelectorAll(".option-group legend");
  const tradeinTogglePills = document.querySelectorAll(".toggle-pill span");
  const tradeinEstimateLabel = document.querySelector(".tradein-summary .tradein-label");
  const tradeinNote = document.querySelector(".tradein-note");
  const tradeinSummaryLabels = document.querySelectorAll(".tradein-breakdown div span");
  const reviewsEyebrow = document.querySelector(".reviews-section .section-heading .eyebrow");
  const reviewsTitle = document.querySelector(".reviews-section .section-heading h2");
  const reviewBadges = document.querySelectorAll(".reviews-grid .review-badge");
  const reviewConfirmed = document.querySelector(".review-card.highlight .review-meta strong");
  const storesEyebrow = document.querySelector(".stores-section .section-heading .eyebrow");
  const storesTitle = document.querySelector(".stores-section .section-heading h2");
  const storeDescriptions = document.querySelectorAll(".store-card p:not(.store-city)");
  const storeLinks = document.querySelectorAll(".store-links a:first-child");
  const contactEyebrow = document.querySelector(".contact-section .contact-copy .eyebrow");
  const contactTitle = document.querySelector(".contact-section .contact-copy h2");
  const contactText = document.querySelector(".contact-section .contact-copy p:last-child");
  const deliveryEyebrow = document.getElementById("delivery-eyebrow");
  const deliveryTitle = document.getElementById("delivery-title");
  const deliveryText = document.getElementById("delivery-text");
  const contactLabels = document.querySelectorAll(".contact-grid article span");
  const contactMap = document.getElementById("contact-map");
  const footerDescription = document.querySelector(".footer > div:first-child p");
  const footerLinks = document.querySelectorAll(".footer-links a");
  const footerCopy = document.querySelector(".footer-copy");

  if (cityModalEyebrow) cityModalEyebrow.textContent = t.cityModalEyebrow;
  if (cityModalTitle) cityModalTitle.textContent = t.cityModalTitle;
  if (cityModalText) cityModalText.textContent = t.cityModalText;
  if (announcementText) announcementText.textContent = t.announcement;
  if (citySwitchLabel) citySwitchLabel.textContent = t.citySwitchLabel;

  cityButtons.forEach((button) => {
    const city = button.dataset.city || "Уральск";
    button.textContent = getCityLabel(city);
  });

  document.querySelectorAll(".nav a").forEach((link, index) => {
    link.textContent = t.nav[index];
  });

  if (heroEyebrow) heroEyebrow.textContent = t.hero.eyebrow;
  if (heroTitle) heroTitle.innerHTML = `${t.hero.title}<span>${t.hero.subtitle}</span>`;
  if (heroText) heroText.textContent = t.hero.text;
  if (heroWhatsapp) heroWhatsapp.textContent = t.hero.primary;
  if (heroCatalogLink) heroCatalogLink.textContent = t.hero.secondary;

  if (heroCards[0]) {
    heroCards[0].querySelector(".hero-simple-label").textContent = t.hero.card1Label;
  }

  if (heroCards[1]) {
    heroCards[1].querySelector(".hero-simple-label").textContent = t.hero.card2Label;
    heroCards[1].querySelector("strong").textContent = t.hero.card2Title;
    heroCards[1].querySelector("p").textContent = t.hero.card2Text;
  }

  if (experienceEyebrow) experienceEyebrow.textContent = t.experience.eyebrow;
  if (experienceTitle) experienceTitle.textContent = t.experience.title;
  experienceCards.forEach((card, index) => {
    const cardData = t.experience.cards[index];
    if (!cardData) return;
    card.querySelector(".metric-value").textContent = cardData.title;
    card.querySelector("p").textContent = cardData.text;
  });

  if (brandManifestoText) brandManifestoText.textContent = t.brandManifesto.text;

  if (catalogEyebrow) catalogEyebrow.textContent = t.catalog.eyebrow;
  if (catalogTitle) catalogTitle.textContent = t.catalog.title;
  if (catalogSpotlightLabel) catalogSpotlightLabel.textContent = t.catalog.spotlightLabel;
  if (catalogSpotlightTitle) catalogSpotlightTitle.textContent = t.catalog.spotlightText;
  if (catalogSpotlightButton) catalogSpotlightButton.textContent = t.catalog.spotlightButton;

  document.querySelectorAll(".catalog-card").forEach((card) => {
    const name = card.querySelector("h3")?.textContent.trim();
    const cardData = t.catalog.cards[name];
    if (!cardData) return;

    const topLineSpans = card.querySelectorAll(".catalog-topline span");
    if (topLineSpans[0]) topLineSpans[0].textContent = cardData.badge;
    if (topLineSpans[1]) topLineSpans[1].textContent = cardData.note;

    const description = card.querySelector("p:not(.catalog-price)");
    if (description) description.textContent = cardData.text;

    const points = card.querySelectorAll(".catalog-points li");
    points.forEach((point, index) => {
      if (cardData.points && cardData.points[index]) {
        point.textContent = cardData.points[index];
      }
    });

    const cta = card.querySelector(".product-link");
    if (cta) cta.textContent = cardData.cta;
  });

  if (tradeinEyebrow) tradeinEyebrow.textContent = t.tradein.eyebrow;
  if (tradeinTitle) tradeinTitle.textContent = t.tradein.title;
  if (tradeinLabel) tradeinLabel.textContent = t.tradein.label;
  if (tradeinSubtitle) tradeinSubtitle.textContent = t.tradein.subtitle;

  tradeinFieldLabels.forEach((label, index) => {
    const fieldName = t.tradein.fields[index];
    const firstTextNode = [...label.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (firstTextNode && fieldName) {
      firstTextNode.textContent = `${fieldName}\n                  `;
    }
  });

  if (tradeinCondition) {
    [...tradeinCondition.options].forEach((option, index) => {
      option.textContent = t.tradein.conditions[index];
    });
  }

  tradeinLegends.forEach((legend, index) => {
    if (t.tradein.legends[index]) {
      legend.textContent = t.tradein.legends[index];
    }
  });

  tradeinTogglePills.forEach((pill, index) => {
    pill.textContent = index % 2 === 0 ? t.tradein.no : t.tradein.yes;
  });

  if (tradeinEstimateLabel) tradeinEstimateLabel.textContent = t.tradein.estimate;
  if (tradeinNote) tradeinNote.textContent = t.tradein.note;
  tradeinSummaryLabels.forEach((label, index) => {
    if (t.tradein.summary[index]) {
      label.textContent = t.tradein.summary[index];
    }
  });
  if (tradeinWhatsapp) tradeinWhatsapp.textContent = t.tradein.send;

  if (reviewsEyebrow) reviewsEyebrow.textContent = t.reviews.eyebrow;
  if (reviewsTitle) reviewsTitle.textContent = t.reviews.title;
  reviewBadges.forEach((badge, index) => {
    if (t.reviews.badges[index]) {
      badge.textContent = t.reviews.badges[index];
    }
  });
  if (reviewConfirmed) reviewConfirmed.textContent = t.reviews.confirmed;

  if (storesEyebrow) storesEyebrow.textContent = t.stores.eyebrow;
  if (storesTitle) storesTitle.textContent = t.stores.title;
  storeDescriptions.forEach((description, index) => {
    if (t.stores.descriptions[index]) {
      description.textContent = t.stores.descriptions[index];
    }
  });
  storeLinks.forEach((link) => {
    link.textContent = t.stores.map;
  });

  if (contactEyebrow) contactEyebrow.textContent = t.contact.eyebrow;
  if (contactTitle) contactTitle.textContent = t.contact.title;
  if (contactText) {
    contactText.innerHTML = `${t.contact.textBefore} <strong id="contact-city">${getCityLabel(getActiveCity())}</strong>. ${t.contact.textAfter}`;
  }
  if (contactWhatsapp) contactWhatsapp.textContent = t.contact.whatsapp;
  if (contactInstagram) contactInstagram.textContent = t.contact.instagram;
  if (deliveryEyebrow) deliveryEyebrow.textContent = t.delivery.eyebrow;
  if (deliveryTitle) deliveryTitle.textContent = t.delivery.title;
  if (deliveryText) deliveryText.textContent = t.delivery.text;
  if (deliveryWhatsapp) deliveryWhatsapp.textContent = t.delivery.button;
  contactLabels.forEach((label, index) => {
    if (t.contact.labels[index]) {
      label.textContent = t.contact.labels[index];
    }
  });
  if (contactMap) contactMap.textContent = t.contact.map;

  if (footerDescription) footerDescription.textContent = t.footer.description;
  footerLinks.forEach((link, index) => {
    if (t.footer.links[index]) {
      link.textContent = t.footer.links[index];
    }
  });
  if (footerCopy) {
    footerCopy.innerHTML = `© <span id="year">${new Date().getFullYear()}</span> iMarket. ${t.footer.copy}`;
  }

  updateLanguageButtons();
};

const updateStoreHighlight = (city) => {
  storeCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.storeCard === city);
  });
};

const updateTradeinAvailability = (city) => {
  const available = isTradeinAvailable(city);
  const tradeinTexts = getCurrentTexts().tradein;

  if (tradeinLayout) {
    tradeinLayout.hidden = !available;
  }

  if (tradeinStoreNote) {
    tradeinStoreNote.hidden = available;
  }

  if (!available && tradeinStoreTitle && tradeinStoreText) {
    const cityLabel = getCityLabel(city);
    tradeinStoreTitle.textContent = tradeinTexts.storeOnlyTitle;
    tradeinStoreText.textContent = tradeinTexts.storeOnlyText.replace("{city}", cityLabel);
  }
};

const updateProductLinks = (city) => {
  const currentCity = cityConfig[city];
  const texts = getCurrentTexts().whatsapp;

  productLinks.forEach((link) => {
    const product = link.dataset.product || "iPhone";
    link.href = createWhatsappUrl(currentCity.phone, [
      texts.productHello,
      `${texts.branch}: ${getCityLabel(city)}`,
      `${texts.interest} ${product}`,
    ]);
  });
};

const updateTradeinEstimate = () => {
  if (!tradeinModel || !tradeinStorage || !tradeinCondition || !batteryHealth || !tradeinPrice) {
    return;
  }

  const lang = getActiveLanguage();
  const texts = translations[lang].whatsapp;
  const city = getActiveCity();
  const currentCity = cityConfig[city];

  const model = tradeinModel.value;
  const storage = tradeinStorage.value;
  const condition = tradeinCondition.value;
  const battery = Number(batteryHealth.value);
  const damage = getRadioValue("damage");
  const batteryReplaced = getRadioValue("battery-replaced");
  const hasBox = getRadioValue("has-box");
  const wasRepaired = getRadioValue("was-repaired");

  const basePrice = tradeinBasePrices[model] || 200000;
  const conditionFactor = conditionFactors[condition] || 1;
  const storageFactor = storageFactors[storage] || 1;

  let batteryFactor = 1;

  if (battery >= 95) {
    batteryFactor = 1.04;
  } else if (battery >= 90) {
    batteryFactor = 1;
  } else if (battery >= 85) {
    batteryFactor = 0.96;
  } else if (battery >= 80) {
    batteryFactor = 0.91;
  } else {
    batteryFactor = 0.86;
  }

  const damageFactor = damage === "Да" ? 0.87 : 1;
  const replacedFactor = batteryReplaced === "Да" ? 0.94 : 1;
  const boxBonus = hasBox === "Нет" ? 10000 : 0;
  const repairedFactor = wasRepaired === "Да" ? 0.88 : 1;
  const appraisalFactor = 0.35;

  const result = Math.round(
    basePrice *
      storageFactor *
      conditionFactor *
      batteryFactor *
      damageFactor *
      replacedFactor *
      repairedFactor *
      appraisalFactor +
      boxBonus
  );

  tradeinPrice.textContent = formatPrice(result);

  if (batteryValue) batteryValue.textContent = `${battery}%`;
  if (summaryCondition) summaryCondition.textContent = getConditionDisplay(condition);
  if (summaryStorage) summaryStorage.textContent = storage;
  if (summaryBattery) summaryBattery.textContent = `${battery}%`;
  if (summaryRepaired) summaryRepaired.textContent = getYesNoDisplay(wasRepaired);

  if (tradeinWhatsapp) {
    tradeinWhatsapp.href = createWhatsappUrl(currentCity.phone, [
      texts.tradeinHello,
      `${texts.branch}: ${getCityLabel(city)}`,
      `${texts.model}: ${model}`,
      `${texts.storage}: ${storage}`,
      `${texts.condition}: ${getConditionDisplay(condition)}`,
      `${texts.battery}: ${battery}%`,
      `${texts.damage}: ${getYesNoDisplay(damage)}`,
      `${texts.batteryChanged}: ${getYesNoDisplay(batteryReplaced)}`,
      `${texts.hasBox}: ${getYesNoDisplay(hasBox)}`,
      `${texts.repaired}: ${getYesNoDisplay(wasRepaired)}`,
      `${texts.estimate}: ${formatPrice(result)}`,
    ]);
  }
};

const updateCityUI = (city) => {
  const currentCity = cityConfig[city] || cityConfig["Уральск"];
  const texts = getCurrentTexts().whatsapp;

  if (selectedCityLabel) selectedCityLabel.textContent = currentCity.label[getActiveLanguage()];

  const heroPanelCitySecondary = document.getElementById("hero-panel-city-secondary");
  const heroPanelAddress = document.getElementById("hero-panel-address");
  const contactCity = document.getElementById("contact-city");
  const contactPhone = document.getElementById("contact-phone");
  const contactAddress = document.getElementById("contact-address");
  const contactMap = document.getElementById("contact-map");

  if (heroPanelCitySecondary) heroPanelCitySecondary.textContent = currentCity.label[getActiveLanguage()];
  if (heroPanelAddress) heroPanelAddress.textContent = currentCity.address;
  if (contactCity) contactCity.textContent = currentCity.label[getActiveLanguage()];
  if (contactPhone) contactPhone.textContent = currentCity.phoneDisplay;
  if (contactAddress) contactAddress.textContent = currentCity.address;
  if (contactMap) contactMap.href = currentCity.map;

  const genericWhatsappUrl = createWhatsappUrl(currentCity.phone, [
    texts.buyHello,
    `${texts.branch}: ${currentCity.label[getActiveLanguage()]}`,
    texts.askPrice,
  ]);

  if (headerWhatsapp) headerWhatsapp.href = genericWhatsappUrl;
  if (heroWhatsapp) heroWhatsapp.href = genericWhatsappUrl;

  if (contactWhatsapp) {
    contactWhatsapp.href = createWhatsappUrl(currentCity.phone, [
      texts.consultHello,
      `${texts.branch}: ${currentCity.label[getActiveLanguage()]}`,
      `${texts.address} ${currentCity.address}`,
    ]);
  }

  if (deliveryWhatsapp) {
    deliveryWhatsapp.href = createWhatsappUrl(currentCity.phone, [
      texts.deliveryHello,
      `${texts.deliveryCity}: ${currentCity.label[getActiveLanguage()]}`,
      texts.deliveryAsk,
    ]);
  }

  if (headerInstagram) headerInstagram.href = currentCity.instagram;
  if (contactInstagram) contactInstagram.href = currentCity.instagram;

  updateTradeinAvailability(city);
  updateStoreHighlight(city);
  updateProductLinks(city);

  if (isTradeinAvailable(city)) {
    updateTradeinEstimate();
  }
};

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const initialize = () => {
  applyStaticTranslations();

  const city = getActiveCity();
  openCityModal();
  updateCityUI(city);

  if (citySwitch) {
    citySwitch.addEventListener("click", openCityModal);
  }

  cityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cityKey = button.dataset.city || "Уральск";
      localStorage.setItem("imarket-city", cityKey);
      updateCityUI(cityKey);
      closeCityModal();
    });
  });

  if (cityModal) {
    cityModal.addEventListener("click", (event) => {
      if (event.target === cityModal) {
        closeCityModal();
      }
    });
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang === "kz" ? "kz" : "ru";
      localStorage.setItem("imarket-language", lang);
      applyStaticTranslations();
      updateCityUI(getActiveCity());
    });
  });

  if (tradeinModel) tradeinModel.addEventListener("change", updateTradeinEstimate);
  if (tradeinStorage) tradeinStorage.addEventListener("change", updateTradeinEstimate);
  if (tradeinCondition) tradeinCondition.addEventListener("change", updateTradeinEstimate);
  if (batteryHealth) batteryHealth.addEventListener("input", updateTradeinEstimate);

  document
    .querySelectorAll('input[name="damage"], input[name="battery-replaced"], input[name="has-box"], input[name="was-repaired"]')
    .forEach((input) => {
      input.addEventListener("change", updateTradeinEstimate);
    });

  updateTradeinEstimate();
};

initialize();
