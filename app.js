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
      ferryTitle: "İskeleler ve vapurlar",
      ferrySub: "Boğaz turu, Adalar ve Kadıköy için.",
      shopTitle: "Alışveriş merkezleri",
      shopSub: "Tarihi çarşılardan sonra modern İstanbul.",
      airportTitle: "Havalimanları",
      airportSub: "Gidiş ve dönüş için ulaşım seçenekleri.",
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
      navLabel: "Bölümler",
      navHotel: "Otel",
      navGuide: "Gezi Rehberi",
      navTransport: "Ulaşım",
      guideHint: "Gezilecek yerler ve yol tarifi",
      transportHint: "Duraklar, taksi ve havalimanı",
      farewell: "İyi konaklamalar dileriz",
      close: "Kapat",
      greetMorning: "Günaydın",
      greetAfternoon: "İyi günler",
      greetEvening: "İyi akşamlar",
      localTime: "Yerel saat",
      weatherLabel: "Şu anki hava durumu",
      wx_clearDay: "Güneşli",
      wx_clearNight: "Açık",
      wx_partlyCloudy: "Parçalı bulutlu",
      wx_overcast: "Kapalı",
      wx_fog: "Sisli",
      wx_drizzle: "Çiseliyor",
      wx_rain: "Yağmurlu",
      wx_snow: "Karlı",
      wx_thunder: "Gök gürültülü",
      highLow: function (h, l) { return "En yüksek " + h + "°, en düşük " + l + "°"; },
      breakfastNow: "Şu an kahvaltıya girebilirsiniz",
      breakfastUntil: function (time) { return "Bitiş saati " + time; },
      infoTitle: "Otel bilgileri",
      breakfast: "Kahvaltı",
      reception: "Resepsiyon",
      allDay: "24 saat",
      openNow: "Şu an açık",
      closedNow: "Şu an kapalı",
      opensAt: function (time) { return "Açılış " + time; },
      alwaysOpen: "Her zaman açık",
      openBuffetTitle: "Açık büfe kahvaltı",
      openBuffetBody: "Büfeden dilediğiniz yiyecekleri kendiniz seçip alırsınız.",
      place_terrace: "Teras restoranda",
      receptionVisit: "Sorularınız ve istekleriniz için resepsiyona uğrayabilirsiniz.",
      address: "Adres",
      rules: "Otel kuralları",
      rule_noSmoking: "Odalarda sigara içilmez.",
      rule_noPets: "Evcil hayvan kabul edilmez.",
      reviewTitle: "Konaklamanız nasıldı?",
      reviewBody: "Google'daki birkaç kelimeniz, sonraki misafirlerin karar vermesine yardımcı olur.",
      reviewAction: "Google'da yorum yaz",
      walking: "Yürüme mesafesinde",
      walkingHint: "Otelden duraklara yürüyerek",
      further: "Biraz daha uzak",
      furtherHint: "Biraz daha uzun bir yürüyüş",
      rides: "Taksi ve özel araç",
      ridesHint: "Resepsiyon sizin için ayarlar",
      taxiTitle: "Taksi",
      taxiBody: "Taksi çağırmak için resepsiyonla görüşün.",
      transferTitle: "Özel transfer (Vito)",
      transferBody: "Aileler, gruplar ve bagajlı yolculuklar için şoförlü minivan. Ayarlamak için resepsiyonla görüşün.",
      airport: "Havalimanı transferi",
      airportHint: "Gidiş ve dönüş, özel taksi ya da transferle",
      airportBody: "Otelden havalimanına ve havalimanından otele özel taksi veya transfer. Ayarlamak için resepsiyonla görüşün.",
      publicTransport: "Toplu taşımayla nasıl gidilir",
      receptionOpen: "Resepsiyon 24 saat açık",
      ferryBadge: "Vapur",
      line_T1: "Sultanahmet, Kapalıçarşı, Eminönü, Karaköy ve Kabataş'a tramvay",
      line_Marmaray: "Boğaz'ın altından Üsküdar'a ve Anadolu yakasına tren",
      line_M2: "Taksim, Şişli ve Levent'e metro",
      line_ferry: "Kadıköy, Üsküdar ve Boğaz turu vapurları",
      weatherCredit: "Hava durumu: Open-Meteo.com (CC BY 4.0)",
      stopsCredit: "Durak konumları: © OpenStreetMap katkıcıları",
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
      ferryTitle: "Piers & ferries",
      ferrySub: "For Bosphorus cruises, the Princes' Islands and Kadıköy.",
      shopTitle: "Shopping malls",
      shopSub: "Modern Istanbul, after the old bazaars.",
      airportTitle: "Airports",
      airportSub: "How to get there and back.",
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
      navLabel: "Sections",
      navHotel: "Hotel",
      navGuide: "City Guide",
      navTransport: "Transport",
      guideHint: "Places to visit and directions",
      transportHint: "Stops, taxis and airports",
      farewell: "Enjoy your stay",
      close: "Close",
      greetMorning: "Good morning",
      greetAfternoon: "Good afternoon",
      greetEvening: "Good evening",
      localTime: "Local time",
      weatherLabel: "Weather now",
      wx_clearDay: "Sunny",
      wx_clearNight: "Clear",
      wx_partlyCloudy: "Partly cloudy",
      wx_overcast: "Cloudy",
      wx_fog: "Foggy",
      wx_drizzle: "Drizzle",
      wx_rain: "Rain",
      wx_snow: "Snow",
      wx_thunder: "Thunderstorms",
      highLow: function (h, l) { return "High " + h + "°, low " + l + "°"; },
      breakfastNow: "You can go to breakfast now",
      breakfastUntil: function (time) { return "Served until " + time; },
      infoTitle: "Hotel information",
      breakfast: "Breakfast",
      reception: "Reception",
      allDay: "24 hours",
      openNow: "Open now",
      closedNow: "Closed now",
      opensAt: function (time) { return "Opens at " + time; },
      alwaysOpen: "Always open",
      openBuffetTitle: "Buffet breakfast",
      openBuffetBody: "Help yourself to whatever you like from the buffet.",
      place_terrace: "In the terrace restaurant",
      receptionVisit: "Stop by reception with any question or request.",
      address: "Address",
      rules: "Hotel rules",
      rule_noSmoking: "Smoking is not allowed in the rooms.",
      rule_noPets: "Pets are not allowed.",
      reviewTitle: "How was your stay?",
      reviewBody: "A few words on Google help future guests decide.",
      reviewAction: "Write a review on Google",
      walking: "Within walking distance",
      walkingHint: "Walk from the hotel to the stop",
      further: "A little further",
      furtherHint: "A slightly longer walk",
      rides: "Taxis and private cars",
      ridesHint: "Reception arranges them for you",
      taxiTitle: "Taxi",
      taxiBody: "Ask reception to call you a taxi.",
      transferTitle: "Private transfer (Vito)",
      transferBody: "A minivan with driver for families, groups and journeys with luggage. Ask reception to arrange one.",
      airport: "Airport transfers",
      airportHint: "To and from the airport by private taxi or transfer",
      airportBody: "A private taxi or transfer from the hotel to the airport and from the airport to the hotel. Ask reception to arrange one.",
      publicTransport: "Getting there by public transport",
      receptionOpen: "Reception is open 24 hours",
      ferryBadge: "Ferry",
      line_T1: "Tram to Sultanahmet, the Grand Bazaar, Eminönü, Karaköy and Kabataş",
      line_Marmaray: "Rail under the Bosphorus to Üsküdar and the Asian side",
      line_M2: "Metro to Taksim, Şişli and Levent",
      line_ferry: "Ferries to Kadıköy, Üsküdar and Bosphorus tours",
      weatherCredit: "Weather: Open-Meteo.com (CC BY 4.0)",
      stopsCredit: "Stop locations: © OpenStreetMap contributors",
    },
  };

  // ---------- İkonlar (hepsi aynı ince çizgi dilinde) ----------

  function svg(inner) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + inner + "</svg>"; }

  var PIN = '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>';
  var FWD = '<path d="M9 5l7 7-7 7"/>';

  var ICONS = {
    google: svg(PIN),
    apple: svg('<path d="M9 4 3.5 6v14L9 18l6 2 5.5-2V4L15 6z"/><path d="M9 4v14M15 6v14"/>'),
  };

  var I = {
    breakfast: '<path d="M5 9h11v4.5a5.5 5.5 0 0 1-11 0z"/><path d="M16 10.5h1.3a2.5 2.5 0 0 1 0 5H15.5"/><path d="M8 3.5c-.6.9-.6 1.6 0 2.5M11.5 3.5c-.6.9-.6 1.6 0 2.5"/><path d="M4 21h13"/>',
    reception: '<path d="M6.5 16.5a5.5 5.5 0 0 1 11 0"/><path d="M12 11V9.5M10.5 9.5h3"/><path d="M4.5 16.5h15M3.5 19.5h17"/>',
    place: PIN,
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
    noSmoking: '<path d="M3.5 13.5h12v3h-12z"/><path d="M18 13.5v3M20.5 13.5v3M18 10.5c0-1.5 2.5-1.5 2.5-3.5"/><path d="M4 4l16 16"/>',
    noPets: '<circle cx="8" cy="8.5" r="1.5"/><circle cx="12" cy="6.5" r="1.5"/><circle cx="16" cy="8.5" r="1.5"/><path d="M12 11c-2.6 0-4.5 2.4-4.5 4.4 0 1.4 1 2.1 2.2 2.1.9 0 1.5-.5 2.3-.5s1.4.5 2.3.5c1.2 0 2.2-.7 2.2-2.1 0-2-1.9-4.4-4.5-4.4z"/><path d="M4 4l16 16"/>',
    taxi: '<path d="M5 16.5V12l2-5h10l2 5v4.5"/><path d="M3.5 16.5h17v2.5h-17zM6 19v1.5M18 19v1.5M9.5 4.5h5v2.5"/><path d="M5 12h14M7.5 14.5h.01M16.5 14.5h.01"/>',
    van: '<path d="M2.5 16.5V8a2 2 0 0 1 2-2h10l4.5 4.5 2.5 1V16.5z"/><path d="M14.5 6v4.5h4.5M2.5 11h12"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>',
    airport: '<path d="M10.5 3.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v6l7.5 4.5v2l-7.5-2.5v4.5l2 1.5v1.5L12 19.5 8.5 21v-1.5l2-1.5v-4.5L3 16v-2l7.5-4.5z"/>',
    bell: '<path d="M6.5 16.5a5.5 5.5 0 0 1 11 0"/><path d="M12 11V9.5M10.5 9.5h3"/><path d="M4.5 16.5h15"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1L3.2 9.4l6.1-.8z"/>',
  };

  var CLOUD = '<path d="M7.5 18h9a3.5 3.5 0 0 0 .4-6.98A5 5 0 0 0 7.2 11 3.5 3.5 0 0 0 7.5 18z"/>';
  var CLOUD_UP = '<g transform="translate(0 -3)">' + CLOUD + "</g>";
  var WX_ICONS = {
    clearDay: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    clearNight: '<path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z"/>',
    partlyDay: '<circle cx="8.5" cy="8.5" r="3"/><path d="M8.5 2.5V4M2.5 8.5H4M4.3 4.3l1 1M12.7 4.3l-1 1"/>' +
      '<g transform="translate(1.5 2)" class="wx-fill">' + CLOUD + "</g>",
    overcast: CLOUD,
    fog: '<path d="M4 8.5h16M6 12.5h12M4 16.5h16"/>',
    drizzle: CLOUD_UP + '<path d="M9 18v1.5M12.5 19v1.5M16 18v1.5"/>',
    rain: CLOUD_UP + '<path d="M9 17.5l-1 3M13 17.5l-1 3M17 17.5l-1 3"/>',
    snow: CLOUD_UP + '<path class="dots" d="M9 18.5h.01M12.5 20.5h.01M16 18.5h.01"/>',
    thunder: CLOUD_UP + '<path d="M13 15l-2.5 4h3l-2 3.5"/>',
  };

  var HOTEL = window.HOTEL;
  var PLACES = window.PLACES;
  var TRANSIT = window.TRANSIT;
  var HOURS = HOTEL.hours || {};
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
      if (p.allow) p.allow[code] = c.allow || p.allow.en;
    });
  };

  var loading = {};

  function ensureLang(code, done) {
    if (STR[code]) return done(true);
    if (loading[code]) return loading[code].push(done);
    loading[code] = [done];
    var s = document.createElement("script");
    s.src = "i18n/" + code + ".js?v=20261116-tab";
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
      renderAll();
      document.body.classList.remove("pending");
    });
  }

  function renderAll() {
    renderStatic();
    renderHome();
    renderWeather();
    renderTransport();
    renderRoute();
    if (current) renderDetail(current);
    if (sheetKind) renderSheet(sheetKind);
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

  // Yürüyerek gidilen yer mi? walk alanı verilmemişse "walk" bölümündekiler yürüyüş sayılır.
  function isWalk(p) { return p.walk != null ? p.walk : p.group === "walk"; }
  function travelMin(p) { return isWalk(p) ? p.minutes : p.rideMin; }

  PLACES.forEach(function (p) {
    if (isWalk(p)) p.minutes = walkMinutes(p);
  });

  // Listedeki bölümler, gösterim sırasıyla. Her bölüm kendi içinde süreye göre sıralanır;
  // sortLast işaretli yerler bölümün sonuna alınır.
  var SECTIONS = ["walk", "ride", "ferry", "shop", "airport"].map(function (kind) {
    return {
      kind: kind,
      places: PLACES.filter(function (p) { return p.group === kind; })
        .sort(function (a, b) { return (!!a.sortLast - !!b.sortLast) || (travelMin(a) - travelMin(b)); }),
    };
  }).filter(function (sec) { return sec.places.length; });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------- Otelin saati ----------

  // Otelde saat kaç (dakika olarak), misafirin telefonu hangi saat diliminde olursa olsun.
  function hotelMinutes() {
    try {
      var parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: HOTEL.timeZone, hour: "numeric", minute: "numeric", hourCycle: "h23",
      }).formatToParts(new Date());
      var read = function (type) { return Number(parts.filter(function (x) { return x.type === type; })[0].value); };
      return read("hour") * 60 + read("minute");
    } catch (e) {
      var d = new Date();
      return d.getHours() * 60 + d.getMinutes();
    }
  }

  function toMinutes(s) { return Number(s.slice(0, 2)) * 60 + Number(s.slice(3, 5)); }
  function clockText(m) {
    var h = Math.floor(m / 60), mm = m % 60;
    return (h < 10 ? "0" : "") + h + ":" + (mm < 10 ? "0" : "") + mm;
  }
  // Gece yarısını geçen aralıklar da dahil.
  function within(from, to, n) { return from <= to ? (n >= from && n < to) : (n >= from || n < to); }

  // Akşam selamı gece boyunca sürer: "iyi geceler" çoğu dilde vedadır.
  function greetingKey(n) {
    if (n >= 300 && n < 720) return "greetMorning";
    if (n >= 720 && n < 1080) return "greetAfternoon";
    return "greetEvening";
  }

  function breakfastOpen(n) {
    var b = HOURS.breakfast;
    return !!b && within(toMinutes(b.from), toMinutes(b.to), n);
  }

  function hoursText(kind) {
    var v = HOURS[kind];
    if (!v) return null;
    if (v === "24h") return t("allDay");
    return typeof v === "string" ? v : v.from + "–" + v.to;
  }

  // ---------- Otel sayfası ----------

  function tileStatus(kind, n) {
    if (kind === "breakfast" && HOURS.breakfast) {
      return breakfastOpen(n) ? { text: t("openNow"), live: true } : { text: t("opensAt")(HOURS.breakfast.from) };
    }
    if (kind === "reception" && HOURS.reception === "24h") return { text: t("alwaysOpen"), live: true };
    return null;
  }

  function renderTiles(n) {
    var kinds = ["breakfast", "reception"].filter(function (k) { return HOURS[k]; });
    $("tiles").innerHTML = kinds.map(function (kind, i) {
      var status = tileStatus(kind, n);
      // Şu an geçerli olan saat (kahvaltı servisi) otelin rengine döner.
      var active = kind === "breakfast" && breakfastOpen(n);
      var wide = kinds.length % 2 === 1 && i === kinds.length - 1;
      return '<li class="' + (wide ? "wide" : "") + '"><button type="button" class="tile' + (active ? " active" : "") + '" data-sheet="' + kind + '">' +
        '<span class="tile-top"><span class="tile-icon">' + svg(I[kind]) + "</span>" +
          '<span class="tile-open">' + svg(FWD) + "</span></span>" +
        '<span class="tile-label">' + esc(t(kind)) + "</span>" +
        '<bdi class="tile-time">' + esc(hoursText(kind)) + "</bdi>" +
        (status ? '<span class="tile-status' + (status.live ? " is-live" : "") + '">' + esc(status.text) + "</span>" : "") +
        "</button></li>";
    }).join("");
    $("tiles").hidden = !kinds.length;
  }

  function renderNow() {
    var n = hotelMinutes();
    $("clock").textContent = clockText(n);
    $("greet").textContent = t(greetingKey(n));

    var on = breakfastOpen(n);
    $("live-breakfast").hidden = !on;
    if (on) {
      var from = toMinutes(HOURS.breakfast.from), to = toMinutes(HOURS.breakfast.to);
      var length = ((to - from) + 1440) % 1440 || 1440;
      $("live-breakfast-sub").textContent = t("breakfastUntil")(HOURS.breakfast.to);
      $("live-breakfast-bar").style.transform = "scaleX(" + Math.min(1, ((n - from + 1440) % 1440) / length) + ")";
    }
    renderTiles(n);
    if (sheetKind) renderSheet(sheetKind);
  }

  function renderHome() {
    renderNow();

    var rules = HOTEL.rules || [];
    $("rules").hidden = !rules.length;
    $("rules-count").textContent = rules.length;
    $("rules-list").innerHTML = rules.map(function (r) {
      return '<li><span class="rule-icon">' + svg(I[r] || I.info) + "</span><span>" + esc(t("rule_" + r)) + "</span></li>";
    }).join("");

    $("review").hidden = !HOTEL.review;
    if (HOTEL.review) {
      $("review-link").href = HOTEL.review;
      $("review").querySelector(".stars").innerHTML = [0, 1, 2, 3, 4].map(function () { return svg(I.star); }).join("");
    }
    renderSlides();
  }

  // ---------- Saat kutusu ayrıntısı ----------

  var sheetKind = null;

  function detailRow(icon, title, text) {
    return '<li><span class="info-icon">' + svg(I[icon]) + "</span><span>" +
      (title ? '<b class="row-title">' + esc(title) + "</b>" : "") +
      (text ? '<span class="row-text' + (title ? " soft" : "") + '">' + esc(text) + "</span>" : "") +
      "</span></li>";
  }

  function renderSheet(kind) {
    var n = hotelMinutes();
    var status = tileStatus(kind, n);
    var pill = "";
    if (kind === "breakfast" && status) {
      pill = status.live ? status.text : t("closedNow") + " · " + status.text;
    } else if (status) pill = status.text;

    var rows = [];
    if (kind === "breakfast") {
      var b = HOTEL.breakfast || {};
      if (b.style) rows.push(detailRow("breakfast", t(b.style + "Title"), t(b.style + "Body")));
      if (b.place) rows.push(detailRow("place", null, t("place_" + b.place)));
    } else {
      rows.push(detailRow("info", null, t("receptionVisit")));
    }

    $("sheet-title").textContent = t(kind);
    $("sheet-body").innerHTML =
      '<div class="sheet-hero"><bdi class="sheet-value">' + esc(hoursText(kind)) + "</bdi>" +
        (pill ? '<span class="pill' + (status && status.live ? " is-live" : "") + '">' + esc(pill) + "</span>" : "") +
      "</div>" +
      '<ul class="sheet-rows">' + rows.join("") + "</ul>";
  }

  var sheetFocus = null;

  function openSheet(kind) {
    sheetKind = kind;
    sheetFocus = document.activeElement;
    renderSheet(kind);
    $("sheet").hidden = false;
    $("sheet").querySelector(".picker-cancel").focus({ preventScroll: true });
  }

  function closeSheet() {
    if ($("sheet").hidden) return;
    $("sheet").hidden = true;
    sheetKind = null;
    if (sheetFocus && sheetFocus.focus) sheetFocus.focus({ preventScroll: true });
  }

  // ---------- Gezi Rehberi kartı: fotoğraflar 5 sn'de bir döner ----------

  var featured = (HOTEL.featured || []).filter(function (id) { return byId[id]; });
  var slide = 0;
  var slidesBuilt = false;

  function renderSlides() {
    var box = $("guide-slides");
    if (!featured.length) { $("guide-card").classList.add("plain"); return; }
    if (!slidesBuilt) {
      slidesBuilt = true;
      // İlk fotoğraf hemen, diğerleri sayfa yüklendikten sonra.
      box.innerHTML = featured.map(function (id, i) {
        return '<img class="' + (i === 0 ? "on" : "") + '" ' + (i === 0 ? "src" : "data-src") + '="assets/img/' + id + '.jpg" alt="">';
      }).join("");
      $("guide-dots").innerHTML = featured.map(function (id, i) { return '<i class="' + (i === 0 ? "on" : "") + '"></i>'; }).join("");
    }
    $("guide-card").setAttribute("aria-label", t("navGuide") + ": " + byId[featured[slide]][lang].name);
  }

  function nextSlide() {
    var imgs = $("guide-slides").children, dots = $("guide-dots").children;
    if (imgs.length < 2) return;
    imgs[slide].classList.remove("on");
    dots[slide].classList.remove("on");
    slide = (slide + 1) % imgs.length;
    imgs[slide].classList.add("on");
    dots[slide].classList.add("on");
    renderSlides();
  }

  window.addEventListener("load", function () {
    Array.prototype.forEach.call(document.querySelectorAll("#guide-slides img[data-src]"), function (img) {
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src");
    });
  });

  // Ekran dışındayken, sekme arka plandayken ve hareket azaltma ayarında dönmez.
  var cardVisible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) { cardVisible = entries[0].isIntersecting; }).observe($("guide-card"));
  }
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  setInterval(function () {
    if (view === "hotel" && cardVisible && !document.hidden && !reduceMotion.matches) nextSlide();
  }, 5000);

  // ---------- Hava durumu (Open-Meteo, anahtarsız; 30 dk tarayıcıda saklanır) ----------

  var WEATHER_TTL = 30 * 60 * 1000;
  var weather = null;

  // WMO hava kodlarını misafirin işine yarayacak gruplara ayırır; bilinmeyen kodda satır görünmez.
  function weatherKind(code, isDay) {
    if (code === 0 || code === 1) return isDay ? "clearDay" : "clearNight";
    if (code === 2) return isDay ? "partlyDay" : "partlyNight";
    if (code === 3) return "overcast";
    if (code === 45 || code === 48) return "fog";
    if (code >= 51 && code <= 57) return "drizzle";
    if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return "rain";
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
    if (code >= 95 && code <= 99) return "thunder";
    return null;
  }

  function parseWeather(json) {
    var c = json && json.current, d = json && json.daily;
    var num = function (v) { return typeof v === "number" && isFinite(v); };
    if (!c || !d || !num(c.temperature_2m) || !num(c.weather_code) ||
        !d.temperature_2m_max || !num(d.temperature_2m_max[0]) ||
        !d.temperature_2m_min || !num(d.temperature_2m_min[0])) return null;
    var kind = weatherKind(c.weather_code, c.is_day === 1);
    if (!kind) return null;
    var deg = function (v) { return Math.round(v) + 0; };
    return { temp: deg(c.temperature_2m), kind: kind, high: deg(d.temperature_2m_max[0]), low: deg(d.temperature_2m_min[0]) };
  }

  function renderWeather() {
    var el = $("weather");
    if (!weather) { el.hidden = true; return; }
    var w = weather;
    var icon = w.kind === "partlyNight" ? "overcast" : w.kind;
    var label = w.kind === "partlyDay" || w.kind === "partlyNight" ? "wx_partlyCloudy" : "wx_" + w.kind;
    el.hidden = false;
    el.setAttribute("aria-label", t("weatherLabel"));
    el.innerHTML = '<span class="wx-icon">' + svg(WX_ICONS[icon]) + "</span>" +
      '<b class="wx-temp"><bdi>' + w.temp + "°</bdi></b>" +
      '<span class="wx-kind">' + esc(t(label)) + "</span>" +
      '<span class="wx-hl" aria-hidden="true"><bdi>↑' + w.high + "°</bdi> <bdi>↓" + w.low + "°</bdi></span>" +
      '<span class="sr">' + esc(t("highLow")(w.high, w.low)) + "</span>";
  }

  function loadWeather() {
    try {
      var cached = JSON.parse(load("guide.weather") || "null");
      if (cached && Date.now() - cached.at < WEATHER_TTL) {
        weather = cached.w;
        return renderWeather();
      }
    } catch (e) { /* bozuk kayıt: yeniden çek */ }
    if (!window.fetch) return;
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + HOTEL.lat + "&longitude=" + HOTEL.lng +
      "&current=temperature_2m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min" +
      "&timezone=" + encodeURIComponent(HOTEL.timeZone) + "&forecast_days=1";
    // Yavaş cevap sayfayı bekletmez; gelmezse satır gizli kalır.
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 5000) : null;
    fetch(url, ctrl ? { signal: ctrl.signal } : undefined)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (json) {
        var w = parseWeather(json);
        if (!w) return;
        weather = w;
        save("guide.weather", JSON.stringify({ at: Date.now(), w: w }));
        renderWeather();
      })
      .catch(function () { /* çevrimdışı vb.: satır gizli kalır */ })
      .then(function () { if (timer) clearTimeout(timer); });
  }

  // ---------- Ulaşım sayfası ----------

  // 12 dakikaya kadar "yürüme mesafesinde", sonrası "biraz daha uzak".
  var CLOSE_WALK = 12;
  var stopById = {};
  TRANSIT.stops.forEach(function (s) {
    stopById[s.id] = s;
    // Ölçülen sokak mesafesi, dakikada 80 m yürüyüşle.
    s.minutes = Math.max(1, Math.round((s.walkKm * 1000) / 80));
  });
  var STOPS = TRANSIT.stops.slice().sort(function (a, b) { return a.minutes - b.minutes; });

  function stopName(s) { return s.name[lang] || s.name.en; }

  function stopHTMLItem(s) {
    var badges = s.lines.map(function (id) {
      return '<span class="badge">' + esc(TRANSIT.lines[id].label || t("ferryBadge")) + "</span>";
    }).join("");
    var routes = s.lines.map(function (id) { return esc(t("line_" + id)); }).join(" · ");
    return '<li><button type="button" class="tr-btn" data-stop="' + s.id + '">' +
      '<span class="stop-time"><b>' + s.minutes + "</b><small>" + esc(t("min")) + "</small></span>" +
      '<span class="tr-text"><span class="tr-head"><span class="tr-name">' + esc(stopName(s)) + "</span>" + badges + "</span>" +
        '<span class="tr-route">' + routes + "</span></span>" +
      '<span class="tr-go">' + svg(PIN) + '<span class="sr">' + esc(t("go")) + "</span></span>" +
      "</button></li>";
  }

  function section(title, hint, body) {
    return '<section class="block"><h2 class="block-title">' + esc(title) + "</h2>" +
      '<p class="block-sub">' + esc(hint) + "</p>" + body + "</section>";
  }

  function rideCard(icon, title, body, extra) {
    return '<li class="ride-card"><span class="info-icon">' + svg(I[icon]) + "</span>" +
      '<span class="ride-text"><b class="row-title">' + esc(title) + "</b>" +
      '<span class="row-text soft">' + esc(body) + "</span>" + (extra || "") + "</span></li>";
  }

  function receptionChip() {
    return HOURS.reception === "24h"
      ? '<p class="chip"><span class="chip-icon">' + svg(I.bell) + "</span>" + esc(t("receptionOpen")) + "</p>"
      : "";
  }

  function renderTransport() {
    var svc = HOTEL.services || {};
    var close = STOPS.filter(function (s) { return s.minutes <= CLOSE_WALK; });
    var further = STOPS.filter(function (s) { return s.minutes > CLOSE_WALK; });
    var html = "";
    if (close.length) html += section(t("walking"), t("walkingHint"), '<ul class="card transit">' + close.map(stopHTMLItem).join("") + "</ul>");
    if (further.length) html += section(t("further"), t("furtherHint"), '<ul class="card transit">' + further.map(stopHTMLItem).join("") + "</ul>");
    if (svc.taxi || svc.privateTransfer) {
      html += section(t("rides"), t("ridesHint"), '<ul class="card rides">' +
        (svc.taxi ? rideCard("taxi", t("taxiTitle"), t("taxiBody")) : "") +
        (svc.privateTransfer ? rideCard("van", t("transferTitle"), t("transferBody")) : "") +
        "</ul>" + receptionChip());
    }
    var airports = svc.airportTransfer ? PLACES.filter(function (p) { return p.group === "airport"; }) : [];
    if (airports.length) {
      html += section(t("airport"), t("airportHint"), '<ul class="card rides">' + airports.map(function (p) {
        var link = '<a class="ride-link" href="#' + p.id + '">' + esc(t("publicTransport")) + svg(FWD) + "</a>";
        return rideCard("airport", p[lang].name, t("airportBody"), link);
      }).join("") + "</ul>" + receptionChip());
    }
    $("transport-list").innerHTML = html;
  }

  function stopTarget(s) {
    return { name: stopName(s), lat: s.lat, lng: s.lng, query: s.lat + "," + s.lng, walking: true };
  }

  // ---------- Gezi Rehberi listesi ----------

  function stopHTML(p, i, isLast) {
    var c = p[lang];
    var time = isWalk(p)
      ? "<b>" + p.minutes + "</b><small>" + t("min") + "</small>"
      : "<b>" + p.rideMin + "</b><small>" + esc(c.mode) + "</small>";
    var cls = "stop" + (isWalk(p) ? "" : " ride") + (isLast ? " last" : "");
    return '<li class="' + cls + '" style="--i:' + i + '">' +
      '<a class="stop-link" href="#' + p.id + '" data-id="' + p.id + '">' +
        '<span class="stop-time">' + time + "</span>" +
        '<span class="stop-dot" aria-hidden="true"></span>' +
        '<span class="stop-text"><span class="stop-name">' + esc(c.name) + '</span>' +
          '<span class="stop-tag">' + esc(c.tag) + "</span></span>" +
        '<span class="stop-thumb"><img src="assets/img/' + p.id + '.jpg" alt="" loading="lazy" width="76" height="76"></span>' +
      "</a></li>";
  }

  // Bölüm başlığının çizgisi, altındaki ilk yer yürüyüş değilse kesik çizilir.
  function groupHTML(kind, i, dashed) {
    return '<li class="group group-' + kind + (dashed ? " dashed" : "") + '" style="--i:' + i + '">' +
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

    SECTIONS.forEach(function (sec, si) {
      html += groupHTML(sec.kind, ++i, !isWalk(sec.places[0]));
      sec.places.forEach(function (p, k) {
        var isLast = si === SECTIONS.length - 1 && k === sec.places.length - 1;
        html += stopHTML(p, ++i, isLast);
      });
    });

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
    $("tabs").setAttribute("aria-label", t("navLabel"));
    document.querySelector(".quick").setAttribute("aria-label", t("navLabel"));

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

  // ---------- Sekmeler: #hotel (ya da adressiz), #guide, #transport ----------

  var VIEWS = ["hotel", "guide", "transport"];
  var view = null;
  var routeDrawn = false;

  function showView(name) {
    if (name === view) return;
    var first = view === null;
    view = name;
    document.querySelectorAll(".view").forEach(function (v) { v.hidden = v.getAttribute("data-view") !== name; });
    document.querySelectorAll("#tabs a").forEach(function (a) {
      if (a.getAttribute("data-tab") === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (!first) window.scrollTo(0, 0);
    // Rehber ilk açıldığında rota otelden dışarı doğru çizilir.
    if (name === "guide" && !routeDrawn) {
      routeDrawn = true;
      $("route").classList.add("drawing");
      setTimeout(function () { $("route").classList.remove("drawing"); }, 2600);
    }
  }

  function viewHash(name) { return name === "hotel" ? location.pathname + location.search : "#" + name; }

  function syncWithHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (byId[id]) {
      // Mekâna doğrudan bağlantıyla gelindiyse arkada rehber durur.
      if (view === null) showView("guide");
      openDetail(id);
      return;
    }
    closeDetail();
    showView(VIEWS.indexOf(id) >= 0 ? id : "hotel");
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
    facts.push([t("distance"), isWalk(p) ? t("walkFact")(p.minutes) : t("rideFact")(p.rideMin)]);
    if (p.allow) facts.push([t("allow"), p.allow[lang]]);
    var dl = $("d-facts");
    dl.className = "facts" + (facts.length === 2 ? " two" : facts.length === 1 ? " one" : "");
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

    $("d-travel-note").hidden = isWalk(p);
    $("d-lead").textContent = c.lead;
    // Havalimanı sayfalarında her paragraf bir ulaşım seçeneğidir; "Metro:" gibi başlığı kalın gösterilir.
    $("d-text").innerHTML = c.body.map(function (para) {
      var m = p.group === "airport" && para.match(/^([^:]{2,40}?)\s?:\s([\s\S]*)$/);
      return m ? "<p><strong>" + esc(m[1]) + "</strong> " + esc(m[2]) + "</p>" : "<p>" + esc(para) + "</p>";
    }).join("");
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
    closeSheet();
    renderDetail(p);
    $("detail-scroll").scrollTop = 0;
    if (wasOpen && detail.classList.contains("closing")) {
      detail.classList.remove("closing");
      detail.classList.add("opening");
    }
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
    var done = false;
    var finish = function () {
      // Kapanırken başka bir mekân açıldıysa sayfa açık kalır.
      if (done || current) return;
      done = true;
      detail.hidden = true;
      detail.classList.remove("closing", "opening");
      document.body.classList.remove("locked");
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return finish();
    detail.classList.remove("opening");
    detail.classList.add("closing");
    detail.addEventListener("animationend", finish, { once: true });
    // Animasyon bitiş olayı gelmezse (arka plandaki sekme vb.) yine de kapanır.
    setTimeout(finish, 450);
  }

  // ---------- Yol tarifi ----------

  var pending = null;

  // Yürüyüş, toplu taşıma ya da (havalimanı gibi taksiyle gidilen yerler için) araç tarifi.
  function directionsURL(app, target) {
    var mode = target.walking ? "walk" : target.drive ? "drive" : "transit";
    if (app === "apple") {
      return "https://maps.apple.com/?daddr=" + target.lat + "," + target.lng +
        "&dirflg=" + { walk: "w", drive: "d", transit: "r" }[mode];
    }
    return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(target.query) +
      "&travelmode=" + { walk: "walking", drive: "driving", transit: "transit" }[mode];
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
    return { name: p[lang].name, lat: p.lat, lng: p.lng, query: p.mapQuery, walking: isWalk(p), drive: !!p.drive };
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

  document.addEventListener("click", function (e) {
    // Listeden açılan mekân, geri tuşuyla aynı listeye döner.
    var link = e.target.closest("a[href^='#']");
    if (link && byId[link.getAttribute("href").slice(1)]) openedFromList = true;

    var home = e.target.closest("[data-action='home']");
    if (home) return requestDirections(hotelTarget());

    var tile = e.target.closest("[data-sheet]");
    if (tile) return openSheet(tile.getAttribute("data-sheet"));

    var stop = e.target.closest(".tr-btn");
    var s = stop && stopById[stop.getAttribute("data-stop")];
    if (s) requestDirections(stopTarget(s));
  });

  $("back-btn").addEventListener("click", function () {
    if (openedFromList) {
      openedFromList = false;
      history.back();
    } else {
      history.replaceState(null, "", viewHash(view || "guide"));
      closeDetail();
    }
  });

  $("go-btn").addEventListener("click", function () {
    if (current) requestDirections(placeTarget(current));
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

  $("sheet").addEventListener("click", function (e) {
    if (e.target.closest("[data-close-sheet]")) closeSheet();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!$("picker").hidden) closePicker();
    else if (!$("sheet").hidden) closeSheet();
    else if (!$("detail").hidden) $("back-btn").click();
  });

  window.addEventListener("hashchange", syncWithHash);

  // Saat, selam, kahvaltı kartı ve kutular dakikada bir; sekmeye dönünce hava durumu da tazelenir.
  setInterval(renderNow, 30000);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible" || document.body.classList.contains("pending")) return;
    renderNow();
    loadWeather();
  });

  // ---------- Başlat ----------

  renderLangOptions();
  // Her yeni sayfa açılışı İngilizcedir; diğer diller yalnızca seçiciden açılır.
  setLang("en");
  loadWeather();
  syncWithHash();
})();
