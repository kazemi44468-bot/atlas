/* ═══════════════════════════════════════════════════════════════
   ATLAS — App
   راه‌انداز: نقشه، انیمیشن‌ها، فیلترها
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var D = window.ATLAS || {};

  /* ─────── ابزار اعداد فارسی ─────── */
  function toFa(n) {
    return String(n)
      .replace(/\d/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[+d]; })
      .replace(/\B(?=(\d{3})+(?!\d))/g, '٬');
  }

  /* ═══════════════════════════════════════════════════════════════
     ۱) انیمیشن شمارش آمار
     ═══════════════════════════════════════════════════════════════ */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function animate(el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      if (reduced) { el.textContent = toFa(target); return; }

      var duration = 1400;
      var start = performance.now();
      function step(now) {
        var t = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = toFa(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = toFa(target);
      }
      requestAnimationFrame(step);
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            animate(en.target);
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { io.observe(c); });
    } else {
      counters.forEach(animate);
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     ۲) فیلترچیپ‌های نوار جست‌وجو
     ═══════════════════════════════════════════════════════════════ */
  function initFilterChips() {
    document.querySelectorAll('.home-filter-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        chip.classList.toggle('on');
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     ۳) اسکرول نرم برای لینک‌های داخلی
     ═══════════════════════════════════════════════════════════════ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var t = document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        var top = t.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     ۴) نقشه (MapLibre + fallback)
     ═══════════════════════════════════════════════════════════════ */
  function initMap() {
    var el = document.getElementById('map');
    if (!el) return;

    if (typeof maplibregl === 'undefined') {
      renderFallback(el);
      return;
    }

    try {
      var map = new maplibregl.Map({
        container: el,
        style: 'https://tiles.openfreemap.org/styles/positron',
        center: [54.0, 32.5],
        zoom: 4,
        attributionControl: false,
        dragRotate: false,
        pitchWithRotate: false,
        cooperativeGestures: true
      });

      if (maplibregl.setRTLTextPlugin) maplibregl.setRTLTextPlugin('https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/mapbox-gl-rtl-text.js', null, true);
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

      var markers = D.mapMarkers || [];
      markers.forEach(function (m) {
        var node = document.createElement('div');
        node.style.cssText =
          'width:16px;height:16px;border-radius:50%;' +
          'background:' + m.color + ';' +
          'box-shadow:0 0 0 6px ' + m.color + '33, 0 0 0 2px #F5EFE2, 0 2px 6px rgba(42,36,25,.3);' +
          'cursor:pointer;transition:transform .2s cubic-bezier(.2,.8,.2,1);';
        node.setAttribute('title', m.title);
        node.addEventListener('mouseenter', function () { node.style.transform = 'scale(1.4)'; });
        node.addEventListener('mouseleave', function () { node.style.transform = 'scale(1)'; });
        new maplibregl.Marker({ element: node }).setLngLat([m.lng, m.lat]).addTo(map);
      });

      map.on('error', function () {
        if (!el.querySelector('.map-fallback')) renderFallback(el);
      });

    } catch (err) {
      renderFallback(el);
    }
  }

  function renderFallback(el) {
    if (el.querySelector('.map-fallback')) return;
    var fb = document.createElement('div');
    fb.className = 'map-fallback';
    var dots = [
      { top: '30%', left: '58%', c: '' },
      { top: '45%', left: '35%', c: 'clay' },
      { top: '55%', left: '48%', c: 'saffron' },
      { top: '38%', left: '70%', c: 'small' },
      { top: '62%', left: '62%', c: '' },
      { top: '25%', left: '48%', c: 'saffron small' },
      { top: '52%', left: '22%', c: 'clay small' },
      { top: '68%', left: '40%', c: 'small' }
    ];
    var html = '';
    dots.forEach(function (d) {
      html += '<span class="dot ' + d.c + '" style="top:' + d.top + ';left:' + d.left + '"></span>';
    });
    fb.innerHTML = html;
    el.appendChild(fb);
  }

  /* ═══════════════════════════════════════════════════════════════
     ۵) تزریق داده به قالب
     ═══════════════════════════════════════════════════════════════ */
  function hydrateStats() {
    document.querySelectorAll('[data-stat]').forEach(function (el) {
      var key = el.getAttribute('data-stat');
      if (D.stats && D.stats[key] !== undefined) {
        el.setAttribute('data-count', D.stats[key]);
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════════════════════════ */
  function init() {
    hydrateStats();
    initCounters();
    initFilterChips();
    initSmoothScroll();
    initMap();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();