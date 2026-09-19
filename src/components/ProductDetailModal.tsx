import React from 'react';
import { ProductItem, Language } from '../types';
import { translations } from '../translations';
import { getLocalizedCategory } from '../utils/localization';
import { getLocalizedProduct } from '../data/productTranslations';
import { X, Package, ShieldCheck, Globe, Ship, Award, ArrowRight, Camera } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  photoUrl?: string | null;
  onClose: () => void;
  onInquiry: (productName: string) => void;
  currentLang?: Language;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product: rawProduct,
  photoUrl,
  onClose,
  onInquiry,
  currentLang = 'zh',
}) => {
  if (!rawProduct) return null;

  const product = getLocalizedProduct(rawProduct, currentLang);
  const t = translations[currentLang];
  const isProprietary = product.brandType === 'proprietary_brand';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div
          className={`p-6 sm:p-8 text-white relative ${
            isProprietary
              ? 'bg-gradient-to-r from-red-600 via-red-700 to-amber-600'
              : 'bg-gradient-to-r from-blue-700 via-slate-800 to-slate-900'
          }`}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm border border-white/20">
              {isProprietary ? t.products.proprietaryTab : t.products.importedTab}
            </span>
            <span className="text-xs text-white/80 font-medium">
              {getLocalizedCategory(product.category, currentLang)}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {product.name}
          </h3>
          {product.nameEn && (
            <p className="text-sm text-white/80 font-sans mt-1">
              {product.nameEn}
            </p>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Packaging Visual Preview */}
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-3 relative h-64">
            {(photoUrl || product.imageUrl) ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={photoUrl || product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2 left-2 text-[10px] font-mono px-2.5 py-1 rounded bg-red-600 text-white font-bold shadow-md">
                  {t.products.realPhotoProof || '实拍存证'}
                </span>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 mb-2">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-300">
                  {t.products.uploadPhoto || '实拍原图展示区'}
                </span>
                <span className="text-[10px] text-slate-500 mt-0.5">
                  {t.products.clickToUpload || '请在商品卡片中点击「上传实拍原图」即可实时同步'}
                </span>
              </div>
            )}
          </div>

          {/* Formulation Highlight */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              {t.products.ingredientsLabel || '特色配方与工艺优势:'}
            </div>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {product.ingredientsHighlight || product.highlight}
            </p>
          </div>

          {/* Product Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium">
                {t.common?.specification || t.products.specLabel || '规格与净含量'}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                {product.specification || '依定制需求提供标准散装与商超零售装'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium">
                {t.common?.origin || t.products.originLabel || '原产地'}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                {product.origin} / {isProprietary ? 'FOB Tianjin / Qingdao Port' : 'China Bonded KA Hub'}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium">
                {t.hero.stats?.efficiency?.label || '质检与准入证书'}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>CIQ / Halal / CO Form E</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs text-slate-500 font-medium">
                {t.common?.gaccBadge || '标准保质期与仓储'}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-0.5">
                10 - 18 Months (Cool & Dry Ambient)
              </div>
            </div>
          </div>

          {/* Target Markets */}
          {product.targetMarkets && (
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Ship className="w-4 h-4 text-red-600" />
                {t.common?.targetMarkets || t.products.targetMarketsLabel || '建议出海出口目的国'}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.targetMarkets.map((m, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 text-xs font-semibold"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Channels & Presence */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-slate-600" />
              {t.common?.channels || t.products.channelsLabel || '分销渠道与终端'}
            </div>
            <div className="flex flex-wrap gap-2">
              {product.channels.map((ch, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Logistics & FCL recommendations */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Package className="w-4 h-4 text-amber-400" />
              {t.retailPresence?.guaranteeTitle || '外贸整柜与拼箱物流建议 (FCL / LCL Shipping)'}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isProprietary
                ? (t.pillars?.items[1]?.description || '支持 20GP / 40HQ 整柜发运，支持中英文双语外销版包装及多语言营养成分标签加贴。单批试单 MOQ 灵活，现货 48 小时可运抵国内主要海港码头。')
                : (t.retailPresence?.guaranteeDesc || '特菲奥国内四大恒温中心仓全国统一调拨，提供全国商超总对总干线配送与门到门直配服务。')}
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
          >
            {t.common?.close || (currentLang === 'zh' ? '关闭详情' : 'Close')}
          </button>

          <button
            onClick={() => {
              onClose();
              onInquiry(`咨询产品报价与索样: ${product.brand} - ${product.name}`);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.products.inquireSample}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
