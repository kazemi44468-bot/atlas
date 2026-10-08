/* ATLAS — Shared Components v4 */
(function () {
  'use strict';

  var inPages = /\/pages\//.test(window.location.pathname);
  var ROOT = inPages ? '../' : '';
  var LOGO = ROOT + 'assets/images/logo.png';

  var NAV_GROUPS = [
    { key:'home', label:'خانه', href:'' },
    { key:'explore', label:'کاوش', icon:'compass', items:[
      {href:'pages/map.html',label:'نقشه اطلس'},
      {href:'pages/locations.html',label:'مکان‌ها'},
      {href:'pages/layers.html',label:'لایه‌های اطلاعاتی'},
      {href:'pages/routes.html',label:'مسیرها'}
    ]},
    { key:'about', label:'معرفی', href:'pages/about.html' },
    { key:'contact', label:'تماس', href:'pages/contact.html' }
  ];

  var ICONS = {
    home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    map:'<path d="M9 20 3 17V4l6 3 6-3 6 3v13l-6-3-6 3z"/><path d="M9 7v13M15 4v13"/>',
    location:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    layers:'<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    route:'<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h7a4 4 0 0 0 4-4V9M15 5H8a4 4 0 0 0-4 4v6"/>',
    info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
    close:'<path d="M18 6 6 18M6 6l12 12"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github:'<path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>',
    arrow:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
    up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
    chevron:'<path d="m6 9 6 6 6-6"/>',
    sparkle:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/>',
    book:'<path d="M4 19.5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>',
    bookmark:'<path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
    compass:'<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>'
  };

  function svg(name,size){
    var s=size||20,d=ICONS[name]||'',fill=name==='github';
    return '<svg viewBox="0 0 24 24" width="'+s+'" height="'+s+'" '+(fill?'fill="currentColor"':'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round')+' aria-hidden="true">'+d+'</svg>';
  }
  function toFa(n){return String(n).replace(/\d/g,function(d){return '۰۱۲۳۴۵۶۷۸۹'[+d];}).replace(/\B(?=(\d{3})+(?!\d))/g,'٬');}
  function currentPage(){return (window.location.pathname.split('/').pop()||'index.html');}
  function isActive(href){
    var f=currentPage();
    if(!href)return !inPages&&(f===''||f==='index.html');
    var t=href.split('/').pop().split('#')[0];
    return f===t;
  }
  function getStat(k,f){return window.ATLAS&&window.ATLAS.stats&&window.ATLAS.stats[k]!==undefined?window.ATLAS.stats[k]:f;}

  function renderHeader(){
    var desktop='';
    NAV_GROUPS.forEach(function(g){
      if(g.items){
        var active=g.items.some(function(i){return isActive(i.href);});
        desktop+='<div class="nav-group'+(active?' active':'')+'"><button class="nav-group-trigger" type="button" aria-expanded="false"><span class="nav-icon">'+svg(g.icon,15)+'</span><span>'+g.label+'</span>'+svg('chevron',13)+'</button><div class="nav-dropdown">';
        g.items.forEach(function(i){desktop+='<a href="'+ROOT+i.href+'"'+(isActive(i.href)?' class="active"':'')+'>'+svg(i.icon,15)+'<span>'+i.label+'</span></a>';});
        desktop+='</div></div>';
      }else{
        desktop+='<a class="nav-link'+(isActive(g.href)?' active':'')+'" href="'+ROOT+g.href+'">'+svg(g.icon,15)+'<span>'+g.label+'</span></a>';
      }
    });

    var mobile='';
    NAV_GROUPS.forEach(function(g){
      if(g.items){
        mobile+='<div class="mobile-nav-group"><div class="mobile-nav-title">'+svg(g.icon,16)+'<span>'+g.label+'</span></div>';
        g.items.forEach(function(i){mobile+='<a href="'+ROOT+i.href+'"'+(isActive(i.href)?' class="active"':'')+'>'+svg(i.icon,17)+'<span>'+i.label+'</span></a>';});
        mobile+='</div>';
      }else mobile+='<a href="'+ROOT+g.href+'"'+(isActive(g.href)?' class="active"':'')+'>'+svg(g.icon,17)+'<span>'+g.label+'</span></a>';
    });

    return '<header class="header"><div class="container"><div class="header-in">'
      +'<a href="'+ROOT+'" class="brand" aria-label="اطلس شهدا"><span class="brand-mark"><img src="'+LOGO+'" alt="لوگوی اطلس شهدا"><span class="brand-glow"></span></span><span class="brand-text"><strong>اطلس شهدا</strong><small>مرجع جغرافیایی و مکانی شهدا</small></span></a>'
      +'<nav class="nav" aria-label="ناوبری اصلی">'+desktop+'</nav>'
      +'<div class="header-search" role="search"><form id="headerSearchForm" action="'+ROOT+'pages/search.html" method="get"><span class="header-search-icon">'+svg('search',16)+'</span><input id="headerSearchInput" name="q" type="search" placeholder="جست‌وجو در اطلس..." aria-label="جست‌وجو در اطلس" autocomplete="off"><button type="submit" aria-label="اجرای جست‌وجو">'+svg('arrow',15)+'</button></form></div>'+'<div class="header-actions"><a href="'+ROOT+'pages/search.html" class="icon-btn header-search-mobile" aria-label="جست‌وجو">'+svg('search',18)+'</a><button class="nav-toggle" id="navToggle" aria-label="باز کردن منو" aria-expanded="false">'+svg('menu',20)+'</button></div>'
      +'</div></div></header>'
      +'<div class="mobile-menu" id="mobileMenu" aria-hidden="true"><div class="mobile-menu-in"><div class="mobile-menu-header"><a href="'+ROOT+'" class="brand brand-sm"><span class="brand-mark"><img src="'+LOGO+'" alt=""></span><span class="brand-text"><strong>اطلس شهدا</strong><small>مرجع مکانی</small></span></a><button class="mobile-menu-close" id="menuClose" aria-label="بستن">'+svg('close',18)+'</button></div><nav class="mobile-menu-nav">'+mobile+'</nav></div></div>'
      +'<nav class="mobile-bottom-nav" aria-label="ناوبری سریع موبایل">'
      +'<a href="'+ROOT+'" class="'+(isActive('')?'active':'')+'">'+svg('home',19)+'<span>خانه</span></a>'
      +'<a href="'+ROOT+'pages/map.html" class="'+(isActive('pages/map.html')?'active':'')+'">'+svg('map',19)+'<span>نقشه</span></a>'
      +'<a href="'+ROOT+'" class="mobile-bottom-logo" aria-label="اطلس شهدا"><span><img src="'+LOGO+'" alt="اطلس شهدا"></span></a>'
      +'<a href="'+ROOT+'pages/locations.html" class="'+(isActive('pages/locations.html')?'active':'')+'">'+svg('location',19)+'<span>مکان‌ها</span></a>'
      +'<button type="button" id="mobileMoreBtn" aria-label="منوی بیشتر">'+svg('menu',19)+'<span>بیشتر</span></button>'
      +'</nav>';
  }

  function renderFooter(){
    return '<footer class="footer"><div class="container footer-inner">'
      +'<div class="footer-main"><div class="footer-brand"><a href="'+ROOT+'" class="footer-brand-mark"><img src="'+LOGO+'" alt="لوگوی اطلس شهدا"></a><div><strong>اطلس شهدا</strong><small>مرجع مکانی جغرافیای مرتبط با شهدا</small></div></div><p>مرجع پیوند <b>انسان، مکان، زمان و سند</b>.</p></div>'
      +'<div class="footer-columns"><section><h5>کاوش</h5><a href="'+ROOT+'pages/map.html">'+svg('map',14)+'نقشه اطلس</a><a href="'+ROOT+'pages/locations.html">'+svg('location',14)+'مکان‌ها</a><a href="'+ROOT+'pages/layers.html">'+svg('layers',14)+'لایه‌های اطلاعاتی</a><a href="'+ROOT+'pages/routes.html">'+svg('route',14)+'مسیرها</a></section>'
      +'<section><h5>اطلس</h5><a href="'+ROOT+'pages/about.html">'+svg('info',14)+'معرفی اطلس</a><a href="'+ROOT+'pages/search.html">'+svg('search',14)+'جست‌وجوی اطلس</a></section>'
      +'<section><h5>ارتباط</h5><a href="'+ROOT+'pages/contact.html">'+svg('mail',14)+'ارتباط با ما</a></section></div>'
      +'<div class="footer-bottom"><span>اطلس شهدا · مرجع مکانی جغرافیای مرتبط با شهدا</span><button id="footerTopBtn" type="button">'+svg('up',14)+' بالا</button></div>'
      +'</div></footer>';
  }
  function mount(){
    var h=document.getElementById('site-header'),f=document.getElementById('site-footer');
    if(h)h.outerHTML=renderHeader(); if(f)f.outerHTML=renderFooter();
    var toggle=document.getElementById('navToggle'),close=document.getElementById('menuClose'),menu=document.getElementById('mobileMenu');
    function open(){if(!menu)return;menu.classList.add('open');menu.setAttribute('aria-hidden','false');if(toggle)toggle.setAttribute('aria-expanded','true');}
    function shut(){if(!menu)return;menu.classList.remove('open');menu.setAttribute('aria-hidden','true');if(toggle)toggle.setAttribute('aria-expanded','false');}
    if(toggle)toggle.onclick=open;if(close)close.onclick=shut;
    if(menu)menu.addEventListener('click',function(e){if(e.target===menu)shut();});
    menu&&menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',shut);});
    var more=document.getElementById('mobileMoreBtn');if(more)more.onclick=open;
    document.addEventListener('keydown',function(e){if(e.key==='Escape')shut();});
    document.querySelectorAll('.nav-group-trigger').forEach(function(btn){
      btn.addEventListener('click',function(){
        var group=btn.parentElement,openNow=group.classList.contains('open');
        document.querySelectorAll('.nav-group.open').forEach(function(x){x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded','false');});
        if(!openNow){group.classList.add('open');btn.setAttribute('aria-expanded','true');}
      });
    });
    document.addEventListener('click',function(e){if(!e.target.closest('.nav-group'))document.querySelectorAll('.nav-group.open').forEach(function(x){x.classList.remove('open');});});
    var hs=document.getElementById('headerSearchInput');if(hs){var q=new URLSearchParams(window.location.search).get('q');if(q)hs.value=q;}var top=document.getElementById('footerTopBtn');if(top)top.onclick=function(){window.scrollTo({top:0,behavior:'smooth'});};
    var backTop=document.getElementById('atlasBackTop');
    if(!backTop){backTop=document.createElement('button');backTop.id='atlasBackTop';backTop.type='button';backTop.className='atlas-back-top';backTop.setAttribute('aria-label','بازگشت به بالای صفحه');backTop.innerHTML=svg('up',18)+'<span>بازگشت به بالا</span>';document.body.appendChild(backTop);}
    function updateBackTop(){backTop.classList.toggle('show',window.scrollY>420);}
    window.addEventListener('scroll',updateBackTop,{passive:true});
    backTop.onclick=function(){window.scrollTo({top:0,behavior:'smooth'});};updateBackTop();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
  window.ATLAS_COMPONENTS={svg:svg,toFa:toFa};
})();