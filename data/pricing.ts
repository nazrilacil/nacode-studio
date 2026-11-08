// data/pricing.ts
import type { Locale } from "@/components/LanguageProvider";

export type PricingCategory =
  | "Landing Page UMKM"
  | "Company Profile"
  | "E-Commerce"
  | "Aplikasi Custom"
  | "Software House";

export type PricingTranslation = {
  name: string;
  category: string;
  priceNote: string;
  description: string;
  includesDomain: string;
  pages: string;
  features: string[];
  revisions: string;
  timeline: string;
  maintenance: string;
  ctaLabel: string;
  /** Hanya dipakai untuk paket dengan harga custom (no priceAmount). */
  price?: string;
};

export type PricingPackage = {
  slug: string;
  name: string;
  category: PricingCategory;
  icon: string;
  /** Base amount dalam IDR — dipakai untuk konversi mata uang. */
  priceAmount?: number;
  /** Batas atas range (opsional) dalam IDR. */
  priceMax?: number;
  /** Fallback string (untuk paket custom seperti "Hubungi Kami"). */
  price: string;
  priceNote: string;
  description: string;
  includesDomain: string;
  pages: string;
  features: string[];
  revisions: string;
  timeline: string;
  maintenance: string;
  highlighted?: boolean;
  ctaLabel: string;
  translations?: Partial<Record<Exclude<Locale, "id">, PricingTranslation>>;
};

