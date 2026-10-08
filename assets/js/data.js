/* ═══════════════════════════════════════════════════════════════
   ATLAS — Data
   داده‌ی واقعی مکان‌ها، لایه‌ها، رویدادها، مسیرها
   ═══════════════════════════════════════════════════════════════ */

window.ATLAS = window.ATLAS || {};

/* ─────── آمار کلی ─────── */
window.ATLAS.stats = {
  locations: 1247,
  persons: 386,
  layers: 11,
  provinces: 24,
  routes: 42,
  sources: 892
};

/* ─────── ۱۰ لایه اطلاعاتی ─────── */
window.ATLAS.layers = [
  { slug: 'zendegi',  name: 'تولد و زندگی',       icon: '⌂', color: '#2C3E5C', count: 42,
    desc: 'زادگاه، محل سکونت، خانه کودکی، مهاجرت و دوره‌های زندگی.' },
  { slug: 'tahsil',   name: 'تحصیل و تربیت',      icon: '✎', color: '#3D5A3D', count: 28,
    desc: 'دبستان، دبیرستان، حوزه، دانشگاه، کلاس و مربیان.' },
  { slug: 'kargah',   name: 'کار و فعالیت',        icon: '⚒', color: '#6B5424', count: 19,
    desc: 'محل اشتغال، کارگاه، اداره، فعالیت اجتماعی و جهادی.' },
  { slug: 'masir',    name: 'مسیر و اعزام',        icon: '➤', color: '#C4903A', count: 12,
    desc: 'مسیر حرکت، اعزام، بازگشت، زیارت و نقاط میانی.' },
  { slug: 'shahadat', name: 'شهادت و رویداد',      icon: '✚', color: '#9C4A2E', count: 36,
    desc: 'محل شهادت، جراحت، حادثه و محدوده رخداد.' },
  { slug: 'amaliyat', name: 'محدوده عملیات',       icon: '◫', color: '#4A6B3A', count: 8,
    desc: 'منطقه، محور و محدوده جغرافیایی یک عملیات یا رخداد.' },
  { slug: 'golzar',   name: 'گلزار و مزار',        icon: '❁', color: '#2F6B4A', count: 54,
    desc: 'گلزار، مزار، مقبره، سنگ‌نوشته و محل دفن.' },
  { slug: 'yadman',   name: 'یادمان و موزه',       icon: '◈', color: '#1E6B72', count: 21,
    desc: 'یادمان، موزه، مرکز اسناد، تندیس و نشانه‌های شهری.' },
  { slug: 'farhang',  name: 'فرهنگی و اجتماعی',    icon: '✧', color: '#6B4A7A', count: 17,
    desc: 'مراسم، یادواره، فعالیت فرهنگی و اجتماعات محلی.' },
  { slug: 'tarikhi',  name: 'تاریخی و نامگذاری',   icon: '◷', color: '#5C4A2E', count: 33,
    desc: 'وضعیت‌های پیشین مکان، بافت تاریخی و نام‌گذاری‌ها.' }
  ,{ slug: 'maabar', name: 'معابر و نامگذاری شهری', icon: '⌁', color: '#4B6070', count: 0,
    desc: 'خیابان، بلوار، میدان، کوچه، گذر، پل و دیگر معابر رسمی که به نام شهدا یا رویدادهای مرتبط نام‌گذاری شده‌اند.' }
];

/* ─────── مکان‌ها ─────── */
/* هر مکان: شناسه پایدار، نام، لایه‌ها، هندسه، اطمینان، استان، توضیح،
   منبع، ارجاع اکوسیستم (فعلاً null — بعداً پر می‌شود) */
