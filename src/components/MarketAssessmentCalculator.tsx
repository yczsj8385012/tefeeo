import React, { useState } from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { getLocalizedEstimate } from '../data/simulatorTranslations';
import { Calculator, ArrowRight, CheckCircle2, Clock, Users, Package, Store } from 'lucide-react';

interface MarketAssessmentCalculatorProps {
  currentLang: Language;
  onApplyPlan: (summary: string) => void;
}

export const MarketAssessmentCalculator: React.FC<MarketAssessmentCalculatorProps> = ({
  currentLang,
  onApplyPlan,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('food_beverage');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('europe');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('omni_channel');

  const t = translations[currentLang];
  const sim = t.simulator;
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const categoryOptions = [
    { id: 'food_beverage', label: sim?.categories.food_beverage || '休闲食品与高端酒水', icon: '🍷' },
    { id: 'beauty_care', label: sim?.categories.beauty_care || '美妆护肤与个人护理', icon: '✨' },
    { id: 'stationery_office', label: sim?.categories.stationery_office || '文具办公与文创礼品', icon: '✒️' },
    { id: 'household_goods', label: sim?.categories.household_goods || '品质日用百货与家居', icon: '🛋️' },
  ];

  const originOptions = [
    { id: 'europe', label: sim?.origins.europe || '欧洲 / Europe' },
    { id: 'japan_korea', label: sim?.origins.japan_korea || '日韩 / Japan & Korea' },
    { id: 'southeast_asia', label: sim?.origins.southeast_asia || '东南亚 (泰国等) / Southeast Asia' },
    { id: 'middle_east', label: sim?.origins.middle_east || '中东海湾地区 / Middle East' },
    { id: 'americas', label: sim?.origins.americas || '美洲 / Americas' },
    { id: 'china_local', label: sim?.origins.china_local || '中国本土 (贴牌定制) / China OEM' },
  ];

  const strategyOptions = [
    { id: 'omni_channel', label: sim?.strategies.omni_channel || '全渠道全域铺市' },
    { id: 'membership_hyper', label: sim?.strategies.membership_hyper || '高端会员仓储超市' },
    { id: 'cvs_online', label: sim?.strategies.cvs_online || '便利店+直播电商' },
  ];

  const currentEstimate = getLocalizedEstimate(selectedCategory, currentLang);

  const handleApply = () => {
    const categoryName = categoryOptions.find((c) => c.id === selectedCategory)?.label || selectedCategory;
    const originName = originOptions.find((o) => o.id === selectedOrigin)?.label || selectedOrigin;
    const summary = `Market Assessment Plan: [Category: ${categoryName}] [Origin: ${originName}] [Recommended: ${currentEstimate.recommendedChannels.join(', ')}] [Timeline: ${currentEstimate.timeline}]`;
    onApplyPlan(summary);
  };

  return (
    <section
      id="assessment-calculator"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md mb-3 border border-amber-500/20">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>{sim?.badge || 'INTERACTIVE B2B SIMULATOR'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {sim?.title || '中国市场准入与渠道潜力智能测算器'}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {sim?.subtitle || '选择您的产品品类与品牌发源地，即刻获取特菲奥智能渠道铺设建议、合规周期预估及预期客群曝光量。'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-6 bg-slate-800/90 rounded-2xl p-7 border border-slate-700 shadow-xl space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {sim?.step1Category || '1. 选择您的核心产品品类 / Select Category'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {categoryOptions.map((cat) => (
                  <button
                    key={cat.id}
                    id={`calc-cat-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border flex items-center gap-2.5 cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="line-clamp-1">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {sim?.step2Origin || '2. 品牌发源地 / Region of Origin'}
              </label>
              <select
                id="calc-origin-select"
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
              >
                {originOptions.map((orig) => (
                  <option key={orig.id} value={orig.id}>
                    {orig.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                {sim?.step3Strategy || '3. 期望优先切入的渠道模式 / Preferred Channel Strategy'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {strategyOptions.map((strat) => (
                  <button
                    key={strat.id}
                    onClick={() => setSelectedStrategy(strat.id)}
                    className={`py-2 px-2 rounded-lg text-center text-xs font-medium border transition-colors cursor-pointer ${
                      selectedStrategy === strat.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500 font-semibold'
                        : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {strat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-700/60 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{sim?.trustNote || '基于特菲奥过去10年中国分销履约真实沉淀数据动态估算'}</span>
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-7 border border-amber-500/30 shadow-2xl relative">
            <div className="absolute top-4 right-4 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              {sim?.resultBadge || 'SIMULATED PROPOSAL'}
            </div>

            <h3 className="text-xl font-bold text-white mb-6">
              {sim?.resultTitle || '中国市场准入与商业测算结果'}
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{sim?.timelineLabel || '预估上市周期'}</span>
                </div>
                <div className="text-xl font-extrabold text-amber-400">
                  {currentEstimate.timeline}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{sim?.timelineSub || '含商检、合规标签与海关清关'}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{sim?.reachLabel || '年化预期触达客群'}</span>
                </div>
                <div className="text-xl font-extrabold text-white">
                  {currentEstimate.projectedAnnualReach}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">{sim?.reachSub || '全国一至四线核心目标消费者'}</div>
              </div>
            </div>

            <div className="mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div>
                <div className="text-xs text-slate-400 uppercase font-bold mb-1.5 flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-amber-400" />
                  <span>{sim?.channelsLabel || '建议首发渠道阵列 / Recommended Channels'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentEstimate.recommendedChannels.map((channel: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-md font-medium"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Package className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{sim?.moqLabel || '建议首批测试备货 (MOQ)'}</span>
                </span>
                <span className="font-bold text-white">{currentEstimate.initialMoqBatch}</span>
              </div>
            </div>

            <button
              id="calc-apply-plan-btn"
              onClick={handleApply}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer border border-red-400/30"
            >
              <span>{sim?.applyBtn || '带入此方案，联系特菲奥进出口部获取详细报价'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
