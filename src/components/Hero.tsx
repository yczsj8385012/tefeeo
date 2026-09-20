import React from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { ArrowRight, ShieldCheck, Store, ChevronRight, Ship, Globe2 } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenLicenseModal: () => void;
  onScrollToDistribution: () => void;
  onScrollToCalculator: () => void;
  onNavigateToProducts?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenInquiry,
  onOpenLicenseModal: _onOpenLicenseModal,
  onScrollToDistribution: _onScrollToDistribution,
  onScrollToCalculator: _onScrollToCalculator,
  onNavigateToProducts,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  // Dual-Pillar localized content for Scheme B
  const pillarContent: Record<Language, {
    importTitle: string;
    importBadge: string;
    importDesc: string;
    exportTitle: string;
    exportBadge: string;
    exportDesc: string;
  }> = {
    zh: {
      importTitle: '进口代理 · 国外知名品牌入华总代',
      importBadge: '覆盖数千家商超KA',
      importDesc: '海外优质知名品牌（如泰国皇室同款 IMPERIAL 因贝利曲奇等）大中华区总代，深度铺设中国全渠道网络。',
      exportTitle: '全球出口 · 特菲奥自有品牌直供',
      exportBadge: '现货源头直供出海',
      exportDesc: '特菲奥自主高品质休闲食品现货直供，战略直达东南亚、南亚、中东、非洲等全球大市场，支持大宗直采与定制。',
    },
    en: {
      importTitle: 'Import Agency · Master Partner in China',
      importBadge: '3,000+ Supermarket Chains',
      importDesc: 'Master import partner for iconic global brands (e.g. IMPERIAL Danish Cookies) with deep placement across China nationwide.',
      exportTitle: 'Global Export · Tefeeo Snacks Direct Supply',
      exportBadge: 'Direct Factory Sourcing',
      exportDesc: 'Direct export of premium Tefeeo snacks to international buyers across SE Asia, South Asia, Middle East, and Africa.',
    },
    th: {
      importTitle: 'ตัวแทนนำเข้า · แบรนด์ระดับโลกสู่ตลาดจีน',
      importBadge: 'ซูเปอร์มาร์เก็ตกว่า 3,000+ แห่ง',
      importDesc: 'ตัวแทนนำเข้าและจัดจำหน่ายคุกกี้ IMPERIAL และแบรนด์ชั้นนำระดับโลกสู่ห้างสรรพสินค้าชั้นนำทั่วประเทศจีน',
      exportTitle: 'ส่งออกทั่วโลก · แบรนด์ Tefeeo โดยตรง',
      exportBadge: 'ส่งตรงจากโรงงาน',
      exportDesc: 'ส่งออกขนมขบเคี้ยวคุณภาพสูงของ Tefeeo สู่ผู้ซื้อในเอเชียตะวันออกเฉียงใต้ เอเชียใต้ ตะวันออกกลาง และแอฟริกา',
    },
    vi: {
      importTitle: 'Đại Diện Nhập Khẩu · Đưa Thương Hiệu Vào TQ',
      importBadge: '3.000+ Hệ Thống Siêu Thị',
      importDesc: 'Tổng đại lý nhập khẩu độc quyền các thương hiệu quốc tế (như bánh quy IMPERIAL) phân phối toàn Trung Quốc.',
      exportTitle: 'Xuất Khẩu Toàn Cầu · Bánh Kẹo Tefeeo Trực Tiếp',
      exportBadge: 'Nguồn Cung Trực Tiếp',
      exportDesc: 'Cung cấp trực tiếp các sản phẩm ăn vặt Tefeeo chất lượng cao tới Đông Nam Á, Nam Á, Trung Đông và Châu Phi.',
    },
    ja: {
      importTitle: '輸入総代理 · 海外有名ブランドの中国展開',
      importBadge: '3,000超の主要スーパー網',
      importDesc: 'IMPERIALクッキー等の国際有名ブランドの中国総代理店として、全国の量販店・コンビニへ深く配荷展開。',
      exportTitle: 'グローバル輸出 · 特菲奥(Tefeeo)ブランド直供',
      exportBadge: '工場直送・大口取引',
      exportDesc: '特菲奥の高品質スナックを東南アジア・南アジア・中東・アフリカなどの国際バイヤーへ直接輸出供給。',
    },
    ko: {
      importTitle: '수입 총판 · 해외 유명 브랜드 중국 진출',
      importBadge: '3,000+ 대형 유통망',
      importDesc: '태국 왕실 납품 IMPERIAL 쿠키 등 글로벌 유명 브랜드의 대중국 총판으로 전국 대형마트 및 편의점 유통.',
      exportTitle: '글로벌 수출 · Tefeeo 자체 브랜드 직공급',
      exportBadge: '원스톱 직수출',
      exportDesc: 'Tefeeo 프리미엄 스낵을 동남아, 남아시아, 중동, 아프리카 등 글로벌 바이어에게 직수출 공급합니다.',
    },
    ar: {
      importTitle: 'وكالة الاستيراد · إدخال العلامات العالمية للصين',
      importBadge: 'أكثر من 3000 متجر وسوبرماركت',
      importDesc: 'الوكيل الحصري للعلامات العالمية المرموقة (مثل كوكيز إمبريال) مع شبكة توزيع شاملة في كبرى متاجر الصين.',
      exportTitle: 'التصدير العالمي · توريد منتجات تيفيو مباشرة',
      exportBadge: 'توريد مباشر من المصدر',
      exportDesc: 'تصدير وجبات تيفيو الخفيفة عالية الجودة مباشرة للمشترين في جنوب شرق آسيا وجنوب آسيا والشرق الأوسط وأفريقيا.',
    },
  };

  const currentPillar = pillarContent[currentLang] || pillarContent.zh;

  return (
    <section
      id="hero-banner-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Official Registered Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-red-500/30 text-red-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-red-400" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] mb-8">
            <span className="block text-white mb-2">{t.hero.titleMain}</span>
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-500 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Scheme B with Scheme 1 Lighting: Dual-Pillar Structured Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4.5 max-w-4xl mx-auto mb-9 text-left">
            {/* Card 1: Import Agency */}
            <div className="p-5 sm:p-5.5 rounded-2xl bg-slate-800/85 border border-slate-700/80 hover:border-red-500/50 hover:bg-slate-800/95 transition-all duration-300 backdrop-blur-md flex flex-col justify-between shadow-xl ring-1 ring-white/10 group">
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center border border-red-500/40 shrink-0">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-red-200 transition-colors">
                      {currentPillar.importTitle}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 shrink-0">
                    {currentPillar.importBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-0.5">
                  {currentPillar.importDesc}
                </p>
              </div>
            </div>

            {/* Card 2: Export Supply */}
            <div className="p-5 sm:p-5.5 rounded-2xl bg-slate-800/85 border border-slate-700/80 hover:border-amber-500/50 hover:bg-slate-800/95 transition-all duration-300 backdrop-blur-md flex flex-col justify-between shadow-xl ring-1 ring-white/10 group">
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/40 shrink-0">
                      <Ship className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                      {currentPillar.exportTitle}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                    {currentPillar.exportBadge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-0.5">
                  {currentPillar.exportDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
            <button
              id="hero-primary-cta"
              onClick={() => onOpenInquiry('特菲奥品牌海外采购与出口合作')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/25 transition-all flex items-center justify-center gap-2 group cursor-pointer border border-red-400/40"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => onOpenInquiry('国外知名品牌大中华区进口代理')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-semibold text-sm sm:text-base hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Store className="w-4 h-4 text-red-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>

            {onNavigateToProducts && (
              <button
                id="hero-products-cta"
                onClick={onNavigateToProducts}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-slate-600 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>浏览特菲奥全系产品中心</span>
                <ChevronRight className="w-4 h-4 text-red-400" />
              </button>
            )}
          </div>
        </div>

        {/* 4 Quantitative Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-800/80">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm text-left hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-400 mb-1 tracking-tight">
              {t.hero.stats.experience.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.experience.label}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm text-left hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight">
              {t.hero.stats.coverage.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.coverage.label}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm text-left hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1 tracking-tight">
              {t.hero.stats.channels.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.channels.label}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm text-left hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1 tracking-tight">
              {t.hero.stats.efficiency.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">
              {t.hero.stats.efficiency.label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

