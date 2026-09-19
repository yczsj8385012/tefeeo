import React from 'react';
import { Language, BusinessPillar } from '../types';
import { translations, languageOptions } from '../translations';
import { Globe2, Ship, Check, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

interface BusinessPillarsProps {
  currentLang: Language;
  onSelectPillar: (pillarTitle: string) => void;
}

export const BusinessPillars: React.FC<BusinessPillarsProps> = ({
  currentLang,
  onSelectPillar,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship':
        return <Ship className="w-7 h-7 text-amber-600" />;
      case 'Globe2':
      default:
        return <Globe2 className="w-7 h-7 text-red-600" />;
    }
  };

  return (
    <section
      id="business-pillars"
      className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md mb-3 border border-red-200">
            {t.pillars.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.pillars.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 2 Core Strategic Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.pillars.items.map((item: BusinessPillar) => {
            const isImport = item.id === 'import_agency';
            return (
              <div
                key={item.id}
                id={`pillar-card-${item.id}`}
                className={`group relative rounded-3xl bg-white border p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl ${
                  isImport
                    ? 'border-red-200/80 hover:border-red-500'
                    : 'border-amber-200/80 hover:border-amber-500'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                        isImport
                          ? 'bg-red-50 border border-red-200'
                          : 'bg-amber-50 border border-amber-200'
                      }`}
                    >
                      {getIcon(item.icon)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md">
                        {item.tag}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                          isImport
                            ? 'text-red-700 bg-red-50 border-red-200'
                            : 'text-amber-800 bg-amber-50 border-amber-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4 tracking-wider uppercase">
                    {item.subtitle}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Target Regions Callout */}
                  {item.targetRegions && (
                    <div className="mb-6 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs font-medium text-slate-700">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{item.targetRegions}</span>
                    </div>
                  )}

                  {/* Key Capabilities Bullet Points */}
                  <ul className="space-y-3 mb-8 border-t border-slate-100 pt-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => onSelectPillar(item.title)}
                  className={`inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-bold transition-colors cursor-pointer ${
                    isImport
                      ? 'text-slate-800 group-hover:text-red-600'
                      : 'text-slate-800 group-hover:text-amber-600'
                  }`}
                >
                  <span>
                    {isImport ? '洽谈海外品牌代理入华' : '索取特菲奥出口报价与样品'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bilateral Synergy Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                双向贸易合规护航 · 国际正规报关商检
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                特菲奥拥有海关进出口收发货人资质，具备完整的海关代码、检验检疫及外汇合规对公结算系统。
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectPillar('进出口双向商贸综合咨询')}
            className="shrink-0 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            联系特菲奥进出口业务部
          </button>
        </div>
      </div>
    </section>
  );
};
