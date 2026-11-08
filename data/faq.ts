// data/faq.ts
import type { Locale } from "@/components/LanguageProvider";

export type FAQCategory =
  | "General"
  | "Pricing"
  | "Development Process"
  | "Hosting & Domain"
  | "Maintenance"
  | "Technical";

export type FAQTranslation = {
  question: string;
  answer: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  category: FAQCategory;
  translations?: Partial<Record<Exclude<Locale, "id">, FAQTranslation>>;
};

export const faqItems: FAQItem[] = [
  {
    category: "General",
    question: "Apa itu Nacode?",
    answer:
      "Nacode adalah studio pengembangan web independen yang membantu bisnis membangun kehadiran digital melalui website yang modern, cepat, dan terarah.",
    translations: {
      en: {
        question: "What is Nacode?",
        answer:
          "Nacode is an independent web development studio that helps businesses build their digital presence through modern, fast, and purposeful websites.",
      },
      ko: {
        question: "Nacode는 무엇인가요?",
        answer:
          "Nacode는 현대적이고 빠르며 목적 있는 웹사이트를 통해 기업의 디지털 존재감 구축을 돕는 독립 웹 개발 스튜디오입니다.",
      },
      zh: {
        question: "Nacode 是什么？",
        answer:
          "Nacode 是一家独立网页开发工作室，通过现代、快速、有目标的网站帮助企业建立数字形象。",
      },
      ja: {
        question: "Nacodeとは何ですか？",
        answer:
          "Nacodeは、モダンで高速、目的を持ったウェブサイトを通じて企業のデジタルプレゼンス構築を支援する独立系ウェブ開発スタジオです。",
      },
    },
  },
  {
    category: "General",
    question: "Siapa yang mengerjakan project saya?",
    answer:
      "Project ditangani langsung oleh pendiri Nacode. Kami bekerja dengan jumlah project terbatas agar setiap klien mendapat perhatian penuh.",
    translations: {
      en: {
        question: "Who works on my project?",
        answer:
          "Your project is handled directly by Nacode's founder. We work with a limited number of projects so every client gets full attention.",
      },
      ko: {
        question: "제 프로젝트는 누가 작업하나요?",
        answer:
          "귀하의 프로젝트는 Nacode 창립자가 직접 담당합니다. 소수의 프로젝트로 작업하여 모든 고객이 충분한 관심을 받을 수 있도록 합니다.",
      },
      zh: {
        question: "谁负责我的项目？",
        answer:
          "您的项目由 Nacode 创始人直接负责。我们只承接有限数量的项目，确保每位客户都获得充分关注。",
      },
      ja: {
        question: "私のプロジェクトは誰が担当しますか？",
        answer:
          "あなたのプロジェクトはNacodeの創業者が直接担当します。案件数を限定することで、すべてのお客様に十分な注意を払います。",
      },
    },
  },
  {
    category: "Pricing",
    question: "Berapa biaya pembuatan website?",
    answer:
      "Paket Microsite mulai dari Rp 750.000, Landing Page mulai dari Rp 1,8 juta, Corporate Identity mulai dari Rp 3,5 juta, hingga sistem operasional kustom mulai dari Rp 15 juta. Penawaran final mengikuti kebutuhan dan ruang lingkup.",
    translations: {
      en: {
        question: "How much does a website cost?",
        answer:
          "Microsite packages start from Rp 750,000, Landing Pages from Rp 1.8 million, Corporate Identity from Rp 3.5 million, up to custom operational systems from Rp 15 million. Final quotes depend on scope and requirements.",
      },
      ko: {
        question: "웹사이트 제작 비용은 얼마인가요?",
        answer:
          "마이크로사이트는 75만 루피아부터, 랜딩 페이지는 180만 루피아부터, 기업 아이덴티티는 350만 루피아부터, 맞춤 운영 시스템은 1,500만 루피아부터 시작합니다. 최종 견적은 요구사항과 범위에 따라 결정됩니다.",
      },
      zh: {
        question: "制作网站需要多少钱？",
        answer:
          "微网站套餐 75 万印尼盾起，落地页 180 万印尼盾起，企业标识 350 万印尼盾起，定制运营系统 1500 万印尼盾起。最终报价取决于需求和范围。",
      },
      ja: {
        question: "ウェブサイト制作の費用はいくらですか？",
        answer:
          "マイクロサイトは75万ルピアから、ランディングページは180万ルピアから、コーポレートアイデンティティは350万ルピアから、カスタム運用システムは1,500万ルピアからとなります。最終的なお見積もりは要件と範囲によって異なります。",
      },
    },
  },
  {
    category: "Pricing",
    question: "Apakah ada biaya tambahan selain jasa pembuatan?",
    answer:
      "Biaya domain dan hosting tahun pertama sudah termasuk dalam paket. Perpanjangan tahun berikutnya terpisah. Jika ada kebutuhan fitur di luar ruang lingkup, kami jelaskan estimasinya secara transparan di penawaran.",
    translations: {
      en: {
        question: "Are there additional costs beyond the development fee?",
        answer:
          "First-year domain and hosting are included in the package. Renewal in subsequent years is separate. If features beyond the agreed scope are needed, we clearly state the estimate in the proposal.",
      },
      ko: {
        question: "개발비 외에 추가 비용이 있나요?",
        answer:
          "첫해 도메인 및 호스팅은 패키지에 포함되어 있습니다. 다음 해 갱신은 별도입니다. 계약 범위를 벗어나는 기능이 필요한 경우, 견적서에 예상 비용을 투명하게 안내드립니다.",
      },
      zh: {
        question: "除了开发费用外还有其他成本吗？",
        answer:
          "首年域名和主机已包含在套餐内。后续年度续费需另行支付。如有超出约定范围的功能需求，我们会在报价中明确说明预估成本。",
      },
      ja: {
        question: "開発費以外に追加費用はかかりますか？",
        answer:
          "初年度のドメインとホスティングはパッケージに含まれています。翌年以降の更新は別途となります。契約範囲外の機能が必要な場合は、お見積もりにて予想費用を明確にご案内します。",
      },
    },
  },
  {
    category: "Development Process",
    question: "Berapa lama pengerjaan website?",
    answer:
      "Paket Microsite sekitar 2–4 hari kerja, Landing Page sekitar 5–7 hari kerja, Corporate Identity sekitar 7–10 hari kerja. Untuk sistem kustom, timeline ditentukan setelah ruang lingkup disepakati.",
    translations: {
      en: {
        question: "How long does it take to build a website?",
        answer:
          "Microsite packages take around 2–4 business days, Landing Pages 5–7 business days, Corporate Identity 7–10 business days. For custom systems, the timeline is determined once the scope is agreed.",
      },
      ko: {
        question: "웹사이트 제작 기간은 얼마나 걸리나요?",
        answer:
          "마이크로사이트는 약 2–4 영업일, 랜딩 페이지는 5–7 영업일, 기업 아이덴티티는 7–10 영업일 정도 소요됩니다. 맞춤 시스템은 범위 확정 후 일정을 결정합니다.",
      },
      zh: {
        question: "制作网站需要多长时间？",
        answer:
          "微网站约需 2–4 个工作日，落地页约需 5–7 个工作日，企业标识约需 7–10 个工作日。定制系统则在确认范围后确定时间表。",
      },
      ja: {
        question: "ウェブサイト制作にはどのくらいかかりますか？",
        answer:
          "マイクロサイトは約2〜4営業日、ランディングページは5〜7営業日、コーポレートアイデンティティは7〜10営業日です。カスタムシステムは範囲確定後にスケジュールを決定します。",
      },
    },
  },
  {
    category: "Development Process",
    question: "Apakah saya bisa meminta revisi?",
    answer:
      "Ya. Jumlah revisi berbeda per paket dan dijelaskan di penawaran. Revisi di luar ruang lingkup akan dibahas terpisah.",
    translations: {
      en: {
        question: "Can I request revisions?",
        answer:
          "Yes. The number of revisions varies by package and is stated in the proposal. Revisions beyond the agreed scope are discussed separately.",
      },
      ko: {
        question: "수정을 요청할 수 있나요?",
        answer:
          "네. 수정 횟수는 패키지마다 다르며 견적서에 명시되어 있습니다. 계약 범위 외 수정은 별도로 논의됩니다.",
      },
      zh: {
        question: "我可以要求修改吗？",
        answer:
          "可以。修改次数因套餐而异，并在报价中说明。超出约定范围的修改将另行协商。",
      },
      ja: {
        question: "修正は依頼できますか？",
        answer:
          "はい。修正回数はプランによって異なり、お見積もりに記載されています。契約範囲外の修正は別途ご相談となります。",
      },
    },
  },
  {
    category: "Hosting & Domain",
    question: "Apakah domain dan hosting sudah termasuk?",
    answer:
      "Ya. Semua paket saat ini sudah termasuk domain dan hosting tahun pertama sesuai ketentuan masing-masing paket. Perpanjangan tahun berikutnya terpisah.",
    translations: {
      en: {
        question: "Are domain and hosting included?",
        answer:
          "Yes. All packages currently include domain and hosting for the first year according to each package's terms. Renewal in subsequent years is separate.",
      },
      ko: {
        question: "도메인과 호스팅이 포함되어 있나요?",
        answer:
          "네. 현재 모든 패키지에는 각 패키지 약관에 따라 첫해 도메인과 호스팅이 포함되어 있습니다. 다음 해 갱신은 별도입니다.",
      },
      zh: {
        question: "域名和主机包含在内吗？",
        answer:
          "包含。目前所有套餐均按各自条款包含首年域名和主机。后续年度续费需另行支付。",
      },
      ja: {
        question: "ドメインとホスティングは含まれていますか？",
        answer:
          "はい。現在すべてのプランに、各プランの規定に基づき初年度のドメインとホスティングが含まれています。翌年以降の更新は別途となります。",
      },
    },
  },
  {
    category: "Maintenance",
    question: "Apakah tersedia layanan maintenance?",
    answer:
      "Ya. Maintenance tersedia sebagai layanan terpisah, mulai dari pembaruan konten, backup, hingga audit teknis.",
    translations: {
      en: {
        question: "Is maintenance available?",
        answer:
          "Yes. Maintenance is available as a separate service, ranging from content updates and backups to technical audits.",
      },
      ko: {
        question: "유지보수 서비스를 제공하나요?",
        answer:
          "네. 유지보수는 콘텐츠 업데이트, 백업, 기술 감사 등 별도 서비스로 제공됩니다.",
      },
      zh: {
        question: "提供维护服务吗？",
        answer:
          "提供。维护作为单独的服务提供，包括内容更新、备份到技术审计等。",
      },
      ja: {
        question: "メンテナンスサービスはありますか？",
        answer:
          "はい。メンテナンスはコンテンツ更新、バックアップ、技術監査など、別途サービスとしてご提供しています。",
      },
    },
  },
  {
    category: "Technical",
    question: "Apakah website bisa dibuka di HP?",
    answer:
      "Semua website yang kami bangun responsif secara default — tampil optimal di desktop, tablet, dan mobile.",
    translations: {
      en: {
        question: "Is the website mobile-friendly?",
        answer:
          "Every website we build is responsive by default — it looks great on desktop, tablet, and mobile.",
      },
      ko: {
        question: "웹사이트가 모바일에서 열리나요?",
        answer:
          "우리가 만드는 모든 웹사이트는 기본적으로 반응형입니다 — 데스크톱, 태블릿, 모바일에서 최적으로 표시됩니다.",
      },
      zh: {
        question: "网站能在手机上打开吗？",
        answer:
          "我们构建的所有网站默认都是响应式的——在桌面、平板和手机上都能完美显示。",
      },
      ja: {
        question: "ウェブサイトはスマホで見られますか？",
        answer:
          "私たちが制作するすべてのウェブサイトはデフォルトでレスポンシブです — デスクトップ、タブレット、モバイルで最適に表示されます。",
      },
    },
  },
  {
    category: "Technical",
    question: "Apakah website dapat dikembangkan kembali?",
    answer:
      "Ya. Kami membangun dengan struktur kode yang rapi sehingga memudahkan pengembangan di masa depan.",
    translations: {
      en: {
        question: "Can the website be extended later?",
        answer:
          "Yes. We build with clean code structure, making future development easier.",
      },
      ko: {
        question: "나중에 웹사이트를 확장할 수 있나요?",
        answer:
          "네. 깔끔한 코드 구조로 구축하여 향후 개발이 용이합니다.",
      },
      zh: {
        question: "网站以后可以继续扩展吗？",
        answer:
          "可以。我们以整洁的代码结构构建，便于未来的开发。",
      },
      ja: {
        question: "ウェブサイトは後から拡張できますか？",
        answer:
          "はい。クリーンなコード構造で構築するため、将来の開発が容易です。",
      },
    },
  },
  {
    category: "Technical",
    question: "Apakah website SEO friendly?",
    answer:
      "Semua paket menyertakan SEO dasar: meta tag, struktur heading, kecepatan, dan semantic HTML. Untuk optimasi lebih lanjut tersedia layanan terpisah.",
    translations: {
      en: {
        question: "Is the website SEO friendly?",
        answer:
          "All packages include basic SEO: meta tags, heading structure, speed, and semantic HTML. More advanced optimization is available as a separate service.",
      },
      ko: {
        question: "웹사이트가 SEO에 친화적인가요?",
        answer:
          "모든 패키지에는 기본 SEO가 포함됩니다: 메타 태그, 제목 구조, 속도, 시맨틱 HTML. 고급 최적화는 별도 서비스로 제공됩니다.",
      },
      zh: {
        question: "网站对 SEO 友好吗？",
        answer:
          "所有套餐均包含基础 SEO：元标签、标题结构、速度以及语义化 HTML。更高级的优化作为单独服务提供。",
      },
      ja: {
        question: "ウェブサイトはSEOに強いですか？",
        answer:
          "すべてのプランに基本SEO（メタタグ、見出し構造、速度、セマンティックHTML）が含まれています。より高度な最適化は別途サービスとしてご提供しています。",
      },
    },
  },
  {
    category: "Pricing",
    question: "Kenapa paket Strategic Software Partnership tidak ada harganya?",
    answer:
      "Karena lingkupnya berbeda per klien — ada yang butuh integrasi multi-platform, ada yang lebih fokus ke skalabilitas atau keamanan data. Kami mulai dengan sesi discovery untuk memahami kebutuhan, lalu menyusun blueprint dan penawaran per proyek. Tidak ada biaya untuk sesi diskusi awal.",
    translations: {
      en: {
        question: "Why doesn't Strategic Software Partnership have a fixed price?",
        answer:
          "Because the scope differs per client — some need multi-platform integrations, others focus more on scalability or data security. We start with a discovery session to understand requirements, then prepare a blueprint and a per-project proposal. There is no charge for the initial discussion.",
      },
      ko: {
        question: "Strategic Software Partnership 패키지에 가격이 없는 이유는 무엇인가요?",
        answer:
          "클라이언트마다 범위가 다르기 때문입니다 — 어떤 분은 멀티 플랫폼 통합이 필요하고, 어떤 분은 확장성이나 데이터 보안에 더 집중합니다. 먼저 디스커버리 세션으로 요구사항을 이해한 뒤 청사진과 프로젝트별 견적을 마련합니다. 초기 논의에는 비용이 들지 않습니다.",
      },
      zh: {
        question: "为什么 Strategic Software Partnership 套餐没有固定价格？",
        answer:
          "因为每个客户的范围不同——有些需要多平台集成，有些更注重可扩展性或数据安全。我们先进行需求探索会议，理解需求后制定蓝图和按项目的报价。初次讨论不收取费用。",
      },
      ja: {
        question: "Strategic Software Partnershipプランに価格設定がないのはなぜですか？",
        answer:
          "クライアントごとに範囲が異なるためです — マルチプラットフォーム統合が必要な方もいれば、スケーラビリティやデータセキュリティを重視される方もいます。まずディスカバリーセッションで要件を理解し、その後ブループリントとプロジェクトごとの見積もりを作成します。初回のご相談は無料です。",
      },
    },
  },
];