window.ATLAS.locations = [
  {
    id: 'PL-THR-BEHSHT',
    name: 'گلزار شهدای بهشت زهرا (س)',
    short: 'بهشت زهرا',
    layer: 'golzar',
    layers: ['golzar', 'yadman', 'farhang'],
    confidence: 'exact',
    province: 'تهران',
    city: 'تهران',
    coord: [51.1805, 35.5401],
    desc: 'بزرگ‌ترین آرامستان ایران در جنوب تهران؛ محل دفن شهدای انقلاب، دفاع مقدس، مدافعان حرم و شهدای گمنام. قطعه ۲۴ تا ۳۰ به شهدا اختصاص دارد.',
    persons: 8,
    sources: 12,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-KER-VADI',
    name: 'گلزار شهدای وادی رحمت کرمان',
    short: 'وادی رحمت',
    layer: 'golzar',
    layers: ['golzar', 'yadman'],
    confidence: 'exact',
    province: 'کرمان',
    city: 'کرمان',
    coord: [57.0799, 30.2839],
    desc: 'آرامستان وادی رحمت کرمان؛ محل دفن شهدای دفاع مقدس، شهدای حادثه کرمان و یادمان شهدای گمنام.',
    persons: 5,
    sources: 8,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-KHU-FATH',
    name: 'محدوده عملیاتی فتح‌المبین',
    short: 'فتح‌المبین',
    layer: 'amaliyat',
    layers: ['amaliyat', 'shahadat'],
    confidence: 'approx',
    province: 'خوزستان',
    city: 'شوش',
    coord: [48.30, 32.30],
    desc: 'محدوده جغرافیایی عملیات فتح‌المبین (فروردین ۱۳۶۱)؛ یکی از بزرگ‌ترین عملیات‌های دفاع مقدس که به آزادسازی مناطق وسیعی انجامید.',
    persons: 12,
    sources: 12,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-ILA-MEIMAK',
    name: 'محور عملیاتی میمک',
    short: 'میمک',
    layer: 'amaliyat',
    layers: ['amaliyat', 'shahadat', 'masir'],
    confidence: 'area',
    province: 'ایلام',
    city: 'مهران',
    coord: [46.30, 32.60],
    desc: 'ارتفاعات میمک در استان ایلام؛ نقطه‌ی مقاومت و شهادت جمعی از رزمندگان در ماه‌های آغازین جنگ.',
    persons: 6,
    sources: 5,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-THR-HAFTTIR',
    name: 'یادمان شهدای هفت تیر',
    short: 'یادمان هفت تیر',
    layer: 'yadman',
    layers: ['yadman', 'shahadat', 'farhang'],
    confidence: 'exact',
    province: 'تهران',
    city: 'تهران',
    coord: [51.4215, 35.7089],
    desc: 'یادمان شهدای حادثه هفت تیر (۷ تیر ۱۳۶۰)؛ محل ثبت رویداد و برگزاری مراسم سالانه.',
    persons: 7,
    sources: 6,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-QOM-ALIJAFAR',
    name: 'گلزار شهدای علی بن جعفر (ع)',
    short: 'علی بن جعفر',
    layer: 'golzar',
    layers: ['golzar', 'yadman'],
    confidence: 'exact',
    province: 'قم',
    city: 'قم',
    coord: [50.8800, 34.5300],
    desc: 'آرامستان علی بن جعفر در قم؛ محل دفن شهدای حادثه منا و جمعی از شهدای انقلاب و دفاع مقدس.',
    persons: 9,
    sources: 7,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-ESF-KHANEH',
    name: 'خانه موزه شهید خرازی',
    short: 'خانه خرازی',
    layer: 'zendegi',
    layers: ['zendegi', 'tarikhi'],
    confidence: 'exact',
    province: 'اصفهان',
    city: 'اصفهان',
    coord: [51.6700, 32.6500],
    desc: 'خانه‌ی خانوادگی شهید حسین خرازی در اصفهان؛ با اسناد خانوادگی و روایت شفاهی، به‌عنوان یکی از مکان‌های زندگی ایشان ثبت شده است.',
    persons: 1,
    sources: 3,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  },
  {
    id: 'PL-KAS-DAROSALAM',
    name: 'گلزار شهدای دارالسلام کاشان',
    short: 'دارالسلام کاشان',
    layer: 'golzar',
    layers: ['golzar', 'yadman', 'tarikhi'],
    confidence: 'exact',
    province: 'اصفهان',
    city: 'کاشان',
    coord: [51.4400, 33.9800],
    desc: 'آرامستان تاریخی دارالسلام کاشان؛ با بیش از ۱۰۰۰ شهید و ثبت در آثار ملی. مزارها با QR کدهای صوتی مجهز شده‌اند.',
    persons: 11,
    sources: 9,
    ecosystemRefs: { shahidbank: null, calendar: null, patogh: null }
  }
];

/* ─────── رویدادهای مکمل (موقتاً در اطلس) ─────── */
/* داده‌ی نمونه از پروژه‌ی مکمل زمان — بعداً جایگزین می‌شود */
window.ATLAS.events = [
  {
    id: 'EV-001',
    day: '۱۵',
    month: 'مهر ۱۴۰۴',
    title: 'رونمایی از پرونده مکانی شهدای کرمان',
    desc: 'پرونده مکانی ۴۲ شهید کرمان با اسناد و منابع معتبر در اطلس منتشر شد.',
    province: 'کرمان',
    type: 'به‌روزرسانی داده',
    guest: true,
    sourceProject: 'calendar',
    sourceId: null
  },
  {
    id: 'EV-002',
    day: '۰۸',
    month: 'مهر ۱۴۰۴',
    title: 'ثبت محدوده عملیاتی فتح‌المبین',
    desc: 'محدوده عملیاتی با ۱۲ منبع معتبر و سطح اطمینان «تقریبی» در اطلس ثبت شد.',
    province: 'خوزستان',
    type: 'رکورد جدید',
    guest: true,
    sourceProject: 'calendar',
    sourceId: null
  },
  {
    id: 'EV-003',
    day: '۰۲',
    month: 'مهر ۱۴۰۴',
    title: 'به‌روزرسانی پرونده یادمان هفت تیر',
    desc: 'اسناد و روایت‌های تازه‌ای درباره ۷۲ شهید حادثه هفت تیر به پرونده اضافه شد.',
    province: 'تهران',
    type: 'به‌روزرسانی',
    guest: true,
    sourceProject: 'calendar',
    sourceId: null
  }
];

