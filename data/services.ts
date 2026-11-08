// data/services.ts
import type { Locale } from "@/components/LanguageProvider";

export type ServiceTranslation = {
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  pricingReference: string;
  features?: string[];
  benefits?: string[];
  problems?: string[];
  process?: { step: string; description: string }[];
  faq?: { question: string; answer: string }[];
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  problems: string[];
  features: string[];
  benefits: string[];
  process: { step: string; description: string }[];
  faq: { question: string; answer: string }[];
  pricingReference: string;
  relatedProjectSlugs: string[];
  translations?: Partial<Record<Exclude<Locale, "id">, ServiceTranslation>>;
};

export const services: Service[] = [
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    shortTitle: "Landing Page",
    description:
      "Website satu halaman yang berfokus pada promosi produk atau jasa.",
    longDescription:
      "Landing page dirancang untuk satu tujuan: mengubah pengunjung menjadi leads atau pembeli. Kami membangun halaman yang cepat, terarah, dan bebas distraksi — cocok untuk campaign, peluncuran produk, atau validasi ide bisnis.",
    icon: "Rocket",
    problems: [
      "Banyak bisnis promosi lewat Instagram, tapi tidak punya halaman yang bisa menjelaskan produk secara utuh.",
      "Calon pembeli ragu karena tidak ada informasi terstruktur tentang penawaran.",
      "Biaya iklan keluar, tapi konversi rendah karena tidak ada landing page yang fokus.",
    ],
    features: [
      "Desain custom satu halaman",
      "Struktur copywriting yang mengarah ke konversi",
      "Form inquiry atau integrasi WhatsApp",
      "Responsive di semua perangkat",
      "SEO dasar (meta, heading, kecepatan)",
    ],
    benefits: [
      "Meningkatkan konversi campaign digital",
      "Menjelaskan penawaran secara jelas dalam satu halaman",
      "Mudah dibagikan di bio Instagram atau iklan",
    ],
    process: [
      { step: "Brief", description: "Memahami produk, target audiens, dan tujuan konversi." },
      { step: "Struktur", description: "Menyusun alur halaman dan copywriting." },
      { step: "Desain & Build", description: "Desain visual dan implementasi responsif." },
      { step: "Launch", description: "Testing, optimasi kecepatan, dan publikasi." },
    ],
    faq: [
      {
        question: "Berapa lama pengerjaan landing page?",
        answer:
          "Estimasi 5–10 hari kerja tergantung kompleksitas dan kecepatan feedback.",
      },
      {
        question: "Apakah bisa request desain tertentu?",
        answer:
          "Kami membahas referensi visual di tahap brief. Desain tetap custom, bukan menyalin template.",
      },
    ],
    pricingReference: "Mulai dari Rp 1,5 juta",
    relatedProjectSlugs: ["beauty-studio", "digital-business-platform"],
    translations: {
      en: {
        title: "Landing Page Development",
        shortTitle: "Landing Page",
        description: "A single-page website focused on promoting a product or service.",
        longDescription:
          "A landing page is designed for one goal: converting visitors into leads or buyers. We build fast, focused, distraction-free pages — great for campaigns, product launches, or business idea validation.",
        problems: [
          "Many businesses promote on Instagram but don't have a page that can explain their product fully.",
          "Prospects hesitate because there's no structured information about the offer.",
          "Ad spend goes out, but conversion is low because there's no focused landing page.",
        ],
        features: [
          "Custom single-page design",
          "Conversion-driven copywriting structure",
          "Inquiry form or WhatsApp integration",
          "Responsive across all devices",
          "Basic SEO (meta, headings, speed)",
        ],
        benefits: [
          "Improves digital campaign conversion",
          "Explains your offer clearly on one page",
          "Easy to share in bio links or ads",
        ],
        process: [
          { step: "Brief", description: "Understanding the product, target audience, and conversion goal." },
          { step: "Structure", description: "Structuring the page flow and copywriting." },
          { step: "Design & Build", description: "Visual design and responsive implementation." },
          { step: "Launch", description: "Testing, speed optimization, and publishing." },
        ],
        faq: [
          {
            question: "How long does a landing page take?",
            answer: "Estimated 5–10 business days depending on complexity and feedback speed.",
          },
          {
            question: "Can I request a specific design?",
            answer:
              "We discuss visual references at the brief stage. Designs remain custom, never template copies.",
          },
        ],
        pricingReference: "Starting from Rp 1.5 million",
      },
      ko: {
        title: "랜딩 페이지 개발",
        shortTitle: "랜딩 페이지",
        description: "제품 또는 서비스 홍보에 집중한 단일 페이지 웹사이트.",
        longDescription:
          "랜딩 페이지는 방문자를 리드 또는 구매자로 전환하는 한 가지 목적을 위해 설계됩니다. 빠르고 집중적이며 방해 요소가 없는 페이지를 만듭니다 — 캠페인, 제품 출시, 비즈니스 아이디어 검증에 적합합니다.",
        features: [
          "커스텀 단일 페이지 디자인",
          "전환 중심 카피라이팅 구조",
          "문의 양식 또는 WhatsApp 연동",
          "모든 기기에서 반응형",
          "기본 SEO (메타, 제목, 속도)",
        ],
        benefits: [
          "디지털 캠페인 전환율 향상",
          "한 페이지에서 명확한 제안 설명",
          "바이오 링크나 광고에서 쉽게 공유",
        ],
        pricingReference: "150만 루피아부터",
      },
      zh: {
        title: "落地页开发",
        shortTitle: "落地页",
        description: "专注于产品或服务推广的单页网站。",
        longDescription:
          "落地页围绕一个目标设计：将访客转化为线索或买家。我们构建快速、专注、无干扰的页面——非常适合营销活动、产品发布或商业创意验证。",
        features: [
          "定制单页设计",
          "以转化为导向的文案结构",
          "询问表单或 WhatsApp 集成",
          "适配所有设备",
          "基础 SEO（元标签、标题、速度）",
        ],
        benefits: [
          "提升数字营销转化率",
          "单页清晰阐释您的报价",
          "易于在 bio 链接或广告中分享",
        ],
        pricingReference: "起价 150 万印尼盾",
      },
      ja: {
        title: "ランディングページ開発",
        shortTitle: "ランディングページ",
        description: "製品やサービスのプロモーションに特化した1ページウェブサイト。",
        longDescription:
          "ランディングページは、訪問者をリードや購入者に転換するという1つの目的のために設計されています。高速で焦点を絞った、気が散らないページを構築します — キャンペーン、製品ローンチ、ビジネスアイデアの検証に最適です。",
        features: [
          "カスタム単一ページデザイン",
          "コンバージョン重視のコピーライティング構成",
          "お問い合わせフォームまたはWhatsApp連携",
          "すべてのデバイスでレスポンシブ",
          "基本SEO（メタ、見出し、速度）",
        ],
        benefits: [
          "デジタルキャンペーンのコンバージョン向上",
          "1ページで明確なオファーの説明",
          "プロフィールリンクや広告で共有しやすい",
        ],
        pricingReference: "150万ルピアから",
      },
    },
  },
  {
    slug: "business-website",
    title: "Business / Company Profile Website",
    shortTitle: "Company Profile",
    description:
      "Website profesional untuk bisnis, UMKM, perusahaan, salon, catering, bengkel, dan brand.",
    longDescription:
      "Website company profile adalah wajah digital bisnis Anda. Kami membangun website multi-halaman yang menampilkan profil, layanan, portofolio, dan informasi kontak secara profesional — sehingga calon klien percaya sebelum menghubungi Anda.",
    icon: "Building2",
    problems: [
      "Bisnis terlihat kurang kredibel karena hanya mengandalkan media sosial.",
      "Calon klien sulit menemukan informasi layanan dan kontak secara lengkap.",
      "Tidak ada pusat informasi resmi yang bisa dibagikan.",
    ],
    features: [
      "Hingga 5–10 halaman",
      "Halaman profil, layanan, portofolio, kontak",
      "Desain custom sesuai brand",
      "Responsive design",
      "SEO dasar dan Google Maps",
      "Form kontak / WhatsApp",
    ],
    benefits: [
      "Meningkatkan kepercayaan calon klien",
      "Menjadi pusat informasi resmi bisnis",
      "Mudah ditemukan di Google untuk nama brand",
    ],
    process: [
      { step: "Discovery", description: "Memetakan profil bisnis, layanan, dan audiens." },
      { step: "Information Architecture", description: "Menyusun struktur halaman." },
      { step: "Design", description: "Desain visual yang konsisten dengan brand." },
      { step: "Development", description: "Implementasi responsif dan optimasi." },
      { step: "Launch", description: "Testing dan serah terima." },
    ],
    faq: [
      {
        question: "Apakah termasuk domain dan hosting?",
        answer:
          "Domain dan hosting dapat kami bantu urus, namun biayanya terpisah dari jasa pengembangan. Kami akan transparan di penawaran.",
      },
      {
        question: "Apakah bisa update konten sendiri?",
        answer:
          "Untuk paket tertentu kami menyediakan CMS sederhana. Detailnya dibahas saat brief.",
      },
    ],
    pricingReference: "Mulai dari Rp 3,5 juta",
    relatedProjectSlugs: ["automotive-pangandaran", "beauty-studio"],
    translations: {
      en: {
        title: "Business / Company Profile Website",
        shortTitle: "Company Profile",
        description:
          "Professional websites for businesses, SMEs, companies, salons, catering, auto shops, and brands.",
        longDescription:
          "A company profile website is your business's digital face. We build multi-page websites that professionally showcase your profile, services, portfolio, and contact info — so prospects trust you before reaching out.",
        problems: [
          "Businesses look less credible because they only rely on social media.",
          "Prospects struggle to find complete service and contact information.",
          "There's no official information hub to share.",
        ],
        features: [
          "Up to 5–10 pages",
          "Profile, services, portfolio, contact pages",
          "Custom brand-aligned design",
          "Responsive design",
          "Basic SEO and Google Maps",
          "Contact form / WhatsApp",
        ],
        benefits: [
          "Boosts prospect trust",
          "Becomes the official business information hub",
          "Easier to find on Google for brand name",
        ],
        process: [
          { step: "Discovery", description: "Mapping business profile, services, and audience." },
          { step: "Information Architecture", description: "Structuring the page hierarchy." },
          { step: "Design", description: "Brand-consistent visual design." },
          { step: "Development", description: "Responsive implementation and optimization." },
          { step: "Launch", description: "Testing and handover." },
        ],
        faq: [
          {
            question: "Is domain and hosting included?",
            answer:
              "We can help set up domain and hosting, but their costs are separate from development. We're transparent in the proposal.",
          },
          {
            question: "Can I update content myself?",
            answer:
              "For certain packages we provide a simple CMS. Details are discussed at the brief.",
          },
        ],
        pricingReference: "Starting from Rp 3.5 million",
      },
      ko: {
        title: "비즈니스 / 회사 소개 웹사이트",
        shortTitle: "회사 소개",
        description: "비즈니스, 중소기업, 회사, 살롱, 케이터링, 자동차 정비소, 브랜드를 위한 전문 웹사이트.",
        longDescription:
          "회사 소개 웹사이트는 비즈니스의 디지털 얼굴입니다. 프로필, 서비스, 포트폴리오, 연락처 정보를 전문적으로 보여주는 다중 페이지 웹사이트를 구축합니다 — 잠재 고객이 연락하기 전에 신뢰할 수 있도록 합니다.",
        features: [
          "최대 5–10 페이지",
          "프로필, 서비스, 포트폴리오, 연락처 페이지",
          "브랜드에 맞춘 커스텀 디자인",
          "반응형 디자인",
          "기본 SEO와 Google Maps",
          "연락 양식 / WhatsApp",
        ],
        benefits: [
          "잠재 고객의 신뢰 향상",
          "공식 비즈니스 정보 허브",
          "브랜드명으로 Google에서 쉽게 발견",
        ],
        pricingReference: "350만 루피아부터",
      },
      zh: {
        title: "商业 / 企业官网",
        shortTitle: "企业官网",
        description: "为企业、中小企业、公司、美容院、餐饮、汽修店和品牌提供的专业网站。",
        longDescription:
          "企业官网是企业的数字门面。我们构建多页网站，专业地展示您的资料、服务、作品集和联系方式——让潜在客户在联系您之前就建立信任。",
        features: [
          "最多 5–10 页",
          "简介、服务、作品集、联系方式页",
          "与品牌一致的定制设计",
          "响应式设计",
          "基础 SEO 和 Google Maps",
          "联系表单 / WhatsApp",
        ],
        benefits: [
          "提升潜在客户信任",
          "成为企业官方信息枢纽",
          "在 Google 上更容易通过品牌名找到",
        ],
        pricingReference: "起价 350 万印尼盾",
      },
      ja: {
        title: "ビジネス / 会社概要ウェブサイト",
        shortTitle: "会社概要",
        description: "ビジネス、中小企業、企業、サロン、ケータリング、自動車整備工場、ブランドのためのプロフェッショナルウェブサイト。",
        longDescription:
          "会社概要ウェブサイトはビジネスのデジタルな顔です。プロフィール、サービス、ポートフォリオ、連絡先情報をプロフェッショナルに紹介する複数ページのウェブサイトを構築します — 見込み客が連絡する前に信頼を得られます。",
        features: [
          "最大5〜10ページ",
          "プロフィール、サービス、ポートフォリオ、連絡先ページ",
          "ブランドに合わせたカスタムデザイン",
          "レスポンシブデザイン",
          "基本SEOとGoogle Maps",
          "お問い合わせフォーム / WhatsApp",
        ],
        benefits: [
          "見込み客の信頼向上",
          "公式ビジネス情報ハブになる",
          "ブランド名でGoogleから見つけやすい",
        ],
        pricingReference: "350万ルピアから",
      },
    },
  },
  {
    slug: "custom-web-application",
    title: "Custom Web Application",
    shortTitle: "Web App Custom",
    description: "Aplikasi web sesuai kebutuhan bisnis.",
    longDescription:
      "Ketika kebutuhan bisnis tidak bisa dipenuhi website standar, kami membangun aplikasi web custom — mulai dari dashboard internal, sistem booking, hingga platform dengan alur kerja spesifik.",
    icon: "Code2",
    problems: [
      "Proses bisnis masih manual dan memakan waktu.",
      "Butuh sistem login, hak akses, atau dashboard yang tidak tersedia di template.",
      "Data tersebar dan sulit dipantau.",
    ],
    features: [
      "Arsitektur sesuai kebutuhan",
      "Autentikasi dan hak akses pengguna",
      "Dashboard dan laporan",
      "Integrasi API / pembayaran",
      "Dokumentasi ruang lingkup",
    ],
    benefits: [
      "Mengotomatiskan proses bisnis",
      "Data terpusat dan mudah dipantau",
      "Sistem bisa dikembangkan seiring pertumbuhan bisnis",
    ],
    process: [
      { step: "Discovery", description: "Memetakan alur kerja dan kebutuhan sistem." },
      { step: "Scoping", description: "Menyusun ruang lingkup dan prioritas fitur." },
      { step: "Development", description: "Pengembangan iteratif dengan review berkala." },
      { step: "Testing", description: "Uji fungsi, keamanan, dan performa." },
      { step: "Launch", description: "Deployment dan dokumentasi." },
    ],
    faq: [
      {
        question: "Berapa estimasi biaya web app custom?",
        answer:
          "Mulai dari Rp 15 juta, tergantung kompleksitas fitur dan integrasi. Penawaran final mengikuti brief.",
      },
      {
        question: "Apakah bisa dikembangkan bertahap?",
        answer:
          "Ya. Kami menyarankan pendekatan bertahap: fitur inti dulu, lalu penambahan sesuai kebutuhan.",
      },
    ],
    pricingReference: "Mulai dari Rp 15 juta",
    relatedProjectSlugs: ["digital-business-platform", "otak-kancil"],
    translations: {
      en: {
        title: "Custom Web Application",
        shortTitle: "Custom Web App",
        description: "Web application tailored to your business needs.",
        longDescription:
          "When business needs can't be met by standard websites, we build custom web applications — from internal dashboards and booking systems to platforms with specific workflows.",
        problems: [
          "Business processes are still manual and time-consuming.",
          "You need login, access control, or dashboards not available in templates.",
          "Data is scattered and hard to monitor.",
        ],
        features: [
          "Architecture tailored to needs",
          "Authentication and user access control",
          "Dashboards and reports",
          "API / payment integration",
          "Scope documentation",
        ],
        benefits: [
          "Automates business processes",
          "Centralized, easy-to-monitor data",
          "System that can grow with your business",
        ],
        process: [
          { step: "Discovery", description: "Mapping workflows and system requirements." },
          { step: "Scoping", description: "Defining scope and feature priorities." },
          { step: "Development", description: "Iterative development with regular reviews." },
          { step: "Testing", description: "Function, security, and performance testing." },
          { step: "Launch", description: "Deployment and documentation." },
        ],
        faq: [
          {
            question: "What's the estimated cost of a custom web app?",
            answer:
              "Starting from Rp 15 million, depending on feature complexity and integrations. Final quote follows the brief.",
          },
          {
            question: "Can it be built in stages?",
            answer:
              "Yes. We recommend a phased approach: core features first, then additions as needed.",
          },
        ],
        pricingReference: "Starting from Rp 15 million",
      },
      ko: {
        title: "맞춤 웹 애플리케이션",
        shortTitle: "맞춤 웹 앱",
        description: "비즈니스 요구사항에 맞춘 웹 애플리케이션.",
        longDescription:
          "표준 웹사이트로 비즈니스 요구를 충족할 수 없을 때, 맞춤 웹 애플리케이션을 구축합니다 — 내부 대시보드, 예약 시스템, 특정 워크플로우를 갖춘 플랫폼까지.",
        features: [
          "요구사항에 맞춘 아키텍처",
          "인증 및 사용자 접근 제어",
          "대시보드 및 보고서",
          "API / 결제 연동",
          "범위 문서화",
        ],
        benefits: [
          "비즈니스 프로세스 자동화",
          "중앙화된 모니터링 쉬운 데이터",
          "비즈니스 성장에 맞춰 확장 가능한 시스템",
        ],
        pricingReference: "1,500만 루피아부터",
      },
      zh: {
        title: "定制 Web 应用",
        shortTitle: "定制 Web 应用",
        description: "根据业务需求定制的 Web 应用程序。",
        longDescription:
          "当标准网站无法满足业务需求时，我们构建定制 Web 应用——从内部仪表板和预约系统，到具备特定工作流程的平台。",
        features: [
          "根据需求定制的架构",
          "认证与用户访问控制",
          "仪表板与报告",
          "API / 支付集成",
          "范围文档",
        ],
        benefits: [
          "自动化业务流程",
          "集中化、易于监控的数据",
          "可随业务增长的系统",
        ],
        pricingReference: "起价 1500 万印尼盾",
      },
      ja: {
        title: "カスタムWebアプリケーション",
        shortTitle: "カスタムWebアプリ",
        description: "ビジネスニーズに合わせたウェブアプリケーション。",
        longDescription:
          "標準的なウェブサイトではビジネスニーズを満たせない場合、カスタムウェブアプリケーションを構築します — 社内ダッシュボード、予約システムから特定のワークフローを持つプラットフォームまで。",
        features: [
          "ニーズに合わせたアーキテクチャ",
          "認証とユーザーアクセス制御",
          "ダッシュボードとレポート",
          "API / 決済連携",
          "スコープのドキュメント化",
        ],
        benefits: [
          "ビジネスプロセスの自動化",
          "一元化された監視しやすいデータ",
          "ビジネスの成長に合わせて拡張できるシステム",
        ],
        pricingReference: "1,500万ルピアから",
      },
    },
  },
  {
    slug: "school-website",
    title: "School Website",
    shortTitle: "Website Sekolah",
    description:
      "Website sekolah dengan profil, informasi akademik, berita, guru, dan alumni.",
    longDescription:
      "Sekolah membutuhkan website yang informatif dan mudah diakses oleh siswa, orang tua, dan alumni. Kami membangun website sekolah yang rapi, cepat, dan mudah diperbarui.",
    icon: "GraduationCap",
    problems: [
      "Informasi sekolah tersebar di berbagai platform tidak resmi.",
      "Orang tua sulit mendapatkan informasi akademik dan kegiatan.",
      "Sekolah belum memiliki pusat informasi digital yang kredibel.",
    ],
    features: [
      "Profil sekolah dan visi misi",
      "Informasi akademik dan ekstrakurikuler",
      "Berita dan pengumuman",
      "Direktori guru dan staf",
      "Galeri kegiatan",
      "Kontak dan lokasi",
    ],
    benefits: [
      "Meningkatkan citra sekolah",
      "Memudahkan komunikasi dengan orang tua",
      "Menjadi arsip digital kegiatan sekolah",
    ],
    process: [
      { step: "Brief", description: "Mengumpulkan informasi dan struktur organisasi." },
      { step: "Design", description: "Desain yang ramah dan mudah dibaca." },
      { step: "Build", description: "Implementasi dan input konten." },
      { step: "Launch", description: "Testing dan pelatihan pengelolaan dasar." },
    ],
    faq: [
      {
        question: "Apakah bisa dikelola oleh staf sekolah?",
        answer:
          "Ya, kami dapat menyediakan CMS sederhana dan panduan penggunaan untuk staf yang ditunjuk.",
      },
    ],
    pricingReference: "Mulai dari Rp 4,5 juta",
    relatedProjectSlugs: ["otak-kancil"],
    translations: {
      en: {
        title: "School Website",
        shortTitle: "School Website",
        description:
          "School website with profile, academic info, news, teachers, and alumni.",
        longDescription:
          "Schools need websites that are informative and easy to access for students, parents, and alumni. We build school websites that are clean, fast, and easy to update.",
        problems: [
          "School information is scattered across unofficial platforms.",
          "Parents struggle to get academic and activity information.",
          "The school lacks a credible digital information hub.",
        ],
        features: [
          "School profile and vision/mission",
          "Academic and extracurricular info",
          "News and announcements",
          "Teacher and staff directory",
          "Activity gallery",
          "Contact and location",
        ],
        benefits: [
          "Improves school image",
          "Easier communication with parents",
          "Becomes a digital archive of school activities",
        ],
        process: [
          { step: "Brief", description: "Gathering information and organizational structure." },
          { step: "Design", description: "Friendly and easy-to-read design." },
          { step: "Build", description: "Implementation and content input." },
          { step: "Launch", description: "Testing and basic management training." },
        ],
        faq: [
          {
            question: "Can school staff manage it?",
            answer:
              "Yes, we can provide a simple CMS and usage guide for designated staff.",
          },
        ],
        pricingReference: "Starting from Rp 4.5 million",
      },
      ko: {
        title: "학교 웹사이트",
        shortTitle: "학교 웹사이트",
        description: "프로필, 학사 정보, 뉴스, 교사, 졸업생을 포함한 학교 웹사이트.",
        longDescription:
          "학교는 학생, 학부모, 졸업생이 쉽게 접근할 수 있는 정보성 웹사이트가 필요합니다. 깔끔하고 빠르며 관리하기 쉬운 학교 웹사이트를 구축합니다.",
        features: [
          "학교 프로필 및 비전/미션",
          "학사 및 특별활동 정보",
          "뉴스 및 공지사항",
          "교사 및 직원 디렉토리",
          "활동 갤러리",
          "연락처 및 위치",
        ],
        benefits: [
          "학교 이미지 향상",
          "학부모와의 소통 용이",
          "학교 활동의 디지털 아카이브",
        ],
        pricingReference: "450만 루피아부터",
      },
      zh: {
        title: "学校网站",
        shortTitle: "学校网站",
        description: "包含学校简介、学术信息、新闻、教师和校友的学校网站。",
        longDescription:
          "学校需要信息丰富、便于学生、家长和校友访问的网站。我们构建整洁、快速、易于更新的学校网站。",
        features: [
          "学校简介和愿景使命",
          "学术和课外活动信息",
          "新闻和公告",
          "教师和员工名录",
          "活动相册",
          "联系与位置",
        ],
        benefits: [
          "提升学校形象",
          "方便与家长沟通",
          "成为学校活动的数字档案",
        ],
        pricingReference: "起价 450 万印尼盾",
      },
      ja: {
        title: "学校ウェブサイト",
        shortTitle: "学校ウェブサイト",
        description: "プロフィール、学事情報、ニュース、教師、卒業生を備えた学校ウェブサイト。",
        longDescription:
          "学校には、生徒、保護者、卒業生が簡単にアクセスできる情報豊富なウェブサイトが必要です。清潔感があり、高速で、簡単に更新できる学校ウェブサイトを構築します。",
        features: [
          "学校プロフィールとビジョン・ミッション",
          "学事・課外活動情報",
          "ニュースとお知らせ",
          "教師・スタッフディレクトリ",
          "活動ギャラリー",
          "連絡先と所在地",
        ],
        benefits: [
          "学校イメージの向上",
          "保護者とのコミュニケーションが容易",
          "学校活動のデジタルアーカイブになる",
        ],
        pricingReference: "450万ルピアから",
      },
    },
  },
  {
    slug: "ecommerce-website",
    title: "E-Commerce Website",
    shortTitle: "E-Commerce",
    description:
      "Website toko online dengan katalog produk, informasi pesanan, dan fitur bisnis yang diperlukan.",
    longDescription:
      "Kami membangun website toko online yang tidak hanya menampilkan produk, tetapi juga mendukung alur pemesanan yang jelas — cocok untuk bisnis yang ingin memiliki kanal penjualan mandiri di luar marketplace.",
    icon: "ShoppingBag",
    problems: [
      "Bisnis hanya bergantung pada marketplace dengan biaya komisi tinggi.",
      "Tidak ada kanal penjualan langsung yang bisa dikontrol sendiri.",
      "Katalog produk sulit diakses dan tidak terstruktur.",
    ],
    features: [
      "Katalog produk dengan kategori",
      "Halaman detail produk",
      "Alur pemesanan / checkout",
      "Integrasi pembayaran (opsional)",
      "Manajemen stok dasar",
      "Responsive dan SEO produk",
    ],
    benefits: [
      "Kontrol penuh atas brand dan pengalaman belanja",
      "Mengurangi ketergantungan pada marketplace",
      "Data pelanggan bisa dikelola sendiri",
    ],
    process: [
      { step: "Discovery", description: "Memahami produk, alur penjualan, dan target pasar." },
      { step: "Design", description: "Desain katalog dan alur checkout." },
      { step: "Development", description: "Implementasi fitur toko dan integrasi." },
      { step: "Testing", description: "Uji alur pemesanan dan pembayaran." },
      { step: "Launch", description: "Publikasi dan panduan operasional." },
    ],
    faq: [
      {
        question: "Apakah termasuk integrasi pembayaran?",
        answer:
          "Bisa, dengan penyedia payment gateway yang sesuai. Biaya transaksi mengikuti penyedia.",
      },
    ],
    pricingReference: "Mulai dari Rp 8 juta",
    relatedProjectSlugs: ["beauty-studio"],
    translations: {
      en: {
        title: "E-Commerce Website",
        shortTitle: "E-Commerce",
        description:
          "Online store website with product catalog, order info, and necessary business features.",
        longDescription:
          "We build online store websites that don't just display products, but also support a clear ordering flow — perfect for businesses wanting their own sales channel outside of marketplaces.",
        problems: [
          "Businesses rely only on marketplaces with high commission fees.",
          "No direct sales channel they can control themselves.",
          "Product catalogs are hard to access and unstructured.",
        ],
        features: [
          "Product catalog with categories",
          "Product detail pages",
          "Ordering / checkout flow",
          "Payment integration (optional)",
          "Basic stock management",
          "Responsive and product SEO",
        ],
        benefits: [
          "Full control over brand and shopping experience",
          "Reduces dependency on marketplaces",
          "Own your customer data",
        ],
        process: [
          { step: "Discovery", description: "Understanding products, sales flow, and target market." },
          { step: "Design", description: "Catalog and checkout flow design." },
          { step: "Development", description: "Implementing store features and integrations." },
          { step: "Testing", description: "Testing order and payment flows." },
          { step: "Launch", description: "Publishing and operational guide." },
        ],
        faq: [
          {
            question: "Is payment integration included?",
            answer:
              "Yes, with an appropriate payment gateway provider. Transaction fees follow the provider.",
          },
        ],
        pricingReference: "Starting from Rp 8 million",
      },
      ko: {
        title: "이커머스 웹사이트",
        shortTitle: "이커머스",
        description: "제품 카탈로그, 주문 정보, 필요한 비즈니스 기능을 갖춘 온라인 스토어 웹사이트.",
        longDescription:
          "제품을 단순히 보여주는 것을 넘어 명확한 주문 흐름을 지원하는 온라인 스토어 웹사이트를 구축합니다 — 마켓플레이스 외부에서 자체 판매 채널을 원하는 비즈니스에 적합합니다.",
        features: [
          "카테고리가 있는 제품 카탈로그",
          "제품 상세 페이지",
          "주문 / 체크아웃 흐름",
          "결제 연동 (선택 사항)",
          "기본 재고 관리",
          "반응형 및 제품 SEO",
        ],
        benefits: [
          "브랜드와 쇼핑 경험에 대한 완전한 통제",
          "마켓플레이스 의존도 감소",
          "고객 데이터를 직접 소유",
        ],
        pricingReference: "800만 루피아부터",
      },
      zh: {
        title: "电子商务网站",
        shortTitle: "电子商务",
        description: "包含产品目录、订单信息和必要业务功能的在线商店网站。",
        longDescription:
          "我们构建的在线商店网站不仅展示产品，还支持清晰的订购流程——非常适合想要在第三方市场之外拥有自己销售渠道的企业。",
        features: [
          "带分类的产品目录",
          "产品详情页",
          "订购 / 结账流程",
          "支付集成（可选）",
          "基本库存管理",
          "响应式和产品 SEO",
        ],
        benefits: [
          "完全掌控品牌和购物体验",
          "降低对第三方市场的依赖",
          "拥有自己的客户数据",
        ],
        pricingReference: "起价 800 万印尼盾",
      },
      ja: {
        title: "Eコマースウェブサイト",
        shortTitle: "Eコマース",
        description: "商品カタログ、注文情報、必要なビジネス機能を備えたオンラインストアウェブサイト。",
        longDescription:
          "商品を表示するだけでなく、明確な注文フローをサポートするオンラインストアウェブサイトを構築します — マーケットプレイス外で独自の販売チャネルを持ちたいビジネスに最適です。",
        features: [
          "カテゴリ付き商品カタログ",
          "商品詳細ページ",
          "注文 / チェックアウトフロー",
          "決済連携（オプション）",
          "基本的な在庫管理",
          "レスポンシブと商品SEO",
        ],
        benefits: [
          "ブランドとショッピング体験を完全にコントロール",
          "マーケットプレイスへの依存を減らす",
          "顧客データを自分で所有",
        ],
        pricingReference: "800万ルピアから",
      },
    },
  },
  {
    slug: "website-maintenance-seo",
    title: "Website Maintenance & SEO",
    shortTitle: "Maintenance & SEO",
    description: "Perawatan website, technical SEO, dan optimasi performa.",
    longDescription:
      "Website yang sudah jadi tetap perlu dirawat. Kami menyediakan layanan maintenance, pembaruan konten, perbaikan teknis, dan optimasi SEO agar website tetap cepat, aman, dan relevan.",
    icon: "Wrench",
    problems: [
      "Website lambat dan jarang diperbarui.",
      "Ada error teknis yang tidak diketahui cara memperbaikinya.",
      "Peringkat di Google menurun karena masalah teknis.",
    ],
    features: [
      "Pembaruan konten berkala",
      "Backup dan pemantauan uptime",
      "Perbaikan bug dan pembaruan keamanan",
      "Technical SEO audit",
      "Optimasi kecepatan",
      "Laporan bulanan sederhana",
    ],
    benefits: [
      "Website tetap aman dan cepat",
      "Konten selalu relevan",
      "Fondasi SEO yang lebih kuat",
    ],
    process: [
      { step: "Audit", description: "Memeriksa kondisi teknis dan konten saat ini." },
      { step: "Prioritas", description: "Menyusun daftar perbaikan berdasarkan dampak." },
      { step: "Eksekusi", description: "Melakukan perbaikan dan optimasi." },
      { step: "Laporan", description: "Melaporkan hasil dan rekomendasi lanjutan." },
    ],
    faq: [
      {
        question: "Apakah harus website yang dibuat Nacode?",
        answer:
          "Tidak. Kami dapat membantu maintenance website yang sudah ada, setelah audit awal.",
      },
    ],
    pricingReference: "Mulai dari Rp 500 ribu/bulan",
    relatedProjectSlugs: [],
    translations: {
      en: {
        title: "Website Maintenance & SEO",
        shortTitle: "Maintenance & SEO",
        description: "Website maintenance, technical SEO, and performance optimization.",
        longDescription:
          "A finished website still needs care. We provide maintenance, content updates, technical fixes, and SEO optimization so your website stays fast, secure, and relevant.",
        problems: [
          "The website is slow and rarely updated.",
          "Technical errors exist that no one knows how to fix.",
          "Google rankings drop due to technical issues.",
        ],
        features: [
          "Periodic content updates",
          "Backups and uptime monitoring",
          "Bug fixes and security updates",
          "Technical SEO audit",
          "Speed optimization",
          "Simple monthly reports",
        ],
        benefits: [
          "Website stays secure and fast",
          "Content stays relevant",
          "Stronger SEO foundation",
        ],
        process: [
          { step: "Audit", description: "Reviewing current technical and content conditions." },
          { step: "Priorities", description: "Building a fix list based on impact." },
          { step: "Execution", description: "Performing fixes and optimizations." },
          { step: "Reporting", description: "Reporting results and follow-up recommendations." },
        ],
        faq: [
          {
            question: "Does it have to be a Nacode-built website?",
            answer:
              "No. We can help maintain existing websites after an initial audit.",
          },
        ],
        pricingReference: "Starting from Rp 500k/month",
      },
      ko: {
        title: "웹사이트 유지보수 & SEO",
        shortTitle: "유지보수 & SEO",
        description: "웹사이트 유지보수, 기술 SEO, 성능 최적화.",
        longDescription:
          "완성된 웹사이트도 관리가 필요합니다. 웹사이트가 빠르고 안전하며 관련성을 유지하도록 유지보수, 콘텐츠 업데이트, 기술 수정, SEO 최적화를 제공합니다.",
        features: [
          "정기 콘텐츠 업데이트",
          "백업 및 가동 시간 모니터링",
          "버그 수정 및 보안 업데이트",
          "기술 SEO 감사",
          "속도 최적화",
          "간단한 월간 보고서",
        ],
        benefits: [
          "웹사이트가 안전하고 빠르게 유지",
          "콘텐츠 관련성 유지",
          "더 강력한 SEO 기반",
        ],
        pricingReference: "월 50만 루피아부터",
      },
      zh: {
        title: "网站维护与 SEO",
        shortTitle: "维护与 SEO",
        description: "网站维护、技术 SEO 和性能优化。",
        longDescription:
          "已完成的网站仍需呵护。我们提供维护、内容更新、技术修复和 SEO 优化，让您的网站保持快速、安全和相关性。",
        features: [
          "定期内容更新",
          "备份和正常运行时间监控",
          "漏洞修复和安全更新",
          "技术 SEO 审计",
          "速度优化",
          "简单的月度报告",
        ],
        benefits: [
          "网站保持安全和快速",
          "内容始终相关",
          "更强的 SEO 基础",
        ],
        pricingReference: "起价 50 万印尼盾/月",
      },
      ja: {
        title: "ウェブサイトメンテナンス & SEO",
        shortTitle: "メンテナンス & SEO",
        description: "ウェブサイトメンテナンス、技術SEO、パフォーマンス最適化。",
        longDescription:
          "完成したウェブサイトも手入れが必要です。ウェブサイトが高速で安全かつ関連性を保つために、メンテナンス、コンテンツ更新、技術修正、SEO最適化を提供します。",
        features: [
          "定期的なコンテンツ更新",
          "バックアップと稼働時間のモニタリング",
          "バグ修正とセキュリティ更新",
          "技術SEO監査",
          "速度最適化",
          "シンプルな月次レポート",
        ],
        benefits: [
          "ウェブサイトが安全で高速に維持",
          "コンテンツが常に関連性を保つ",
          "より強力なSEO基盤",
        ],
        pricingReference: "月額50万ルピアから",
      },
    },
  },
];