export const pricingPackages: PricingPackage[] = [
  {
    slug: "microsite-bio-link",
    name: "Paket Microsite & Bio Link",
    category: "Landing Page UMKM",
    icon: "Link2",
    priceAmount: 550000,
    priceMax: 770000,
    price: "Rp 550.000 - 770.000",
    priceNote: "Termasuk domain & hosting 1 tahun",
    description:
      "Katalog produk praktis untuk optimalisasi link bio Instagram & TikTok (serupa gaya Linktree Bisnis).",
    includesDomain: "Domain .my.id + Hosting 1 tahun",
    pages: "1 halaman",
    features: [
      "Satu halaman katalog interaktif konversi cepat",
      "Integrasi tombol order otomatis via WhatsApp",
      "Desain UI/UX mobile-first sangat responsif",
      "Pilihan skema warna brand identitas jualan Anda",
      "Akses statistik kunjungan harian standar",
      "SEO dasar (meta tag, heading, kecepatan)",
    ],
    revisions: "1 kali revisi",
    timeline: "2–5 hari kerja",
    maintenance: "Perpanjangan domain & hosting tahun berikutnya terpisah",
    highlighted: true,
    ctaLabel: "Mulai Buat Microsite",
    translations: {
      en: {
        name: "Microsite & Bio Link",
        category: "SME Landing Page",
        priceNote: "Includes 1-year domain & hosting",
        description:
          "A practical product catalog to optimize your Instagram & TikTok bio link (similar to Business Linktree style).",
        includesDomain: ".my.id domain + 1-year hosting",
        pages: "1 page",
        features: [
          "Single interactive catalog page optimized for conversion",
          "Automatic order button integration via WhatsApp",
          "Mobile-first, highly responsive UI/UX design",
          "Color scheme options aligned with your brand identity",
          "Standard daily traffic statistics access",
          "Basic SEO (meta tags, headings, speed)",
        ],
        revisions: "1 revision",
        timeline: "2–5 business days",
        maintenance: "Domain & hosting renewal for the next year is separate",
        ctaLabel: "Start Microsite",
      },
      ko: {
        name: "마이크로사이트 & 바이오 링크",
        category: "중소기업 랜딩 페이지",
        priceNote: "도메인 & 1년 호스팅 포함",
        description:
          "인스타그램 & 틱톡 바이오 링크 최적화를 위한 실용적인 제품 카탈로그 (비즈니스 Linktree 스타일).",
        includesDomain: ".my.id 도메인 + 1년 호스팅",
        pages: "1 페이지",
        features: [
          "전환 최적화 단일 인터랙티브 카탈로그 페이지",
          "WhatsApp을 통한 자동 주문 버튼 연동",
          "모바일 우선, 반응형 뛰어난 UI/UX 디자인",
          "브랜드 아이덴티티에 맞는 컬러 스킴 옵션",
          "표준 일일 트래픽 통계 액세스",
          "기본 SEO (메타 태그, 제목, 속도)",
        ],
        revisions: "1회 수정",
        timeline: "2–5 영업일",
        maintenance: "다음 해 도메인 & 호스팅 갱신은 별도",
        ctaLabel: "마이크로사이트 시작",
      },
      zh: {
        name: "微网站与 Bio Link",
        category: "中小企业落地页",
        priceNote: "含域名与 1 年主机",
        description:
          "用于优化 Instagram 和 TikTok 链接简介的实用产品目录（类似商业版 Linktree 风格）。",
        includesDomain: ".my.id 域名 + 1 年主机",
        pages: "1 页",
        features: [
          "单页互动产品目录，优化转化率",
          "通过 WhatsApp 自动下单按钮集成",
          "移动优先、高度响应的 UI/UX 设计",
          "与品牌形象一致的配色方案",
          "标准每日流量统计访问",
          "基础 SEO（元标签、标题、速度）",
        ],
        revisions: "1 次修改",
        timeline: "2–5 个工作日",
        maintenance: "次年域名和主机续费另计",
        ctaLabel: "开始搭建微网站",
      },
      ja: {
        name: "マイクロサイト & バイオリンク",
        category: "中小企業ランディングページ",
        priceNote: "ドメイン & 1年ホスティング込み",
        description:
          "Instagram・TikTokのプロフィールリンク最適化のための実用的な商品カタログ（ビジネスLinktreeスタイル）。",
        includesDomain: ".my.idドメイン + 1年ホスティング",
        pages: "1ページ",
        features: [
          "コンバージョン重視の単一インタラクティブカタログページ",
          "WhatsApp経由の自動注文ボタン統合",
          "モバイルファースト、非常にレスポンシブなUI/UXデザイン",
          "ブランドアイデンティティに合わせたカラースキーム選択",
          "標準的な日次トラフィック統計へのアクセス",
          "基本SEO（メタタグ、見出し、速度）",
        ],
        revisions: "1回修正",
        timeline: "2〜5営業日",
        maintenance: "翌年のドメイン・ホスティング更新は別途",
        ctaLabel: "マイクロサイトを始める",
      },
    },
  },
  {
    slug: "landing-page-umkm",
    name: "Landing Page UMKM Executive",
    category: "Landing Page UMKM",
    icon: "Megaphone",
    priceAmount: 1800000,
    price: "Rp 1.800.000",
    priceNote: "Termasuk domain & cloud hosting",
    description:
      "Halaman penjualan fokus ROI untuk iklan FB Ads & Google Ads (serupa gaya Sales Page Pro).",
    includesDomain: "Domain .com / .id + Server Hosting Cloud",
    pages: "1 halaman penjualan",
    features: [
      "Copywriting persuasif untuk meningkatkan closing rate",
      "Optimasi SEO teknis agar muncul di pencarian lokal",
      "Integrasi Google Maps & section testimoni buyer",
      "Sistem penangkapan leads / formulir pendaftaran",
      "Setup integrasi FB Pixel & Google Analytics",
    ],
    revisions: "2 kali revisi",
    timeline: "5–7 hari kerja",
    maintenance: "Tersedia sebagai layanan terpisah",
    ctaLabel: "Pesan Landing Page",
    translations: {
      en: {
        name: "SME Executive Landing Page",
        category: "SME Landing Page",
        priceNote: "Includes domain & cloud hosting",
        description:
          "ROI-focused sales page for FB Ads & Google Ads campaigns (similar to Sales Page Pro style).",
        includesDomain: ".com / .id domain + Cloud Hosting Server",
        pages: "1 sales page",
        features: [
          "Persuasive copywriting to increase closing rate",
          "Technical SEO optimization for local search visibility",
          "Google Maps integration & buyer testimonial section",
          "Lead capture system / registration form",
          "FB Pixel & Google Analytics integration setup",
        ],
        revisions: "2 revisions",
        timeline: "5–7 business days",
        maintenance: "Available as a separate service",
        ctaLabel: "Order Landing Page",
      },
      ko: {
        name: "중소기업 임원 랜딩 페이지",
        category: "중소기업 랜딩 페이지",
        priceNote: "도메인 & 클라우드 호스팅 포함",
        description:
          "FB Ads & Google Ads 캠페인을 위한 ROI 중심 세일즈 페이지 (Sales Page Pro 스타일).",
        includesDomain: ".com / .id 도메인 + 클라우드 호스팅 서버",
        pages: "1 세일즈 페이지",
        features: [
          "클로징률 향상을 위한 설득력 있는 카피라이팅",
          "로컬 검색 노출을 위한 기술적 SEO 최적화",
          "Google Maps 연동 & 구매자 후기 섹션",
          "리드 수집 시스템 / 등록 양식",
          "FB Pixel & Google Analytics 연동 설정",
        ],
        revisions: "2회 수정",
        timeline: "5–7 영업일",
        maintenance: "별도 서비스로 제공",
        ctaLabel: "랜딩 페이지 주문",
      },
      zh: {
        name: "中小企业高级落地页",
        category: "中小企业落地页",
        priceNote: "含域名和云主机",
        description:
          "专注于 FB Ads 和 Google Ads 广告投资的销售页（类似 Sales Page Pro 风格）。",
        includesDomain: ".com / .id 域名 + 云主机服务器",
        pages: "1 个销售页",
        features: [
          "提高成交率的说服性文案",
          "让本地搜索结果更易发现的 SEO 技术优化",
          "Google Maps 集成和买家评价区",
          "线索捕获系统 / 注册表单",
          "FB Pixel 和 Google Analytics 集成设置",
        ],
        revisions: "2 次修改",
        timeline: "5–7 个工作日",
        maintenance: "作为单独服务提供",
        ctaLabel: "订购落地页",
      },
      ja: {
        name: "中小企業エグゼクティブランディングページ",
        category: "中小企業ランディングページ",
        priceNote: "ドメイン & クラウドホスティング込み",
        description:
          "FB広告・Google広告向けのROI重視のセールスページ（セールスページProスタイル）。",
        includesDomain: ".com / .idドメイン + クラウドホスティングサーバー",
        pages: "1セールスページ",
        features: [
          "成約率を高める説得力のあるコピーライティング",
          "ローカル検索での露出を高める技術的SEO最適化",
          "Google Maps連携 & 購入者レビューセクション",
          "リード獲得システム / 登録フォーム",
          "FB Pixel & Google Analytics連携セットアップ",
        ],
        revisions: "2回修正",
        timeline: "5〜7営業日",
        maintenance: "別途サービスとしてご提供",
        ctaLabel: "ランディングページを注文",
      },
    },
  },
  {
    slug: "corporate-identity-basic",
    name: "Corporate Identity Basic",
    category: "Company Profile",
    icon: "Building2",
    priceAmount: 3500000,
    price: "Rp 3.500.000",
    priceNote: "Termasuk domain & managed hosting",
    description:
      "Profil digital resmi untuk kredibilitas Firma Hukum, CV, atau Agensi (serupa gaya Business Profile).",
    includesDomain: "Domain berbayar + Managed Hosting",
    pages: "Maksimal 6 halaman",
    features: [
      "Maksimal 6 halaman struktur informasi korporat",
      "Email bisnis profesional (support@bisnis-anda.com)",
      "Desain clean & minimalis standar institusi",
      "Sertifikat keamanan SSL (HTTPS) Grade-A",
      "Optimasi SEO On-Page untuk nama brand",
    ],
    revisions: "2 kali revisi",
    timeline: "7–10 hari kerja",
    maintenance: "Tersedia sebagai layanan terpisah",
    ctaLabel: "Buat Web Profil",
    translations: {
      en: {
        name: "Corporate Identity Basic",
        category: "Company Profile",
        priceNote: "Includes domain & managed hosting",
        description:
          "Official digital profile for the credibility of Law Firms, CVs, or Agencies (similar to Business Profile style).",
        includesDomain: "Paid domain + Managed Hosting",
        pages: "Up to 6 pages",
        features: [
          "Up to 6 pages of corporate information structure",
          "Professional business email (support@your-business.com)",
          "Clean & minimalist design to institutional standards",
          "SSL security certificate (HTTPS) Grade-A",
          "On-page SEO optimization for brand name",
        ],
        revisions: "2 revisions",
        timeline: "7–10 business days",
        maintenance: "Available as a separate service",
        ctaLabel: "Build Profile Site",
      },
      ko: {
        name: "기업 아이덴티티 베이직",
        category: "회사 소개",
        priceNote: "도메인 & 관리형 호스팅 포함",
        description:
          "법률 사무소, CV, 또는 에이전시의 신뢰도를 위한 공식 디지털 프로필 (Business Profile 스타일).",
        includesDomain: "유료 도메인 + 관리형 호스팅",
        pages: "최대 6 페이지",
        features: [
          "기업 정보 구조 최대 6 페이지",
          "전문 비즈니스 이메일 (support@your-business.com)",
          "기관 표준의 깔끔하고 미니멀한 디자인",
          "SSL 보안 인증서 (HTTPS) Grade-A",
          "브랜드명에 대한 온페이지 SEO 최적화",
        ],
        revisions: "2회 수정",
        timeline: "7–10 영업일",
        maintenance: "별도 서비스로 제공",
        ctaLabel: "프로필 사이트 구축",
      },
      zh: {
        name: "企业标识基础版",
        category: "企业官网",
        priceNote: "含域名和托管主机",
        description:
          "为律师事务所、CV 或代理机构提升可信度的官方数字档案（类似商业档案风格）。",
        includesDomain: "付费域名 + 托管主机",
        pages: "最多 6 页",
        features: [
          "最多 6 页企业信息结构",
          "专业企业邮箱（support@your-business.com）",
          "符合机构标准的干净简约设计",
          "SSL 安全证书（HTTPS）Grade-A",
          "针对品牌名的页面 SEO 优化",
        ],
        revisions: "2 次修改",
        timeline: "7–10 个工作日",
        maintenance: "作为单独服务提供",
        ctaLabel: "搭建企业档案",
      },
      ja: {
        name: "コーポレートアイデンティティ ベーシック",
        category: "会社概要",
        priceNote: "ドメイン & マネージドホスティング込み",
        description:
          "法律事務所、CV、エージェンシーの信頼性のための公式デジタルプロフィール（ビジネスプロフィールスタイル）。",
        includesDomain: "有料ドメイン + マネージドホスティング",
        pages: "最大6ページ",
        features: [
          "最大6ページの企業情報構造",
          "プロフェッショナルなビジネスメール（support@your-business.com）",
          "機関標準のクリーン&ミニマルデザイン",
          "SSLセキュリティ証明書（HTTPS）Grade-A",
          "ブランド名のオンページSEO最適化",
        ],
        revisions: "2回修正",
        timeline: "7〜10営業日",
        maintenance: "別途サービスとしてご提供",
        ctaLabel: "プロフィールサイトを構築",
      },
    },
  },
  {
    slug: "enterprise-business-site",
    name: "Enterprise Business Site",
    category: "Company Profile",
    icon: "Factory",
    priceAmount: 5500000,
    price: "Rp 5.500.000",
    priceNote: "Termasuk domain & VPS high-performance",
    description:
      "Website prestisius untuk PT/pabrik dengan fitur portofolio proyek lengkap (serupa gaya Corporate Portal).",
    includesDomain: "Domain .co.id + High-Performance VPS",
    pages: "8–12 halaman",
    features: [
      "Sistem Manajemen Konten (CMS) dashboard Laravel",
      "Modul portofolio & berita perusahaan terintegrasi",
      "Email bisnis hingga 10 akun storage premium",
      "Proteksi keamanan dari serangan brute-force & spam",
      "Training administrasi web untuk tim internal",
    ],
    revisions: "3 kali revisi",
    timeline: "14–21 hari kerja",
    maintenance: "Rekomendasi dan penawaran terpisah",
    highlighted: true,
    ctaLabel: "Konsultasi Web Korporat",
    translations: {
      en: {
        name: "Enterprise Business Site",
        category: "Company Profile",
        priceNote: "Includes domain & high-performance VPS",
        description:
          "Prestigious website for corporations/factories with complete project portfolio features (similar to Corporate Portal style).",
        includesDomain: ".co.id domain + High-Performance VPS",
        pages: "8–12 pages",
        features: [
          "Content Management System (CMS) with Laravel dashboard",
          "Integrated project portfolio & company news modules",
          "Up to 10 business email accounts with premium storage",
          "Security protection against brute-force & spam attacks",
          "Web administration training for internal teams",
        ],
        revisions: "3 revisions",
        timeline: "14–21 business days",
        maintenance: "Recommendation and separate quotation",
        ctaLabel: "Corporate Web Consultation",
      },
      ko: {
        name: "엔터프라이즈 비즈니스 사이트",
        category: "회사 소개",
        priceNote: "도메인 & 고성능 VPS 포함",
        description:
          "완전한 프로젝트 포트폴리오 기능을 갖춘 PT/공장용 프리미엄 웹사이트 (Corporate Portal 스타일).",
        includesDomain: ".co.id 도메인 + 고성능 VPS",
        pages: "8–12 페이지",
        features: [
          "Laravel 대시보드를 갖춘 콘텐츠 관리 시스템 (CMS)",
          "통합 프로젝트 포트폴리오 & 회사 뉴스 모듈",
          "프리미엄 스토리지가 포함된 최대 10개 비즈니스 이메일 계정",
          "무차별 대입 공격 & 스팸에 대한 보안 보호",
          "내부 팀을 위한 웹 관리 교육",
        ],
        revisions: "3회 수정",
        timeline: "14–21 영업일",
        maintenance: "권장 사항 및 별도 견적",
        ctaLabel: "기업 웹 상담",
      },
      zh: {
        name: "企业级商业网站",
        category: "企业官网",
        priceNote: "含域名和高性能 VPS",
        description:
          "为 PT/工厂打造的高端网站，具备完整项目组合功能（类似企业门户风格）。",
        includesDomain: ".co.id 域名 + 高性能 VPS",
        pages: "8–12 页",
        features: [
          "Laravel 仪表板的内容管理系统（CMS）",
          "集成的项目组合和公司新闻模块",
          "最多 10 个高级存储的企业邮箱账户",
          "针对暴力破解和垃圾邮件的安全防护",
          "为内部团队提供网站管理培训",
        ],
        revisions: "3 次修改",
        timeline: "14–21 个工作日",
        maintenance: "建议和单独报价",
        ctaLabel: "企业网站咨询",
      },
      ja: {
        name: "エンタープライズビジネスサイト",
        category: "会社概要",
        priceNote: "ドメイン & 高性能VPS込み",
        description:
          "完全なプロジェクトポートフォリオ機能を備えたPT/工場向けのプレステージなウェブサイト（コーポレートポータルスタイル）。",
        includesDomain: ".co.idドメイン + 高性能VPS",
        pages: "8〜12ページ",
        features: [
          "Laravelダッシュボード付きコンテンツ管理システム（CMS）",
          "統合プロジェクトポートフォリオ & 企業ニュースモジュール",
          "プレミアムストレージ付き最大10ビジネスメールアカウント",
          "ブルートフォース攻撃 & スパムからのセキュリティ保護",
          "社内チーム向けウェブ管理トレーニング",
        ],
        revisions: "3回修正",
        timeline: "14〜21営業日",
        maintenance: "推奨事項と別途お見積もり",
        ctaLabel: "企業ウェブ相談",
      },
    },
  },
  {
    slug: "ecommerce-retail-starter",
    name: "E-Commerce Retail Starter",
    category: "E-Commerce",
    icon: "ShoppingBag",
    priceAmount: 7500000,
    price: "Rp 7.500.000",
    priceNote: "Termasuk hosting e-commerce pro",
    description:
      "Pasar digital mandiri untuk brand yang ingin lepas dari marketplace (serupa gaya Shopify / Evermos).",
    includesDomain: "Hosting E-Commerce Pro & Setup Awal",
    pages: "Katalog + checkout",
    features: [
      "Manajemen katalog produk & stok inventori otomatis",
      "Kalkulasi ongkir seluruh kurir lokal (API terpadu)",
      "Order penjualan langsung terhubung ke WhatsApp CS",
      "Laporan penjualan (harian/bulanan) via dashboard",
      "Voucher diskon & sistem promo khusus member",
    ],
    revisions: "3 kali revisi",
    timeline: "21–30 hari kerja",
    maintenance: "Rekomendasi dan penawaran terpisah",
    highlighted: true,
    ctaLabel: "Rintis E-commerce",
    translations: {
      en: {
        name: "E-Commerce Retail Starter",
        category: "E-Commerce",
        priceNote: "Includes pro e-commerce hosting",
        description:
          "Independent digital marketplace for brands wanting to break free from marketplaces (similar to Shopify / Evermos style).",
        includesDomain: "Pro E-Commerce Hosting & Initial Setup",
        pages: "Catalog + checkout",
        features: [
          "Product catalog & automatic inventory management",
          "Shipping cost calculation for all local couriers (integrated API)",
          "Sales orders directly connected to WhatsApp CS",
          "Sales reports (daily/monthly) via dashboard",
          "Discount vouchers & member-specific promo system",
        ],
        revisions: "3 revisions",
        timeline: "21–30 business days",
        maintenance: "Recommendation and separate quotation",
        ctaLabel: "Launch E-Commerce",
      },
      ko: {
        name: "이커머스 리테일 스타터",
        category: "이커머스",
        priceNote: "프로 이커머스 호스팅 포함",
        description:
          "마켓플레이스에서 벗어나고 싶은 브랜드를 위한 독립 디지털 마켓 (Shopify / Evermos 스타일).",
        includesDomain: "프로 이커머스 호스팅 & 초기 설정",
        pages: "카탈로그 + 체크아웃",
        features: [
          "제품 카탈로그 & 자동 재고 관리",
          "모든 로컬 택배사 배송비 계산 (통합 API)",
          "WhatsApp CS에 직접 연결된 판매 주문",
          "대시보드를 통한 판매 보고서 (일일/월간)",
          "할인 바우처 & 회원 전용 프로모션 시스템",
        ],
        revisions: "3회 수정",
        timeline: "21–30 영업일",
        maintenance: "권장 사항 및 별도 견적",
        ctaLabel: "이커머스 시작",
      },
      zh: {
        name: "电商零售入门",
        category: "电商",
        priceNote: "含专业电商主机",
        description:
          "为希望摆脱第三方市场的品牌提供的独立数字市场（类似 Shopify / Evermos 风格）。",
        includesDomain: "专业电商主机和初始设置",
        pages: "产品目录 + 结账",
        features: [
          "产品目录和自动库存管理",
          "所有本地快递的运费计算（集成 API）",
          "销售订单直接连接到 WhatsApp 客服",
          "通过仪表板获取销售报告（每日/每月）",
          "优惠券和会员专属促销系统",
        ],
        revisions: "3 次修改",
        timeline: "21–30 个工作日",
        maintenance: "建议和单独报价",
        ctaLabel: "启动电商",
      },
      ja: {
        name: "Eコマースリテールスターター",
        category: "Eコマース",
        priceNote: "プロEコマースホスティング込み",
        description:
          "マーケットプレイスから脱却したいブランドのための独立デジタルマーケット（Shopify / Evermosスタイル）。",
        includesDomain: "プロEコマースホスティング & 初期セットアップ",
        pages: "カタログ + チェックアウト",
        features: [
          "商品カタログ & 自動在庫管理",
          "全ローカル配送業者の送料計算（統合API）",
          "WhatsAppカスタマーサービスに直接接続された販売注文",
          "ダッシュボード経由の売上レポート（日次/月次）",
          "割引クーポン & 会員限定プロモーションシステム",
        ],
        revisions: "3回修正",
        timeline: "21〜30営業日",
        maintenance: "推奨事項と別途お見積もり",
        ctaLabel: "Eコマースを開始",
      },
    },
  },
  {
    slug: "custom-operational-system",
    name: "Sistem Kustom Operasional",
    category: "Aplikasi Custom",
    icon: "Workflow",
    priceAmount: 15000000,
    price: "Rp 15.000.000",
    priceNote: "Termasuk analisis alur & setup infrastruktur",
    description:
      "Solusi software untuk laundry, klinik, atau HRIS internal (serupa gaya ERP Mini / SaaS Kustom).",
    includesDomain: "Analisis alur kerja + Setup infrastruktur",
    pages: "Sesuai ruang lingkup",
    features: [
      "Modul operasional mandiri sesuai SOP perusahaan Anda",
      "Audit log aktivitas pengguna untuk akurasi data",
      "Dashboard monitoring progres kerja secara real-time",
      "Sistem notifikasi pengingat via WhatsApp / Email",
      "Source code aplikasi sepenuhnya menjadi milik klien",
    ],
    revisions: "Sesuai kesepakatan",
    timeline: "30+ hari kerja",
    maintenance: "Rekomendasi dan penawaran terpisah",
    ctaLabel: "Rancang Aplikasi Kustom",
    translations: {
      en: {
        name: "Custom Operational System",
        category: "Custom Application",
        priceNote: "Includes workflow analysis & infrastructure setup",
        description:
          "Software solutions for laundries, clinics, or internal HRIS (similar to Mini ERP / Custom SaaS style).",
        includesDomain: "Workflow analysis + Infrastructure setup",
        pages: "Per scope",
        features: [
          "Standalone operational modules aligned with your company SOP",
          "User activity audit logs for data accuracy",
          "Real-time work progress monitoring dashboard",
          "Reminder notification system via WhatsApp / Email",
          "Application source code fully owned by the client",
        ],
        revisions: "As agreed",
        timeline: "30+ business days",
        maintenance: "Recommendation and separate quotation",
        ctaLabel: "Design Custom App",
      },
      ko: {
        name: "맞춤형 운영 시스템",
        category: "맞춤 애플리케이션",
        priceNote: "워크플로우 분석 & 인프라 설정 포함",
        description:
          "세탁소, 클리닉 또는 내부 HRIS를 위한 소프트웨어 솔루션 (Mini ERP / 맞춤형 SaaS 스타일).",
        includesDomain: "워크플로우 분석 + 인프라 설정",
        pages: "범위에 따름",
        features: [
          "회사 SOP에 맞춘 독립형 운영 모듈",
          "데이터 정확성을 위한 사용자 활동 감사 로그",
          "실시간 작업 진행 상황 모니터링 대시보드",
          "WhatsApp / Email을 통한 알림 리마인더 시스템",
          "애플리케이션 소스 코드는 전적으로 클라이언트 소유",
        ],
        revisions: "합의에 따라",
        timeline: "30+ 영업일",
        maintenance: "권장 사항 및 별도 견적",
        ctaLabel: "맞춤 앱 디자인",
      },
      zh: {
        name: "定制运营系统",
        category: "定制应用",
        priceNote: "含工作流分析和基础设施设置",
        description:
          "面向洗衣店、诊所或内部 HRIS 的软件解决方案（类似 Mini ERP / 定制 SaaS 风格）。",
        includesDomain: "工作流分析 + 基础设施设置",
        pages: "依范围而定",
        features: [
          "符合公司 SOP 的独立运营模块",
          "用于数据准确性的用户活动审计日志",
          "实时工作进度监控仪表板",
          "通过 WhatsApp / 邮件发送提醒通知系统",
          "应用程序源代码完全归客户所有",
        ],
        revisions: "按协议",
        timeline: "30+ 个工作日",
        maintenance: "建议和单独报价",
        ctaLabel: "设计定制应用",
      },
      ja: {
        name: "カスタム運用システム",
        category: "カスタムアプリケーション",
        priceNote: "ワークフロー分析 & インフラ設定込み",
        description:
          "クリーニング店、クリニック、または社内HRIS向けのソフトウェアソリューション（ミニERP / カスタムSaaSスタイル）。",
        includesDomain: "ワークフロー分析 + インフラ設定",
        pages: "範囲に応じる",
        features: [
          "会社のSOPに沿った独立運用モジュール",
          "データ精度のためのユーザーアクティビティ監査ログ",
          "リアルタイムの作業進捗モニタリングダッシュボード",
          "WhatsApp / Email経由のリマインダー通知システム",
          "アプリケーションのソースコードは完全にクライアント所有",
        ],
        revisions: "合意による",
        timeline: "30+営業日",
        maintenance: "推奨事項と別途お見積もり",
        ctaLabel: "カスタムアプリを設計",
      },
    },
  },
  {
    slug: "strategic-software-partnership",
    name: "Strategic Software Partnership",
    category: "Software House",
    icon: "Network",
    price: "Hubungi Kami",
    priceNote: "Penawaran per proyek",
    description:
      "Infrastruktur IT skala besar untuk ekosistem holding (serupa ERP Kompleks / Sistem Keuangan).",
    includesDomain: "Analisa bisnis mendalam & blueprint per proyek",
    pages: "Enterprise scope",
    features: [
      "Konsultasi strategi digitalisasi oleh IT Expert",
      "Arsitektur scalable untuk beban traffic sangat tinggi",
      "Integrasi antar-platform (Web, API Mobile, Database)",
      "SLA jaminan uptime & dukungan teknis prioritas",
      "Keamanan data standar tinggi & proteksi malware",
    ],
    revisions: "Sesuai SLA & kesepakatan",
    timeline: "Berdasarkan roadmap proyek",
    maintenance: "Termasuk SLA dukungan teknis",
    ctaLabel: "Diskusi Strategis Proyek",
    translations: {
      en: {
        name: "Strategic Software Partnership",
        category: "Software House",
        price: "Contact Us",
        priceNote: "Per-project quotation",
        description:
          "Large-scale IT infrastructure for holding ecosystems (similar to Complex ERP / Financial System style).",
        includesDomain: "In-depth business analysis & per-project blueprint",
        pages: "Enterprise scope",
        features: [
          "Digitalization strategy consultation by IT Expert",
          "Scalable architecture for very high traffic loads",
          "Cross-platform integration (Web, Mobile API, Database)",
          "SLA uptime guarantee & priority technical support",
          "High-standard data security & malware protection",
        ],
        revisions: "Per SLA & agreement",
        timeline: "Based on project roadmap",
        maintenance: "Includes technical support SLA",
        ctaLabel: "Strategic Project Discussion",
      },
      ko: {
        name: "전략적 소프트웨어 파트너십",
        category: "소프트웨어 하우스",
        price: "문의하기",
        priceNote: "프로젝트별 견적",
        description:
          "홀딩 생태계를 위한 대규모 IT 인프라 (복잡한 ERP / 금융 시스템 스타일).",
        includesDomain: "심층 비즈니스 분석 & 프로젝트별 청사진",
        pages: "엔터프라이즈 범위",
        features: [
          "IT 전문가의 디지털화 전략 컨설팅",
          "매우 높은 트래픽 부하를 위한 확장 가능한 아키텍처",
          "플랫폼 간 통합 (웹, 모바일 API, 데이터베이스)",
          "SLA 가동 시간 보장 & 우선 기술 지원",
          "높은 수준의 데이터 보안 & 맬웨어 보호",
        ],
        revisions: "SLA & 합의에 따라",
        timeline: "프로젝트 로드맵 기반",
        maintenance: "기술 지원 SLA 포함",
        ctaLabel: "전략적 프로젝트 논의",
      },
      zh: {
        name: "战略软件合作伙伴关系",
        category: "软件工坊",
        price: "联系我们",
        priceNote: "按项目报价",
        description:
          "面向控股生态系统的大规模 IT 基础设施（类似复杂 ERP / 金融系统风格）。",
        includesDomain: "深入业务分析和按项目蓝图",
        pages: "企业范围",
        features: [
          "由 IT 专家提供的数字化战略咨询",
          "面向超高流量负载的可扩展架构",
          "跨平台集成（Web、移动 API、数据库）",
          "SLA 正常运行时间保证和优先技术支持",
          "高标准数据安全和恶意软件防护",
        ],
        revisions: "按 SLA 和协议",
        timeline: "基于项目路线图",
        maintenance: "含技术支持 SLA",
        ctaLabel: "战略性项目讨论",
      },
      ja: {
        name: "戦略的ソフトウェアパートナーシップ",
        category: "ソフトウェアハウス",
        price: "お問い合わせ",
        priceNote: "プロジェクト別お見積もり",
        description:
          "ホールディングエコシステム向けの大規模ITインフラ（複雑なERP / 財務システムスタイル）。",
        includesDomain: "詳細なビジネス分析 & プロジェクト別ブループリント",
        pages: "エンタープライズスコープ",
        features: [
          "ITエキスパートによるデジタル化戦略コンサルティング",
          "非常に高いトラフィック負荷に対応するスケーラブルなアーキテクチャ",
          "プラットフォーム間統合（Web、モバイルAPI、データベース）",
          "SLA稼働率保証 & 優先技術サポート",
          "高水準のデータセキュリティ & マルウェア保護",
        ],
        revisions: "SLA & 合意による",
        timeline: "プロジェクトロードマップに基づく",
        maintenance: "技術サポートSLA込み",
        ctaLabel: "戦略的プロジェクト相談",
      },
    },
  },
];