/* ─────── شهدای مکمل (موقتاً در اطلس) ─────── */
/* داده‌ی نمونه از پروژه‌ی مکمل هویت — بعداً جایگزین می‌شود */
window.ATLAS.persons = [
  {
    id: 'PR-001',
    name: 'شهید محمود کاوه',
    initial: 'م',
    desc: 'مشهد · فرمانده تیپ ویژه شهدا',
    guest: true,
    sourceProject: 'shahidbank',
    sourceId: null
  },
  {
    id: 'PR-002',
    name: 'شهید حسین خرازی',
    initial: 'ح',
    desc: 'اصفهان · فرمانده لشکر ۱۴ امام حسین',
    guest: true,
    sourceProject: 'shahidbank',
    sourceId: null
  },
  {
    id: 'PR-003',
    name: 'شهید مهدی baker',
    initial: 'م',
    desc: 'تهران · فرمانده قرارگاه نجف',
    guest: true,
    sourceProject: 'shahidbank',
    sourceId: null
  },
  {
    id: 'PR-004',
    name: 'شهید یوسف کلاهدوز',
    initial: 'ی',
    desc: 'قوچان · قائم‌مقام فرمانده سپاه',
    guest: true,
    sourceProject: 'shahidbank',
    sourceId: null
  },
  {
    id: 'PR-005',
    name: 'شهید علی صیاد شیرازی',
    initial: 'ع',
    desc: 'درگز · فرمانده نیروی زمینی ارتش',
    guest: true,
    sourceProject: 'shahidbank',
    sourceId: null
  },
  {
    id: 'PR-006',
    name: 'شهید ابراهیم همت',
    initial: 'ا',
    desc: 'شهرضا · فرمانده لشکر ۲۷ محمد رسول‌الله',
    guest: true,
    sourceProject: 'shahidbank',
    sourceId: null
  }
];

/* ─────── مسیرها ─────── */
window.ATLAS.routes = [
  {
    id: 'RT-001',
    title: 'مسیر جغرافیایی شهید محمود کاوه',
    type: 'زندگی',
    typeClass: '',
    stops: ['زادگاه', 'تحصیل', 'اعزام', 'شهادت'],
    desc: 'از زادگاه در مشهد تا محل شهادت در منطقه عملیاتی، همراه با ۹ نقطه ثبت‌شده.',
    points: 9,
    sources: 4,
    updated: '۱۴۰۴/۰۷/۱۵'
  },
  {
    id: 'RT-002',
    title: 'محور اعزام استان کرمان به جبهه‌های جنوب',
    type: 'اعزام',
    typeClass: 'saffron',
    stops: ['کرمان', 'راور', 'اهواز', 'جبهه'],
    desc: 'مسیر حرکت کاروان‌های اعزام از کرمان به اهواز و سپس مناطق عملیاتی جنوب.',
    points: 7,
    sources: 6,
    updated: '۱۴۰۴/۰۶/۲۸'
  },
  {
    id: 'RT-003',
    title: 'مسیر زیارتی گلزارهای شهدای اصفهان',
    type: 'زیارت',
    typeClass: 'clay',
    stops: ['گلستان', 'دستگرد', 'نجف‌آباد', 'شهرضا'],
    desc: 'اتصال ۵ گلزار شهدا در استان اصفهان برای زیارت و پژوهش میدانی.',
    points: 5,
    sources: 3,
    updated: '۱۴۰۴/۰۶/۱۲'
  }
];

/* ─────── اکوسیستم (نقش‌ها، بدون نام خاص) ─────── */
window.ATLAS.ecosystem = [
  {
    role: 'لایه مکانی',
    icon: 'map',
    desc: 'مدل‌سازی و نمایش جغرافیای مرتبط با شهدا.',
    status: 'active',
    statusText: 'فعال',
    isCurrent: true
  },
  {
    role: 'لایه هویتی',
    icon: 'users',
    desc: 'پرونده‌ی تخصصی شخص، روایت و میراث.',
    status: 'future',
    statusText: 'به‌زودی'
  },
  {
    role: 'لایه زمانی',
    icon: 'calendar',
    desc: 'تقویم، رویدادها و مناسبت‌های مرتبط.',
    status: 'future',
    statusText: 'به‌زودی'
  },
  {
    role: 'لایه خدمت',
    icon: 'home',
    desc: 'خدمات، پشتیبانی و شبکه انسانی.',
    status: 'future',
    statusText: 'به‌زودی'
  }
];

/* ─────── مارکرهای نقشه (زیرمجموعه‌ی مکان‌ها) ─────── */
window.ATLAS.mapMarkers = window.ATLAS.locations.map(function (l) {
  var layerColor = (window.ATLAS.layers.find(function (x) { return x.slug === l.layer; }) || {}).color || '#3D5A3D';
  return {
    lng: l.coord[0],
    lat: l.coord[1],
    color: layerColor,
    title: l.name,
    id: l.id
  };
});