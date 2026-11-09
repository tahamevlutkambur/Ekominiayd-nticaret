const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../index.src.html');
let html = fs.readFileSync(filePath, 'utf8');

const BASE_URL = 'https://ekominiaydinticaret.com.tr';

// 1. Title Tag
html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret</title>');

// 2. Meta Tags (Clean & Set)
html = html.replace(/<meta name="description"[^>]*>\s*/g, '');
html = html.replace(/<meta name="keywords"[^>]*>\s*/g, '');
html = html.replace(/<link rel="canonical"[^>]*>\s*/g, '');
html = html.replace(/<meta property="og:url"[^>]*>\s*/g, '');
html = html.replace(/<meta property="og:image"[^>]*>\s*/g, '');
html = html.replace(/<meta property="twitter:url"[^>]*>\s*/g, '');
html = html.replace(/<meta property="twitter:image"[^>]*>\s*/g, '');

const metaBlock = `<!-- SEO Primary Tags -->
    <title>Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret</title>
    <meta name="description" content="Yakuplu tekel bayi arayanlara Ekomini Aydın Ticaret: Yakuplu Mah. Barbaros Cad. No:57/533 Beylikdüzü adresinde her gün 08:00 - 03:00 açık! Tekel sipariş, meze ve soğuk içecek. Tel: 0539 816 39 36">
    <meta name="keywords" content="yakuplu tekel, yakuplu tekel bayi, yakuplu açık tekel, yakuplu tekel sipariş, yakuplu gece açık tekel, yakuplu nöbetçi tekel, ihlas marmara evleri tekel, beylikdüzü tekel, ekomini aydın ticaret">
    <link rel="canonical" href="${BASE_URL}/">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${BASE_URL}/">
    <meta property="og:title" content="Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret">
    <meta property="og:description" content="Yakuplu Mahallesi, Beylikdüzü'nde her gün 08:00–03:00 saatlerinde açık tekel ve market. Adres, sipariş ve yol tarifi.">
    <meta property="og:image" content="${BASE_URL}/images/aydinekominidaire.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${BASE_URL}/">
    <meta property="twitter:title" content="Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret">
    <meta property="twitter:description" content="Yakuplu Mahallesi, Beylikdüzü'nde her gün 08:00–03:00 saatlerinde açık tekel ve market. Adres, sipariş ve yol tarifi.">
    <meta property="twitter:image" content="${BASE_URL}/images/aydinekominidaire.png">`;

// Replace SEO tags section
html = html.replace(/<!-- SEO Primary Tags -->[\s\S]*?(?=<link rel="icon")/i, metaBlock + '\n\n    ');

// 3. Schema.org JSON-LD
const updatedSchema = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LiquorStore", "ConvenienceStore", "GroceryStore"],
          "@id": "${BASE_URL}/#store",
          "name": "Ekomini Aydın Ticaret - Yakuplu Tekel Bayi",
          "alternateName": ["Yakuplu Tekel", "Yakuplu Tekel Bayi", "Aydın Ticaret Yakuplu", "Yakuplu Açık Tekel", "Yakuplu Nöbetçi Tekel"],
          "image": "${BASE_URL}/images/aydinekominidaire.png",
          "url": "${BASE_URL}/",
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
          "@id": "${BASE_URL}/#faq",
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

// 4. Hero Title
html = html.replace(
    /<h1 class="hero-title">[\s\S]*?<\/h1>/,
    `<h1 class="hero-title">Yakuplu Tekel Bayi & Ekomini Market <br><span class="highlight">Her Gün 08:00–03:00 Açık</span></h1>`
);

// 5. Navigation Menu
const newNavMenu = `<ul class="nav-menu">
                <li><a href="#urunler" class="nav-link">Ürünler</a></li>
                <li><a href="/yakuplu-tekel.html" class="nav-link">Yakuplu Tekel</a></li>
                <li><a href="/yakuplu-tekel-siparis.html" class="nav-link">Tekel Sipariş</a></li>
                <li><a href="#hakkimizda" class="nav-link">Hakkımızda</a></li>
                <li><a href="#neden-biz" class="nav-link">Neden Biz?</a></li>
                <li><a href="#iletisim" class="nav-link">İletişim</a></li>
                <li><button type="button" class="nav-link open-nav-modal-btn">Yol Tarifi</button></li>
            </ul>`;

html = html.replace(/<ul class="nav-menu">[\s\S]*?<\/ul>/, newNavMenu);

