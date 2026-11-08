// data/projects.ts
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/components/LanguageProvider";

export type ProjectCategory =
  | "Business Website"
  | "Landing Page"
  | "Web Application"
  | "Education"
  | "Local Business";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectTranslation = {
  title?: string;
  category?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  process?: { step: string; description: string }[];
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  concept: boolean;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  process: { step: string; description: string }[];
  /** Foto utama — kalau kosong, fallback ke mockup CSS. */
  coverImage?: ProjectImage;
  /** Foto tambahan untuk gallery di detail page. */
  gallery?: ProjectImage[];
  liveUrl?: string;
  demoUrl?: string;
  /** Fallback visual kalau coverImage tidak ada. */
  mockupKey: "edtech" | "automotive" | "beauty" | "dashboard";
  translations?: Partial<Record<Exclude<Locale, "id">, ProjectTranslation>>;
};

export const projects: Project[] = [
  {
    slug: "otak-kancil",
    title: "Otak Kancil",
    category: "Education",
    year: "2026",
    concept: false,
    overview:
      "Platform pembelajaran digital yang dirancang untuk pengalaman belajar yang terstruktur dan mudah diakses.",
    problem:
      "Materi pembelajaran tersebar dan sulit dilacak. Pengguna membutuhkan satu platform yang jelas untuk melanjutkan progres belajar.",
    solution:
      "Kami merancang antarmuka mobile-first dengan progres belajar yang terlihat, kategori materi yang rapi, dan navigasi sederhana.",
    features: [
      "Dashboard progres belajar",
      "Kategori materi",
      "Mobile-first interface",
      "Sistem navigasi yang jelas",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    process: [
      { step: "Riset", description: "Memahami kebutuhan pengguna dan alur belajar." },
      { step: "Wireframe", description: "Menyusun struktur layar utama." },
      { step: "Visual Design", description: "Desain antarmuka yang bersih dan fokus." },
      { step: "Prototype", description: "Membangun prototipe interaktif." },
    ],
    coverImage: {
      src: "/portfolio/otak-kancil/cover.jpg",
      alt: "Tampilan utama platform Otak Kancil",
    },
    gallery: [
      {
        src: "/portfolio/otak-kancil/gallery-1.jpg",
        alt: "Dashboard progres belajar Otak Kancil",
      },
      {
        src: "/portfolio/otak-kancil/gallery-2.jpg",
        alt: "Halaman kategori materi Otak Kancil",
      },
    ],
    liveUrl: "https://otak-kancil-omega.vercel.app/",
    mockupKey: "edtech",
    translations: {
      en: {
        title: "Otak Kancil",
        category: "Education",
        overview:
          "A digital learning platform designed for a structured and accessible learning experience.",
        problem:
          "Learning materials are scattered and hard to track. Users need one clear platform to continue their learning progress.",
        solution:
          "We designed a mobile-first interface with visible learning progress, organized material categories, and simple navigation.",
        features: [
          "Learning progress dashboard",
          "Material categories",
          "Mobile-first interface",
          "Clear navigation system",
        ],
        process: [
          { step: "Research", description: "Understanding user needs and the learning flow." },
          { step: "Wireframe", description: "Structuring the main screens." },
          { step: "Visual Design", description: "Clean and focused interface design." },
          { step: "Prototype", description: "Building an interactive prototype." },
        ],
      },
      ko: {
        title: "Otak Kancil",
        category: "교육",
        overview:
          "체계적이고 접근하기 쉬운 학습 경험을 위해 설계된 디지털 학습 플랫폼.",
        problem:
          "학습 자료가 흩어져 있고 추적하기 어렵습니다. 사용자는 학습 진행 상황을 이어갈 명확한 플랫폼이 필요합니다.",
        solution:
          "학습 진행 상황이 보이는 모바일 우선 인터페이스, 정리된 자료 카테고리, 간단한 내비게이션을 설계했습니다.",
        features: [
          "학습 진행 대시보드",
          "자료 카테고리",
          "모바일 우선 인터페이스",
          "명확한 내비게이션 시스템",
        ],
      },
      zh: {
        title: "Otak Kancil",
        category: "教育",
        overview:
          "为结构化且易于访问的学习体验而设计的数字学习平台。",
        problem:
          "学习资料分散且难以追踪。用户需要一个清晰的平台来继续学习进度。",
        solution:
          "我们设计了移动优先的界面，包含可见的学习进度、整理好的资料分类和简洁的导航。",
        features: [
          "学习进度仪表板",
          "资料分类",
          "移动优先界面",
          "清晰的导航系统",
        ],
      },
      ja: {
        title: "Otak Kancil",
        category: "教育",
        overview:
          "体系的でアクセスしやすい学習体験のために設計されたデジタル学習プラットフォーム。",
        problem:
          "学習資料が分散しており、追跡が困難です。ユーザーは学習の進捗を継続できる明確なプラットフォームを必要としています。",
        solution:
          "学習の進捗が見えるモバイルファーストのインターフェース、整理された教材カテゴリ、シンプルなナビゲーションを設計しました。",
        features: [
          "学習進捗ダッシュボード",
          "教材カテゴリ",
          "モバイルファーストインターフェース",
          "明確なナビゲーションシステム",
        ],
      },
    },
  },
  {
    slug: "automotive-pangandaran",
    title: "Layanan Otomotif Pangandaran",
    category: "Local Business",
    year: "2026",
    concept: false,
    overview:
      "Website profil bisnis otomotif lokal yang menampilkan layanan, informasi kontak, dan membangun kepercayaan calon pelanggan.",
    problem:
      "Bisnis lokal belum memiliki kehadiran digital resmi. Calon pelanggan sulit menemukan informasi layanan dan lokasi.",
    solution:
      "Kami membangun website company profile yang ringkas, dengan penekanan pada layanan dan akses kontak yang mudah.",
    features: [
      "Halaman layanan",
      "Informasi kontak dan lokasi",
      "Desain yang membangun kepercayaan",
      "Responsive di mobile",
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    process: [
      { step: "Brief", description: "Mengumpulkan informasi layanan dan target pelanggan." },
      { step: "Design", description: "Desain yang profesional dan mudah dibaca." },
      { step: "Build", description: "Implementasi responsif." },
    ],
    coverImage: {
      src: "/portfolio/automotive-pangandaran/cover.png",
      alt: "Beranda Layanan Otomotif Pangandaran",
    },
    liveUrl: "https://layanan-otomotif-pangandaran.vercel.app/",
    mockupKey: "automotive",
    translations: {
      en: {
        title: "Pangandaran Auto Service",
        category: "Local Business",
        overview:
          "A local automotive business profile website showcasing services, contact info, and building trust with potential customers.",
        problem:
          "The local business lacked an official digital presence. Prospects struggled to find service information and location.",
        solution:
          "We built a concise company profile website, emphasizing services and easy contact access.",
        features: [
          "Service pages",
          "Contact and location info",
          "Trust-building design",
          "Mobile responsive",
        ],
        process: [
          { step: "Brief", description: "Gathering service information and target customers." },
          { step: "Design", description: "Professional and easy-to-read design." },
          { step: "Build", description: "Responsive implementation." },
        ],
      },
      ko: {
        title: "빠난다란 자동차 서비스",
        category: "로컬 비즈니스",
        overview:
          "서비스, 연락처 정보를 보여주고 잠재 고객과의 신뢰를 구축하는 지역 자동차 비즈니스 프로필 웹사이트.",
        problem:
          "지역 비즈니스에 공식 디지털 존재감이 없었습니다. 잠재 고객은 서비스 정보와 위치를 찾기 어려웠습니다.",
        solution:
          "서비스와 쉬운 연락처 액세스에 중점을 둔 간결한 회사 소개 웹사이트를 구축했습니다.",
        features: [
          "서비스 페이지",
          "연락처 및 위치 정보",
          "신뢰 구축 디자인",
          "모바일 반응형",
        ],
      },
      zh: {
        title: "Pangandaran 汽车服务",
        category: "本地企业",
        overview:
          "展示服务、联系信息并与潜在客户建立信任的本地汽车企业简介网站。",
        problem:
          "该本地企业缺乏官方数字形象。潜在客户难以找到服务信息和位置。",
        solution:
          "我们构建了一个简洁的企业简介网站，强调服务和便捷的联系方式。",
        features: [
          "服务页面",
          "联系和位置信息",
          "建立信任的设计",
          "移动响应式",
        ],
      },
      ja: {
        title: "パンガンダラン自動車サービス",
        category: "ローカルビジネス",
        overview:
          "サービス、連絡先情報を紹介し、見込み客との信頼を築くローカル自動車ビジネスのプロフィールサイト。",
        problem:
          "ローカルビジネスには公式のデジタルプレゼンスがありませんでした。見込み客はサービス情報と場所を見つけるのに苦労しました。",
        solution:
          "サービスと簡単な連絡先アクセスに重点を置いた簡潔な会社概要ウェブサイトを構築しました。",
        features: [
          "サービスページ",
          "連絡先と場所の情報",
          "信頼を築くデザイン",
          "モバイルレスポンシブ",
        ],
      },
    },
  },
  {
    slug: "beauty-studio",
    title: "Beauty Studio",
    category: "Business Website",
    year: "2025",
    concept: true,
    overview:
      "Website studio kecantikan dengan pendekatan editorial yang elegan, menonjolkan suasana dan layanan.",
    problem:
      "Studio kecantikan bersaing ketat di media sosial. Mereka membutuhkan pusat informasi yang terasa premium dan sesuai dengan citra brand.",
    solution:
      "Kami merancang website dengan tipografi editorial, ruang putih yang lapang, dan alur yang mengarah ke pemesanan.",
    features: [
      "Desain editorial",
      "Halaman layanan",
      "Galeri suasana",
      "CTA pemesanan",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    process: [
      { step: "Moodboard", description: "Menyusun arah visual yang sesuai brand." },
      { step: "Design", description: "Desain halaman dengan tipografi sebagai elemen utama." },
      { step: "Build", description: "Implementasi animasi halus dan responsif." },
    ],
    demoUrl: siteConfig.demoBaseUrl,
    mockupKey: "beauty",
    translations: {
      en: {
        title: "Beauty Studio",
        category: "Business Website",
        overview:
          "A beauty studio website with an elegant editorial approach, highlighting atmosphere and services.",
        problem:
          "Beauty studios compete heavily on social media. They need an information hub that feels premium and matches their brand image.",
        solution:
          "We designed a website with editorial typography, generous white space, and a flow that guides toward booking.",
        features: [
          "Editorial design",
          "Service pages",
          "Atmosphere gallery",
          "Booking CTA",
        ],
        process: [
          { step: "Moodboard", description: "Defining a brand-aligned visual direction." },
          { step: "Design", description: "Designing pages with typography as the main element." },
          { step: "Build", description: "Implementing smooth, responsive animations." },
        ],
      },
      ko: {
        title: "뷰티 스튜디오",
        category: "비즈니스 웹사이트",
        overview:
          "우아한 에디토리얼 접근 방식으로 분위기와 서비스를 강조하는 뷰티 스튜디오 웹사이트.",
        problem:
          "뷰티 스튜디오는 소셜 미디어에서 치열하게 경쟁합니다. 프리미엄 느낌이 나고 브랜드 이미지에 맞는 정보 허브가 필요합니다.",
        solution:
          "에디토리얼 타이포그래피, 넉넉한 여백, 예약으로 이어지는 흐름을 갖춘 웹사이트를 설계했습니다.",
        features: [
          "에디토리얼 디자인",
          "서비스 페이지",
          "분위기 갤러리",
          "예약 CTA",
        ],
      },
      zh: {
        title: "Beauty Studio",
        category: "企业网站",
        overview:
          "采用优雅编辑式方法的美容工作室网站，突显氛围和服务。",
        problem:
          "美容工作室在社交媒体上竞争激烈。他们需要一个感觉高端并符合品牌形象的信息枢纽。",
        solution:
          "我们设计了一个采用编辑式排版、宽敞留白和引导预约流程的网站。",
        features: [
          "编辑式设计",
          "服务页面",
          "氛围画廊",
          "预约 CTA",
        ],
      },
      ja: {
        title: "ビューティースタジオ",
        category: "ビジネスウェブサイト",
        overview:
          "エレガントなエディトリアルアプローチで、雰囲気とサービスを強調する美容スタジオのウェブサイト。",
        problem:
          "美容スタジオはソーシャルメディアで激しく競争しています。プレミアム感があり、ブランドイメージに合う情報ハブが必要です。",
        solution:
          "エディトリアルタイポグラフィ、ゆとりのある余白、予約へと導く流れを備えたウェブサイトを設計しました。",
        features: [
          "エディトリアルデザイン",
          "サービスページ",
          "雰囲気ギャラリー",
          "予約CTA",
        ],
      },
    },
  },
  {
    slug: "digital-business-platform",
    title: "Digital Business Platform",
    category: "Web Application",
    year: "2025",
    concept: true,
    overview:
      "Antarmuka dashboard untuk platform bisnis digital dengan fokus pada keterbacaan data dan efisiensi.",
    problem:
      "Pengguna bisnis membutuhkan tampilan data yang kompleks tanpa merasa kewalahan. Dashboard yang ada terlalu padat.",
    solution:
      "Kami menyusun hierarki visual yang jelas, kartu KPI yang ringkas, dan grafik yang mudah dipindai.",
    features: [
      "Dashboard KPI",
      "Grafik performa",
      "Sidebar navigasi",
      "Tabel data ringkas",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    process: [
      { step: "Riset", description: "Memahami metrik yang paling penting bagi pengguna." },
      { step: "Wireframe", description: "Menyusun tata letak dashboard." },
      { step: "Visual Design", description: "Desain antarmuka yang bersih dan fokus." },
    ],
    demoUrl: siteConfig.demoBaseUrl,
    mockupKey: "dashboard",
    translations: {
      en: {
        title: "Digital Business Platform",
        category: "Web Application",
        overview:
          "A dashboard interface for a digital business platform, focused on data readability and efficiency.",
        problem:
          "Business users need to view complex data without feeling overwhelmed. Existing dashboards are too dense.",
        solution:
          "We structured a clear visual hierarchy, concise KPI cards, and easy-to-scan charts.",
        features: [
          "KPI dashboard",
          "Performance charts",
          "Navigation sidebar",
          "Condensed data tables",
        ],
        process: [
          { step: "Research", description: "Understanding the metrics most important to users." },
          { step: "Wireframe", description: "Structuring the dashboard layout." },
          { step: "Visual Design", description: "Clean and focused interface design." },
        ],
      },
      ko: {
        title: "디지털 비즈니스 플랫폼",
        category: "웹 애플리케이션",
        overview:
          "데이터 가독성과 효율성에 초점을 맞춘 디지털 비즈니스 플랫폼의 대시보드 인터페이스.",
        problem:
          "비즈니스 사용자는 압도당하지 않고 복잡한 데이터를 봐야 합니다. 기존 대시보드는 너무 빽빽합니다.",
        solution:
          "명확한 시각적 계층, 간결한 KPI 카드, 쉽게 스캔할 수 있는 차트를 구성했습니다.",
        features: [
          "KPI 대시보드",
          "성능 차트",
          "내비게이션 사이드바",
          "요약 데이터 테이블",
        ],
      },
      zh: {
        title: "数字业务平台",
        category: "Web 应用",
        overview:
          "面向数字业务平台的仪表板界面，专注于数据可读性和效率。",
        problem:
          "业务用户需要查看复杂数据而不感到不知所措。现有仪表板过于密集。",
        solution:
          "我们构建了清晰的视觉层次、简洁的 KPI 卡片和易于浏览的图表。",
        features: [
          "KPI 仪表板",
          "性能图表",
          "导航侧边栏",
          "精简数据表",
        ],
      },
      ja: {
        title: "デジタルビジネスプラットフォーム",
        category: "Webアプリケーション",
        overview:
          "データの可読性と効率性に焦点を当てた、デジタルビジネスプラットフォームのダッシュボードインターフェース。",
        problem:
          "ビジネスユーザーは圧倒されずに複雑なデータを表示する必要があります。既存のダッシュボードは密度が高すぎます。",
        solution:
          "明確な視覚的階層、簡潔なKPIカード、スキャンしやすいチャートを構成しました。",
        features: [
          "KPIダッシュボード",
          "パフォーマンスチャート",
          "ナビゲーションサイドバー",
          "要約データテーブル",
        ],
      },
    },
  },
];