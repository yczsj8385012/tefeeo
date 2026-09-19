import React from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { ArrowRight, ShieldCheck, CheckCircle2, Store, ChevronRight, Ship, Globe2, Phone } from 'lucide-react';

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
  onOpenLicenseModal,
  onScrollToDistribution,
  onScrollToCalculator,
  onNavigateToProducts,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  return (
    <section
      id="hero-banner-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] mb-6">
            <span className="block text-white mb-2">{t.hero.titleMain}</span>
            <span className="bg-gradient-to-r from-red-400 via-amber-300 to-red-500 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed font-normal">
            {t.hero.description}
          </p>

          {/* Two Core Target Hubs Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-950/60 border border-red-500/30 text-xs font-semibold text-red-300">
              <Globe2 className="w-3.5 h-3.5 text-red-400" />
              进口板块：IMPERIAL等国际品牌入华总代
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 text-xs font-semibold text-amber-300">
              <Ship className="w-3.5 h-3.5 text-amber-400" />
              出口板块：特菲奥自主品牌直供东南亚 · 南亚 · 中东 · 非洲
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
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

          {/* Corporate Trust Badge & Hotline */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div
              id="hero-license-badge"
              onClick={onOpenLicenseModal}
              className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 px-4 py-2 rounded-lg border border-slate-800 transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.hero.trustBadge}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            </div>

            <a
              href="tel:+8601089801090"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 hover:bg-slate-800 px-3 py-2 rounded-lg border border-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>官方服务专线: +86-010-89801090 / 400 166 1090</span>
            </a>
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
