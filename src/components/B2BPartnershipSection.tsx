import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { Send, CheckCircle2, Download, Sparkles, Phone, Mail, ShieldCheck, Building2, Clock } from 'lucide-react';

interface B2BPartnershipSectionProps {
  currentLang: Language;
  presetSubject?: string;
  onOpenLicenseModal?: () => void;
}

export const B2BPartnershipSection: React.FC<B2BPartnershipSectionProps> = ({
  currentLang,
  presetSubject,
  onOpenLicenseModal,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    interestType: 'importAgency',
    productCategory: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (presetSubject) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n[需求备注: ${presetSubject}]` : `[需求备注: ${presetSubject}]`,
      }));
    }
  }, [presetSubject]);

  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setTicketId(`TF-2026-${randomNum}`);
    setSubmitted(true);
  };

  const handleDownloadDeck = () => {
    const element = document.createElement('a');
    const file = new Blob([
      `北京特菲奥国际贸易有限公司 / Beijing Tefeeo International Trade Co., Ltd.\n` +
      `2026 全球品牌入华大中华区总代理及特菲奥自主品牌海外出海合作招商手册\n\n` +
      `统一社会信用代码: 91110105MA0194NR5A\n` +
      `注册登记机关: 北京市朝阳区市场监督管理局\n` +
      `实际办公运营地址: 北京市经济技术开发区经海七路22号\n` +
      `服务热线: +86-010-89801090 / 400 166 1090 | 商务邮箱: 1325928939@qq.com\n\n` +
      `两大核心业务板块:\n` +
      `1. 国外知名品牌代理入华 (大中华区总代理、CIQ报关质检、全渠道3000+商超铺市)\n` +
      `2. 特菲奥自主品牌海外出口 (东南亚、南亚、中东、非洲重点深耕，大虾片、糯米锅巴、威化、板栗仁等出口集装箱FOB/CIF)\n`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Beijing_Tefeeo_B2B_Profile_2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      id="b2b-inquiry-section"
      className="py-24 bg-white text-slate-900 border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md border border-red-200 mb-3">
            {t.b2bInquiry.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
            {t.b2bInquiry.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.b2bInquiry.subtitle}
          </p>
        </div>

        {/* Official Contact & Credential Verification Bar (Relocated from Top Bar with high-trust layout) */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {currentLang === 'zh' ? '官方合规商贸咨询通道与企业资质信息公示' : 'Official Trade Inquiries & Verified Enterprise Credentials'}
              </span>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {currentLang === 'zh' ? '北京市朝阳区市场监督管理局登记注册 · 正常存续' : 'Beijing Chaoyang AMR Registered & Good Standing'}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. 服务专线 */}
            <a
              href="tel:+8601089801090"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-red-400 hover:shadow-md transition-all flex items-start gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  {currentLang === 'zh' ? '服务专线' : 'Official Hotline'}
                </div>
                <div className="text-base font-extrabold text-slate-900 font-mono group-hover:text-red-600 transition-colors">
                  010-89801090
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>09:00 - 18:00 GMT+8</span>
                </div>
              </div>
            </a>

            {/* 2. 邮箱 */}
            <a
              href="mailto:1325928939@qq.com"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex items-start gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  {currentLang === 'zh' ? '商务直通邮箱' : 'B2B Inquiry Email'}
                </div>
                <div className="text-sm font-extrabold text-slate-900 font-mono group-hover:text-blue-600 transition-colors truncate max-w-[150px]">
                  1325928939@qq.com
                </div>
                <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{currentLang === 'zh' ? '1个工作日内极速回执' : '1 Business Day Response'}</span>
                </div>
              </div>
            </a>

            {/* 3. 海关总署 GACC 备案 */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 shadow-2xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wide">
                  {currentLang === 'zh' ? '国家海关双向备案' : 'Customs Registered'}
                </div>
                <div className="text-sm font-bold text-slate-900 leading-snug">
                  {currentLang === 'zh' ? '海关总署 GACC 备案' : 'GACC Registered'}
                </div>
                <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                  {currentLang === 'zh' ? '30年合规存续经营期限' : '30-Year Operating Term'}
                </div>
              </div>
            </div>

            {/* 4. 统一社会信用代码 */}
            <div
              onClick={onOpenLicenseModal}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all flex items-start gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 transition-colors shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
                  <span>{currentLang === 'zh' ? '统一社会信用代码' : 'USCC Credit Code'}</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded font-semibold border border-emerald-200">
                    {currentLang === 'zh' ? '查验' : 'Verify'}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900 font-mono group-hover:text-emerald-700 transition-colors">
                  91110105MA0194NR5A
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {currentLang === 'zh' ? '点击查看官方营业执照' : 'Click to View License'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Brand Context & Trust */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              {currentLang === 'zh' ? '特菲奥全球贸易合作对接服务' : 'Tefeeo Global Commerce Collaboration'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {currentLang === 'zh'
                ? '我们为全球品牌提供大中华区总代、海关CIQ商检准入及商超排面进驻；同时为海外买家提供特菲奥全系休闲食品海运整柜出口支持。'
                : 'Providing end-to-end master agency in China, CIQ customs clearance, 3000+ retail placement, and export container shipping for global buyers.'}
            </p>

            {/* Direct Telephone Support */}
            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200/80 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-slate-500 font-bold uppercase">{currentLang === 'zh' ? '官方客服与全国专线' : 'Official Customer Service'}</div>
                <div className="text-base sm:text-lg font-black text-slate-900 font-mono">+86-010-89801090</div>
                <div className="text-xs text-red-600 font-mono mt-0.5">{currentLang === 'zh' ? '全国免费服务热线: 400 166 1090' : 'Toll-free Hotline: +86 400 166 1090'}</div>
              </div>
              <div className="w-11 h-11 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shrink-0">
                <Phone className="w-5 h-5" />
              </div>
            </div>

            {/* Benefit Bullets */}
            <div className="space-y-4 pt-2 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{currentLang === 'zh' ? '1个工作日内极速回执' : '1 Business Day Rapid Response'}</h4>
                  <p className="text-xs text-slate-500">{currentLang === 'zh' ? '特菲奥进出口专业商务经理一对一提供双向贸易方案、样品寄送与报价。' : 'Dedicated trade managers provide customized trade plans, sample shipping, and FOB/CIF quotes.'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center shrink-0 text-red-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{currentLang === 'zh' ? '出海与入华全链路支持' : 'Full-Chain Import & Export Services'}</h4>
                  <p className="text-xs text-slate-500">{currentLang === 'zh' ? '支持FOB/CIF海运集装箱报关；进口品牌直接对接国内3000+商超直采专柜。' : 'Supporting container customs clearance, FOB/CIF ocean logistics, and 3000+ brick-and-mortar supermarket channels.'}</p>
                </div>
              </div>
            </div>

            {/* Corporate Deck Download */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white shadow-xl mt-8 border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  2026 {currentLang === 'zh' ? '企业商务手册' : 'Corporate Profile'}
                </span>
                <span className="text-[10px] text-slate-400">PDF / Official Deck</span>
              </div>
              <h5 className="font-bold text-sm text-white mb-2">
                {currentLang === 'zh' ? '北京特菲奥国际贸易全球品牌入华代理与自有品牌出口手册' : 'Beijing Tefeeo Global Brand Agency & Snack Export Manual'}
              </h5>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {currentLang === 'zh'
                  ? '内含详细大虾片、糯米锅巴等主力品类配方规格表、商超实拍陈列照片档案、海关准入流程及FOB价格区间。'
                  : 'Contains detailed formulations, specifications, supermarket display archives, and ocean freight pricing.'}
              </p>
              <button
                id="download-corporate-deck-btn"
                onClick={handleDownloadDeck}
                className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>{currentLang === 'zh' ? '立即下载合作手册 (Corporate Profile)' : 'Download Corporate Profile'}</span>
              </button>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-xs font-mono font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full inline-block">
                  特菲奥商务咨询编号: {ticketId}
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {t.b2bInquiry.form.successTitle}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.b2bInquiry.form.successDesc}
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        companyName: '',
                        contactPerson: '',
                        email: '',
                        phone: '',
                        country: '',
                        interestType: 'importAgency',
                        productCategory: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    提交另一份合作需求
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.b2bInquiry.form.companyName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="例如: Imperial / Global Food Group"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.b2bInquiry.form.contactPerson} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="您的姓名与职务"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.b2bInquiry.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="business@yourcompany.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.b2bInquiry.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+86 / +84 / +66 / +971 ..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.b2bInquiry.form.country}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="如: 越南、泰国、阿联酋、沙特、印度等"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.b2bInquiry.form.interestType}
                    </label>
                    <select
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500"
                    >
                      <option value="importAgency">{t.b2bInquiry.form.interestOptions.importAgency}</option>
                      <option value="exportPurchase">{t.b2bInquiry.form.interestOptions.tefeeoExport}</option>
                      <option value="distribution">{t.b2bInquiry.form.interestOptions.distribution}</option>
                      <option value="sampleRequest">{t.b2bInquiry.form.interestOptions.wholesale}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.b2bInquiry.form.productCategory}
                  </label>
                  <input
                    type="text"
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    placeholder="例如: 特菲奥大虾片 (≥30%虾肉) / 糯米锅巴 / 威化饼干 / 国际品牌代理"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.b2bInquiry.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.b2bInquiry.form.message}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-b2b-form-btn"
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer border border-red-400/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.b2bInquiry.form.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

