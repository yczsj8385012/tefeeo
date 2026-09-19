import React, { useState } from 'react';
import { Language, DistributionChannel } from '../types';
import { translations, languageOptions } from '../translations';
import { getLocalizedChannels, getLocalizedHubs } from '../data/channelTranslations';
import { Store, ShoppingCart, Video, Layers, MapPin, Building, CheckCircle } from 'lucide-react';

interface DistributionSectionProps {
  currentLang: Language;
  onOpenInquiry: (channelName?: string) => void;
}

export const DistributionSection: React.FC<DistributionSectionProps> = ({
  currentLang,
  onOpenInquiry,
}) => {
  const [activeChannelId, setActiveChannelId] = useState<string>('national-ka-supermarkets');
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const channelsList: DistributionChannel[] =
    t.distribution.channels && t.distribution.channels.length > 0
      ? t.distribution.channels
      : getLocalizedChannels(currentLang);

  const hubs =
    t.distribution.hubs && t.distribution.hubs.length > 0
      ? t.distribution.hubs
      : getLocalizedHubs(currentLang);

  const getChannelIcon = (id: string) => {
    switch (id) {
      case 'national-ka-supermarkets':
      case 'hypermarket':
        return <Building className="w-5 h-5 text-amber-500" />;
      case 'cvs-convenience-stores':
      case 'cvs':
        return <Store className="w-5 h-5 text-amber-500" />;
      case 'boutique-import-stores':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'global-export-network':
        return <MapPin className="w-5 h-5 text-amber-500" />;
      case 'online-omnichannel':
      case 'ecommerce':
        return <ShoppingCart className="w-5 h-5 text-amber-500" />;
      case 'social_commerce':
        return <Video className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-amber-500" />;
    }
  };

  const activeChannel =
    channelsList.find((c) => c.id === activeChannelId) ||
    channelsList[0];

  return (
    <section
      id="distribution-network"
      className="py-24 bg-slate-50/70 text-slate-900 relative border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-md mb-3 border border-amber-200">
            {t.distribution.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.distribution.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.distribution.subtitle}
          </p>
        </div>

        {/* 4 Quantitative Coverage Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1">3,000+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.distribution.metrics.retailers}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">31</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.distribution.metrics.tierCoverage}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1">4</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.distribution.metrics.logisticsHubs}</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 mb-1">12+</div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">{t.distribution.metrics.ecommercePlatforms}</div>
          </div>
        </div>

        {/* Interactive Channel Selection & Deep-dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Channel Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1 mb-2">
              {t.distribution.channelMatrixTitle || (currentLang === 'zh' ? '分销渠道分类矩阵' : 'Channel Sectors')}
            </div>
            {channelsList.map((ch: DistributionChannel) => {
              const isSelected = activeChannel?.id === ch.id;
              return (
                <button
                  key={ch.id}
                  id={`channel-btn-${ch.id}`}
                  onClick={() => setActiveChannelId(ch.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-amber-50/90 border-amber-400 text-slate-900 shadow-md ring-1 ring-amber-300'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-amber-600'}`}>
                      {getChannelIcon(ch.id)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">{ch.name}</div>
                      <div className="text-xs text-slate-500">{ch.category}</div>
                    </div>
                  </div>
                  <div className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                    {ch.growth}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Channel Showcase Card */}
          <div className="lg:col-span-8 p-7 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md text-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  {activeChannel?.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {activeChannel?.name}
                </h3>
              </div>
              <button
                onClick={() => onOpenInquiry(`渠道入驻合作: ${activeChannel?.name || '全渠道'}`)}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                {t.distribution.applyChannelBtn || (currentLang === 'zh' ? '申请此渠道准入铺市' : 'Channel Access Inquiry')}
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              {activeChannel?.description}
            </p>

            {/* Target Consumer Reach */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 uppercase font-bold">
                  {t.distribution.targetReachLabel || (currentLang === 'zh' ? '目标受众与消费画像' : 'Target Reach')}
                </div>
                <div className="text-sm font-semibold text-slate-800">{activeChannel?.reach}</div>
              </div>
            </div>

            {/* Strategic Partner Roster */}
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                {t.distribution.terminalsLabel || (currentLang === 'zh' ? '代表性直供与分销终端阵容' : 'Representative Retail Terminals')}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {(activeChannel?.partners || []).map((partner, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 shadow-2xs hover:bg-slate-100 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Warehousing Hubs Across China */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{t.distribution.warehousingTitle || (currentLang === 'zh' ? '战略物流仓储枢纽' : 'Strategic Warehousing Hubs')}</span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mt-1">
                {t.distribution.warehousingSubtitle || (currentLang === 'zh'
                  ? '四大区域高标仓网协同，保障48小时辐射全国'
                  : '4 Nationwide Core Warehousing Hubs with 48h Distribution')}
              </h4>
            </div>
            <div className="text-xs text-slate-500">
              {t.distribution.warehousingDesc || (currentLang === 'zh'
                ? '包含恒温保税仓、冷链冷藏库与B2B对公极速分拣体系'
                : 'Climate-controlled bonded centers & B2B express logistics')}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <div className="text-sm font-bold text-slate-900">{hub.city}</div>
                </div>
                <div className="text-xs text-amber-800 font-semibold mb-1">{hub.role}</div>
                <div className="text-[11px] text-slate-600 leading-snug">{hub.warehouse}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
