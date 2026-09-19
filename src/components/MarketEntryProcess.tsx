import React from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { ClipboardCheck, FileSignature, ShieldAlert, Truck, Flame, ArrowRight } from 'lucide-react';

interface MarketEntryProcessProps {
  currentLang: Language;
  onOpenInquiry: () => void;
}

export const MarketEntryProcess: React.FC<MarketEntryProcessProps> = ({
  currentLang,
  onOpenInquiry,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const stepIcons = [
    <ClipboardCheck className="w-5 h-5 text-amber-500" key="1" />,
    <FileSignature className="w-5 h-5 text-amber-500" key="2" />,
    <ShieldAlert className="w-5 h-5 text-amber-500" key="3" />,
    <Truck className="w-5 h-5 text-amber-500" key="4" />,
    <Flame className="w-5 h-5 text-amber-500" key="5" />,
  ];

  return (
    <section
      id="market-process"
      className="py-24 bg-white text-slate-900 border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-md mb-3 border border-amber-200">
            {t.process.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 5 Step Process Horizontal/Responsive Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-14">
          {t.process.steps.map((stepItem, index) => (
            <div
              key={stepItem.step}
              id={`process-step-${stepItem.step}`}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-amber-50/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                    {stepIcons[index]}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {stepItem.step}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-amber-600">
                <span>Phase 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
              {t.process.banner?.tag || '45-DAY CHINA LAUNCH ACCELERATOR'}
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {t.process.banner?.title || '准备好让您的品牌进入全球最大消费市场了吗？'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.process.banner?.desc || '德丰隆配备具备10年以上大宗贸易、海关商检与全渠道采购对接经验的专属商务团队，免费为您出具初步准入评估。'}
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{t.process.banner?.cta || '立即获取商业准入提案'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
