import React, { useState, useEffect } from 'react';
import { Language, ActivePageView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessPillars } from './components/BusinessPillars';
import { HomeFeaturedProducts } from './components/HomeFeaturedProducts';
import { DistributionSection } from './components/DistributionSection';
import { RetailPresenceSection } from './components/RetailPresenceSection';
import { ProductShowcase } from './components/ProductShowcase';
import { MarketEntryProcess } from './components/MarketEntryProcess';
import { MarketAssessmentCalculator } from './components/MarketAssessmentCalculator';
import { CompanyCredentials } from './components/CompanyCredentials';
import { CompanyStrengthSection } from './components/CompanyStrengthSection';
import { B2BPartnershipSection } from './components/B2BPartnershipSection';
import { Footer } from './components/Footer';
import { LicenseModal } from './components/LicenseModal';
import { translations, languageOptions } from './translations';
import { ArrowLeft, Sparkles, ShieldCheck, Store, Calculator, Package } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('zh');
  const [currentPage, setCurrentPage] = useState<ActivePageView>('home');
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState<string | undefined>(undefined);

  // Sync with URL hash for browser history & direct URL linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'products') {
        setCurrentPage('products');
      } else if (hash === 'retail') {
        setCurrentPage('retail');
      } else if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: ActivePageView) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize document dir attribute for RTL support (Arabic) and html lang
  useEffect(() => {
    const langObj = languageOptions.find((l) => l.code === currentLang);
    const dir = langObj?.dir || 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;

    // Apply font family class depending on selected script
    if (currentLang === 'ar') {
      document.body.style.fontFamily = "'Noto Sans Arabic', sans-serif";
    } else if (currentLang === 'ja') {
      document.body.style.fontFamily = "'Noto Sans JP', sans-serif";
    } else if (currentLang === 'ko') {
      document.body.style.fontFamily = "'Noto Sans KR', sans-serif";
    } else if (currentLang === 'th') {
      document.body.style.fontFamily = "'Noto Sans Thai', sans-serif";
    } else {
      document.body.style.fontFamily = "'Plus Jakarta Sans', 'Noto Sans SC', sans-serif";
    }
  }, [currentLang]);

  const handleOpenInquiry = (subject?: string) => {
    setInquirySubject(subject);
    const element = document.getElementById('b2b-inquiry-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-colors">
      {/* Top Navbar with Multi-Page & Multi-Language Support */}
      <Navbar
        currentLang={currentLang}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onLanguageChange={setCurrentLang}
        onOpenInquiry={handleOpenInquiry}
        onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
      />

      {/* Main Content View Container */}
      <main className="flex-grow">
        {/* VIEW 1: HOME PAGE (集团首页 · 融合第一版高大上国际经贸格局与第二版权威资质) */}
        {currentPage === 'home' && (
          <>
            <Hero
              currentLang={currentLang}
              onOpenInquiry={() => handleOpenInquiry('特菲奥品牌海外出口出海咨询')}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
              onScrollToDistribution={() => handleNavigate('retail')}
              onScrollToCalculator={() => handleNavigate('services')}
              onNavigateToProducts={() => handleNavigate('products')}
            />

            {/* Corporate Strength & Global Trade Capabilities (Restores comprehensive enterprise strengths) */}
            <CompanyStrengthSection
              currentLang={currentLang}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
              onOpenInquiry={handleOpenInquiry}
            />

            {/* Core Business Pillars: Dual Engines */}
            <BusinessPillars
              currentLang={currentLang}
              onSelectPillar={(pillarTitle) => handleOpenInquiry(`业务板块咨询: ${pillarTitle}`)}
            />

            {/* Real Supermarket Shelf Presence & On-Site Verified Displays (Grandbuy, Melody City, Xinyulou) */}
            <RetailPresenceSection
              currentLang={currentLang}
            />

            {/* Curated Flagship Product Preview (Combines high-end presentation with direct link to Product Center) */}
            <HomeFeaturedProducts
              currentLang={currentLang}
              onNavigateToProducts={() => handleNavigate('products')}
              onRequestSample={(productName) => handleOpenInquiry(`索样与外贸FOB报价: ${productName}`)}
            />

            {/* Omni-Channel Distribution Overview */}
            <DistributionSection
              currentLang={currentLang}
              onOpenInquiry={(channelName) => handleOpenInquiry(channelName)}
            />

            {/* 4-Step Cross-Border Dual Trade Execution Process */}
            <MarketEntryProcess
              currentLang={currentLang}
              onOpenInquiry={() => handleOpenInquiry('双向跨国商贸履约合作咨询')}
            />

            {/* Interactive Market Entry & Shipping Cost Assessment Calculator */}
            <MarketAssessmentCalculator
              currentLang={currentLang}
              onApplyPlan={(summary) => handleOpenInquiry(summary)}
            />

            {/* Corporate Background & Verified Credentials */}
            <CompanyCredentials
              currentLang={currentLang}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />

            {/* Global Partnership & Consultation */}
            <B2BPartnershipSection
              currentLang={currentLang}
              presetSubject={inquirySubject}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />
          </>
        )}

        {/* VIEW 2: PRODUCT CENTER (产品中心 · 特菲奥全系产品与代理品牌大厅) */}
        {currentPage === 'products' && (
          <div className="animate-in fade-in duration-200">
            <ProductShowcase
              currentLang={currentLang}
              isStandalonePage={true}
              onBackToHome={() => handleNavigate('home')}
              onRequestSample={(productName) => handleOpenInquiry(`索取外贸样品及报价: ${productName}`)}
            />

            {/* In-page consultation box */}
            <B2BPartnershipSection
              currentLang={currentLang}
              presetSubject={inquirySubject || '产品批量采购与外贸出口对接'}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 3: RETAIL PRESENCE & CHANNELS (分销渠道实力 / 商超实存 · 终端实拍存证与全渠道分销) */}
        {currentPage === 'retail' && (
          <div className="pt-28 animate-in fade-in duration-200">
            {/* Page Header Banner */}
            <div className="bg-slate-950 text-white py-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <button
                      onClick={() => handleNavigate('home')}
                      className="hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {translations[currentLang].nav.home}
                    </button>
                    <span>/</span>
                    <span className="text-white font-bold">{translations[currentLang].nav.distribution}</span>
                  </div>

                  <button
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-900 text-xs text-slate-300 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{translations[currentLang].common?.backToHome || '返回官网首页'}</span>
                  </button>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {translations[currentLang].subpages?.retailTitle || translations[currentLang].distribution.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                  {translations[currentLang].subpages?.retailDesc || translations[currentLang].distribution.subtitle}
                </p>
              </div>
            </div>

            <RetailPresenceSection
              currentLang={currentLang}
            />

            <DistributionSection
              currentLang={currentLang}
              onOpenInquiry={(channelName) => handleOpenInquiry(channelName)}
            />

            <B2BPartnershipSection
              currentLang={currentLang}
              presetSubject={inquirySubject || '渠道准入与商超铺市合作'}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 4: MARKET SERVICES & CALCULATOR (准入服务 · 出海测算与进出口合规流程) */}
        {currentPage === 'services' && (
          <div className="pt-28 animate-in fade-in duration-200">
            <div className="bg-slate-950 text-white py-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <button
                      onClick={() => handleNavigate('home')}
                      className="hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {translations[currentLang].nav.home}
                    </button>
                    <span>/</span>
                    <span className="text-white font-bold">{translations[currentLang].nav.services}</span>
                  </div>

                  <button
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-900 text-xs text-slate-300 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{translations[currentLang].common?.backToHome || '返回官网首页'}</span>
                  </button>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {translations[currentLang].subpages?.servicesTitle || translations[currentLang].pillars.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                  {translations[currentLang].subpages?.servicesDesc || translations[currentLang].pillars.subtitle}
                </p>
              </div>
            </div>

            <MarketAssessmentCalculator
              currentLang={currentLang}
              onApplyPlan={(summary) => handleOpenInquiry(summary)}
            />

            <MarketEntryProcess
              currentLang={currentLang}
              onOpenInquiry={() => handleOpenInquiry('全球品牌入华代理与自主品牌出海合规咨询')}
            />

            <B2BPartnershipSection
              currentLang={currentLang}
              presetSubject={inquirySubject || '进出口准入咨询与方案测算'}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />
          </div>
        )}

        {/* VIEW 5: ABOUT TEFEEO (企业实力 · 关于特菲奥与权威合规资质) */}
        {currentPage === 'about' && (
          <div className="pt-28 animate-in fade-in duration-200">
            <div className="bg-slate-950 text-white py-12 border-b border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <button
                      onClick={() => handleNavigate('home')}
                      className="hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {translations[currentLang].nav.home}
                    </button>
                    <span>/</span>
                    <span className="text-white font-bold">{translations[currentLang].nav.about}</span>
                  </div>

                  <button
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-900 text-xs text-slate-300 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{translations[currentLang].common?.backToHome || '返回官网首页'}</span>
                  </button>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {translations[currentLang].subpages?.aboutTitle || translations[currentLang].credentials.title}
                </h1>
                <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                  {translations[currentLang].subpages?.aboutDesc || translations[currentLang].credentials.subtitle}
                </p>
              </div>
            </div>

            <CompanyStrengthSection
              currentLang={currentLang}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
              onOpenInquiry={handleOpenInquiry}
            />

            <CompanyCredentials
              currentLang={currentLang}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />

            <B2BPartnershipSection
              currentLang={currentLang}
              presetSubject={inquirySubject || '特菲奥企业战略合作与投资人对接'}
              onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        currentLang={currentLang}
        onOpenLicenseModal={() => setIsLicenseModalOpen(true)}
        onLanguageChange={setCurrentLang}
        onNavigate={handleNavigate}
      />

      {/* Corporate Government Registration Modal */}
      <LicenseModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
      />
    </div>
  );
}