// 6. Dedicated Yakuplu Tekel Showcase Section in Body (if not present)
const yakupluSection = `    <!-- Yakuplu Tekel & Hizmet Rehberi Bölümü (Google 1. Sıra Optimizasyonu) -->
    <section id="yakuplu-tekel-hizmetleri" class="yakuplu-tekel-section">
        <div class="container">
            <div class="section-header animate-reveal">
                <span class="section-tag">Beylikdüzü Yakuplu Tekel</span>
                <h2 class="section-title">Yakuplu Tekel Bayi & <span>Gece Sipariş Rehberi</span></h2>
                <p class="section-desc">Yakuplu Mahallesi, Barbaros Caddesi ve İhlas Marmara Evleri çevresinde gece 03:00'e kadar kesintisiz tekel, meze, soğuk içecek ve market hizmeti sunuyoruz.</p>
            </div>

            <div class="yakuplu-grid animate-reveal">
                <a href="/yakuplu-tekel.html" class="yakuplu-card">
                    <div class="yakuplu-card-badge">Ana Bayi</div>
                    <div class="yakuplu-card-icon">🏪</div>
                    <h3>Yakuplu Tekel Bayi</h3>
                    <p>Barbaros Caddesi No:57/533 adresinde yerli & yabancı orijinal viski, rakı, votka, şarap ve buz gibi soğuk bira çeşitleri.</p>
                    <span class="yakuplu-card-link">Mağaza Detayları &rarr;</span>
                </a>

                <a href="/yakuplu-acik-tekel.html" class="yakuplu-card">
                    <div class="yakuplu-card-badge open-badge">08:00 - 03:00 Açık</div>
                    <div class="yakuplu-card-icon">⚡</div>
                    <h3>Yakuplu Açık Tekel</h3>
                    <p>Gece geç saatte açık tekel arayanlar için haftanın 7 günü saat 03:00'e kadar kesintisiz hizmet veriyoruz.</p>
                    <span class="yakuplu-card-link">Açık Saatleri Gör &rarr;</span>
                </a>

                <a href="/yakuplu-tekel-siparis.html" class="yakuplu-card">
                    <div class="yakuplu-card-badge delivery-badge">Eve Servis</div>
                    <div class="yakuplu-card-icon">🛵</div>
                    <h3>Yakuplu Tekel Sipariş</h3>
                    <p>İhlas Marmara Evleri 1-2-3 ve Barbaros Caddesi'ne 15-30 dakikada hızlı kurye teslimatı ve kapıda kartla ödeme.</p>
                    <span class="yakuplu-card-link">Sipariş Hattına Git &rarr;</span>
                </a>

                <a href="/yakuplu-nobetci-tekel.html" class="yakuplu-card">
                    <div class="yakuplu-card-badge">Nöbetçi Market</div>
                    <div class="yakuplu-card-icon">🌙</div>
                    <h3>Yakuplu Nöbetçi Tekel</h3>
                    <p>Gece boyunca tekel ürünleri, soğuk meşrubat, taze meze, şarküteri ve atıştırmalıklarla mahallenizin nöbetçi tekel bayisi.</p>
                    <span class="yakuplu-card-link">Nöbetçi Bilgisi &rarr;</span>
                </a>
            </div>
        </div>
    </section>
`;

if (!html.includes('id="yakuplu-tekel-hizmetleri"')) {
    html = html.replace(
        /<section id="neden-biz"/,
        yakupluSection + '\n    <section id="neden-biz"'
    );
} else {
    // If section already exists, replace it cleanly with updated .html links
    html = html.replace(
        /<section id="yakuplu-tekel-hizmetleri"[\s\S]*?<\/section>/,
        yakupluSection.trim()
    );
}

// 7. Footer Links
const newFooterLinks = `<div>
                <h3 class="footer-title">Yakuplu Tekel & Hizmetler</h3>
                <ul class="footer-links">
                    <li><a href="/yakuplu-tekel.html">Yakuplu Tekel Bayi</a></li>
                    <li><a href="/yakuplu-acik-tekel.html">Yakuplu Açık Tekel</a></li>
                    <li><a href="/yakuplu-tekel-siparis.html">Yakuplu Tekel Sipariş</a></li>
                    <li><a href="/yakuplu-nobetci-tekel.html">Yakuplu Nöbetçi Tekel</a></li>
                    <li><a href="/beylikduzu-acik-tekel.html">Beylikdüzü Açık Tekel</a></li>
                    <li><a href="/beylikduzu-gece-acik-market.html">Beylikdüzü Gece Market</a></li>
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

console.log('[Updated] index.src.html & index.html cleanly updated with ekominiaydinticaret.com.tr domain!');
