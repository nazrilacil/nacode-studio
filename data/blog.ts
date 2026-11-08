// data/blog.ts
import type { Locale } from "@/components/LanguageProvider";

export type BlogCategory =
  | "Website Development"
  | "Business Digitalization"
  | "UI/UX Design"
  | "SEO"
  | "Technology";

export type BlogTranslation = {
  title: string;
  excerpt: string;
  content?: string; // fallback ke content EN kalau tidak diisi
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown
  category: BlogCategory;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
  translations?: Partial<Record<Exclude<Locale, "id">, BlogTranslation>>;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "strategi-digital-umkm-2025",
    title: "Strategi Digital untuk UMKM di 2025",
    excerpt:
      "Media sosial saja tidak cukup. Ini tiga fondasi digital yang sebaiknya dimiliki setiap UMKM di tahun ini.",
    category: "Business Digitalization",
    publishedAt: "2025-01-15",
    readingTime: 6,
    featured: true,
    content: `
Banyak UMKM di Indonesia masih bergantung sepenuhnya pada media sosial. Instagram dan TikTok memang efektif untuk jangkauan, tapi ada satu masalah: **semua yang Anda bangun di sana bukan milik Anda**.

## Kenapa Media Sosial Tidak Cukup

Algoritma berubah, akun bisa dibatasi, dan konten bisa hilang tanpa pemberitahuan. Bisnis yang serius membutuhkan fondasi digital yang bisa mereka kendalikan sendiri.

## Tiga Fondasi Digital

**1. Website resmi.** Pusat informasi yang bisa diakses 24 jam dan mudah ditemukan lewat Google. Tidak bergantung pada algoritma platform lain.

**2. Katalog atau landing page.** Satu halaman fokus yang menjelaskan penawaran dan mengarah ke WhatsApp — cocok untuk UMKM yang ingin mulai tanpa investasi besar.

**3. SEO lokal.** Ketika orang mencari "bengkel di Pangandaran" atau "salon di Bandung", bisnis Anda perlu muncul. Ini bukan sekadar optimasi, tapi kehadiran di momen pencarian.

## Mulai dari Mana?

Mulai dari yang paling kecil: satu halaman microsite dengan domain sendiri. Biaya terjangkau, tapi dampaknya berbeda — Anda punya rumah digital yang bisa diarahkan dari mana saja.
    `.trim(),
    translations: {
      en: {
        title: "Digital Strategy for SMEs in 2025",
        excerpt:
          "Social media alone isn't enough. Here are three digital foundations every small business should have this year.",
        content: `
Many SMEs in Indonesia still rely entirely on social media. Instagram and TikTok are effective for reach, but there's one problem: **everything you build there doesn't belong to you**.

## Why Social Media Isn't Enough

Algorithms change, accounts get restricted, and content can disappear without notice. Serious businesses need a digital foundation they can control.

## Three Digital Foundations

**1. An official website.** A central hub accessible 24 hours a day and easy to find via Google. Not dependent on other platforms' algorithms.

**2. A catalog or landing page.** One focused page that explains your offering and directs to WhatsApp — great for SMEs starting without heavy investment.

**3. Local SEO.** When people search "auto repair in Pangandaran" or "salon in Bandung", your business needs to show up. This isn't just optimization — it's presence at the moment of search.

## Where to Start?

Start small: a single microsite on your own domain. Affordable, yet different in impact — you now own a digital home you can route anyone to.
        `.trim(),
      },
      ko: {
        title: "2025년 중소기업을 위한 디지털 전략",
        excerpt:
          "소셜 미디어만으로는 충분하지 않습니다. 올해 모든 소규모 비즈니스가 갖춰야 할 세 가지 디지털 기반을 소개합니다.",
      },
      zh: {
        title: "2025 年中小企业数字化策略",
        excerpt:
          "仅靠社交媒体是不够的。以下是今年每家小企业都应拥有的三大数字基础。",
      },
      ja: {
        title: "2025年の中小企業のためのデジタル戦略",
        excerpt:
          "SNSだけでは不十分です。今年すべての中小企業が持つべき3つのデジタル基盤をご紹介します。",
      },
    },
  },
  {
    slug: "memilih-domain-hosting",
    title: "Cara Memilih Domain dan Hosting untuk Bisnis",
    excerpt:
      "Domain murah tidak selalu menghemat. Ini yang perlu Anda pertimbangkan sebelum membeli.",
    category: "Website Development",
    publishedAt: "2025-02-03",
    readingTime: 5,
    content: `
Domain dan hosting sering dianggap sepele — padahal keduanya adalah fondasi teknis yang menentukan reputasi dan performa website Anda.

## Domain: Nama yang Akan Diingat

- **Gunakan .com atau .id** untuk kesan profesional. Domain .my.id lebih ekonomis tapi terlihat seperti blog pribadi.
- **Pilih nama pendek** yang mudah diingat dan disebutkan.
- **Hindari angka dan tanda hubung** yang membingungkan saat diucapkan.

## Hosting: Jangan Asal Murah

Hosting murah dengan uptime buruk akan merusak pengalaman pengunjung — dan peringkat SEO. Pertimbangkan:

**1. Lokasi server.** Untuk audiens Indonesia, server Singapura atau Jakarta lebih cepat.

**2. Uptime guarantee.** Minimal 99,5% — di bawah itu, website sering down.

**3. Support responsif.** Kalau website down, Anda butuh bantuan dalam hitungan jam, bukan hari.

## Rekomendasi Praktis

Untuk UMKM yang baru mulai, paket microsite dengan domain .my.id + hosting sudah cukup. Untuk bisnis yang serius, domain .com dan hosting cloud dengan backup harian adalah standar minimum.
    `.trim(),
    translations: {
      en: {
        title: "How to Choose a Domain and Hosting for Your Business",
        excerpt:
          "A cheap domain doesn't always save money. Here's what to consider before buying.",
        content: `
Domains and hosting are often overlooked — yet both are the technical foundation that determines your website's reputation and performance.

## Domain: A Name to Remember

- **Use .com or .id** for a professional impression. .my.id is cheaper but looks like a personal blog.
- **Pick a short name** that's easy to remember and say out loud.
- **Avoid numbers and hyphens** that confuse people when spoken.

## Hosting: Don't Just Go Cheap

Cheap hosting with bad uptime destroys visitor experience — and SEO ranking. Consider:

**1. Server location.** For Indonesian audiences, Singapore or Jakarta servers are faster.

**2. Uptime guarantee.** At least 99.5% — below that, your website goes down too often.

**3. Responsive support.** If your site goes down, you need help in hours, not days.

## Practical Recommendation

For SMEs just starting out, a microsite package with .my.id + hosting is enough. For serious businesses, .com and cloud hosting with daily backups is the minimum standard.
        `.trim(),
      },
      ko: {
        title: "비즈니스를 위한 도메인과 호스팅 선택 방법",
        excerpt: "저렴한 도메인이 항상 비용을 절약하는 건 아닙니다. 구매 전 고려해야 할 사항을 정리했습니다.",
      },
      zh: {
        title: "如何为您的企业选择域名和主机",
        excerpt: "便宜的域名不总是省钱。以下是购买前需要考虑的要点。",
      },
      ja: {
        title: "ビジネス用のドメインとホスティングの選び方",
        excerpt: "安いドメインがいつも節約になるとは限りません。購入前に検討すべきポイントをまとめました。",
      },
    },
  },
  {
    slug: "ui-ux-untuk-konversi",
    title: "UI/UX yang Mendorong Konversi, Bukan Sekadar Estetika",
    excerpt:
      "Desain cantik tanpa arah konversi hanya jadi pajangan. Ini prinsip yang membedakan keduanya.",
    category: "UI/UX Design",
    publishedAt: "2025-02-20",
    readingTime: 6,
    content: `
Banyak bisnis meminta "desain yang modern" tanpa benar-benar tahu apa yang mereka butuhkan. Hasilnya: website cantik yang tidak menghasilkan.

## Estetika vs Konversi

**Estetika** berhenti di "wah, bagus". **Konversi** dimulai dari "saya ingin menghubungi mereka sekarang."

Desain yang baik selalu punya **satu tujuan** di setiap halaman. Kalau semua elemen bersaing untuk perhatian, tidak ada yang menonjol.

## Tiga Prinsip Praktis

**1. Hierarki visual yang jelas.** Mata pengunjung harus dibimbing: headline → subheading → penjelasan → tombol. Kalau semua elemen berukuran sama, tidak ada yang terbaca.

**2. Tombol yang tidak ambigu.** "Hubungi Kami" lebih jelas dari "Pelajari Lebih Lanjut". Kalau tombol butuh penjelasan, itu tanda tombolnya kurang baik.

**3. Whitespace yang disengaja.** Ruang kosong bukan pemborosan — itu memberi napas pada konten dan menonjolkan elemen penting.

## Cara Mengukur

Setelah website live, perhatikan: berapa banyak pengunjung yang mengklik tombol utama? Berapa yang meninggalkan halaman dalam 5 detik? Data ini lebih jujur dari opini siapa pun.
    `.trim(),
    translations: {
      en: {
        title: "UI/UX That Drives Conversion, Not Just Aesthetics",
        excerpt:
          "Beautiful design without conversion direction is just decoration. Here's what separates the two.",
        content: `
Many businesses ask for "a modern design" without really knowing what they need. The result: a beautiful website that doesn't produce.

## Aesthetics vs Conversion

**Aesthetics** stops at "wow, nice". **Conversion** starts at "I want to contact them now."

Good design always has **one goal** per page. When every element competes for attention, nothing stands out.

## Three Practical Principles

**1. Clear visual hierarchy.** The visitor's eye must be guided: headline → subheading → description → button. When everything is the same size, nothing gets read.

**2. Unambiguous buttons.** "Contact Us" is clearer than "Learn More". If a button needs explanation, that's a sign it's weak.

**3. Intentional whitespace.** Empty space isn't waste — it gives content breathing room and highlights what matters.

## How to Measure

After launching, watch: how many visitors click the primary button? How many leave within 5 seconds? This data is more honest than anyone's opinion.
        `.trim(),
      },
      ko: {
        title: "단순한 미학이 아닌 전환을 이끄는 UI/UX",
        excerpt: "전환 방향이 없는 아름다운 디자인은 장식일 뿐입니다. 둘을 구분하는 원칙을 소개합니다.",
      },
      zh: {
        title: "推动转化的 UI/UX，而不仅是美学",
        excerpt: "没有转化方向的美观设计只是装饰。以下原则区分两者。",
      },
      ja: {
        title: "美学だけでなく、コンバージョンを促すUI/UX",
        excerpt: "コンバージョンの方向性を持たない美しいデザインは飾りに過ぎません。両者を分ける原則をご紹介します。",
      },
    },
  },
  {
    slug: "checklist-sebelum-launch",
    title: "Checklist Sebelum Website Live",
    excerpt:
      "Website yang siap launch bukan yang tampil bagus — tapi yang lolos 15 pemeriksaan ini.",
    category: "Website Development",
    publishedAt: "2025-03-05",
    readingTime: 4,
    content: `
Banyak website diluncurkan dengan buru-buru dan menghasilkan masalah yang seharusnya bisa dicegah. Berikut checklist yang kami pakai sebelum menekan tombol deploy.

## Teknis

- Semua halaman bisa diakses tanpa error 404
- SSL/HTTPS aktif dengan redirect dari HTTP
- Formulir kontak mengirim pesan ke WhatsApp/email yang benar
- Gambar termampatkan — halaman load di bawah 3 detik
- Meta title dan description di setiap halaman sudah terisi
- Favicon muncul di tab browser

## Konten

- Tidak ada teks placeholder ("Lorem ipsum") yang tertinggal
- Semua tautan berfungsi (internal dan eksternal)
- Nomor WhatsApp dan email sudah benar
- Copyright tahun benar
- Alamat fisik (kalau ada) sesuai

## Mobile

- Tampil baik di 375px (iPhone SE/12 mini)
- Tombol bisa diklik tanpa zoom
- Menu mobile berfungsi
- Tidak ada horizontal scroll

## SEO & Analytics

- Sitemap dan robots.txt bisa diakses
- Google Analytics / Search Console terpasang
- Structured data (kalau ada) valid

**Tips:** buka website di mode incognito sebelum launch — ini menghindari cache yang mungkin menyembunyikan masalah.
    `.trim(),
    translations: {
      en: {
        title: "Checklist Before Going Live",
        excerpt:
          "A launch-ready website isn't about looking good — it's about passing these 15 checks.",
        content: `
Many websites launch in a rush and produce problems that could have been prevented. Here's the checklist we use before pressing deploy.

## Technical

- All pages accessible without 404 errors
- SSL/HTTPS active with HTTP redirect
- Contact form sends messages to the correct WhatsApp/email
- Images compressed — pages load in under 3 seconds
- Meta title and description filled on every page
- Favicon appears in browser tabs

## Content

- No placeholder text ("Lorem ipsum") left behind
- All links work (internal and external)
- WhatsApp number and email are correct
- Copyright year accurate
- Physical address (if any) correct

## Mobile

- Looks good at 375px (iPhone SE/12 mini)
- Buttons clickable without zooming
- Mobile menu works
- No horizontal scrolling

## SEO & Analytics

- Sitemap and robots.txt accessible
- Google Analytics / Search Console connected
- Structured data (if any) valid

**Tip:** open the site in incognito before launch — this avoids cache hiding issues.
        `.trim(),
      },
      ko: {
        title: "라이브 전 체크리스트",
        excerpt: "출시 준비된 웹사이트는 잘 보이는 것이 아니라 15가지 검사를 통과하는 것입니다.",
      },
      zh: {
        title: "上线前的检查清单",
        excerpt: "准备好上线的网站不是看起来好看——而是通过了这 15 项检查。",
      },
      ja: {
        title: "公開前のチェックリスト",
        excerpt: "公開準備が整ったウェブサイトは見栄えではなく、15項目のチェックを通過していることです。",
      },
    },
  },
  {
    slug: "seo-lokal-umkm",
    title: "SEO Lokal untuk UMKM: Cara Muncul Saat Orang Mencari di Sekitar",
    excerpt:
      "Kalau bisnis Anda tidak muncul saat orang mencari 'bengkel di [kota]', Anda kehilangan pelanggan setiap hari.",
    category: "SEO",
    publishedAt: "2025-03-25",
    readingTime: 5,
    content: `
SEO lokal berbeda dari SEO biasa. Tujuannya bukan bersaing di seluruh Indonesia — tapi muncul saat orang **di sekitar** mencari produk atau jasa Anda.

## Tiga Elemen Kunci

**1. Google Business Profile.** Ini yang muncul pertama saat orang mencari bisnis lokal. Gratis, dan wajib diisi: alamat, jam buka, foto, nomor telepon.

**2. Konsistensi NAP.** Nama, Alamat, dan Nomor telepon harus **sama persis** di semua platform — website, Google Business, Instagram, direktori lokal. Google memverifikasi konsistensi ini.

**3. Halaman khusus lokasi.** Untuk bisnis multi-cabang, setiap cabang butuh halaman sendiri dengan alamat dan jam operasional masing-masing.

## Kata Kunci Lokal

Riset kata kunci yang menyertakan nama kota atau daerah:

- "bengkel motor Pangandaran" (bukan hanya "bengkel motor")
- "salon kecantikan Bandung" (bukan hanya "salon kecantikan")
- "catering pernikahan Jakarta"

Gunakan di: title, meta description, H1, isi konten, dan alt text gambar.

## Review adalah Segalanya

Google memberi bobot besar pada review pelanggan untuk hasil pencarian lokal. Setelah setiap transaksi, minta pelanggan memberi review — bukan dengan membeli review, tapi dengan mempermudah prosesnya.
    `.trim(),
    translations: {
      en: {
        title: "Local SEO for SMEs: Appearing When People Search Nearby",
        excerpt:
          "If your business doesn't show up when people search for 'auto repair in [city]', you're losing customers daily.",
        content: `
Local SEO differs from regular SEO. The goal isn't to compete nationally — it's to appear when people **nearby** search for your product or service.

## Three Key Elements

**1. Google Business Profile.** This is what appears first when people search for local businesses. It's free, and mandatory to fill: address, hours, photos, phone number.

**2. NAP consistency.** Name, Address, and Phone must be **exactly the same** across platforms — website, Google Business, Instagram, local directories. Google verifies this consistency.

**3. Location-specific pages.** For multi-branch businesses, each branch needs its own page with its own address and hours.

## Local Keywords

Research keywords that include city or region names:

- "motorcycle repair Pangandaran" (not just "motorcycle repair")
- "beauty salon Bandung" (not just "beauty salon")
- "wedding catering Jakarta"

Use them in: title, meta description, H1, content, and image alt text.

## Reviews are Everything

Google weighs customer reviews heavily for local search results. After each transaction, ask customers to leave a review — not by buying reviews, but by making the process easy.
        `.trim(),
      },
      ko: {
        title: "중소기업을 위한 로컬 SEO: 근처에서 검색될 때 나타나는 법",
        excerpt: "사람들이 '[도시]의 정비소'를 검색할 때 귀하의 비즈니스가 나타나지 않으면 매일 고객을 잃고 있는 것입니다.",
      },
      zh: {
        title: "中小企业的本地 SEO：在附近搜索时出现",
        excerpt: "当人们搜索“[城市]的修车店”时，如果您的企业不出现，您每天都在流失客户。",
      },
      ja: {
        title: "中小企業のためのローカルSEO：近くで検索されたときに表示される方法",
        excerpt: "「[都市]の自動車修理工場」で検索されたときにビジネスが表示されないなら、毎日お客様を失っています。",
      },
    },
  },
  {
    slug: "maintenance-website-rutin",
    title: "Kenapa Maintenance Website Itu Penting",
    excerpt:
      "Website bukan proyek sekali jadi. Tanpa perawatan, ia perlahan menjadi beban — bukan aset.",
    category: "Technology",
    publishedAt: "2025-04-10",
    readingTime: 4,
    content: `
Banyak pemilik bisnis menganggap website sebagai proyek sekali jadi: bayar, terima, selesai. Padahal website bekerja seperti kendaraan — butuh perawatan rutin agar tetap berfungsi optimal.

## Apa yang Terjadi Tanpa Maintenance

**1. Celah keamanan.** CMS, plugin, dan library butuh update. Tanpa update, celah keamanan terbuka dan bisa dieksploitasi.

**2. Performa menurun.** Database membengkak, gambar tidak dioptimasi, cache tidak dibersihkan. Website makin lambat.

**3. Konten kedaluwarsa.** Info kontak berubah, penawaran baru tidak muncul, atau tim bertambah tapi struktur tidak update.

**4. Backup tidak ada.** Kalau server crash, semua konten hilang tanpa cadangan.

## Tiga Level Maintenance

**Basic (bulanan ringan):** backup, update keamanan, cek uptime. Cocok untuk website statis.

**Standard:** basic + pembaruan konten 1-2 kali/bulan + laporan performa.

**Active:** standard + audit SEO bulanan + optimasi berkelanjutan. Cocok untuk bisnis yang mengandalkan website sebagai kanal utama.

## Kapan Mulai?

Sejak hari pertama website live. Maintenance preventif jauh lebih murah daripada perbaikan darurat setelah website down.
    `.trim(),
    translations: {
      en: {
        title: "Why Website Maintenance Matters",
        excerpt:
          "A website isn't a one-off project. Without care, it slowly becomes a liability — not an asset.",
        content: `
Many business owners treat their website as a one-time project: pay, receive, done. But a website works like a vehicle — it needs routine maintenance to function optimally.

## What Happens Without Maintenance

**1. Security vulnerabilities.** CMS, plugins, and libraries need updates. Without them, security gaps open up and can be exploited.

**2. Declining performance.** Databases grow, images aren't optimized, caches aren't cleared. The site gets slower.

**3. Outdated content.** Contact info changes, new offers don't appear, or the team grows but the structure isn't updated.

**4. No backups.** If the server crashes, all content is lost without a backup.

## Three Levels of Maintenance

**Basic (light monthly):** backups, security updates, uptime checks. Good for static sites.

**Standard:** basic + content updates 1-2x/month + performance reports.

**Active:** standard + monthly SEO audits + ongoing optimization. Good for businesses relying on the site as the main channel.

## When to Start?

From the very first day the site goes live. Preventive maintenance is far cheaper than emergency repairs after a crash.
        `.trim(),
      },
      ko: {
        title: "웹사이트 유지보수가 중요한 이유",
        excerpt: "웹사이트는 일회성 프로젝트가 아닙니다. 관리 없이는 자산이 아니라 부담이 됩니다.",
      },
      zh: {
        title: "为什么网站维护很重要",
        excerpt: "网站不是一次性项目。如果没有维护，它会慢慢成为负担——而不是资产。",
      },
      ja: {
        title: "ウェブサイトメンテナンスが重要な理由",
        excerpt: "ウェブサイトは一度きりのプロジェクトではありません。手入れをしないと、資産ではなく負債になっていきます。",
      },
    },
  },
  {
    slug: "harga-website-murah-vs-berkualitas",
    title: "Website Murah vs Berkualitas: Apa Bedanya?",
    excerpt:
      "Selisih harga website bisa 10x lipat. Ini yang membedakan website Rp 750rb dari yang Rp 8 juta.",
    category: "Business Digitalization",
    publishedAt: "2025-04-28",
    readingTime: 5,
    content: `
Saat mencari jasa pembuatan website, Anda akan menemukan rentang harga yang sangat lebar — dari ratusan ribu hingga puluhan juta. Kenapa bisa begitu?

## Yang Membedakan

**1. Desain.** Template dari ThemeForest bisa dipasang dalam 2 jam. Desain custom butuh riset, wireframe, iterasi. Hasilnya beda jauh dalam hal kesesuaian dengan brand.

**2. Kode.** Template murah biasanya "dipaksakan" — banyak plugin untuk menutupi kekurangan. Hasil: website berat, lambat, sulit dikembangkan.

**3. SEO.** Website murah sering mengabaikan struktur heading, meta tag, kecepatan. Website berkualitas dibangun dengan SEO sebagai fondasi.

**4. Support.** Setelah website live, siapa yang bisa dihubungi kalau ada masalah? Ini sering terlupakan saat membandingkan harga.

**5. Skalabilitas.** Website murah sulit ditambah fitur. Website berkualitas dibangun dengan arsitektur yang bisa tumbuh.

## Kapan Murah Cukup?

Untuk landing page sederhana atau validasi ide bisnis, microsite Rp 750rb sudah cukup. Anda butuh presence digital dasar tanpa investasi besar.

## Kapan Butuh Investasi Lebih?

Kalau website adalah kanal utama bisnis, atau ada rencana pengembangan dalam 1-2 tahun ke depan, investasi Rp 3-15 juta adalah fondasi yang lebih bijak.

**Prinsip:** bayar untuk apa yang Anda butuhkan hari ini, tapi pastikan bisa dikembangkan untuk apa yang Anda butuhkan besok.
    `.trim(),
    translations: {
      en: {
        title: "Cheap vs Quality Websites: What's the Difference?",
        excerpt:
          "Website price gaps can be 10x. Here's what separates an Rp 750k site from an Rp 8 million one.",
        content: `
When shopping for web development services, you'll find an extremely wide price range — from hundreds of thousands to tens of millions. Why?

## What Separates Them

**1. Design.** ThemeForest templates can be installed in 2 hours. Custom design requires research, wireframes, iteration. The results differ greatly in brand fit.

**2. Code.** Cheap templates are usually "forced" — many plugins compensate for weaknesses. Result: heavy, slow sites that are hard to extend.

**3. SEO.** Cheap sites often ignore heading structure, meta tags, speed. Quality sites are built with SEO as the foundation.

**4. Support.** After launch, who do you contact if there's a problem? This is often forgotten when comparing prices.

**5. Scalability.** Cheap sites are hard to extend. Quality sites are built with architecture that can grow.

## When Is Cheap Enough?

For a simple landing page or business idea validation, an Rp 750k microsite is enough. You need basic digital presence without heavy investment.

## When Is More Investment Needed?

If the website is the main business channel, or you plan to develop features within 1-2 years, an Rp 3-15 million investment is a wiser foundation.

**Principle:** pay for what you need today, but ensure it can grow for what you need tomorrow.
        `.trim(),
      },
      ko: {
        title: "저렴한 웹사이트 vs 품질 웹사이트: 무엇이 다른가",
        excerpt: "웹사이트 가격 차이는 10배까지 납니다. 75만 루피아 사이트와 800만 루피아 사이트를 구분하는 요소입니다.",
      },
      zh: {
        title: "便宜网站 vs 优质网站：有什么区别？",
        excerpt: "网站价格差距可达 10 倍。以下是 75 万印尼盾网站与 800 万印尼盾网站的区别。",
      },
      ja: {
        title: "安いウェブサイト vs 高品質ウェブサイト：何が違うのか",
        excerpt: "ウェブサイトの価格差は10倍にもなります。75万ルピアのサイトと800万ルピアのサイトを分ける要素です。",
      },
    },
  },
  // ─── 3 existing posts migrated ───
  {
    slug: "memilih-jasa-web-development",
    title: "Cara Memilih Jasa Web Development untuk Bisnis Kecil",
    excerpt:
      "Bukan sekadar harga termurah. Ada beberapa hal yang perlu Anda periksa sebelum menyerahkan project website ke pihak lain.",
    category: "Business Digitalization",
    publishedAt: "2025-01-12",
    readingTime: 6,
    content: `
Memilih jasa web development bukan sekadar soal harga. Berikut kriteria yang perlu Anda periksa sebelum memutuskan.

## 1. Portofolio yang Relevan

Lihat apakah studio tersebut pernah mengerjakan project untuk industri yang mirip dengan Anda. Portofolio yang relevan menunjukkan pemahaman yang lebih dalam.

## 2. Transparansi Proses

Studio yang baik akan menjelaskan prosesnya sejak awal — discovery, design, development, launch — dengan timeline yang realistis.

## 3. Kepemilikan Kode

Pastikan source code menjadi milik Anda sepenuhnya setelah project selesai. Ini penting untuk pengembangan di masa depan.

## 4. Support Setelah Launch

Apa yang terjadi kalau ada masalah setelah website live? Apakah ada masa garansi? Berapa biaya maintenance?

## 5. Harga yang Wajar

Harga termurah belum tentu terbaik. Harga tertinggi belum tentu sesuai kebutuhan. Cari yang transparan tentang apa yang termasuk dan apa yang tidak.
    `.trim(),
    translations: {
      en: {
        title: "How to Choose a Web Development Service for Small Business",
        excerpt:
          "Not just the cheapest price. There are several things to check before handing your website project to someone else.",
        content: `
Choosing a web development service isn't just about price. Here are the criteria to check before you decide.

## 1. Relevant Portfolio

See whether the studio has worked on projects in industries similar to yours. A relevant portfolio shows deeper understanding.

## 2. Transparent Process

A good studio will explain its process from the start — discovery, design, development, launch — with a realistic timeline.

## 3. Code Ownership

Make sure the source code fully belongs to you after the project ends. This matters for future development.

## 4. Post-Launch Support

What happens if there's a problem after the site launches? Is there a warranty period? What's the maintenance cost?

## 5. Fair Pricing

The cheapest isn't necessarily best. The highest isn't necessarily right for your needs. Look for transparency about what's included and what's not.
        `.trim(),
      },
      ko: {
        title: "소규모 비즈니스를 위한 웹 개발 서비스 선택 방법",
        excerpt: "단순히 가장 저렴한 가격이 아닙니다. 웹사이트 프로젝트를 다른 사람에게 맡기기 전에 확인해야 할 몇 가지가 있습니다.",
      },
      zh: {
        title: "如何为小型企业选择网站开发服务",
        excerpt: "不仅仅是价格最便宜。在将网站项目交给他人之前，您需要检查几个要点。",
      },
      ja: {
        title: "中小企業のためのウェブ開発サービスの選び方",
        excerpt: "単に最も安い価格というわけではありません。ウェブサイトプロジェクトを他人に任せる前に確認すべきことがあります。",
      },
    },
  },
  {
    slug: "landing-page-vs-company-profile",
    title: "Landing Page vs Company Profile: Mana yang Bisnis Anda Butuhkan?",
    excerpt:
      "Dua jenis website ini sering dianggap sama. Padahal tujuan, struktur, dan cara mengukurnya berbeda.",
    category: "Website Development",
    publishedAt: "2025-02-03",
    readingTime: 5,
    content: `
Banyak pemilik bisnis datang dengan satu pertanyaan: "Saya butuh website." Tapi website seperti apa?

## Landing Page: Satu Tujuan, Satu Halaman

Landing page dirancang untuk satu aksi spesifik — mendaftar, membeli, atau menghubungi. Strukturnya linear: headline, penawaran, bukti, CTA.

Cocok untuk campaign iklan digital, peluncuran produk baru, atau validasi ide bisnis.

## Company Profile: Pusat Informasi

Company profile adalah website multi-halaman yang menjadi wajah resmi bisnis. Isinya profil, layanan, portofolio, dan kontak.

Cocok untuk bisnis yang ingin tampil kredibel, perusahaan yang sering menerima pertanyaan profil, atau brand yang ingin memiliki pusat informasi resmi.

## Kapan Menggunakan Keduanya?

Tidak jarang bisnis membutuhkan keduanya: company profile sebagai fondasi, dan landing page terpisah untuk campaign tertentu.

Keputusan terbaik datang dari pemahaman tujuan bisnis, bukan dari tren.
    `.trim(),
    translations: {
      en: {
        title: "Landing Page vs Company Profile: Which Does Your Business Need?",
        excerpt:
          "These two types of websites are often treated as the same. Yet their purpose, structure, and metrics differ.",
        content: `
Many business owners come with one question: "I need a website." But which kind?

## Landing Page: One Goal, One Page

A landing page is designed for one specific action — sign up, buy, or contact. Its structure is linear: headline, offer, proof, CTA.

Perfect for digital ad campaigns, product launches, or business idea validation.

## Company Profile: Central Hub

A company profile is a multi-page website that becomes the official face of your business. It contains profile, services, portfolio, and contact.

Perfect for businesses that want to appear credible, companies that often receive profile inquiries, or brands wanting a central hub.

## When to Use Both?

Businesses often need both: a company profile as the foundation, and a separate landing page for specific campaigns.

The best decision comes from understanding your business goals, not from trends.
        `.trim(),
      },
      ko: {
        title: "랜딩 페이지 vs 회사 소개: 귀하의 비즈니스에는 어느 것이 필요한가?",
        excerpt: "이 두 유형의 웹사이트는 종종 같은 것으로 취급됩니다. 그러나 목적, 구조, 측정 방식이 다릅니다.",
      },
      zh: {
        title: "落地页 vs 企业官网：您的企业需要哪个？",
        excerpt: "这两种类型的网站经常被混为一谈。然而它们的目的、结构和衡量方式各不相同。",
      },
      ja: {
        title: "ランディングページ vs 会社概要：あなたのビジネスに必要なのは？",
        excerpt: "この2種類のウェブサイトはしばしば同じものとして扱われますが、目的、構造、測定方法が異なります。",
      },
    },
  },
  {
    slug: "kecepatan-website-dan-konversi",
    title: "Mengapa Kecepatan Website Berpengaruh pada Konversi",
    excerpt:
      "Pengunjung tidak menunggu. Website yang lambat kehilangan calon pelanggan sebelum mereka sempat membaca penawaran Anda.",
    category: "SEO",
    publishedAt: "2025-03-18",
    readingTime: 7,
    content: `
Kecepatan website bukan sekadar soal teknis. Ia adalah variabel bisnis yang langsung memengaruhi berapa banyak pengunjung yang berubah menjadi pelanggan.

## Data yang Tidak Bisa Diabaikan

- Setiap detik tambahan loading menurunkan konversi sekitar 7%
- 53% pengunjung meninggalkan halaman yang butuh lebih dari 3 detik
- Mobile users lebih tidak sabar dari desktop users

## Penyebab Umum Website Lambat

**1. Gambar tidak dioptimasi.** Gambar 3 MB di-serve apa adanya — padahal bisa dikompres jadi 200 KB tanpa kehilangan kualitas visual.

**2. Terlalu banyak plugin.** Setiap plugin menambah file JS/CSS yang perlu di-load browser.

**3. Hosting murah.** Server lambat, uptime buruk, tanpa CDN.

**4. Render-blocking resources.** Font, CSS, dan script yang memblokir render awal halaman.

## Cara Memperbaiki

- **Kompres gambar** ke WebP atau AVIF
- **Lazy load** gambar di bawah fold
- **Gunakan CDN** untuk aset statis
- **Audit plugin** — hapus yang tidak dipakai
- **Ukur dengan Lighthouse** — target skor 90+

## Dampak Bisnis

Website yang cepat tidak hanya lebih baik di SEO. Ia juga **meningkatkan konversi** karena pengunjung bisa fokus pada penawaran — bukan menunggu loading spinner.
    `.trim(),
    translations: {
      en: {
        title: "Why Website Speed Affects Conversion",
        excerpt:
          "Visitors don't wait. Slow websites lose prospects before they finish reading your offer.",
        content: `
Website speed isn't just technical. It's a business variable that directly affects how many visitors convert into customers.

## Data You Can't Ignore

- Each extra second of loading drops conversion by around 7%
- 53% of visitors leave pages that take more than 3 seconds
- Mobile users are less patient than desktop users

## Common Causes of Slow Websites

**1. Unoptimized images.** A 3 MB image is served as-is — though it could be compressed to 200 KB without losing visual quality.

**2. Too many plugins.** Each plugin adds JS/CSS files the browser must load.

**3. Cheap hosting.** Slow servers, poor uptime, no CDN.

**4. Render-blocking resources.** Fonts, CSS, and scripts that block initial page rendering.

## How to Fix It

- **Compress images** to WebP or AVIF
- **Lazy load** images below the fold
- **Use a CDN** for static assets
- **Audit plugins** — remove unused ones
- **Measure with Lighthouse** — target 90+ score

## Business Impact

Fast websites aren't just better for SEO. They **increase conversion** because visitors can focus on the offer — not waiting for a loading spinner.
        `.trim(),
      },
      ko: {
        title: "웹사이트 속도가 전환에 영향을 미치는 이유",
        excerpt: "방문자는 기다리지 않습니다. 느린 웹사이트는 잠재 고객이 제안을 다 읽기 전에 잃습니다.",
      },
      zh: {
        title: "为什么网站速度影响转化",
        excerpt: "访客不会等待。加载缓慢的网站会在潜在客户读完您的报价之前就流失他们。",
      },
      ja: {
        title: "ウェブサイトの速度がコンバージョンに影響する理由",
        excerpt: "訪問者は待ちません。遅いウェブサイトは見込み客がオファーを読み終える前に失います。",
      },
    },
  },
];