const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../index.src.html');
let html = fs.readFileSync(filePath, 'utf8');

// 1. Clean existing title, description, keywords
html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret</title>');
html = html.replace(/<meta name="description"[^>]*>\s*/g, '');
html = html.replace(/<meta name="keywords"[^>]*>\s*/g, '');

const metaBlock = `<meta name="description" content="Yakuplu tekel bayi arayanlara Ekomini Aydın Ticaret: Yakuplu Mah. Barbaros Cad. No:57/533 Beylikdüzü adresinde her gün 08:00 - 03:00 açık! Tekel sipariş, meze ve soğuk içecek.">
    <meta name="keywords" content="yakuplu tekel, yakuplu tekel bayi, yakuplu açık tekel, yakuplu tekel sipariş, yakuplu gece açık tekel, yakuplu nöbetçi tekel, ihlas marmara evleri tekel, beylikdüzü tekel, ekomini aydın ticaret">`;

html = html.replace('<!-- SEO Primary Tags -->\n    <title>Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret</title>', `<!-- SEO Primary Tags -->\n    <title>Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret</title>\n    ${metaBlock}`);

// 2. Clean JSON-LD Schema
const updatedSchema = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LiquorStore", "ConvenienceStore", "GroceryStore"],
          "@id": "https://www.ekominiaydinticaret.com/#store",
          "name": "Ekomini Aydın Ticaret - Yakuplu Tekel Bayi",
          "alternateName": ["Yakuplu Tekel", "Yakuplu Tekel Bayi", "Aydın Ticaret Yakuplu", "Yakuplu Açık Tekel"],
          "image": "https://www.ekominiaydinticaret.com/images/aydinekominidaire.png",
          "url": "https://www.ekominiaydinticaret.com/",
          "telephone": "+905398163936",
          "priceRange": "₺₺",
          "paymentAccepted": "Cash, Credit Card, Contactless",
          "currenciesAccepted": "TRY",
          "hasMap": "https://maps.google.com/?q=Yakuplu+Mahallesi,+Barbaros+Caddesi+No:57/533,+Beylikdüzü/İstanbul",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Barbaros Caddesi, No: 57/533, Yakuplu Mahallesi",
            "addressLocality": "Beylikdüzü",
            "addressRegion": "İstanbul",
            "postalCode": "34524",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.983278,
            "longitude": 28.681611
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "03:00"
          },
          "areaServed": [
            {"@type": "AdministrativeArea", "name": "Yakuplu Mahallesi"},
            {"@type": "AdministrativeArea", "name": "Beylikdüzü"},
            {"@type": "AdministrativeArea", "name": "İhlas Marmara Evleri"},
            {"@type": "AdministrativeArea", "name": "Eston Deniz"},
            {"@type": "AdministrativeArea", "name": "Gürpınar"},
            {"@type": "AdministrativeArea", "name": "Kavaklı"}
          ],
          "sameAs": [
            "https://www.instagram.com/ekomini.aydinticaret/"
          ]
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.ekominiaydinticaret.com/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Yakuplu tekel bayi nerede bulunuyor?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ekomini Aydın Ticaret, Beylikdüzü Yakuplu Mahallesi Barbaros Caddesi No: 57/533 adresindedir. İhlas Marmara Evleri ve Barbaros Caddesi üzerinde her gün gece 03:00'e kadar kesintisiz tekel ve market hizmeti veriyoruz."
              }
            },
            {
              "@type": "Question",
              "name": "Yakuplu açık tekel kaça kadar açık?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Haftanın 7 günü sabah 08:00'den gece 03:00'e kadar kesintisiz açığız. Gece geç saatlerde de soğuk bira, viski, rakı, tütün ve şarküteri ürünlerimizi temin edebilirsiniz."
              }
            },
            {
              "@type": "Question",
              "name": "Yakuplu tekel sipariş ve paket servis hattınız var mı?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet! +90 539 816 39 36 telefonumuz ve WhatsApp hattımız üzerinden Yakuplu ve çevre mahalleler için hızlı tekel siparişi verebilirsiniz."
              }
            },
            {
              "@type": "Question",
              "name": "İhlas Marmara Evleri'ne en yakın tekel hangisidir?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "İhlas Marmara Evleri 1., 2. ve 3. Kısım sakinlerine sadece 2-3 dakika mesafede olan Barbaros Caddesi No:57/533 adresindeki Ekomini Aydın Ticaret en yakın tekel ve market noktasıdır."
              }
            },
            {
              "@type": "Question",
              "name": "Beylikdüzü Ekomini tekel ürünleri orijinal mi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Evet! Mağazamızdaki tüm tekel ürünleri, alkollü içecekler, meze ve şarküteri çeşitlerimiz %100 orijinal ve resmi bandrollüdür."
              }
            }
          ]
        }
      ]
    }
    </script>`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, updatedSchema);

// 3. Update Hero Title
html = html.replace(
    /<h1 class="hero-title">[\s\S]*?<\/h1>/,
    `<h1 class="hero-title">Yakuplu Tekel Bayi & Ekomini Market <br><span class="highlight">Her Gün 08:00–03:00 Açık</span></h1>`
);

// 4. Update Nav Menu
const newNavMenu = `<ul class="nav-menu">
                <li><a href="#urunler" class="nav-link">Ürünler</a></li>
                <li><a href="/yakuplu-tekel" class="nav-link">Yakuplu Tekel</a></li>
                <li><a href="/yakuplu-tekel-siparis" class="nav-link">Tekel Sipariş</a></li>
                <li><a href="#hakkimizda" class="nav-link">Hakkımızda</a></li>
                <li><a href="#neden-biz" class="nav-link">Neden Biz?</a></li>
                <li><a href="#iletisim" class="nav-link">İletişim</a></li>
                <li><button type="button" class="nav-link open-nav-modal-btn">Yol Tarifi</button></li>
            </ul>`;

html = html.replace(/<ul class="nav-menu">[\s\S]*?<\/ul>/, newNavMenu);

// 5. Update Footer Links
const newFooterLinks = `<div>
                <h3 class="footer-title">Yakuplu Tekel & Hizmetler</h3>
                <ul class="footer-links">
                    <li><a href="/yakuplu-tekel">Yakuplu Tekel Bayi</a></li>
                    <li><a href="/yakuplu-acik-tekel">Yakuplu Açık Tekel</a></li>
                    <li><a href="/yakuplu-tekel-siparis">Yakuplu Tekel Sipariş</a></li>
                    <li><a href="/yakuplu-nobetci-tekel">Yakuplu Nöbetçi Tekel</a></li>
                    <li><a href="/beylikduzu-acik-tekel">Beylikdüzü Açık Tekel</a></li>
                    <li><a href="/beylikduzu-gece-acik-market">Beylikdüzü Gece Market</a></li>
                </ul>
            </div>`;

html = html.replace(
    /<div>\s*<h3 class="footer-title">.*?<\/h3>[\s\S]*?<\/ul>\s*<\/div>/,
    newFooterLinks
);

// Save index.src.html
fs.writeFileSync(filePath, html, 'utf8');

// Copy directly to index.html
const destPath = path.resolve(__dirname, '../index.html');
fs.writeFileSync(destPath, html, 'utf8');

console.log('[Updated] index.src.html & index.html cleanly updated!');
