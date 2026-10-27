(function () {
  "use strict";

  // Türkçe ve İngilizce burada; diğer diller seçildiğinde i18n/<kod>.js dosyasından yüklenir.
  var LANGS = [
    { code: "tr", label: "Türkçe" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
    { code: "ar", label: "العربية", rtl: true },
    { code: "de", label: "Deutsch" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
  ];

  var STR = {
    tr: {
      docTitle: "İstanbul Rehberi | Boss Hotel Sultanahmet",
      title: "Kapıdan çıkınca İstanbul",
      intro: "Otelimize en yakın duraktan başlayarak sıraladık. Bir yere dokunun, hikâyesini okuyun, yol tarifini alın.",
      langLabel: "Dil",
      routeLabel: "Gezilecek yerler",
      originSub: "Buradasınız",
      walkTitle: "Yürüyerek",
      walkSub: "Hepsi otelden 20 dakikadan kısa.",
      rideTitle: "Tramvay, vapur ya da taksiyle",
      rideSub: "Yarım gününüzü ayırmaya değer.",
      travelTimeNote: "Yolculuk süreleri yaklaşık olup trafik ve ulaşım koşullarına göre değişebilir.",
      min: "dk",
      built: "Yapım",
      distance: "Otelden",
      walkFact: function (n) { return n + " dk yürüyüş"; },
      rideFact: function (n) { return "≈ " + n + " dk"; },
      allow: "Ayırın",
      tips: "Gitmeden önce",
      go: "Yol tarifi al",
      back: "Listeye dön",
      pickTitle: "Yol tarifini nerede açalım?",
      remember: "Seçimimi hatırla",
      cancel: "Vazgeç",
      google: "Google Haritalar",
      apple: "Apple Haritalar",
      googleHint: "Yüklü değilse tarayıcıda açılır",
      appleHint: "iPhone ve iPad'de",
      opensIn: function (app) { return app + "'da açılır."; },
      change: "Değiştir",
      homeTitle: "Gezi bitti mi?",
      homeBtn: "Otele yol tarifi al",
      note: "Açılış saatleri ve giriş koşulları değişebilir; gitmeden önce kontrol etmenizi öneririz. Resepsiyonumuz her zaman yardıma hazır.",
      credits: "Fotoğraf kaynakları",
      photo: "Fotoğraf",
    },
    en: {
      docTitle: "Istanbul Guide | Boss Hotel Sultanahmet",
      title: "Istanbul starts at our door",
      intro: "Listed from the closest stop outward. Tap a place to read its story and get directions.",
      langLabel: "Language",
      routeLabel: "Places to visit",
      originSub: "You are here",
      walkTitle: "On foot",
      walkSub: "All under 20 minutes from the hotel.",
      rideTitle: "By tram, ferry or taxi",
      rideSub: "Worth setting aside half a day.",
      travelTimeNote: "Travel times are approximate and may vary depending on traffic and transport conditions.",
      min: "min",
      built: "Built",
      distance: "From hotel",
      walkFact: function (n) { return n + "-min walk"; },
      rideFact: function (n) { return "≈ " + n + " min"; },
      allow: "Allow",
      tips: "Before you go",
      go: "Get directions",
      back: "Back to list",
      pickTitle: "Open directions in",
      remember: "Remember my choice",
      cancel: "Cancel",
      google: "Google Maps",
      apple: "Apple Maps",
      googleHint: "Opens in the browser if the app isn't installed",
      appleHint: "On iPhone and iPad",
      opensIn: function (app) { return "Opens in " + app + "."; },
      change: "Change",
      homeTitle: "Heading back?",
      homeBtn: "Directions to the hotel",
      note: "Opening hours and entry rules can change, so check before you go. Our reception desk is always happy to help.",
      credits: "Photo credits",
      photo: "Photo",
    },
  };

  var ICONS = {
    google: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/></svg>',
    apple: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/></svg>',
  };

  var HOTEL = window.HOTEL;
  var PLACES = window.PLACES;
  var byId = {};
  PLACES.forEach(function (p) { byId[p.id] = p; });

  var $ = function (id) { return document.getElementById(id); };
  var isApple = /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent) && "ontouchend" in document;

  // ---------- Kalıcı tercihler (tarayıcı izin vermezse sessizce yok sayılır) ----------

  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try {
      if (value == null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) { /* özel sekme vb. */ }
  }

  var lang = "en";
  var mapApp = load("guide.mapApp");

  function t(key) { return STR[lang][key]; }

  // ---------- Dil paketleri ----------

  // i18n/<kod>.js dosyaları bu fonksiyonu çağırır.
  window.GUIDE_LANG = function (pack) {
    var code = pack.code;
    STR[code] = pack.ui;
    PLACES.forEach(function (p) {
      var c = pack.places[p.id];
      if (!c) return;
      p[code] = c;
      if (p.built) p.built[code] = c.built || p.built.en;
      p.allow[code] = c.allow || p.allow.en;
    });
  };

  var loading = {};

  function ensureLang(code, done) {
    if (STR[code]) return done(true);
    if (loading[code]) return loading[code].push(done);
    loading[code] = [done];
    var s = document.createElement("script");
    s.src = "i18n/" + code + ".js?v=20261027-times";
    s.onload = s.onerror = function () {
      var ok = !!STR[code];
      loading[code].forEach(function (fn) { fn(ok); });
      delete loading[code];
    };
    document.head.appendChild(s);
  }

  var langRequest = 0;

  function setLang(code) {
    var request = ++langRequest;
    ensureLang(code, function (ok) {
      if (request !== langRequest) return;
      if (!ok) code = "en";
      lang = code;
      renderStatic();
      renderRoute();
      if (current) renderDetail(current);
      document.body.classList.remove("pending");
    });
  }

  // ---------- Mesafe ----------

  // Kuş uçuşu mesafeyi sokak dolambacı için 1,25 ile çarpıp dakikada 80 m yürüyüşle hesaplar.
  function walkMinutes(p) {
    var R = 6371000;
    var toRad = Math.PI / 180;
    var dLat = (p.lat - HOTEL.lat) * toRad;
    var dLng = (p.lng - HOTEL.lng) * toRad;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(HOTEL.lat * toRad) * Math.cos(p.lat * toRad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    var meters = 2 * R * Math.asin(Math.sqrt(a));
    return Math.max(2, Math.round((meters * 1.25) / 80));
  }

  PLACES.forEach(function (p) {
    if (p.group === "walk") p.minutes = walkMinutes(p);
  });

  // Mesafeye göre sıralanır; sortLast işaretli yerler grubun sonuna alınır.
  var walkPlaces = PLACES.filter(function (p) { return p.group === "walk"; })
    .sort(function (a, b) { return (!!a.sortLast - !!b.sortLast) || (a.minutes - b.minutes); });
  var ridePlaces = PLACES.filter(function (p) { return p.group === "ride"; })
    .sort(function (a, b) { return a.rideMin - b.rideMin; });

  // ---------- Liste ----------

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function stopHTML(p, i, isLast) {
    var c = p[lang];
    var time = p.group === "walk"
      ? "<b>" + p.minutes + "</b><small>" + t("min") + "</small>"
      : "<b>" + p.rideMin + "</b><small>" + esc(c.mode) + "</small>";
    var cls = "stop" + (p.group === "ride" ? " ride" : "") + (isLast ? " last" : "");
    return '<li class="' + cls + '" style="--i:' + i + '">' +
      '<a class="stop-link" href="#' + p.id + '" data-id="' + p.id + '">' +
        '<span class="stop-time">' + time + "</span>" +
        '<span class="stop-dot" aria-hidden="true"></span>' +
        '<span class="stop-text"><span class="stop-name">' + esc(c.name) + '</span>' +
          '<span class="stop-tag">' + esc(c.tag) + "</span></span>" +
        '<span class="stop-thumb"><img src="assets/img/' + p.id + '.jpg" alt="" loading="lazy" width="76" height="76"></span>' +
      "</a></li>";
  }

  function groupHTML(kind, i) {
    return '<li class="group group-' + kind + '" style="--i:' + i + '">' +
      '<span class="group-node" aria-hidden="true"></span>' +
      '<div class="group-text"><h2 class="group-title">' + t(kind + "Title") + "</h2>" +
      '<p class="group-sub">' + t(kind + "Sub") + "</p>" +
      (kind === "ride" ? '<p class="travel-time-note">' + esc(t("travelTimeNote")) + "</p>" : "") +
      "</div></li>";
  }

  function renderRoute() {
    var i = 0;
    var html = '<li class="origin" style="--i:0">' +
      '<span class="origin-mark"><img src="assets/logo-mark.png" alt=""></span>' +
      '<span class="origin-text"><span class="origin-name">' + esc(HOTEL.name) + "</span>" +
      '<span class="origin-sub">' + t("originSub") + "</span></span></li>";

    html += groupHTML("walk", ++i);
    walkPlaces.forEach(function (p) { html += stopHTML(p, ++i, false); });
    html += groupHTML("ride", ++i);
    ridePlaces.forEach(function (p, k) { html += stopHTML(p, ++i, k === ridePlaces.length - 1); });

    var route = $("route");
    route.innerHTML = html;
    route.setAttribute("aria-label", t("routeLabel"));
  }

  function renderStatic() {
    var meta = LANGS.filter(function (l) { return l.code === lang; })[0];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.rtl ? "rtl" : "ltr";
    document.title = t("docTitle");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    var select = $("lang-select");
    select.value = lang;
    select.setAttribute("aria-label", t("langLabel"));
    $("lang-name").textContent = meta.label;
    $("lang-name").lang = meta.code;
    $("hotel-addr").textContent = HOTEL.address;

    $("credit-list").innerHTML = PLACES.map(function (p) {
      return '<li>' + esc(p[lang].name) + ': <a href="' + p.photo.url + '" target="_blank" rel="noopener" dir="ltr">' +
        esc(p.photo.by) + "</a>, " + esc(p.photo.license) + "</li>";
    }).join("");
  }

  function renderLangOptions() {
    $("lang-select").innerHTML = LANGS.map(function (l) {
      return '<option value="' + l.code + '" lang="' + l.code + '">' + l.label + "</option>";
    }).join("");
  }

  // ---------- Detay ----------

  var current = null;
  var openedFromList = false;
  var lastFocus = null;

  function renderDetail(p) {
    var c = p[lang];
    $("d-img").src = "assets/img/" + p.id + ".jpg";
    $("d-img").alt = c.name;
    $("d-credit").textContent = t("photo") + ": " + p.photo.by + ", " + p.photo.license;
    $("d-name").textContent = c.name;
    $("d-tag").textContent = c.tag;

    var facts = [];
    if (p.built) facts.push([t("built"), p.built[lang]]);
    facts.push([t("distance"), p.group === "walk" ? t("walkFact")(p.minutes) : t("rideFact")(p.rideMin)]);
    facts.push([t("allow"), p.allow[lang]]);
    var dl = $("d-facts");
    dl.className = "facts" + (facts.length === 2 ? " two" : "");
    dl.innerHTML = facts.map(function (f) {
      return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>";
    }).join("");

    var how = dl.nextElementSibling.classList.contains("d-how") ? dl.nextElementSibling : null;
    if (c.how) {
      if (!how) {
        how = document.createElement("p");
        how.className = "d-how";
        dl.after(how);
      }
      how.textContent = c.how;
    } else if (how) {
      how.remove();
    }

    $("d-travel-note").hidden = p.group !== "ride";
    $("d-lead").textContent = c.lead;
    $("d-text").innerHTML = c.body.map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("");
    $("d-tips").innerHTML = c.tips.map(function (tip) { return "<li>" + esc(tip) + "</li>"; }).join("");
    renderAppLine();
  }

  function renderAppLine() {
    var line = $("d-app");
    if (!mapApp) { line.hidden = true; return; }
    line.hidden = false;
    line.innerHTML = esc(t("opensIn")(t(mapApp))) + ' <button type="button" class="link-btn" id="change-app">' + t("change") + "</button>";
  }

  function openDetail(id) {
    var p = byId[id];
    if (!p) return;
    var detail = $("detail");
    var wasOpen = !detail.hidden;
    current = p;
    renderDetail(p);
    $("detail-scroll").scrollTop = 0;
    if (!wasOpen) {
      lastFocus = document.activeElement;
      detail.hidden = false;
      detail.classList.remove("closing");
      detail.classList.add("opening");
      document.body.classList.add("locked");
    }
    $("back-btn").focus({ preventScroll: true });
  }

  function closeDetail() {
    var detail = $("detail");
    if (detail.hidden) return;
    current = null;
    closePicker();
    var finish = function () {
      detail.hidden = true;
      detail.classList.remove("closing", "opening");
      document.body.classList.remove("locked");
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return finish();
    detail.classList.remove("opening");
    detail.classList.add("closing");
    detail.addEventListener("animationend", finish, { once: true });
  }

  function syncWithHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (byId[id]) openDetail(id);
    else closeDetail();
  }

  // ---------- Yol tarifi ----------

  var pending = null;

  function directionsURL(app, target) {
    var walking = target.walking;
    if (app === "apple") {
      return "https://maps.apple.com/?daddr=" + target.lat + "," + target.lng + "&dirflg=" + (walking ? "w" : "r");
    }
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(target.query) +
      "&travelmode=" + (walking ? "walking" : "transit");
  }

  function launch(app, target) {
    var a = document.createElement("a");
    a.href = directionsURL(app, target);
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function requestDirections(target) {
    if (mapApp) return launch(mapApp, target);
    openPicker(target);
  }

  function placeTarget(p) {
    return { name: p[lang].name, lat: p.lat, lng: p.lng, query: p.mapQuery, walking: p.group === "walk" };
  }

  function hotelTarget() {
    return { name: HOTEL.name, lat: HOTEL.lat, lng: HOTEL.lng, query: HOTEL.mapQuery, walking: true };
  }

  function openPicker(target) {
    pending = target;
    var order = isApple ? ["apple", "google"] : ["google", "apple"];
    $("picker-dest").textContent = target.name;
    $("picker-opts").innerHTML = order.map(function (app) {
      return '<button type="button" class="opt" data-app="' + app + '">' +
        '<span class="opt-icon">' + ICONS[app] + "</span>" +
        "<span>" + t(app) + '<span class="opt-hint">' + t(app + "Hint") + "</span></span></button>";
    }).join("");
    $("remember").checked = false;
    $("picker").hidden = false;
    $("picker-opts").querySelector("button").focus({ preventScroll: true });
  }

  function closePicker() {
    $("picker").hidden = true;
    pending = null;
  }

  // ---------- Olaylar ----------

  $("lang-select").addEventListener("change", function (e) {
    setLang(e.target.value);
  });

  $("route").addEventListener("click", function (e) {
    if (e.target.closest(".stop-link")) openedFromList = true;
  });

  $("back-btn").addEventListener("click", function () {
    if (openedFromList) {
      openedFromList = false;
      history.back();
    } else {
      history.replaceState(null, "", location.pathname + location.search);
      closeDetail();
    }
  });

  $("go-btn").addEventListener("click", function () {
    if (current) requestDirections(placeTarget(current));
  });

  $("home-btn").addEventListener("click", function () {
    requestDirections(hotelTarget());
  });

  $("d-app").addEventListener("click", function (e) {
    if (e.target.id !== "change-app") return;
    mapApp = null;
    save("guide.mapApp", null);
    renderAppLine();
    if (current) openPicker(placeTarget(current));
  });

  $("picker").addEventListener("click", function (e) {
    if (e.target.closest("[data-close]")) return closePicker();
    var opt = e.target.closest(".opt");
    if (!opt || !pending) return;
    var app = opt.getAttribute("data-app");
    var target = pending;
    if ($("remember").checked) {
      mapApp = app;
      save("guide.mapApp", app);
      renderAppLine();
    }
    closePicker();
    launch(app, target);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!$("picker").hidden) closePicker();
    else if (!$("detail").hidden) $("back-btn").click();
  });

  window.addEventListener("hashchange", syncWithHash);

  // ---------- Başlat ----------

  renderLangOptions();
  // Her yeni sayfa açılışı İngilizcedir; diğer diller yalnızca seçiciden açılır.
  setLang("en");
  $("route").classList.add("drawing");
  setTimeout(function () { $("route").classList.remove("drawing"); }, 2600);
  syncWithHash();
})();
