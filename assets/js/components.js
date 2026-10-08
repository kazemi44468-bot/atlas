/* ═══════════════════════════════════════════════════════════════
   ATLAS — Components v3
   هدر و فوتر یکپارچه با طرح‌های ظریف، شاد و کاربردی
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var inPages = /\/pages\//.test(window.location.pathname);
  var ROOT = inPages ? '../' : '';
  var LOGO = ROOT + 'assets/images/logo.png';

  /* ─────── منوی اصلی ─────── */
  var NAV_ITEMS = [
    { href: '',                      label: 'خانه',     icon: 'home' },
    { href: 'pages/map.html',        label: 'نقشه',     icon: 'map' },
    { href: 'pages/locations.html',  label: 'مکان‌ها',  icon: 'location' },
    { href: 'pages/layers.html',     label: 'لایه‌ها',  icon: 'layers' },
    { href: 'pages/routes.html',     label: 'مسیرها',   icon: 'route' },
    { href: 'pages/about.html',      label: 'درباره',   icon: 'info' }
  ];

  /* ─────── آیکون‌های SVG ─────── */
  var ICONS = {
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    map: '<path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3z"/><path d="M9 7v13M15 4v13"/>',
    location: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h7a4 4 0 0 0 4-4V9M15 5H8a4 4 0 0 0-4 4v6"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    github: '<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>',
    telegram: '<path d="M22 3 2 11l5 2 2 7 3.5-4L18 20l4-17z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
    bookmark: '<path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    book: '<path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20V6"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    star: '<path d="M12 2 15.09 8.26 22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
    trending: '<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>'
  };

  function svg(name, size) {
    var s = size || 24;
    var d = ICONS[name] || '';
    var filled = (name === 'github');
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" ' +
           (filled ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"') +
           ' aria-hidden="true">' + d + '</svg>';
  }

  /* ─────── اعداد فارسی ─────── */
  function toFa(n) {
    return String(n)
      .replace(/\d/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[+d]; })
      .replace(/\B(?=(\d{3})+(?!\d))/g, '٬');
  }

  /* ─────── وضعیت صفحه ─────── */
  function currentPage() {
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    if (file === '' && !inPages) return '';
    return file;
  }

  function isActive(href) {
    var current = currentPage();
    if (href === '' && (current === '' || current === 'index.html') && !inPages) return true;
    if (href === '' && current === 'index.html' && !inPages) return true;
    if (href === '') return false;
    var target = href.split('/').pop();
    return current === target;
  }

  /* ─────── آمار از data.js ─────── */
  function getStat(key, fallback) {
    if (window.ATLAS && window.ATLAS.stats && window.ATLAS.stats[key] !== undefined) {
      return window.ATLAS.stats[key];
    }
    return fallback;
  }

  /* ═══════════════════════════════════════════════════════════════
     HEADER
     ═══════════════════════════════════════════════════════════════ */
  function renderHeader() {
    var navLinks = NAV_ITEMS.map(function (item) {
      var active = isActive(item.href) ? ' class="active"' : '';
      return '<a href="' + ROOT + item.href + '"' + active + '>'
        + '<span class="nav-icon">' + svg(item.icon, 15) + '</span>'
        + '<span class="nav-label">' + item.label + '</span>'
        + '</a>';
    }).join('');

    var mobileLinks = NAV_ITEMS.map(function (item) {
      var active = isActive(item.href) ? ' class="active"' : '';
      return '<a href="' + ROOT + item.href + '"' + active + '>'
        + svg(item.icon, 18)
        + '<span>' + item.label + '</span>'
        + '</a>';
    }).join('');

    return ''
      + '<header class="header">'
      +   '<div class="container">'
      +     '<div class="header-in">'

      // برند
      +       '<a href="' + ROOT + 'index.html" class="brand" aria-label="اطلس شهدا">'
      +         '<span class="brand-mark">'
      +           '<img src="' + LOGO + '" alt="لوگوی اطلس شهدا" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'brand-mark-fallback\')">'
      +           '<span class="brand-glow" aria-hidden="true"></span>'
      +         '</span>'
      +         '<span class="brand-text">'
      +           '<strong>اطلس شهدا</strong>'
      +           '<small>مرجع مکانی جغرافیا</small>'
      +         '</span>'
      +       '</a>'

      // منو
      +       '<nav class="nav" aria-label="ناوبری اصلی">' + navLinks + '</nav>'

      // اقدام‌ها
      +       '<div class="header-actions">'
      +         '<a href="' + ROOT + 'pages/search.html" class="icon-btn" aria-label="جست‌وجو" title="جست‌وجو">'
      +           svg('search', 18)
      +         '</a>'
      +         '<a href="' + ROOT + 'pages/contribute.html" class="cta-btn">'
      +           '<span class="cta-sparkle" aria-hidden="true">✦</span>'
      +           '<span>مشارکت</span>'
      +         '</a>'
      +         '<button class="nav-toggle" id="navToggle" aria-label="باز کردن منو" aria-expanded="false">'
      +           svg('menu', 20)
      +         '</button>'
      +       '</div>'

      +     '</div>'
      +   '</div>'
      + '</header>'

      // منوی موبایل
      + '<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="منو" aria-hidden="true">'
      +   '<div class="mobile-menu-in">'
      +     '<div class="mobile-menu-header">'
      +       '<div class="brand brand-sm">'
      +         '<span class="brand-mark">'
      +           '<img src="' + LOGO + '" alt="" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'brand-mark-fallback\')">'
      +         '</span>'
      +         '<span class="brand-text"><strong>اطلس شهدا</strong><small>مرجع مکانی</small></span>'
      +       '</div>'
      +       '<button class="mobile-menu-close" id="menuClose" aria-label="بستن">' + svg('close', 18) + '</button>'
      +     '</div>'
      +     '<nav class="mobile-menu-nav">' + mobileLinks + '</nav>'
      +     '<div class="mobile-menu-footer">'
      +       '<a href="' + ROOT + 'pages/search.html" class="mobile-menu-action">'
      +         svg('search', 16) + '<span>جست‌وجو</span>'
      +       '</a>'
      +       '<a href="' + ROOT + 'pages/contribute.html" class="mobile-menu-action primary">'
      +         svg('plus', 16) + '<span>مشارکت</span>'
      +       '</a>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }

  /* ═══════════════════════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════════════════════ */
  function renderFooter() {
    return ''
      + '<footer class="footer">'

      // موج تزئینی
      +   '<div class="footer-wave" aria-hidden="true">'
      +     '<svg viewBox="0 0 1440 60" preserveAspectRatio="none">'
      +       '<path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="currentColor" opacity=".15"></path>'
      +       '<path d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,60 L0,60 Z" fill="currentColor" opacity=".08"></path>'
      +     '</svg>'
      +   '</div>'

      +   '<div class="container footer-inner">'

      // ── بخش دعوت به همکاری ──
      +     '<div class="footer-invite">'
      +       '<div class="footer-invite-inner">'
      +         '<div class="footer-invite-mark" aria-hidden="true">✦</div>'
      +         '<div class="footer-invite-text">'
      +           '<strong>به اطلس شهدا بپیوندید</strong>'
      +           '<p>هر مکان یک پرونده زنده دارد. با ثبت پیشنهاد، اصلاح داده یا ارسال سند، در ساختن این مرجع سهیم شوید.</p>'
      +         '</div>'
      +         '<a href="' + ROOT + 'pages/contribute.html" class="footer-invite-btn">'
      +           '<span>شروع مشارکت</span>'
      +           svg('arrowLeft', 15)
      +         '</a>'
      +       '</div>'
      +     '</div>'

      // ── گرید اصلی ──
      +     '<div class="footer-main">'

      // ستون ۱ — برند
      +       '<div class="footer-col footer-col-brand">'
      +         '<div class="footer-brand">'
      +           '<span class="footer-brand-mark">'
      +             '<img src="' + LOGO + '" alt="اطلس شهدا" onerror="this.style.display=\'none\'">'
      +           '</span>'
      +           '<div class="footer-brand-text">'
      +             '<strong>اطلس شهدا</strong>'
      +             '<small>مرجع مکانی جغرافیا</small>'
      +           '</div>'
      +         '</div>'
      +         '<p class="footer-desc">سامانه تخصصی جغرافیای مرتبط با شهدا؛ پیوند انسان، مکان و زمان در یک مرجع قابل استناد و پایدار.</p>'
      +         '<div class="footer-eco-chips">'
      +           '<span class="footer-eco-chip" style="--c:#6FA687"><i></i>لایه مکانی</span>'
      +           '<span class="footer-eco-chip" style="--c:#6B95B5"><i></i>لایه هویتی</span>'
      +           '<span class="footer-eco-chip" style="--c:#E8A33D"><i></i>لایه زمانی</span>'
      +           '<span class="footer-eco-chip" style="--c:#C77B7B"><i></i>لایه خدمت</span>'
      +         '</div>'
      +         '<div class="footer-social">'
      +           '<a href="#" aria-label="ایمیل" title="ایمیل">' + svg('mail', 16) + '</a>'
      +           '<a href="#" aria-label="گیت‌هاب" title="گیت‌هاب">' + svg('github', 16) + '</a>'
      +           '<a href="#" aria-label="تلگرام" title="تلگرام">' + svg('telegram', 16) + '</a>'
      +           '<a href="#" aria-label="اینستاگرام" title="اینستاگرام">' + svg('instagram', 16) + '</a>'
      +         '</div>'
      +       '</div>'

      // ستون ۲ — کاوش
      +       '<div class="footer-col">'
      +         '<h5><span class="footer-col-dot" style="--c:var(--mint)"></span>کاوش</h5>'
      +         '<ul>'
      +           '<li><a href="' + ROOT + 'pages/map.html">' + svg('map', 13) + '<span>نقشه تعاملی</span></a></li>'
      +           '<li><a href="' + ROOT + 'pages/locations.html">' + svg('location', 13) + '<span>فهرست مکان‌ها</span></a></li>'
      +           '<li><a href="' + ROOT + 'pages/layers.html">' + svg('layers', 13) + '<span>لایه‌های اطلاعاتی</span></a></li>'
      +           '<li><a href="' + ROOT + 'pages/routes.html">' + svg('route', 13) + '<span>مسیرها</span></a></li>'
      +           '<li><a href="' + ROOT + 'pages/search.html">' + svg('search', 13) + '<span>جست‌وجوی پیشرفته</span></a></li>'
      +         '</ul>'
      +       '</div>'

      // ستون ۳ — اکوسیستم
      +       '<div class="footer-col">'
      +         '<h5><span class="footer-col-dot" style="--c:var(--sky)"></span>اکوسیستم</h5>'
      +         '<ul>'
      +           '<li><a href="' + ROOT + 'pages/about.html">' + svg('compass', 13) + '<span>جایگاه اطلس</span></a></li>'
      +           '<li><a href="' + ROOT + 'pages/plan.html">' + svg('book', 13) + '<span>سند طرح جامع</span></a></li>'
      +           '<li><a href="#">' + svg('globe', 13) + '<span>اتصال داده‌ای</span></a></li>'
      +           '<li><a href="#">' + svg('users', 13) + '<span>شناسه‌های مشترک</span></a></li>'
      +           '<li><a href="#">' + svg('clock', 13) + '<span>پروژه‌های آینده</span></a></li>'
      +         '</ul>'
      +       '</div>'

      // ستون ۴ — خبرنامه
      +       '<div class="footer-col footer-col-news">'
      +         '<h5><span class="footer-col-dot" style="--c:var(--fresh)"></span>خبرنامه</h5>'
      +         '<p class="footer-news-desc">از آخرین مکان‌ها، رویدادها و روایت‌های ثبت‌شده باخبر شوید.</p>'
      +         '<form class="footer-news-form" data-newsletter>'
      +           '<div class="footer-news-input">'
      +             svg('mail', 15)
      +             '<input type="email" placeholder="نشانی ایمیل شما" aria-label="ایمیل" required>'
      +           '</div>'
      +           '<button type="submit" class="footer-news-btn">'
      +             '<span>عضویت</span>'
      +             svg('arrowLeft', 14)
      +           '</button>'
      +         '</form>'
      +         '<div class="footer-news-meta">'
      +           '<span>' + svg('sparkle', 11) + ' بدون اسپم</span>'
      +           '<span>' + svg('sparkle', 11) + ' لغو آسان</span>'
      +         '</div>'
      +       '</div>'

      +     '</div>'

      // ── نوار آماری ──
      +     '<div class="footer-stats">'
      +       '<div class="footer-stat"><b>' + toFa(getStat('locations', 1247)) + '</b><span>مکان ثبت‌شده</span></div>'
      +       '<span class="footer-stat-sep"></span>'
      +       '<div class="footer-stat"><b>' + toFa(getStat('persons', 386)) + '</b><span>شهید مرتبط</span></div>'
      +       '<span class="footer-stat-sep"></span>'
      +       '<div class="footer-stat"><b>' + toFa(getStat('layers', 10)) + '</b><span>لایه اطلاعاتی</span></div>'
      +       '<span class="footer-stat-sep"></span>'
      +       '<div class="footer-stat"><b>' + toFa(getStat('provinces', 24)) + '</b><span>استان پوشش‌داده‌شده</span></div>'
      +       '<span class="footer-stat-sep"></span>'
      +       '<div class="footer-stat"><b>' + toFa(getStat('sources', 892)) + '</b><span>منبع معتبر</span></div>'
      +     '</div>'

      // ── ردیف پایین ──
      +     '<div class="footer-bottom">'
      +       '<div class="footer-bottom-left">'
      +         '<span class="footer-copy">© ۱۴۰۴ اطلس شهدا · سند مرجع زنده · نسخه ۱.۰</span>'
      +       '</div>'
      +       '<div class="footer-bottom-links">'
      +         '<a href="#">شرایط استفاده</a>'
      +         '<span class="footer-dot" aria-hidden="true">·</span>'
      +         '<a href="#">حریم خصوصی</a>'
      +         '<span class="footer-dot" aria-hidden="true">·</span>'
      +         '<a href="#">دسترس‌پذیری</a>'
      +         '<span class="footer-dot" aria-hidden="true">·</span>'
      +         '<a href="#">تماس با ما</a>'
      +       '</div>'
      +       '<button class="footer-top-btn" type="button" id="footerTopBtn" aria-label="بازگشت به بالا">'
      +         svg('arrowUp', 15)
      +         '<span>بالا</span>'
      +       '</button>'
      +     '</div>'

      +   '</div>'
      + '</footer>';
  }

  /* ═══════════════════════════════════════════════════════════════
     MOUNT
     ═══════════════════════════════════════════════════════════════ */
  function mountComponents() {
    var headerRoot = document.getElementById('site-header');
    var footerRoot = document.getElementById('site-footer');

    if (headerRoot) headerRoot.outerHTML = renderHeader();
    if (footerRoot) footerRoot.outerHTML = renderFooter();

    /* ─── منوی موبایل ─── */
    var navToggle = document.getElementById('navToggle');
    var menuClose = document.getElementById('menuClose');
    var mobileMenu = document.getElementById('mobileMenu');

    function openMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (navToggle) navToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (mobileMenu) {
      mobileMenu.addEventListener('click', function (e) {
        if (e.target === mobileMenu) closeMenu();
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', closeMenu);
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    /* ─── خبرنامه ─── */
    var form = document.querySelector('[data-newsletter]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('.footer-news-btn span');
        var originalText = btn ? btn.textContent : '';
        if (btn) btn.textContent = '✓ ثبت شد';
        var input = form.querySelector('input');
        if (input) input.disabled = true;
        setTimeout(function () {
          if (btn) btn.textContent = originalText;
          if (input) { input.disabled = false; input.value = ''; }
        }, 2400);
      });
    }

    /* ─── دکمه بازگشت به بالا ─── */
    var topBtn = document.getElementById('footerTopBtn');
    if (topBtn) {
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ─── افکت اسکرول هدر ─── */
    var header = document.querySelector('.header');
    if (header) {
      var lastY = window.scrollY;
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y > 20) header.classList.add('header-scrolled');
        else header.classList.remove('header-scrolled');
        lastY = y;
      }, { passive: true });
    }
  }

  /* ─── راه‌اندازی ─── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountComponents);
  } else {
    mountComponents();
  }

  window.ATLAS_COMPONENTS = { svg: svg, toFa: toFa };
})();