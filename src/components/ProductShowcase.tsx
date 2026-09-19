import React, { useState, useEffect, useRef } from 'react';
import { Language, ProductItem } from '../types';
import { translations, languageOptions } from '../translations';
import { productsCatalog } from '../data/mockData';
import { getLocalizedCategory } from '../utils/localization';
import { getLocalizedProduct } from '../data/productTranslations';
import { ProductDetailModal } from './ProductDetailModal';
import {
  Globe,
  FileText,
  Ship,
  Search,
  ArrowLeft,
  Eye,
  Camera,
  UploadCloud,
  ZoomIn,
  X,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  Download
} from 'lucide-react';

interface ProductShowcaseProps {
  currentLang: Language;
  onRequestSample: (productName: string) => void;
  isStandalonePage?: boolean;
  onBackToHome?: () => void;
}

const PRODUCT_PHOTOS_STORAGE_KEY = 'tefeeo_uploaded_product_photos';

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  currentLang,
  onRequestSample,
  isStandalonePage = false,
  onBackToHome,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'proprietary_brand' | 'imported_agency'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<ProductItem | null>(null);

  // Uploaded product packaging photos { [productId]: dataUrl }
  const [productPhotos, setProductPhotos] = useState<Record<string, string>>({});
  const [lightboxProduct, setLightboxProduct] = useState<{ product: ProductItem; photoUrl?: string } | null>(null);
  const [uploadToast, setUploadToast] = useState<string | null>(null);
  const [imageFitMode, setImageFitMode] = useState<'contain' | 'cover'>('contain');

  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Load saved photos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(PRODUCT_PHOTOS_STORAGE_KEY);
      if (saved) {
        setProductPhotos(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load product photos from storage', e);
    }
  }, []);

  const saveProductPhotos = (updated: Record<string, string>) => {
    setProductPhotos(updated);
    try {
      localStorage.setItem(PRODUCT_PHOTOS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage quota exceeded or storage disabled', e);
    }
  };

  const handleResetProductPhotos = () => {
    if (window.confirm(currentLang === 'zh' ? '确定要重置并清除所有已上传的商品实拍照片吗？' : 'Reset all uploaded photos?')) {
      setProductPhotos({});
      try {
        localStorage.removeItem(PRODUCT_PHOTOS_STORAGE_KEY);
      } catch (e) {
        console.error(e);
      }
      setUploadToast(currentLang === 'zh' ? '已重置商品包装实拍照' : 'Photos reset');
      setTimeout(() => setUploadToast(null), 3000);
    }
  };

  const handleExportPhotos = () => {
    if (Object.keys(productPhotos).length === 0) {
      alert(currentLang === 'zh' ? '当前暂无已上传的照片可导出' : 'No photos to export');
      return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(productPhotos, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `tefeeo-product-photos-backup-${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setUploadToast(currentLang === 'zh' ? '已导出实拍图片备份配置文件！' : 'Photos backup exported!');
    setTimeout(() => setUploadToast(null), 3000);
  };

  const handleProductPhotoUpload = (productId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert('文件大小超出 15MB 限制');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        const updated = { ...productPhotos, [productId]: result };
        saveProductPhotos(updated);

        const target = productsCatalog.find((p) => p.id === productId);
        setUploadToast(
          t.products.photoUpdatedToast
            ? `${t.products.photoUpdatedToast} (${target?.name || ''})`
            : (currentLang === 'zh'
                ? `已成功为【${target?.name || '所选商品'}】绑定包装实拍原图！`
                : `Photo updated successfully for ${target?.name || 'Product'}!`)
        );
        setTimeout(() => setUploadToast(null), 4000);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const triggerProductUpload = (productId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    fileInputRefs.current[productId]?.click();
  };

  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  // Extract unique categories
  const categories = Array.from(
    new Set((productsCatalog || []).map((p) => p?.category).filter(Boolean))
  ) as string[];

  const localizedCatalog = (productsCatalog || []).map((p) => getLocalizedProduct(p, currentLang));

  const filteredProducts = localizedCatalog.filter((item) => {
    if (!item) return false;
    const matchesTab = activeTab === 'all' || item.brandType === activeTab;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.nameEn && item.nameEn.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.ingredientsHighlight && item.ingredientsHighlight.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesCategory && matchesSearch;
  });

  const getColorClasses = (scheme: ProductItem['colorScheme']) => {
    switch (scheme) {
      case 'red':
        return {
          badge: 'bg-red-600 text-white',
          border: 'border-red-500/40',
          bg: 'from-red-950/20 to-slate-900',
          accent: 'text-red-400',
          btnHover: 'hover:bg-red-600 hover:text-white',
        };
      case 'blue':
        return {
          badge: 'bg-blue-600 text-white',
          border: 'border-blue-500/40',
          bg: 'from-blue-950/20 to-slate-900',
          accent: 'text-blue-400',
          btnHover: 'hover:bg-blue-600 hover:text-white',
        };
      case 'amber':
        return {
          badge: 'bg-amber-500 text-slate-950 font-bold',
          border: 'border-amber-500/40',
          bg: 'from-amber-950/20 to-slate-900',
          accent: 'text-amber-500',
          btnHover: 'hover:bg-amber-500 hover:text-slate-950',
        };
      case 'emerald':
        return {
          badge: 'bg-emerald-600 text-white',
          border: 'border-emerald-500/40',
          bg: 'from-emerald-950/20 to-slate-900',
          accent: 'text-emerald-400',
          btnHover: 'hover:bg-emerald-600 hover:text-white',
        };
      case 'purple':
        return {
          badge: 'bg-purple-600 text-white',
          border: 'border-purple-500/40',
          bg: 'from-purple-950/20 to-slate-900',
          accent: 'text-purple-400',
          btnHover: 'hover:bg-purple-600 hover:text-white',
        };
      case 'gold':
      default:
        return {
          badge: 'bg-amber-400 text-slate-950 font-bold',
          border: 'border-amber-400/40',
          bg: 'from-amber-900/20 to-slate-900',
          accent: 'text-amber-400',
          btnHover: 'hover:bg-amber-400 hover:text-slate-950',
        };
    }
  };

  return (
    <section
      id="product-showcase"
      className={`bg-white text-slate-900 border-b border-slate-200 ${isStandalonePage ? 'pt-32 pb-24' : 'py-24'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standalone Page Breadcrumbs & Back Navigation */}
        {isStandalonePage && (
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
              <button
                onClick={onBackToHome}
                className="hover:text-red-600 transition-colors cursor-pointer font-medium"
              >
                {t.nav.home}
              </button>
              <span>/</span>
              <span className="font-bold text-slate-900">
                {t.subpages?.productsTitle || t.products.title}
              </span>
            </div>

            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
              >
                <ArrowLeft className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                <span>{t.common?.backToHome || '返回官网首页'}</span>
              </button>
            )}
          </div>
        )}

        {/* Section / Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-md mb-3 border border-red-200">
            {t.products.sectionTag}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.products.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.products.searchPlaceholder || '搜索产品名称、品牌、核心配方...'}
              className="w-full pl-10 pr-12 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {t.common?.clear || '清空'}
              </button>
            )}
          </div>
        </div>

        {/* Primary Filter Tabs: All vs Tefeeo Proprietary vs Imported Agency */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm max-w-full overflow-x-auto">
            <button
              id="filter-all-btn"
              onClick={() => {
                setActiveTab('all');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.products.allTab}
            </button>
            <button
              id="filter-proprietary-btn"
              onClick={() => {
                setActiveTab('proprietary_brand');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'proprietary_brand'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-red-600'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>{t.products.proprietaryTab}</span>
            </button>
            <button
              id="filter-imported-btn"
              onClick={() => {
                setActiveTab('imported_agency');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'imported_agency'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.products.importedTab}</span>
            </button>
          </div>

          {/* Subcategory Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-4xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t.products.allCategories} ({productsCatalog.length})
            </button>
            {categories.map((cat) => {
              const count = productsCatalog.filter(
                (p) => p.category === cat && (activeTab === 'all' || p.brandType === activeTab)
              ).length;
              if (count === 0 && activeTab !== 'all') return null;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-red-600 text-white font-bold shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {getLocalizedCategory(cat, currentLang)} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter and Counter Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>
            <strong className="text-slate-900">{filteredProducts.length}</strong> {t.products.itemsFoundSuffix || '款主力商品与规格'}
          </span>
          {searchQuery && (
            <span>
              "{searchQuery}"
            </span>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product) => {
            const photoUrl = productPhotos[product.id] || product.imageUrl;

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group rounded-2xl p-5 transition-all duration-300 border flex flex-col justify-between bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-lg"
              >
                <div>
                  {/* Top Badge & Live Status */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 truncate max-w-[140px]">
                      {getLocalizedCategory(product.category, currentLang)}
                    </span>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 flex items-center gap-1 font-semibold shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t.products.inStock || '现场在售'}</span>
                    </span>
                  </div>

                  {/* Product Photo Container */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200 flex flex-col justify-between group-hover:border-red-400 transition-colors">
                    {photoUrl ? (
                      /* Real Photo View */
                      <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={photoUrl}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full transition-transform duration-300 group-hover:scale-105 object-contain"
                        />

                        {/* Top Watermark Tag */}
                        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold shadow-xs">
                            {t.products.realPhotoProof || '实拍存证'}
                          </span>
                        </div>

                        {/* Hover Overlay Action */}
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3 z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxProduct({ product, photoUrl });
                            }}
                            className="px-3.5 py-2 rounded-lg bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow hover:bg-white cursor-pointer"
                          >
                            <ZoomIn className="w-4 h-4 text-red-600" />
                            <span>{t.products.viewFull || '查看高清大图'}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Default Product Visual Box */
                      <div
                        onClick={() => setSelectedProductForDetail(product)}
                        className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 cursor-pointer hover:bg-red-50/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold">
                            {product.brand}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                            HD
                          </span>
                        </div>

                        {/* Center Graphic */}
                        <div className="text-center my-auto">
                          <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform">
                            <ZoomIn className="w-5 h-5" />
                          </div>
                          <div className="text-xs font-bold text-slate-800">
                            {product.name}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-200/60 pt-1.5">
                          <span className="truncate max-w-[120px]">{product.specification}</span>
                          <span className="font-semibold text-red-600 flex items-center gap-0.5">
                            <span>{t.products.viewSpecs || '查看详情'}</span>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Title & Basic Info */}
                  <div className="mb-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-0.5">
                      {product.brand}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                    {product.nameEn && currentLang !== 'en' && (
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">
                        {product.nameEn}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-1.5">
                    <Globe className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span className="truncate">{product.origin}</span>
                  </p>

                  <p className="text-xs text-slate-600 flex items-center gap-1.5 mb-2.5 font-mono">
                    <span className="text-amber-600 font-bold shrink-0">{t.products.specPrefix || '标：'}</span>
                    <span className="truncate">{product.specification}</span>
                  </p>

                  {product.ingredientsHighlight && (
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 line-clamp-2 mb-2">
                      <span className="text-red-600 font-bold mr-1">✦</span>
                      {product.ingredientsHighlight}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 line-clamp-2 border-t border-slate-100 pt-2 mb-3">
                    {product.highlight}
                  </p>
                </div>

                {/* Clean Professional Card Actions */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProductForDetail(product)}
                      className="py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600" />
                      <span>{t.products.viewSpecs || 'B2B规格'}</span>
                    </button>

                    <button
                      onClick={() => onRequestSample(`${product.brand} - ${product.name}`)}
                      className="py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{t.products.inquireSample || '索样'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 mb-12">
            <div className="text-slate-400 text-sm mb-2">
              {t.products.noProductsFound || '未找到与关键词匹配的产品'}
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold cursor-pointer"
            >
              {t.common?.clear || '重置筛选条件'}
            </button>
          </div>
        )}

        {/* Upload Success Toast Notification */}
        {uploadToast && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/95 text-white px-5 py-3 rounded-2xl shadow-2xl border border-emerald-500/50 flex items-center gap-3 backdrop-blur-md animate-in slide-in-from-bottom-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{uploadToast}</span>
          </div>
        )}

        {/* Lightbox Modal for High-Resolution Packaging Inspection */}
        {lightboxProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in"
            onClick={() => setLightboxProduct(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div>
                  <div className="text-xs text-red-400 font-bold uppercase tracking-wider">
                    {lightboxProduct.product.brand} · {t.products.photoArchiveTitle || '包装实拍档案'}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {lightboxProduct.product.name}
                  </h3>
                </div>
                <button
                  onClick={() => setLightboxProduct(null)}
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Zoom Canvas */}
              <div className="p-6 bg-slate-950 flex items-center justify-center min-h-[340px] max-h-[60vh] overflow-hidden">
                {lightboxProduct.photoUrl ? (
                  <div className="relative max-h-[55vh] flex items-center justify-center">
                    <img
                      src={lightboxProduct.photoUrl}
                      alt={lightboxProduct.product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-[55vh] max-w-full object-contain rounded-xl shadow-2xl"
                    />
                    <span className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded bg-red-600 text-white font-bold shadow-md">
                      {t.products.realPhotoProof || '实拍存证原图'}
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={() => triggerProductUpload(lightboxProduct.product.id)}
                    className="flex flex-col items-center justify-center text-center p-8 bg-slate-900 rounded-2xl border border-slate-800 cursor-pointer hover:border-red-500 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-full bg-slate-800 text-red-500 flex items-center justify-center mb-3">
                      <Camera className="w-7 h-7" />
                    </div>
                    <div className="text-sm font-bold text-white mb-1">
                      {t.products.uploadPhoto || '暂无实拍原图'}
                    </div>
                    <div className="text-xs text-slate-400">
                      {t.products.clickToUpload || '点击此处上传实拍原图'}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-700">{t.common?.specification || t.products.specLabel || '规格'}:</span> {lightboxProduct.product.specification || '标准装'} ·{' '}
                  <span className="font-bold text-slate-700">{t.common?.origin || t.products.originLabel || '产地'}:</span> {lightboxProduct.product.origin}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => triggerProductUpload(lightboxProduct.product.id)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-red-600" />
                    <span>{t.products.replacePhoto || '更换此包装图片'}</span>
                  </button>
                  <button
                    onClick={() => {
                      const prod = lightboxProduct.product;
                      setLightboxProduct(null);
                      setSelectedProductForDetail(prod);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.products.viewSpecs || '查看完整B2B规格书'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Spec Detail Modal */}
        <ProductDetailModal
          product={selectedProductForDetail}
          photoUrl={selectedProductForDetail ? (productPhotos[selectedProductForDetail.id] || selectedProductForDetail.imageUrl) : undefined}
          currentLang={currentLang}
          onClose={() => setSelectedProductForDetail(null)}
          onInquiry={(subject) => onRequestSample(subject)}
        />
      </div>
    </section>
  );
};
