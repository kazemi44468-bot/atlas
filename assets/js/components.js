/* ═══════════════════════════════════════════════════════════════
   ATLAS — Components
   هدر و فوتر یکپارچه برای همه‌ی صفحات
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────── مسیر ریشه — تشخیص خودکار ─────── */
  // صفحه اصلی در ریشه است، بقیه در pages/
  var inPages = /\/pages\//.test(window.location.pathname);
  var ROOT = inPages ? '../' : '';

  /* ─────── منوی اصلی ─────── */
  var NAV_ITEMS = [
    { href: '',             label: 'خانه',     icon: 'home' },
    { href: 'pages/map.html',        label: 'نقشه',   icon: 'map' },
    { href: 'pages/locations.html',  label: 'مکان‌ها', icon: 'location' },
    { href: 'pages/layers.html',     label: 'لایه‌ها', icon: 'layers' },
    { href: 'pages/routes.html',     label: 'مسیرها',  icon: 'route' },
    { href: 'pages/about.html',      label: 'درباره',  icon: 'info' }
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
    github: '<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>',
    telegram: '<path d="M22 3 2 11l5 2 2 7 3.5-4L18 20l4-17z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    arrowUpLeft: '<path d="M17 17 7 7M7 17V7h10"/>',
    externalLink: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/>',
    mapPin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>'
  };

  function svg(name, size) {
    var s = size || 24;
    var d = ICONS[name] || '';
    var filled = (name === 'github');
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '" ' +
           (filled ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"') +
           ' aria-hidden="true">' + d + '</svg>';
  }

  /* ─────── تشخیص صفحه‌ی فعال ─────── */
  function currentPage() {
    var path = window.location.pathname;
    var file = path.split('/').pop() || 'index.html';
    if (file === '' || file === 'index.html' && !inPages) return '';
    return file;
  }

  function isActive(href) {
    var current = currentPage();
    if (href === '' && (current === '' || current === 'index.html')) return true;
    if (href === '' && !inPages) return true;
    var target = href.split('/').pop();
    return current === target;
  }

  /* ═══════════════════════════════════════════════════════════════
     HEADER
     ═══════════════════════════════════════════════════════════════ */
  function renderHeader() {
    var navLinks = NAV_ITEMS.map(function (item) {
      var active = isActive(item.href) ? ' class="active"' : '';
      return '<a href="' + ROOT + item.href + '"' + active + '>' + svg(item.icon, 15) + '<span>' + item.label + '</span></a>';
    }).join('');

    var mobileLinks = NAV_ITEMS.map(function (item) {
      var active = isActive(item.href) ? ' class="active"' : '';
      return '<a href="' + ROOT + item.href + '"' + active + '>' + svg(item.icon, 18) + '<span>' + item.label + '</span></a>';
    }).join('');

    return ''
      + '<header class="header">'
      +   '<div class="container">'
      +     '<div class="header-in">'
      +       '<a href="' + ROOT + 'index.html" class="brand" aria-label="اطلس شهدا">'
      +         '<span class="brand-mark" aria-hidden="true">'
      +           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'
      +             '<path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3z"/>'
      +             '<path d="M9 7v13M15 4v13"/>'
      +             '<circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none"/>'
      +           '</svg>'
      +         '</span>'
      +         '<span class="brand-text">'
      +           '<strong>اطلس شهدا</strong>'
      +           '<small>مرجع مکانی جغرافیا</small>'
      +         '</span>'
      +       '</a>'
      +       '<nav class="nav" aria-label="ناوبری اصلی">' + navLinks + '</nav>'
      +       '<div class="header-actions">'
      +         '<a href="' + ROOT + 'pages/search.html" class="icon-btn" aria-label="جست‌وجو">' + svg('search', 18) + '</a>'
      +         '<a href="' + ROOT + 'pages/contribute.html" class="cta-btn">' + svg('plus', 15) + '<span>مشارکت</span></a>'
      +         '<button class="nav-toggle" id="navToggle" aria-label="باز کردن منو" aria-expanded="false">' + svg('menu', 20) + '</button>'
      +       '</div>'
      +     '</div>'
      +   '</div>'
      + '</header>'
      + '<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="منو" aria-hidden="true">'
      +   '<div class="mobile-menu-in">'
      +     '<div class="mobile-menu-header">'
      +       '<div class="brand" style="padding:0;border:0;gap:10px">'
      +         '<span class="brand-mark" style="width:40px;height:40px">'
      +           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:20px;height:20px">'
      +             '<path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3z"/><path d="M9 7v13M15 4v13"/>'
      +           '</svg>'
      +         '</span>'
      +         '<span class="brand-text"><strong style="font-size:14px">اطلس شهدا</strong><small style="font-size:10px">مرجع مکانی</small></span>'
      +       '</div>'
      +       '<button class="mobile-menu-close" id="menuClose" aria-label="بستن">' + svg('close', 18) + '</button>'
      +     '</div>'
      +     '<nav class="mobile-menu-nav">' + mobileLinks + '</nav>'
      +   '</div>'
      + '</div>';
  }

  /* ═══════════════════════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════════════════════ */
  function renderFooter() {
    return ''
      + '<footer class="footer">'
      +   '<div class="container">'

      /* ── ردیف بالا ── */
      +     '<div class="footer-top">'
      +       '<div class="footer-brand-block">'
      +         '<div class="footer-brand">'
      +           '<span class="brand-mark" aria-hidden="true">'
      +             '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'
      +               '<path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3z"/><path d="M9 7v13M15 4v13"/>'
      +               '<circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none"/>'
      +             '</svg>'
      +           '</span>'
      +           '<div class="footer-brand-text">'
      +             '<strong>اطلس شهدا</strong>'
      +             '<small>مرجع مکانی جغرافیا</small>'
      +           '</div>'
      +         '</div>'
      +         '<p>سامانه تخصصی جغرافیای مرتبط با شهدا؛ پیوند انسان، مکان و زمان در یک مرجع قابل استناد و پایدار.</p>'
      +         '<div class="footer-social">'
      +           '<a href="#" aria-label="ایمیل">' + svg('mail', 16) + '</a>'
      +           '<a href="#" aria-label="گیت‌هاب">' + svg('github', 16) + '</a>'
      +           '<a href="#" aria-label="تلگرام">' + svg('telegram', 16) + '</a>'
      +           '<a href="#" aria-label="اینستاگرام">' + svg('instagram', 16) + '</a>'
      +         '</div>'
      +       '</div>'

      +       '<div class="footer-map-block">'
      +         '<div class="footer-map-title">پوشش جغرافیایی</div>'
      +         '<div class="footer-map">'
      +           '<div class="footer-map-dots">'
      +             '<span class="footer-map-dot" style="top:30%;left:58%"></span>'
      +             '<span class="footer-map-dot brand" style="top:45%;left:35%"></span>'
      +             '<span class="footer-map-dot clay" style="top:55%;left:48%"></span>'
      +             '<span class="footer-map-dot" style="top:38%;left:70%"></span>'
      +             '<span class="footer-map-dot brand" style="top:62%;left:62%"></span>'
      +             '<span class="footer-map-dot" style="top:25%;left:48%"></span>'
      +           '</div>'
      +           '<span class="footer-map-label" data-footer-map-label>۲۴ استان · ۱٬۲۴۷ مکان</span>'
      +         '</div>'
      +       '</div>'

      +       '<div class="footer-newsletter">'
      +         '<h4>خبرنامه اطلس</h4>'
      +         '<p>از آخرین مکان‌ها، رویدادها و روایت‌های ثبت‌شده در اطلس باخبر شوید.</p>'
      +         '<form class="newsletter-form" data-newsletter>'
      +           '<input type="email" placeholder="نشانی ایمیل شما" aria-label="ایمیل" required>'
      +           '<button type="submit">عضویت</button>'
      +         '</form>'
      +       '</div>'
      +     '</div>'

      /* ── ردیف وسط ── */
      +     '<div class="footer-mid">'
      +       '<div class="footer-col">'
      +         '<h5>محصول</h5>'
      +         '<ul>'
      +           '<li><a href="' + ROOT + 'pages/map.html">نقشه تعاملی</a></li>'
      +           '<li><a href="' + ROOT + 'pages/layers.html">لایه‌های اطلاعاتی</a></li>'
      +           '<li><a href="' + ROOT + 'pages/locations.html">پرونده مکان</a></li>'
      +           '<li><a href="' + ROOT + 'pages/routes.html">مسیرها و محدوده‌ها</a></li>'
      +         '</ul>'
      +       '</div>'
      +       '<div class="footer-col">'
      +         '<h5>منابع</h5>'
      +         '<ul>'
      +           '<li><a href="' + ROOT + 'pages/plan.html">سند طرح جامع</a></li>'
      +           '<li><a href="#">مدل داده</a></li>'
      +           '<li><a href="#">قرارداد API</a></li>'
      +           '<li><a href="#">واژه‌نامه</a></li>'
      +         '</ul>'
      +       '</div>'
      +       '<div class="footer-col">'
      +         '<h5>اکوسیستم</h5>'
      +         '<ul>'
      +           '<li><a href="#">پروژه‌های مکمل</a></li>'
      +           '<li><a href="#">اتصال داده‌ای</a></li>'
      +           '<li><a href="#">شناسه‌های مشترک</a></li>'
      +           '<li><a href="#">پروژه‌های آینده</a></li>'
      +         '</ul>'
      +       '</div>'
      +       '<div class="footer-col">'
      +         '<h5>ارتباط</h5>'
      +         '<ul>'
      +           '<li><a href="' + ROOT + 'pages/about.html">درباره اطلس</a></li>'
      +           '<li><a href="' + ROOT + 'pages/contribute.html">مشارکت عمومی</a></li>'
      +           '<li><a href="#">حریم خصوصی</a></li>'
      +           '<li><a href="#">تماس با ما</a></li>'
      +         '</ul>'
      +       '</div>'
      +     '</div>'

      /* ── ردیف پایین ── */
      +     '<div class="footer-bottom">'
      +       '<span>© ۱۴۰۴ اطلس شهدا · سند مرجع زنده · نسخه ۱.۰</span>'
      +       '<div class="footer-bottom-links">'
      +         '<a href="#">شرایط استفاده</a>'
      +         '<a href="#">حریم خصوصی</a>'
      +         '<a href="#">دسترس‌پذیری</a>'
      +       '</div>'
      +     '</div>'

      +   '</div>'
      + '</footer>';
  }

  /* ═══════════════════════════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════════════════════════ */
  function mountComponents() {
    var headerRoot = document.getElementById('site-header');
    var footerRoot = document.getElementById('site-footer');

    if (headerRoot) headerRoot.outerHTML = renderHeader();
    if (footerRoot) footerRoot.outerHTML = renderFooter();

    // آپدیت برچسب نقشه‌ی فوتر با داده‌ی واقعی
    if (window.ATLAS && window.ATLAS.stats) {
      var label = document.querySelector('[data-footer-map-label]');
      if (label) {
        label.textContent = window.ATLAS.stats.provinces + ' استان · ' +
                            window.ATLAS.stats.locations.toLocaleString('fa-IR') + ' مکان';
      }
    }

    // راه‌اندازی منوی موبایل
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

    // خبرنامه
    var form = document.querySelector('[data-newsletter]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('button');
        var original = btn.textContent;
        btn.textContent = '✓ ثبت شد';
        btn.disabled = true;
        setTimeout(function () {
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
        }, 2200);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountComponents);
  } else {
    mountComponents();
  }

  // صادر کردن برای استفاده‌ی app.js
  window.ATLAS_COMPONENTS = { svg: svg };
})();