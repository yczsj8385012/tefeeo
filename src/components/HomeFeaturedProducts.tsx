import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { productsCatalog } from '../data/mockData';
import { ArrowRight, Sparkles, ChevronRight, Camera } from 'lucide-react';

interface HomeFeaturedProductsProps {
  currentLang: Language;
  onNavigateToProducts: () => void;
  onRequestSample: (productName: string) => void;
}

const PRODUCT_PHOTOS_STORAGE_KEY = 'tefeeo_uploaded_product_photos';

export const HomeFeaturedProducts: React.FC<HomeFeaturedProductsProps> = ({
  currentLang,
  onNavigateToProducts,
  onRequestSample,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  const [uploadedPhotos, setUploadedPhotos] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PRODUCT_PHOTOS_STORAGE_KEY);
      if (saved) {
        setUploadedPhotos(JSON.parse(saved));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Select 4 iconic flagship star products representing both Proprietary Export & Imported Master Agency
  const featuredIds = [
    'tefeeo-shrimp-chips-blue', // 特菲奥大虾片 (≥30%鲜虾)
    'tefeeo-egg-yolk-rice-crisps', // 特菲奥蟹香蛋黄糯米锅巴
    'tefeeo-hazelnut-cocoa-wafer', // 特菲奥榛子可可威化 (新西兰奶源+7%可可)
    'imperial-danish-blue-tin', // IMPERIAL 丹麦蓝罐曲奇 (大中华区总代)
  ];

  const featuredProducts = productsCatalog.filter((p) => featuredIds.includes(p.id));

  return (
    <section
      id="home-featured-products"
      className="py-20 md:py-24 bg-white text-slate-900 border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md mb-3 border border-red-200">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>{t.products.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.products.title}
            </h2>
            <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
              {t.products.subtitle}
            </p>
          </div>

          <button
            id="home-view-all-products-top-btn"
            onClick={onNavigateToProducts}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer self-start md:self-end group"
          >
            <span>{t.common?.viewAllProducts || '查看全系品类与外贸规格书'}</span>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </button>
        </div>

        {/* 4 Flagship Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((item) => {
            const isProprietary = item.brandType === 'proprietary_brand';
            return (
              <div
                key={item.id}
                id={`featured-card-${item.id}`}
                className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col justify-between hover:shadow-xl hover:border-slate-300 transition-all duration-300 group overflow-hidden"
              >
                <div>
                  {/* Packaging Visual Preview Thumbnail */}
                  <div
                    onClick={onNavigateToProducts}
                    className="w-full h-44 rounded-xl overflow-hidden mb-3 border border-slate-200 bg-slate-100 relative group/box cursor-pointer"
                  >
                    {uploadedPhotos[item.id] || item.imageUrl ? (
                      <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                        <img
                          src={uploadedPhotos[item.id] || item.imageUrl}
                          alt={item.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-contain transition-transform duration-300 group-hover/box:scale-105"
                        />
                        <span className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold shadow-xs">
                          实拍存证
                        </span>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-slate-100 to-slate-50">
                        <div className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center text-red-600 mb-1.5 group-hover/box:scale-110 transition-transform">
                          <Camera className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">实拍包装图</span>
                        <span className="text-[10px] text-slate-500 mt-0.5">点击前往上传/更换</span>
                      </div>
                    )}
                  </div>

                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isProprietary
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {isProprietary ? t.products.proprietaryTab : t.products.importedTab}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {item.specification?.split('/')[0]?.trim()}
                    </span>
                  </div>

                  {/* Brand & Title */}
                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    {item.brand}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2 mb-2">
                    {item.name}
                  </h3>

                  {/* Ingredient Highlight Pill */}
                  {item.ingredientsHighlight && (
                    <div className="text-xs font-medium text-red-700 bg-red-50/80 border border-red-100 rounded-lg p-2.5 mb-3 leading-relaxed">
                      <span className="font-bold">{t.products.ingredientsLabel || '特色配方:'} </span>
                      {item.ingredientsHighlight}
                    </div>
                  )}

                  {/* Highlight text */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {item.highlight}
                  </p>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3 border-t border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{isProprietary ? 'Port: Tianjin / Qingdao / Shenzhen' : '3,000+ Supermarket Points'}</span>
                    <span className="font-bold text-slate-700">{item.badge}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => onRequestSample(item.name)}
                      className="w-full py-2 px-2.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-[11px] font-bold text-slate-800 transition-colors cursor-pointer text-center"
                    >
                      {t.products.inquireSample}
                    </button>
                    <button
                      onClick={onNavigateToProducts}
                      className="w-full py-2 px-2.5 rounded-lg bg-slate-900 hover:bg-red-600 text-white text-[11px] font-bold transition-colors cursor-pointer text-center flex items-center justify-center gap-1"
                    >
                      <span>{t.products.viewSpecs}</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner to Full Product Center */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
              {t.products.title}
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              {t.subpages?.productsTitle || '特菲奥全系产品与代理品牌大厅'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              {t.subpages?.productsDesc || t.products.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              id="home-goto-product-center-btn"
              onClick={onNavigateToProducts}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{t.common?.viewAllProducts || '进入特菲奥产品中心大厅'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
