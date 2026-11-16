# Boss Hotel İstanbul Rehberi

Otel misafirleri için yedi dilde İstanbul gezi rehberi. HTML, CSS ve JavaScript ile çalışır; derleme, sunucu veya veritabanı gerektirmez.

Yayın adresi: https://guidebosssultanahmet.site/

## Yerelde açma

Proje klasöründe `python3 -m http.server 8000` çalıştırın ve `http://localhost:8000` adresini açın.

## GitHub Pages

GitHub deposunda **Settings → Pages → Build and deployment** bölümünden:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

seçip kaydedin. `.nojekyll`, dosyaların Jekyll işlemi olmadan sunulmasını sağlar. Bağlantılar göreli olduğu için site hem depo alt yolunda hem özel domain altında çalışır.

Siteyi güncellemek için değişiklikleri `main` dalına gönderin. Pages dağıtımı tamamlandığında aynı adreste güncellenir.

## Dil davranışı

Her sayfa açılışı İngilizcedir. Cihaz dili, önceki dil seçimi ve `?lang=` parametresi açılış dilini değiştirmez. Misafirler sağ üstteki dil seçiciden yedi dil arasında geçiş yapabilir; sayfa yeniden açıldığında İngilizceye döner.

## Domain ve QR

Özel domain `guidebosssultanahmet.site`, kökteki `CNAME` dosyasında tanımlıdır. GitHub Pages ayarlarındaki domain de aynı olmalıdır. Sertifika hazır olduğunda **Enforce HTTPS** seçeneği açık olmalıdır.

Namecheap BasicDNS → Advanced DNS → Host Records kayıtları:

| Type | Host | Value |
| --- | --- | --- |
| ALIAS Record | @ | berkayplt.github.io |
| CNAME Record | www | berkayplt.github.io |

TTL için varsayılan değer kullanılabilir. `www` CNAME değerine protokol veya depo yolu eklemeyin. Kök domain ve `www` için park sayfası veya URL yönlendirmesi kaydı olmamalıdır.

Basılacak QR kodu kalıcı özel domain adresine yönlendirin. Böylece hosting değişse bile QR kodları aynı kalabilir.

## İçerik

- `data.js`: Mekânlar, Türkçe ve İngilizce içerik, fotoğraf atıfları.
- Site üç sekmedir (alttaki menü): **Otel** (karşılama, saat ve hava durumu, kahvaltı saatinde canlı kahvaltı kartı, Gezi Rehberi kartı, saat kutuları, adres, kurallar, Google yorum daveti), **Gezi Rehberi** (`#guide`, mekân listesi) ve **Ulaşım** (`#transport`, duraklar, taksi/transfer, havalimanları). Mekân sayfaları `#<mekân-id>` adresindedir.
- `data.js` → `HOTEL`: saatler (`hours`, İstanbul saatiyle), kahvaltı ayrıntısı, kurallar, Google yorum bağlantısı (`review`), resepsiyonun ayarladığı hizmetler (`services`) ve rehber kartında dönen mekânlar (`featured`). Bir kutuyu gizlemek için değerini `null` yapın.
- `data.js` → `TRANSIT`: Yürüme mesafesindeki toplu taşıma durakları (konumlar OpenStreetMap, mesafeler sokak üzerinden ölçülmüş). Hatların açıklaması dil dosyalarında `line_<id>` anahtarındadır.
- Hava durumu Open-Meteo'dan tarayıcıda çekilir (anahtar gerekmez, 30 dakika saklanır); ulaşılamazsa satır gizlenir.
- `i18n/`: Diğer beş dilin çevirileri.
- `app.js`: Dil seçimi, mekân detayları ve harita bağlantıları.
- `assets/`: Sitede kullanılan görseller.

Fotoğraf kaynakları ve lisansları sitenin altındaki kaynaklar bölümünde gösterilir. Açılış saatleri ve ziyaret bilgileri düzenli olarak kontrol edilmelidir.
