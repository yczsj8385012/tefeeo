import React, { useState, useEffect } from 'react';
import { Language, ActivePageView } from '../types';
import { languageOptions, translations } from '../translations';
import { Globe, Menu, X, ChevronDown, Check, ShieldCheck, PhoneCall, Building2, Phone, Mail, FileText } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  currentPage: ActivePageView;
  onNavigate: (page: ActivePageView) => void;
  onLanguageChange: (lang: Language) => void;
  onOpenInquiry: (initialSubject?: string) => void;
  onOpenLicenseModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  currentPage,
  onNavigate,
  onLanguageChange,
  onOpenInquiry,
  onOpenLicenseModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const t = translations[currentLang];
  const currentLangObj = languageOptions.find((l) => l.code === currentLang) || languageOptions[0];
  const isRtl = currentLangObj.dir === 'rtl';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: ActivePageView) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Main Navigation Bar (Clean, Uncluttered, International Executive Aesthetic) */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl border-b border-slate-800/90 py-3'
            : 'bg-slate-950/90 backdrop-blur-sm py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Corporate Identity */}
            <div
              id="brand-logo-container"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                {/* Brand Emblem */}
                <div className="h-10 px-3 rounded-lg bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-md shadow-red-600/20 border border-red-400/40 transition-colors">
                  <span className="text-white font-extrabold text-sm tracking-wider font-sans">Tefeeo</span>
                </div>

                {/* Clean Brand Text */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                    特菲奥
                  </span>
                  <span className="text-xs font-semibold text-slate-300 border-l border-slate-700/80 pl-2">
                    {t.common?.globalTrade || '国际贸易'}
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button
                id="nav-link-home"
                onClick={() => handleNavClick('home')}
                className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  currentPage === 'home'
                    ? 'text-red-400 border-b-2 border-red-500'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.nav.home}
              </button>

              <button
                id="nav-link-products"
                onClick={() => handleNavClick('products')}
                className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  currentPage === 'products'
                    ? 'text-red-400 border-b-2 border-red-500'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{t.nav.products}</span>
              </button>

              <button
                id="nav-link-retail"
                onClick={() => handleNavClick('retail')}
                className={`text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer py-1 ${
                  currentPage === 'retail'
                    ? 'text-red-400 border-b-2 border-red-500'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{t.nav.distribution}</span>
              </button>

              <button
                id="nav-link-services"
                onClick={() => handleNavClick('services')}
                className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  currentPage === 'services'
                    ? 'text-red-400 border-b-2 border-red-500'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{t.nav.services}</span>
              </button>

              <button
                id="nav-link-about"
                onClick={() => handleNavClick('about')}
                className={`text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer py-1 ${
                  currentPage === 'about'
                    ? 'text-red-400 border-b-2 border-red-500'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.nav.about}</span>
              </button>
            </nav>

            {/* Action Area: Language Switcher & B2B Button */}
            <div className="flex items-center gap-3">
              {/* Multi-Language Switcher */}
              <div className="relative">
                <button
                  id="language-switcher-btn"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-semibold transition-all shadow-sm cursor-pointer"
                  aria-label="Select Language"
                >
                  <span className="text-base">{currentLangObj.flag}</span>
                  <span className="hidden sm:inline">{currentLangObj.nativeName}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {isLangDropdownOpen && (
                  <div
                    className={`absolute mt-2 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in-50 duration-100 ${
                      isRtl ? 'left-0' : 'right-0'
                    }`}
                  >
                    <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider border-b border-slate-800">
                      多语言支持 / Languages
                    </div>
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.code}
                        id={`lang-select-${lang.code}`}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors cursor-pointer ${
                          currentLang === lang.code ? 'text-red-400 font-bold bg-slate-800/60' : 'text-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                          <span className="text-[10px] text-slate-500 font-normal">({lang.label})</span>
                        </div>
                        {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-red-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary B2B Action Button */}
              <button
                id="nav-partner-btn"
                onClick={() => onOpenInquiry(t.common?.officialInquiry || '商务合作咨询')}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md shadow-red-600/20 transition-all cursor-pointer border border-red-500/40"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{t.common?.officialInquiry || '商务合作咨询'}</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          {/* Mobile Direct Call Banner */}
          <a
            href="tel:+8601089801090"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-red-400" />
            <span>{t.common?.hotlineLabel || 'Hotline:'} 010-89801090</span>
          </a>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-1 pt-1">
            语言切换 / Select Language
          </div>
          <div className="grid grid-cols-2 gap-1.5 pb-3 border-b border-slate-800">
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                id={`mobile-lang-${lang.code}`}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer ${
                  currentLang === lang.code
                    ? 'bg-red-600/20 text-red-300 font-semibold border border-red-500/30'
                    : 'bg-slate-800/50 text-slate-300'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-1.5 pt-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === 'home' ? 'bg-red-600/20 text-red-400 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => handleNavClick('products')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === 'products' ? 'bg-red-600/20 text-red-400 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {t.nav.products}
            </button>
            <button
              onClick={() => handleNavClick('retail')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === 'retail' ? 'bg-red-600/20 text-red-400 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {t.nav.distribution}
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                currentPage === 'services' ? 'bg-red-600/20 text-red-400 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 cursor-pointer ${
                currentPage === 'about' ? 'bg-red-600/20 text-red-400 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.nav.about}</span>
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLicenseModal();
              }}
              className="w-full py-2 px-3 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold text-center cursor-pointer"
            >
              {t.common?.viewCreditRecord || '查看国家企业信用信息公示'} (91110105MA0194NR5A)
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold text-center shadow cursor-pointer"
            >
              {t.common?.officialInquiry || '商务合作咨询'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
