import React from 'react';
import { Language } from '../types';
import { languageOptions } from '../translations';
import { companyStrengthsByLang } from '../data/companyStrengthData';
import {
  ShieldCheck,
  Building2,
  Ship,
  Store,
  Boxes,
  Award,
  FileCheck,
  Anchor,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface CompanyStrengthSectionProps {
  currentLang: Language;
  onOpenLicenseModal: () => void;
  onOpenInquiry: (subject?: string) => void;
}

export const CompanyStrengthSection: React.FC<CompanyStrengthSectionProps> = ({
  currentLang,
  onOpenLicenseModal,
  onOpenInquiry,
}) => {
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';
  const langData = companyStrengthsByLang[currentLang] || companyStrengthsByLang.en;

  const strengthsConfig = [
    {
      id: 'credentials',
      icon: ShieldCheck,
      onCta: onOpenLicenseModal,
      borderAccent: 'border-blue-200 hover:border-blue-400',
      iconBg: 'bg-blue-50 text-blue-700',
    },
    {
      id: 'exclusive-agency',
      icon: Award,
      onCta: () => onOpenInquiry('海外知名品牌代理入华洽谈'),
      borderAccent: 'border-red-200 hover:border-red-400',
      iconBg: 'bg-red-50 text-red-700',
    },
    {
      id: 'proprietary-export',
      icon: Ship,
      onCta: () => onOpenInquiry('特菲奥自主品牌出口集采'),
      borderAccent: 'border-amber-200 hover:border-amber-400',
      iconBg: 'bg-amber-50 text-amber-700',
    },
    {
      id: 'retail-network',
      icon: Store,
      onCta: () => {
        const el = document.getElementById('retail-store-presence');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      borderAccent: 'border-emerald-200 hover:border-emerald-400',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'logistics-hub',
      icon: Boxes,
      onCta: () => onOpenInquiry('物流仓储与交割方案咨询'),
      borderAccent: 'border-indigo-200 hover:border-indigo-400',
      iconBg: 'bg-indigo-50 text-indigo-700',
    },
    {
      id: 'halal-compliance',
      icon: FileCheck,
      onCta: () => onOpenInquiry('质检与清真合规资质索取'),
      borderAccent: 'border-teal-200 hover:border-teal-400',
      iconBg: 'bg-teal-50 text-teal-700',
    },
  ];

  const strengths = strengthsConfig.map((cfg) => {
    const itemData = langData.items[cfg.id] || companyStrengthsByLang.en.items[cfg.id];
    return {
      ...cfg,
      badge: itemData.badge,
      title: itemData.title,
      subtitle: itemData.subtitle,
      description: itemData.description,
      highlights: itemData.highlights,
      ctaText: itemData.ctaText,
    };
  });

  return (
    <section
      id="company-strength-section"
      className="py-24 bg-white text-slate-900 border-b border-slate-200 relative"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-red-600" />
            <span>{langData.headerBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {langData.headerTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {langData.headerDescription}
          </p>
        </div>

        {/* 6 High-Impact Enterprise Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`strength-card-${item.id}`}
                className={`rounded-2xl p-7 bg-slate-50/70 hover:bg-white border ${item.borderAccent} transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs whitespace-nowrap">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-red-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-3.5">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-slate-200/80">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Link */}
                  <button
                    onClick={item.onCta}
                    className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-semibold border border-slate-300 hover:border-slate-900 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>{item.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Trade Key Quantitative Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 mb-2 tracking-wide uppercase">
              <Anchor className="w-4 h-4 text-red-400" />
              <span>GLOBAL SUPPLY CHAIN ASSURANCE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {langData.bannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {langData.bannerDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenInquiry('整柜出口海运订舱与FOB交割报价')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer text-center"
            >
              {langData.bannerCtaQuotation}
            </button>
            <button
              onClick={onOpenLicenseModal}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{langData.bannerCtaLicense}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
