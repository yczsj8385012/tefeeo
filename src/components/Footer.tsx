import React from 'react';
import { Language, ActivePageView } from '../types';
import { translations, languageOptions } from '../translations';
import { corporateRegistrationData } from '../data/mockData';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUp, Building, Ship, Globe2 } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onOpenLicenseModal: () => void;
  onLanguageChange: (lang: Language) => void;
  onNavigate?: (page: ActivePageView) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenLicenseModal,
  onLanguageChange,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: ActivePageView) => {
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="corporate-footer"
      className="bg-slate-100 text-slate-700 border-t border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 px-3 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center gap-1.5 shadow-md shadow-red-600/20 border border-red-500/30">
                <span className="text-white font-extrabold text-sm tracking-wide">Tefeeo</span>
              </div>
              <div>
                <span className="text-lg font-black text-slate-900 tracking-tight">
                  {currentLang === 'zh' ? '北京特菲奥国际贸易有限公司' : 'Beijing Tefeeo Int\'l Trade'}
                </span>
                <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Beijing Tefeeo International Trade Co., Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {t.footer.companyTagline}
            </p>

            {/* Official Registration Tag */}
            <div className="pt-2">
              <button
                onClick={onOpenLicenseModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-medium text-slate-700 hover:text-red-600 hover:border-red-400 shadow-2xs transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{currentLang === 'zh' ? '统一社会信用代码' : 'USCC'}: {corporateRegistrationData.unifiedSocialCreditCode}</span>
              </button>
            </div>
          </div>

          {/* Col 3: Core Business Sectors */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-red-600 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <Globe2 className="w-3.5 h-3.5 text-red-600" />
                  <span>{t.pillars.items[0]?.title || 'Global Brand Import Agency'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('products')} className="hover:text-amber-700 transition-colors flex items-center gap-1.5 cursor-pointer text-left">
                  <Ship className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t.pillars.items[1]?.title || 'Tefeeo Proprietary Brand Export'}</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('retail')} className="hover:text-red-600 transition-colors cursor-pointer text-left">
                  {t.distribution.title}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('retail')} className="hover:text-emerald-700 transition-colors cursor-pointer text-left">
                  {t.retailPresence.title}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('products')} className="hover:text-red-600 transition-colors cursor-pointer text-left">
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-red-600 transition-colors cursor-pointer text-left">
                  {t.subpages?.servicesTitle || (currentLang === 'zh' ? '进出口合规测算与服务' : 'Compliance & Services')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Languages (7 Languages) */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              {currentLang === 'zh' ? '多语言站点' : 'Global Sites'}
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  id={`footer-lang-${lang.code}`}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2.5 py-1.5 rounded-lg text-left transition-colors flex items-center justify-between cursor-pointer ${
                    currentLang === lang.code
                      ? 'bg-red-50 text-red-700 font-bold border border-red-200 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white bg-white/70 border border-slate-200/70 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 5: Contact & Headquarter Info */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {currentLang === 'zh' ? '运营地址' : 'Office'}: {corporateRegistrationData.officeAddress}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <span className="font-mono text-slate-900 font-medium">{corporateRegistrationData.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span className="font-mono font-bold text-slate-900">
                  {corporateRegistrationData.customerServiceHotline}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-mono text-amber-800 font-bold">
                  {currentLang === 'zh' ? '全国免费' : 'Toll-free'}: {corporateRegistrationData.nationalTollFree}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Building className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-500">
                  {currentLang === 'zh' ? '注册地址' : 'Reg. Address'}: {corporateRegistrationData.registeredAddress}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2017 - 2026 {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenLicenseModal}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              {currentLang === 'zh' ? '工商备案公示' : 'Business License Verification'}
            </button>
            <span>•</span>
            <span className="text-slate-500">
              {currentLang === 'zh' ? '食品销售合规备案' : 'Food Distribution Compliance'}
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer shadow-2xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{currentLang === 'zh' ? '返回顶部' : 'Back to top'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
