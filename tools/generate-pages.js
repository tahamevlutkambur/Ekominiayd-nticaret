const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// Helper to escape HTML if needed
function esc(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const PAGES_CONFIG = [
    {
        filename: 'yakuplu-tekel.html',
        slug: 'yakuplu-tekel',
        title: 'Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret',
        h1: 'Yakuplu Tekel Bayi ve Mahalle Marketi',
        badge: 'Yakuplu Tekel · Barbaros Caddesi',
        metaTitle: 'Yakuplu Tekel Bayi & Gece Açık Market | Ekomini Aydın Ticaret',
        metaDesc: 'Yakuplu tekel bayi arayanlara Ekomini Aydın Ticaret: Yakuplu Barbaros Cad. No:57/533 Beylikdüzü adresinde her gün 08:00 - 03:00 açık! Tekel sipariş, soğuk bira, viski, meze.',
        canonical: 'https://www.ekominiaydinticaret.com/yakuplu-tekel',
        lead: 'Yakuplu Mahallesi ve Barbaros Caddesi çevresinde en zengin tekel ve market çeşitleriyle her gün 08:00–03:00 saatleri arasında kesintisiz hizmetinizdeyiz. Yerli ve yabancı orijinal bandrollü alkollü içecekler, soğuk biralar, taze mezeler ve market ürünleri tek adreste.',
        focusKeywords: ['Yakuplu tekel', 'Yakuplu tekel bayi', 'Yakuplu açık tekel', 'Yakuplu en yakın tekel', 'Ekomini Aydın Ticaret Yakuplu'],
        sections: [
            {
                title: 'Yakuplu Tekel Bayi Olarak Neler Sunuyoruz?',
                content: `<p>Ekomini Aydın Ticaret olarak Yakuplu Mahallesi Barbaros Caddesi üzerinde modern, nezih ve güvenilir bir tekel bayi ve süpermarket konsepti sunuyoruz. Mağazamızda sıradan tekel bayilerinden farklı olarak ferah reyonlar, geniş ürün çeşitliliği ve kurumsal hizmet standartları sizi bekliyor.</p>
                <div class="feature-grid">
                    <div class="feature-item">
                        <div class="feature-icon">🍺</div>
                        <strong>Buz Gibi Soğuk Reyon</strong>
                        <p>En sevilen yerli ve ithal biralar özel soğutmalı dolaplarımızda her an buz gibi hazır.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🥃</div>
                        <strong>Premium Alkol Koleksiyonu</strong>
                        <p>Viski, rakı, votka, cin, şarap ve likör çeşitlerinde %100 orijinal ve bandrollü ürünler.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🧀</div>
                        <strong>Gurme Meze & Şarküteri</strong>
                        <p>Zengin meze çeşitleri, peynir tabakları, taze kuruyemiş ve cips reyonları.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">⚡</div>
                        <strong>Gece 03:00'e Kadar Açık</strong>
                        <p>Haftanın 7 günü gece geç saatlere kadar kesintisiz alışveriş ve sipariş imkanı.</p>
                    </div>
                </div>`
            },
            {
                title: 'Yakuplu ve Barbaros Caddesi Hizmet Bölgelerimiz',
                content: `<p>Mağazamız Beylikdüzü Yakuplu Mahallesi'nin kalbinde yer almaktadır. Barbaros Caddesi No:57/533 adresinde bulunan işletmemiz şu lokasyonlara yürüme ve kısa sürüş mesafesindedir:</p>
                <ul class="check-list">
                    <li><strong>İhlas Marmara Evleri (1., 2. ve 3. Kısım):</strong> Sadece 2-3 dakika mesafede hızlı ulaşım ve sipariş.</li>
                    <li><strong>Barbaros Caddesi Esnaf & Konutları:</strong> Cadde üzerindeki ana arterde araç parkı kolaylığı.</li>
                    <li><strong>Eston Deniz & Marina Bölgesi:</strong> Sahil yolu üzerinden 5 dakikada kolay erişim.</li>
                    <li><strong>Hürriyet Bulvarı & Yakuplu Merkez:</strong> Yakuplu merkezden direkt düz hat bağlantısı.</li>
                    <li><strong>Yakuplu Kent Ormanı Çevresi:</strong> Piknik ve akşam organizasyonları için eksiksiz alışveriş.</li>
                </ul>`
            }
        ],
        faqs: [
            {
                q: 'Yakuplu tekel bayi nerede bulunuyor?',
                a: 'Ekomini Aydın Ticaret, Yakuplu Mahallesi Barbaros Caddesi No: 57/533, Beylikdüzü / İstanbul adresindedir. İhlas Marmara Evleri ve Barbaros Caddesi üzerinde merkezi bir konumdadır.'
            },
            {
                q: 'Yakuplu tekel çalışma saatleri nedir?',
                a: 'Haftanın her günü Pazartesi’den Pazar’a sabah 08:00 ile gece 03:00 saatleri arasında kesintisiz hizmet vermekteyiz.'
            },
            {
                q: 'Yakuplu tekel eve servis veya sipariş var mı?',
                a: 'Evet! +90 539 816 39 36 telefon numaramız veya WhatsApp hattımız üzerinden Yakuplu ve çevre bölgeler için stok sorabilir ve sipariş verebilirsiniz.'
            },
            {
                q: 'Ürünleriniz orijinal ve bandrollü mü?',
                a: 'Evet, tüm tekel, alkollü içecek ve tütün ürünlerimiz %100 orijinal, TAPDK onaylı ve resmi bandrollüdür.'
            },
            {
                q: 'Kredi kartı ve temassız ödeme geçerli mi?',
                a: 'Evet, mağazamızda ve kapıda ödemede nakit, banka kartı, tüm kredi kartları ve temassız ödeme seçenekleri geçerlidir.'
            }
        ]
    },
    {
        filename: 'yakuplu-acik-tekel.html',
        slug: 'yakuplu-acik-tekel',
        title: 'Yakuplu Açık Tekel | Gece 03:00\'e Kadar Açık Tekel Bayi',
        h1: 'Yakuplu Açık Tekel: Gece 03:00\'e Kadar Açık',
        badge: '🟢 Şu An Açık · Her Gün 08:00 – 03:00',
        metaTitle: 'Yakuplu Açık Tekel | Gece 03:00\'e Kadar Açık Tekel Bayi',
        metaDesc: 'Yakuplu\'da şu an açık tekel arayanlar için Ekomini Aydın Ticaret: Her gün 08:00 - 03:00 açık! Soğuk içecekler, tekel ürünleri ve meze çeşitleri. Hemen tıkla, ara!',
        canonical: 'https://www.ekominiaydinticaret.com/yakuplu-acik-tekel',
        lead: 'Yakuplu ve Beylikdüzü çevresinde "Şu an açık tekel nerede var?" diye düşünüyorsanız, Ekomini Aydın Ticaret haftanın her günü gece 03:00\'e kadar kapılarını açık tutuyor. Gece geç saatte de aradığınız tüm tekel ve market ihtiyaçlarınızı temin edebilirsiniz.',
        focusKeywords: ['Yakuplu açık tekel', 'Yakuplu şu an açık tekel', 'Yakuplu gece açık tekel', 'Yakuplu tekel açık mı', 'Beylikdüzü açık tekel'],
        sections: [
            {
                title: 'Gece Saatlerinde Kesintisiz Hizmet Veren Yakuplu Tekel Bayi',
                content: `<p>Çoğu tekel bayisi erken saatlerde kapanırken, Ekomini Aydın Ticaret olarak Yakuplu sakinlerine ve çevre mahallelere gece 03:00\'e kadar kesintisiz hizmet sunuyoruz. Gece keyfinizi bölmeden aradığınız içkiyi, soğuk meşrubatı veya mezenizi dakikalar içinde alabilirsiniz.</p>
                <div class="highlight-box">
                    <strong>⏰ Güncel Açık Olma Saatlerimiz:</strong>
                    <p style="margin:6px 0 0; font-size:1.15rem; color:#fff;">Pazartesi – Pazar: <strong>08:00 – 03:00</strong> (Haftanın 7 Günü)</p>
                </div>`
            },
            {
                title: 'Neden Yakuplu Açık Tekel Olarak Bizi Tercih Etmelisiniz?',
                content: `<ul class="check-list">
                    <li><strong>Geniş Stok Güvencesi:</strong> Gece geç saatlerde dahi tükenmeyen soğuk bira ve viski/rakı stokları.</li>
                    <li><strong>Kolay Otopark & Hızlı Alışveriş:</strong> Barbaros Caddesi üzerindeki ferah konum sayesinde aracınızı hemen yanaştırıp 1 dakikada alışverişinizi yapabilirsiniz.</li>
                    <li><strong>Güvenli ve Nezih Alışveriş:</strong> Aydınlık, klimalı ve kurumsal Ekomini market standartlarında güvenli ortam.</li>
                    <li><strong>Telefonla Teyit:</strong> Yola çıkmadan önce +90 539 816 39 36 numarasından çalışma saatimizi teyit edebilirsiniz.</li>
                </ul>`
            }
        ],
        faqs: [
            {
                q: 'Yakuplu\'da şu an açık tekel nerede bulabilirim?',
                a: 'Ekomini Aydın Ticaret, Yakuplu Mahallesi Barbaros Caddesi No: 57/533 adresinde gece saat 03:00\'e kadar açıktır.'
            },
            {
                q: 'Hafta sonu Pazar gecesi açık mısınız?',
                a: 'Evet, Pazar gecesi dahil haftanın tüm günleri kesintisiz gece 03:00\'e kadar hizmet veriyoruz.'
            },
            {
                q: 'Gece saat kaçta kapanıyorsunuz?',
                a: 'Mağazamız her gece saat 03:00\'te kapanmakta, sabah 08:00\'de tekrar açılmaktadır (24 saat açık değildir).'
            },
            {
                q: 'Gece arayıp ürün ayırtabilir miyim?',
                a: '+90 539 816 39 36 numaramızdan veya WhatsApp üzerinden mağazamıza ulaşarak istediğiniz ürünleri ayırtabilirsiniz.'
            }
        ]
    },
    {
        filename: 'yakuplu-tekel-siparis.html',
        slug: 'yakuplu-tekel-siparis',
        title: 'Yakuplu Tekel Sipariş & Eve Servis | Ekomini Aydın Ticaret',
        h1: 'Yakuplu Tekel Sipariş ve Paket Servis Hattı',
        badge: '🛵 Hızlı Teslimat · WhatsApp & Telefon Sipariş',
        metaTitle: 'Yakuplu Tekel Sipariş & Eve Servis | Ekomini Aydın Ticaret',
        metaDesc: 'Yakuplu tekel sipariş ve paket servis: İhlas Marmara Evleri, Barbaros Caddesi ve çevre mahallelere hızlı teslimat! Hemen arayın veya WhatsApp\'tan sipariş verin.',
        canonical: 'https://www.ekominiaydinticaret.com/yakuplu-tekel-siparis',
        lead: 'Yakuplu Mahallesi ve çevresinde evinizden çıkmadan tekel, soğuk içecek, meze ve market siparişi verin. Hızlı kurye teslimatı ve kapıda ödeme kolaylığıyla Ekomini Aydın Ticaret bir telefon uzağınızda!',
        focusKeywords: ['Yakuplu tekel sipariş', 'Yakuplu tekel eve servis', 'Yakuplu tekel paket servis', 'Yakuplu tekel kurye', 'Yakuplu eve içki servisi'],
        sections: [
            {
                title: 'Yakuplu Tekel Siparişi Nasıl Verilir?',
                content: `<div class="steps-grid">
                    <div class="step-card">
                        <span class="step-num">1</span>
                        <h4>WhatsApp veya Telefon</h4>
                        <p>0539 816 39 36 numaralı hattımızı arayın ya da WhatsApp üzerinden dilediğiniz ürün listesini yazın.</p>
                    </div>
                    <div class="step-card">
                        <span class="step-num">2</span>
                        <h4>Hızlıca Hazırlansın</h4>
                        <p>Buz gibi soğuk içecekleriniz ve şarküteri siparişiniz özenle paketlensin.</p>
                    </div>
                    <div class="step-card">
                        <span class="step-num">3</span>
                        <h4>Kapınıza Gelsin</h4>
                        <p>Yakuplu içi adresinize ortalama 15-30 dakikada teslim edilsin. Kapıda nakit veya kartla ödeyin.</p>
                    </div>
                </div>`
            },
            {
                title: 'Paket Servis Yaptığımız Yakuplu Bölgeleri',
                content: `<p>Ekomini Aydın Ticaret kurye ağımız Yakuplu genelinde geniş bir dağıtım bölgesine sahiptir:</p>
                <ul class="check-list">
                    <li><strong>İhlas Marmara Evleri 1., 2. ve 3. Kısım:</strong> En hızlı teslimat bölgelerimizden biri.</li>
                    <li><strong>Barbaros Caddesi ve Yan Sokakları:</strong> Dakikalar içinde teslim.</li>
                    <li><strong>Eston Deniz & Sahil Siteleri:</strong> Hızlı rota ile soğukluğu bozulmadan kapınızda.</li>
                    <li><strong>Hürriyet Bulvarı ve Yakuplu Kent Konutları:</strong> Güvenli ve temassız teslimat seçenekleri.</li>
                </ul>`
            }
        ],
        faqs: [
            {
                q: 'Yakuplu tekel sipariş hattı telefon numarası nedir?',
                a: 'Sipariş vermek ve stok danışmak için +90 539 816 39 36 numaralı telefonumuzu arayabilir veya WhatsApp’tan mesaj gönderebilirsiniz.'
            },
            {
                q: 'Siparişler ne kadar sürede teslim edilir?',
                a: 'Yakuplu bölgesi içerisindeki siparişler hava durumu ve yoğunluğa bağlı olarak ortalama 15 ile 30 dakika arasında kapınızda olur.'
            },
            {
                q: 'Kapıda kredi kartı ile ödeme yapabilir miyim?',
                a: 'Evet, kuryelerimizin yanında mobil temassız POS cihazı bulunmaktadır. Nakit veya kartla kolayca ödeyebilirsiniz.'
            },
            {
                q: 'Minimum sipariş tutarı var mı?',
                a: 'Minimum sipariş tutarı ve güncel kurye durumu hakkında en doğru bilgiyi WhatsApp hattımız üzerinden anında öğrenebilirsiniz.'
            }
        ]
    },
    {
        filename: 'yakuplu-nobetci-tekel.html',
        slug: 'yakuplu-nobetci-tekel',
        title: 'Yakuplu Nöbetçi Tekel & Gece Tekel | Ekomini Aydın Ticaret',
        h1: 'Yakuplu Nöbetçi Tekel & Gece Açık Market',
        badge: '🌙 Gece 03:00\'e Kadar Nöbetçi Hizmet',
        metaTitle: 'Yakuplu Nöbetçi Tekel & Gece Tekel | Ekomini Aydın Ticaret',
        metaDesc: 'Yakuplu nöbetçi tekel arayanlara Ekomini Aydın Ticaret: Her gece 03:00\'e kadar açık! Orijinal alkollü içecekler, soğuk bira, meze ve market ürünleri. 0539 816 39 36.',
        canonical: 'https://www.ekominiaydinticaret.com/yakuplu-nobetci-tekel',
        lead: 'Gece geç saatlerde Yakuplu\'da nöbetçi tekel veya açık market bulmak artık sorun değil. Ekomini Aydın Ticaret, zengin ürün yelpazesiyle her gece 03:00\'e kadar nöbetçi tekel vazifesi görüyor.',
        focusKeywords: ['Yakuplu nöbetçi tekel', 'Yakuplu gece tekel', 'Yakuplu 7/24 tekel', 'Yakuplu nöbetçi market', 'Beylikdüzü nöbetçi tekel'],
        sections: [
            {
                title: 'Gece İhtiyaçlarınız İçin Nöbetçi Tekel Standartları',
                content: `<p>Gece saatlerinde ansızın gelen misafirleriniz, biten içecekleriniz ya da atıştırmalık krizleriniz için Ekomini Aydın Ticaret her gece 03:00\'e kadar raflarını dolu tutmaktadır.</p>
                <div class="feature-grid">
                    <div class="feature-item">
                        <div class="feature-icon">❄️</div>
                        <strong>Her Saat Soğuk Ürünler</strong>
                        <p>Gece 02:00\'de dahi gelseniz tam soğukluğunda içecekler.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🛡️</div>
                        <strong>Güvenli ve Huzurlu Lokasyon</strong>
                        <p>Barbaros Caddesi üzerinde güvenle alışveriş yapabileceğiniz aydınlık mağaza.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🚗</div>
                        <strong>Kapı Önü Kolay Park</strong>
                        <p>Gece park derdi olmadan aracınızdan inip hızlıca alışverişinizi yapın.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">📱</div>
                        <strong>Hemen WhatsApp İletişim</strong>
                        <p>Gelmeden önce istediğiniz markanın stok durumunu WhatsApp\'tan teyit edin.</p>
                    </div>
                </div>`
            }
        ],
        faqs: [
            {
                q: 'Yakuplu nöbetçi tekel saat kaça kadar açık?',
                a: 'Ekomini Aydın Ticaret her gece 03:00\'e kadar açıktır. Sabah açılış saatimiz ise 08:00\'dir.'
            },
            {
                q: 'Gece tekel fiyatları normal fiyatlarla aynı mı?',
                a: 'Evet, günün her saatinde standart, şeffaf ve resmi perakende fiyatlarımız geçerlidir.'
            },
            {
                q: 'Gece sigara ve tütün ürünleri satışı var mı?',
                a: 'Evet, yasal kurallar çerçevesinde tüm tütün ve market ürünleri gece saatlerinde de mevcuttur.'
            }
        ]
    },
    {
        filename: 'beylikduzu-acik-tekel.html',
        slug: 'beylikduzu-acik-tekel',
        title: 'Beylikdüzü Açık Tekel Bayi | Yakuplu Ekomini Aydın Ticaret',
        h1: 'Beylikdüzü Açık Tekel: Yakuplu\'da Geceye Kadar Hizmet',
        badge: '📍 Beylikdüzü / Yakuplu Tekel',
        metaTitle: 'Beylikdüzü Açık Tekel Bayi | Yakuplu Ekomini Aydın Ticaret',
        metaDesc: 'Beylikdüzü\'nde açık tekel bayi arıyorsanız Ekomini Aydın Ticaret her gün 08:00 - 03:00 açık! Geniş tekel reyonu, Barbaros Cad. No:57/533 Yakuplu.',
        canonical: 'https://www.ekominiaydinticaret.com/beylikduzu-acik-tekel',
        lead: 'Beylikdüzü genelinde açık tekel bayi arayanlar için Yakuplu Mahallesi Barbaros Caddesi\'nde bulunan Ekomini Aydın Ticaret, geniş ürün çeşitliliği ve gece 03:00\'e kadar açık çalışma saatleriyle hizmet veriyor.',
        focusKeywords: ['Beylikdüzü açık tekel', 'Beylikdüzü açık tekel bayi', 'Beylikdüzü tekel bayi', 'Yakuplu açık tekel'],
        sections: [
            {
                title: 'Beylikdüzü\'nün En Prestijli Tekel Marketi',
                content: `<p>Beylikdüzü\'nde kaliteli, nezih ve geniş ürün gamına sahip bir tekel bayi arıyorsanız doğru yerdesiniz. Ekomini Aydın Ticaret, yerli ve yabancı viski markaları, zengin şarap mahzeni, taze soğuk biralar ve gurme meze çeşitleriyle Beylikdüzü halkına üst düzey perakende deneyimi yaşatır.</p>`
            },
            {
                title: 'Ulaşım ve Lokasyon Kolaylığı',
                content: `<p>E-5 karayoluna, Beylikdüzü Metrobüs hattına ve sahil şeridine yakınlığıyla Yakuplu Barbaros Caddesi No:57/533 mağazamız, araçla Beylikdüzü merkezden yalnızca 5-7 dakika mesafededir. Otopark sorunu yaşamadan rahatça alışverişinizi yapabilirsiniz.</p>`
            }
        ],
        faqs: [
            {
                q: 'Beylikdüzü açık tekel adresiniz nedir?',
                a: 'Adresimiz: Barbaros Caddesi, No: 57/533, Yakuplu Mahallesi, Beylikdüzü / İstanbul.'
            },
            {
                q: 'Beylikdüzü diğer mahallelerine de yakın mı?',
                a: 'Evet; Barış Mahallesi, Büyükşehir, Kavaklı, Gürpınar ve Marmara Mahallesi\'ne araçla birkaç dakika mesafededir.'
            },
            {
                q: 'Hafta içi ve hafta sonu saatler aynı mı?',
                a: 'Evet, haftanın 7 günü değişmeksizin 08:00–03:00 saatlerinde hizmet vermekteyiz.'
            }
        ]
    },
    {
        filename: 'beylikduzu-gece-acik-market.html',
        slug: 'beylikduzu-gece-acik-market',
        title: 'Beylikdüzü Gece Açık Market | Ekomini Aydın Ticaret (03:00\'e Kadar)',
        h1: 'Beylikdüzü Gece Açık Market ve Şarküteri',
        badge: '🛒 Gece Açık Süpermarket & Tekel',
        metaTitle: 'Beylikdüzü Gece Açık Market | Ekomini Aydın Ticaret (03:00\'e Kadar)',
        metaDesc: 'Beylikdüzü Yakuplu\'da gece açık market: Ekomini Aydın Ticaret her gün gece 03:00\'e kadar açık! Temel gıda, şarküteri, soğuk meze ve tekel reyonu.',
        canonical: 'https://www.ekominiaydinticaret.com/beylikduzu-gece-acik-market',
        lead: 'Beylikdüzü Yakuplu\'da gece açık süpermarket ve bakkal arıyorsanız Ekomini Aydın Ticaret her gün sabah 08:00\'den gece 03:00\'e kadar kesintisiz açık. Gıda, atıştırmalık, soğuk içecek, süt ürünleri ve şarküteri reyonlarımızla hizmetinizdeyiz.',
        focusKeywords: ['Beylikdüzü gece açık market', 'Yakuplu gece açık market', 'Beylikdüzü nöbetçi market', 'Yakuplu bakkal'],
        sections: [
            {
                title: 'Gece Saatlerinde Aradığınız Tüm Market Ürünleri',
                content: `<p>Gece geç saatlerde evinizin eksiklerini tamamlamak için açık süpermarket aramanıza gerek yok. Ekomini Aydın Ticaret\'te temel gıdadan mezelere, temizlik ve hijyen ürünlerinden buz gibi içeceklere kadar her şey mevcuttur.</p>
                <div class="feature-grid">
                    <div class="feature-item">
                        <div class="feature-icon">🥖</div>
                        <strong>Temel Gıda & Ekmek</strong>
                        <p>Günlük taze ekmek, süt, peynir, yumurta ve kahvaltılıklar.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🍫</div>
                        <strong>Atıştırmalık & Dondurma</strong>
                        <p>Cips, çikolata, kuruyemiş ve dondurma çeşitleri.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🥤</div>
                        <strong>Soğuk Meşrubat & Enerji</strong>
                        <p>Buz gibi kola, soda, meyve suları ve enerji içecekleri.</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">🍷</div>
                        <strong>Zengin Tekel Reyonu</strong>
                        <p>Market alışverişinize ek zengin tekel ve meze reyonları.</p>
                    </div>
                </div>`
            }
        ],
        faqs: [
            {
                q: 'Beylikdüzü gece açık market kaça kadar açık?',
                a: 'Ekomini Aydın Ticaret her gece 03:00\'e kadar açıktır. Sabah ise saat 08:00\'de açılır.'
            },
            {
                q: 'Markette hangi ürünler satılıyor?',
                a: 'Temel gıda maddeleri, süt ve şarküteri ürünleri, unlu mamuller, atıştırmalıklar, soğuk meşrubatlar ve eksiksiz tekel reyonu bulunur.'
            },
            {
                q: 'Telefonla ürün teyidi yapabilir miyim?',
                a: 'Evet, +90 539 816 39 36 numarasından dilediğiniz ürünün stok durumunu sorabilirsiniz.'
            }
        ]
    }
];

// Generate HTML template
function renderPage(config) {
    const faqSchemaItems = config.faqs.map(f => `{
        "@type": "Question",
        "name": ${JSON.stringify(f.q)},
        "acceptedAnswer": {
            "@type": "Answer",
            "text": ${JSON.stringify(f.a)}
        }
    }`).join(',\n        ');

    const sectionsHtml = config.sections.map(s => `
        <section class="card content-card">
            <h2>${esc(s.title)}</h2>
            ${s.content}
        </section>
    `).join('\n');

    const faqsHtml = config.faqs.map(f => `
        <details class="faq-item">
            <summary class="faq-question">
                <span>${esc(f.q)}</span>
                <svg viewBox="0 0 24 24" class="faq-arrow"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
            </summary>
            <div class="faq-body">
                <p>${esc(f.a)}</p>
            </div>
        </details>
    `).join('\n');

    return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(config.metaTitle)}</title>
    <meta name="description" content="${esc(config.metaDesc)}">
    <meta name="keywords" content="${esc(config.focusKeywords.join(', '))}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${config.canonical}">
    
    <!-- Geo Meta Tags for Local Ranking -->
    <meta name="geo.region" content="TR-34">
    <meta name="geo.placename" content="Beylikdüzü, İstanbul">
    <meta name="geo.position" content="40.983278;28.681611">
    <meta name="ICBM" content="40.983278, 28.681611">

    <!-- Open Graph -->
    <meta property="og:type" content="business.business">
    <meta property="og:locale" content="tr_TR">
    <meta property="og:title" content="${esc(config.metaTitle)}">
    <meta property="og:description" content="${esc(config.metaDesc)}">
    <meta property="og:url" content="${config.canonical}">
    <meta property="og:site_name" content="Ekomini Aydın Ticaret">
    <meta property="og:image" content="https://www.ekominiaydinticaret.com/images/aydinekominidaire.png">

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(config.metaTitle)}">
    <meta name="twitter:description" content="${esc(config.metaDesc)}">
    <meta name="twitter:image" content="https://www.ekominiaydinticaret.com/images/aydinekominidaire.png">

    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Schema.org Rich Snippets (LocalBusiness + FAQPage + BreadcrumbList) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LiquorStore", "ConvenienceStore", "GroceryStore"],
          "@id": "https://www.ekominiaydinticaret.com/#store",
          "name": "Ekomini Aydın Ticaret - Yakuplu Tekel Bayi",
          "alternateName": ["Yakuplu Tekel", "Yakuplu Tekel Bayi", "Aydın Ticaret Yakuplu"],
          "url": "${config.canonical}",
          "telephone": "+905398163936",
          "priceRange": "₺₺",
          "image": "https://www.ekominiaydinticaret.com/images/aydinekominidaire.png",
          "hasMap": "https://maps.google.com/?q=Yakuplu+Mahallesi,+Barbaros+Caddesi+No:57/533,+Beylikdüzü/İstanbul",
          "paymentAccepted": "Cash, Credit Card, Contactless",
          "currenciesAccepted": "TRY",
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
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Ana Sayfa",
              "item": "https://www.ekominiaydinticaret.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": ${JSON.stringify(config.h1)},
              "item": "${config.canonical}"
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            ${faqSchemaItems}
          ]
        }
      ]
    }
    </script>

    <style>
        :root {
            --bg-dark: #07111c;
            --bg-card: #0f1f33;
            --bg-card-hover: #142842;
            --border: #1e3a5f;
            --primary: #38bdf8;
            --primary-glow: rgba(56, 189, 248, 0.25);
            --accent-gold: #f59e0b;
            --whatsapp-green: #22c55e;
            --whatsapp-hover: #16a34a;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --font-main: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: var(--bg-dark);
            background-image: 
                radial-gradient(ellipse 90% 40% at 50% -10%, rgba(56, 189, 248, 0.18), transparent),
                radial-gradient(circle at 10% 30%, rgba(245, 158, 11, 0.08), transparent);
            color: var(--text-main);
            font-family: var(--font-main);
            font-size: 16px;
            line-height: 1.65;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            padding-bottom: 70px;
        }

        a {
            color: var(--primary);
            text-decoration: none;
            transition: color 0.2s;
        }
        a:hover {
            color: #7dd3fc;
        }

        .container {
            width: 100%;
            max-width: 940px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Site Header */
        header {
            background: rgba(7, 17, 28, 0.85);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 100;
            padding: 14px 0;
        }

        .header-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
        }

        .brand-link {
            display: flex;
            align-items: center;
            gap: 12px;
            text-decoration: none;
        }

        .brand-logo-img {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid var(--primary);
            box-shadow: 0 0 14px var(--primary-glow);
        }

        .brand-text {
            display: flex;
            flex-direction: column;
        }

        .brand-name {
            font-size: 1.2rem;
            font-weight: 800;
            color: #fff;
            letter-spacing: -0.3px;
            line-height: 1.15;
        }

        .brand-sub {
            font-size: 0.78rem;
            color: var(--accent-gold);
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .btn-hdr-call {
            background: linear-gradient(135deg, #0284c7, #0ea5e9);
            color: #fff;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 9px 16px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-hdr-call:hover {
            color: #fff;
            transform: translateY(-1px);
            box-shadow: 0 4px 14px rgba(14, 165, 233, 0.4);
        }

        .btn-hdr-wa {
            background: var(--whatsapp-green);
            color: #fff;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 9px 16px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-hdr-wa:hover {
            color: #fff;
            background: var(--whatsapp-hover);
            transform: translateY(-1px);
            box-shadow: 0 4px 14px rgba(34, 197, 94, 0.4);
        }

        /* Breadcrumbs */
        .breadcrumbs {
            font-size: 0.88rem;
            color: var(--text-muted);
            margin: 24px 0 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-wrap: wrap;
        }
        .breadcrumbs span {
            color: #64748b;
        }

        /* Hero */
        .page-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(56, 189, 248, 0.1);
            border: 1px solid rgba(56, 189, 248, 0.35);
            padding: 6px 14px;
            border-radius: 999px;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 14px;
        }

        h1 {
            font-size: clamp(2rem, 4.5vw, 2.9rem);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.8px;
            color: #fff;
            margin-bottom: 14px;
        }

        .lead-text {
            font-size: 1.12rem;
            color: #cbd5e1;
            line-height: 1.7;
            max-width: 800px;
            margin-bottom: 26px;
        }

        /* Action Buttons Grid */
        .hero-actions-bar {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 12px;
            margin-bottom: 34px;
        }

        .action-cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 1rem;
            font-weight: 700;
            padding: 15px 22px;
            border-radius: 14px;
            text-align: center;
            transition: all 0.25s ease;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
        }
        .action-cta-btn svg {
            width: 22px;
            height: 22px;
        }

        .cta-call {
            background: linear-gradient(135deg, #0284c7, #38bdf8);
            color: #031e33;
        }
        .cta-call:hover {
            background: linear-gradient(135deg, #38bdf8, #7dd3fc);
            color: #031e33;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(56, 189, 248, 0.35);
        }

        .cta-whatsapp {
            background: linear-gradient(135deg, #16a34a, #22c55e);
            color: #fff;
        }
        .cta-whatsapp:hover {
            background: linear-gradient(135deg, #22c55e, #4ade80);
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);
        }

        .cta-maps {
            background: #17283c;
            color: #f1f5f9;
            border: 1px solid var(--border);
        }
        .cta-maps:hover {
            background: #1e3550;
            color: #fff;
            border-color: var(--primary);
            transform: translateY(-2px);
        }

        /* Content Cards */
        .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 20px;
            padding: 28px;
            margin-bottom: 24px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .card h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .facts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
            gap: 14px;
            margin-top: 18px;
        }

        .fact-box {
            background: rgba(7, 17, 28, 0.65);
            border: 1px solid rgba(30, 58, 95, 0.7);
            border-radius: 14px;
            padding: 16px;
        }

        .fact-box strong {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--primary);
            margin-bottom: 6px;
        }

        .fact-box span, .fact-box a {
            font-size: 1.05rem;
            color: #f8fafc;
            font-weight: 600;
        }

        /* Features */
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }

        .feature-item {
            background: rgba(7, 17, 28, 0.6);
            border: 1px solid rgba(30, 58, 95, 0.6);
            border-radius: 14px;
            padding: 18px;
        }

        .feature-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }

        .feature-item strong {
            display: block;
            font-size: 1.05rem;
            color: #fff;
            margin-bottom: 6px;
        }

        .feature-item p {
            font-size: 0.92rem;
            color: var(--text-muted);
            line-height: 1.5;
        }

        /* Check List */
        .check-list {
            list-style: none;
            margin-top: 14px;
        }
        .check-list li {
            position: relative;
            padding-left: 28px;
            margin-bottom: 10px;
            color: #cbd5e1;
        }
        .check-list li::before {
            content: "✓";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--whatsapp-green);
            font-weight: 800;
            font-size: 1.1rem;
        }

        /* Steps */
        .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }
        .step-card {
            background: rgba(7, 17, 28, 0.65);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 20px;
            position: relative;
        }
        .step-num {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: var(--primary);
            color: #031e33;
            font-weight: 800;
            border-radius: 50%;
            margin-bottom: 12px;
        }
        .step-card h4 {
            color: #fff;
            font-size: 1.05rem;
            margin-bottom: 6px;
        }
        .step-card p {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .highlight-box {
            background: rgba(14, 165, 233, 0.12);
            border-left: 4px solid var(--primary);
            padding: 16px 20px;
            border-radius: 8px;
            margin-top: 18px;
        }

        /* FAQ Accordion */
        .faq-item {
            background: rgba(7, 17, 28, 0.65);
            border: 1px solid var(--border);
            border-radius: 14px;
            margin-bottom: 12px;
            overflow: hidden;
            transition: border-color 0.2s;
        }
        .faq-item[open] {
            border-color: var(--primary);
        }

        .faq-question {
            padding: 18px 20px;
            font-size: 1.05rem;
            font-weight: 600;
            color: #fff;
            cursor: pointer;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            user-select: none;
        }
        .faq-question::-webkit-details-marker {
            display: none;
        }

        .faq-arrow {
            width: 22px;
            height: 22px;
            color: var(--primary);
            transition: transform 0.2s;
            flex-shrink: 0;
        }
        .faq-item[open] .faq-arrow {
            transform: rotate(180deg);
        }

        .faq-body {
            padding: 0 20px 20px;
            color: #cbd5e1;
            font-size: 0.98rem;
            line-height: 1.65;
            border-top: 1px solid rgba(30, 58, 95, 0.4);
            margin-top: 4px;
            padding-top: 14px;
        }

        /* Silo Internal Links */
        .silo-links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 12px;
            margin-top: 16px;
        }

        .silo-link-item {
            background: rgba(7, 17, 28, 0.55);
            border: 1px solid rgba(30, 58, 95, 0.7);
            border-radius: 12px;
            padding: 14px;
            display: block;
            text-decoration: none;
            transition: all 0.2s;
        }
        .silo-link-item strong {
            display: block;
            color: #fff;
            font-size: 0.95rem;
            margin-bottom: 4px;
        }
        .silo-link-item span {
            font-size: 0.8rem;
            color: var(--text-muted);
        }
        .silo-link-item:hover {
            border-color: var(--primary);
            background: var(--bg-card-hover);
            transform: translateY(-2px);
        }

        /* Footer */
        footer {
            margin-top: auto;
            border-top: 1px solid var(--border);
            padding: 32px 0;
            background: #040910;
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        .footer-inner {
            display: flex;
            flex-direction: column;
            gap: 16px;
            text-align: center;
        }

        @media (min-width: 640px) {
            .footer-inner {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
            }
        }

        /* Mobile Sticky Bottom Bar */
        .mobile-sticky-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(7, 17, 28, 0.95);
            backdrop-filter: blur(12px);
            border-top: 1px solid var(--border);
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            z-index: 999;
            padding: 8px 12px;
            gap: 8px;
        }

        .mobile-bar-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 8px 4px;
            border-radius: 10px;
            text-decoration: none;
            font-size: 0.76rem;
            font-weight: 700;
            gap: 4px;
        }
        .mobile-bar-btn svg {
            width: 20px;
            height: 20px;
        }

        .btn-m-wa {
            background: rgba(34, 197, 94, 0.16);
            color: #4ade80;
            border: 1px solid rgba(34, 197, 94, 0.3);
        }
        .btn-m-call {
            background: linear-gradient(135deg, #0284c7, #38bdf8);
            color: #031e33;
        }
        .btn-m-dir {
            background: rgba(56, 189, 248, 0.12);
            color: #7dd3fc;
            border: 1px solid rgba(56, 189, 248, 0.25);
        }

        @media (min-width: 768px) {
            .mobile-sticky-bar {
                display: none;
            }
            body {
                padding-bottom: 0;
            }
        }
    </style>
</head>
<body>

    <!-- Site Header -->
    <header>
        <div class="container header-inner">
            <a href="/" class="brand-link" aria-label="Ekomini Aydın Ticaret Ana Sayfa">
                <img src="/images/aydinekominidaire.png" alt="Ekomini Aydın Ticaret" class="brand-logo-img">
                <div class="brand-text">
                    <span class="brand-name">Ekomini Aydın Ticaret</span>
                    <span class="brand-sub">Yakuplu Tekel & Market</span>
                </div>
            </a>
            <div class="header-actions">
                <a href="tel:+905398163936" class="btn-hdr-call">
                    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23-.2-2.42-.6-3.53-1.17a1 1 0 00-1.01.07l-2.17 2.17c-2.82-1.43-5.13-3.74-6.56-6.56l2.17-2.17a1 1 0 00.07-1.01C8.38 5.62 7.98 4.43 7.78 3.2A1 1 0 006.78 2.2H3.5a1 1 0 00-1 1.05 17 17 0 0016.45 16.45 1 1 0 001.05-1V16.38a1 1 0 00-.99-1z"/></svg>
                    <span>0539 816 39 36</span>
                </a>
                <a href="https://wa.me/905398163936?text=Merhaba%20Ekomini%20Aydın%20Ticaret,%20sipariş%20ve%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener" class="btn-hdr-wa">
                    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.25-1.377a9.816 9.816 0 0 0 4.742 1.22c5.46 0 9.908-4.448 9.913-9.908a9.87 9.87 0 0 0-2.904-6.927zM11.992 20.15a8.167 8.167 0 0 1-4.177-1.154l-.3-.18-3.11.815.83-3.032-.196-.312a8.136 8.136 0 0 1-1.258-4.38c.005-4.51 3.678-8.179 8.192-8.179a8.146 8.146 0 0 1 5.794 2.4 8.146 8.146 0 0 1 2.395 5.793c-.005 4.514-3.678 8.187-8.17 8.187zm4.49-6.147c-.246-.123-1.455-.718-1.68-.8s-.389-.123-.553.123c-.164.246-.635.8-.778.963-.143.164-.287.185-.533.061-.246-.123-1.037-.382-1.975-1.22-.73-.65-1.223-1.454-1.366-1.7s-.015-.378.109-.5a7.35 7.35 0 0 0 .368-.43c.123-.144.164-.246.246-.41.082-.164.04-.308-.02-.43-.062-.124-.553-1.333-.758-1.825-.2-.48-.4-.41-.553-.418h-.47a.9.9 0 0 0-.677.307c-.225.246-.86 1.205-.86 2.05s.614 1.66 1.003 2.193c.123.164 1.733 2.646 4.197 3.71.586.254 1.044.406 1.4.52.59.189 1.127.16 1.55.099.471-.07 1.454-.595 1.66-1.168.204-.574.204-1.066.143-1.168-.061-.103-.225-.164-.471-.287z"/></svg>
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container">
        
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
            <a href="/">Ana Sayfa</a>
            <span>›</span>
            <strong>${esc(config.h1)}</strong>
        </nav>

        <!-- Hero Section -->
        <div class="page-badge">${config.badge}</div>
        <h1>${esc(config.h1)}</h1>
        <p class="lead-text">${esc(config.lead)}</p>

        <!-- Big 3 CTA Actions -->
        <div class="hero-actions-bar">
            <a href="tel:+905398163936" class="action-cta-btn cta-call">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23-.2-2.42-.6-3.53-1.17a1 1 0 00-1.01.07l-2.17 2.17c-2.82-1.43-5.13-3.74-6.56-6.56l2.17-2.17a1 1 0 00.07-1.01C8.38 5.62 7.98 4.43 7.78 3.2A1 1 0 006.78 2.2H3.5a1 1 0 00-1 1.05 17 17 0 0016.45 16.45 1 1 0 001.05-1V16.38a1 1 0 00-.99-1z"/></svg>
                Hemen Ara (0539 816 39 36)
            </a>
            <a href="https://wa.me/905398163936?text=Merhaba%20Ekomini%20Aydın%20Ticaret,%20bilgi%20ve%20sipariş%20almak%20istiyorum." target="_blank" rel="noopener" class="action-cta-btn cta-whatsapp">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.25-1.377a9.816 9.816 0 0 0 4.742 1.22c5.46 0 9.908-4.448 9.913-9.908a9.87 9.87 0 0 0-2.904-6.927zM11.992 20.15a8.167 8.167 0 0 1-4.177-1.154l-.3-.18-3.11.815.83-3.032-.196-.312a8.136 8.136 0 0 1-1.258-4.38c.005-4.51 3.678-8.179 8.192-8.179a8.146 8.146 0 0 1 5.794 2.4 8.146 8.146 0 0 1 2.395 5.793c-.005 4.514-3.678 8.187-8.17 8.187zm4.49-6.147c-.246-.123-1.455-.718-1.68-.8s-.389-.123-.553.123c-.164.246-.635.8-.778.963-.143.164-.287.185-.533.061-.246-.123-1.037-.382-1.975-1.22-.73-.65-1.223-1.454-1.366-1.7s-.015-.378.109-.5a7.35 7.35 0 0 0 .368-.43c.123-.144.164-.246.246-.41.082-.164.04-.308-.02-.43-.062-.124-.553-1.333-.758-1.825-.2-.48-.4-.41-.553-.418h-.47a.9.9 0 0 0-.677.307c-.225.246-.86 1.205-.86 2.05s.614 1.66 1.003 2.193c.123.164 1.733 2.646 4.197 3.71.586.254 1.044.406 1.4.52.59.189 1.127.16 1.55.099.471-.07 1.454-.595 1.66-1.168.204-.574.204-1.066.143-1.168-.061-.103-.225-.164-.471-.287z"/></svg>
                WhatsApp Sipariş & Danışma
            </a>
            <a href="https://maps.google.com/?q=Yakuplu+Mahallesi,+Barbaros+Caddesi+No:57/533,+Beylikdüzü/İstanbul" target="_blank" rel="noopener" class="action-cta-btn cta-maps">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                Yol Tarifi (Haritada Aç)
            </a>
        </div>

        <!-- Store Info Card -->
        <section class="card">
            <h2>📍 Mağaza Bilgileri & İletişim</h2>
            <p>Ekomini Aydın Ticaret, Yakuplu Mahallesi Barbaros Caddesi No:57/533 adresinde sizleri bekliyor.</p>
            <div class="facts-grid">
                <div class="fact-box">
                    <strong>Adres</strong>
                    <span>Yakuplu Mah. Barbaros Cad. No:57/533 Beylikdüzü / İstanbul</span>
                </div>
                <div class="fact-box">
                    <strong>Çalışma Saatleri</strong>
                    <span>Haftanın 7 Günü: 08:00 – 03:00</span>
                </div>
                <div class="fact-box">
                    <strong>Telefon / Sipariş</strong>
                    <a href="tel:+905398163936">+90 539 816 39 36</a>
                </div>
                <div class="fact-box">
                    <strong>Otopark & Ulaşım</strong>
                    <span>Cadde üzeri rahat otopark imkanı</span>
                </div>
            </div>
        </section>

        <!-- Custom Content Sections -->
        ${sectionsHtml}

        <!-- FAQ Section -->
        <section class="card">
            <h2>❓ Sıkça Sorulan Sorular</h2>
            <div class="faqs-list">
                ${faqsHtml}
            </div>
        </section>

        <!-- Topic Cluster / Internal Links Silo -->
        <section class="card">
            <h2>🔗 İlgili Yakuplu & Beylikdüzü Tekel Sayfalarımız</h2>
            <p>Aşağıdaki bağlantılardan diğer mağaza ve hizmet sayfalarımıza göz atabilirsiniz:</p>
            <div class="silo-links-grid">
                <a href="/yakuplu-tekel" class="silo-link-item">
                    <strong>Yakuplu Tekel Bayi</strong>
                    <span>Mahalle tekel ve süpermarketi</span>
                </a>
                <a href="/yakuplu-acik-tekel" class="silo-link-item">
                    <strong>Yakuplu Açık Tekel</strong>
                    <span>Gece 03:00'e kadar açık mağaza</span>
                </a>
                <a href="/yakuplu-tekel-siparis" class="silo-link-item">
                    <strong>Yakuplu Tekel Sipariş</strong>
                    <span>Hızlı eve paket servis hattı</span>
                </a>
                <a href="/yakuplu-nobetci-tekel" class="silo-link-item">
                    <strong>Yakuplu Nöbetçi Tekel</strong>
                    <span>Gece açık nöbetçi tekel bayi</span>
                </a>
                <a href="/beylikduzu-acik-tekel" class="silo-link-item">
                    <strong>Beylikdüzü Açık Tekel</strong>
                    <span>Beylikdüzü geneline hizmet</span>
                </a>
                <a href="/beylikduzu-gece-acik-market" class="silo-link-item">
                    <strong>Gece Açık Market</strong>
                    <span>Gece şarküteri ve bakkal</span>
                </a>
            </div>
        </section>

    </main>

    <!-- Site Footer -->
    <footer>
        <div class="container footer-inner">
            <div>
                <strong>Ekomini Aydın Ticaret</strong><br>
                Yakuplu Mah. Barbaros Cad. No:57/533, Beylikdüzü / İstanbul<br>
                Çalışma Saatleri: Her Gün 08:00 – 03:00 · Tel: <a href="tel:+905398163936">+90 539 816 39 36</a>
            </div>
            <div>
                <a href="/">Ana Sayfa</a> · 
                <a href="/yakuplu-tekel">Yakuplu Tekel</a> · 
                <a href="/yakuplu-tekel-siparis">Sipariş</a> · 
                <a href="https://maps.google.com/?q=Yakuplu+Mahallesi,+Barbaros+Caddesi+No:57/533,+Beylikdüzü/İstanbul" target="_blank" rel="noopener">Harita</a>
                <br>
                <span>&copy; 2026 Ekomini Aydın Ticaret. Tüm Hakları Saklıdır.</span>
            </div>
        </div>
    </footer>

    <!-- Mobile Sticky Navigation Bar -->
    <div class="mobile-sticky-bar">
        <a href="https://wa.me/905398163936?text=Merhaba%20Ekomini%20Aydın%20Ticaret,%20bilgi%20ve%20sipariş%20almak%20istiyorum." target="_blank" rel="noopener" class="mobile-bar-btn btn-m-wa">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.25-1.377a9.816 9.816 0 0 0 4.742 1.22c5.46 0 9.908-4.448 9.913-9.908a9.87 9.87 0 0 0-2.904-6.927zM11.992 20.15a8.167 8.167 0 0 1-4.177-1.154l-.3-.18-3.11.815.83-3.032-.196-.312a8.136 8.136 0 0 1-1.258-4.38c.005-4.51 3.678-8.179 8.192-8.179a8.146 8.146 0 0 1 5.794 2.4 8.146 8.146 0 0 1 2.395 5.793c-.005 4.514-3.678 8.187-8.17 8.187zm4.49-6.147c-.246-.123-1.455-.718-1.68-.8s-.389-.123-.553.123c-.164.246-.635.8-.778.963-.143.164-.287.185-.533.061-.246-.123-1.037-.382-1.975-1.22-.73-.65-1.223-1.454-1.366-1.7s-.015-.378.109-.5a7.35 7.35 0 0 0 .368-.43c.123-.144.164-.246.246-.41.082-.164.04-.308-.02-.43-.062-.124-.553-1.333-.758-1.825-.2-.48-.4-.41-.553-.418h-.47a.9.9 0 0 0-.677.307c-.225.246-.86 1.205-.86 2.05s.614 1.66 1.003 2.193c.123.164 1.733 2.646 4.197 3.71.586.254 1.044.406 1.4.52.59.189 1.127.16 1.55.099.471-.07 1.454-.595 1.66-1.168.204-.574.204-1.066.143-1.168-.061-.103-.225-.164-.471-.287z"/></svg>
            <span>WhatsApp</span>
        </a>
        <a href="tel:+905398163936" class="mobile-bar-btn btn-m-call">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M20.01 15.38c-1.23-.2-2.42-.6-3.53-1.17a1 1 0 00-1.01.07l-2.17 2.17c-2.82-1.43-5.13-3.74-6.56-6.56l2.17-2.17a1 1 0 00.07-1.01C8.38 5.62 7.98 4.43 7.78 3.2A1 1 0 006.78 2.2H3.5a1 1 0 00-1 1.05 17 17 0 0016.45 16.45 1 1 0 001.05-1V16.38a1 1 0 00-.99-1z"/></svg>
            <span>Hemen Ara</span>
        </a>
        <a href="https://maps.google.com/?q=Yakuplu+Mahallesi,+Barbaros+Caddesi+No:57/533,+Beylikdüzü/İstanbul" target="_blank" rel="noopener" class="mobile-bar-btn btn-m-dir">
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Yol Tarifi</span>
        </a>
    </div>

</body>
</html>`;
}

// Generate all pages
PAGES_CONFIG.forEach(cfg => {
    const html = renderPage(cfg);
    const dest = path.join(ROOT_DIR, cfg.filename);
    fs.writeFileSync(dest, html, 'utf8');
    console.log(`[Generated] ${cfg.filename} (${cfg.title})`);
});

console.log('[Success] All 6 SEO landing pages generated cleanly with UTF-8 encoding!');
