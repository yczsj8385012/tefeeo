import React, { useState, useEffect, useRef } from 'react';
import { Language, RetailStorePresence } from '../types';
import { translations, languageOptions } from '../translations';
import { retailPresenceData } from '../data/mockData';
import { getLocalizedStore } from '../utils/localization';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Store,
  Sparkles,
  ShieldCheck,
  UploadCloud,
  Camera,
  X,
  RotateCcw,
  ZoomIn
} from 'lucide-react';

interface RetailPresenceSectionProps {
  currentLang: Language;
}

const STORAGE_KEY = 'tefeeo_uploaded_store_photos';

export const RetailPresenceSection: React.FC<RetailPresenceSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  // State for store photo mappings: { [storeId]: dataUrlString }
  const [storePhotos, setStorePhotos] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string>(retailPresenceData[0].id);
  
  // Lightbox modal state for viewing full original photo
  const [lightboxPhoto, setLightboxPhoto] = useState<{
    imageUrl: string;
    store: RetailStorePresence;
  } | null>(null);

  // Display mode: 'contain' (preserve entire original ratio without cropping) or 'cover'
  const [imageFitMode, setImageFitMode] = useState<'contain' | 'cover'>('contain');
  const [uploadSuccessToast, setUploadSuccessToast] = useState<string | null>(null);

  // Hidden file input refs for each card
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Load photos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setStorePhotos(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load store photos from localStorage', e);
    }
  }, []);

  // Save to localStorage whenever photos change
  const savePhotos = (updated: Record<string, string>) => {
    setStorePhotos(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage quota exceeded or storage disabled', e);
    }
  };

  // Handle image file selection
  const handleFileChange = (storeId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      alert('File size exceeds 15MB limit.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        const updated = { ...storePhotos, [storeId]: result };
        savePhotos(updated);
        
        const rawStore = retailPresenceData.find((s) => s.id === storeId);
        const store = rawStore ? getLocalizedStore(rawStore, currentLang) : null;
        setUploadSuccessToast(
          currentLang === 'zh'
            ? `已成功为【${store?.storeName.split('(')[0] || '所选商超'}】上传并保存原图！`
            : `Photo uploaded successfully for ${store?.storeName.split('(')[0] || 'Store'}!`
        );
        setTimeout(() => setUploadSuccessToast(null), 4000);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const triggerUpload = (storeId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    fileInputRefs.current[storeId]?.click();
  };

  const handleResetPhotos = () => {
    const confirmMsg = currentLang === 'zh'
      ? '确定要恢复默认示意图，清除已上传的本地实拍照片吗？'
      : 'Reset to default photos?';
    if (window.confirm(confirmMsg)) {
      setStorePhotos({});
      localStorage.removeItem(STORAGE_KEY);
      setUploadSuccessToast(currentLang === 'zh' ? '已恢复默认展示模式' : 'Reset to default');
      setTimeout(() => setUploadSuccessToast(null), 3000);
    }
  };

  // Localized store items
  const localizedStores = retailPresenceData.map((s) => getLocalizedStore(s, currentLang));
  const selectedItem = localizedStores.find((s) => s.id === selectedItemId) || localizedStores[0];

  return (
    <section
      id="retail-store-presence"
      className="py-20 bg-slate-50/70 text-slate-900 relative border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full mb-3.5 border border-emerald-200 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.retailPresence.verifiedBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {t.retailPresence.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.retailPresence.subtitle}
          </p>
        </div>

        {/* Photo Upload & Display Mode Action Toolbar */}
        <div className="mb-8 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>{currentLang === 'zh' ? '现场实拍照片管理' : 'Store Photos Management'}</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {currentLang === 'zh' ? '支持上传原图完整呈现' : 'Original Photo Upload'}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {currentLang === 'zh'
                  ? '可直接点击下方各商超卡片上传现场拍摄的原图，系统将以无损高清比例呈现。'
                  : 'Click any store card to upload real on-site photos in uncropped original resolution.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
            {/* Aspect fit mode toggle */}
            <div className="flex items-center rounded-lg border border-slate-200 p-0.5 bg-slate-50 text-xs">
              <button
                onClick={() => setImageFitMode('contain')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                  imageFitMode === 'contain'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Full Aspect Ratio"
              >
                {t.retailPresence.containMode || '原图完整'}
              </button>
              <button
                onClick={() => setImageFitMode('cover')}
                className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                  imageFitMode === 'cover'
                    ? 'bg-white text-slate-900 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Cover Mode"
              >
                {t.retailPresence.coverMode || '铺满模式'}
              </button>
            </div>

            {/* Reset button if any photos uploaded */}
            {Object.keys(storePhotos).length > 0 && (
              <button
                onClick={handleResetPhotos}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                title="Reset photos"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{currentLang === 'zh' ? '重置' : 'Reset'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Upload Success Alert Toast */}
        {uploadSuccessToast && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{uploadSuccessToast}</span>
            </div>
            <button
              onClick={() => setUploadSuccessToast(null)}
              className="text-emerald-700 hover:text-emerald-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Real Store Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {localizedStores.map((item) => {
            const isSelected = selectedItem.id === item.id;
            const photoUrl = storePhotos[item.id] || item.imageUrl;

            return (
              <div
                key={item.id}
                id={`store-card-${item.id}`}
                onClick={() => setSelectedItemId(item.id)}
                className={`group cursor-pointer rounded-2xl p-5 transition-all duration-300 border flex flex-col justify-between bg-white ${
                  isSelected
                    ? 'border-red-500 shadow-xl shadow-red-500/10 ring-2 ring-red-500/30'
                    : 'border-slate-200/90 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Hidden file input for uploading photo */}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={(el) => {
                      fileInputRefs.current[item.id] = el;
                    }}
                    onChange={(e) => handleFileChange(item.id, e)}
                  />

                  {/* Top Badge & Live Status */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {item.shelfTag}
                    </span>
                    <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/80 flex items-center gap-1 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {t.retailPresence.onShelfStatus || '现场在售'}
                    </span>
                  </div>

                  {/* Store Photo Container */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200 flex flex-col justify-between group-hover:border-red-400 transition-colors">
                    {photoUrl ? (
                      /* Real Uploaded Photo View */
                      <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={photoUrl}
                          alt={item.storeName}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                            imageFitMode === 'contain' ? 'object-contain' : 'object-cover'
                          }`}
                        />

                        {/* Top Watermark Tag */}
                        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold shadow-xs">
                            {t.retailPresence.realProofTag || '实拍存证'}
                          </span>
                        </div>

                        {/* Hover Overlay Action */}
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3 z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setLightboxPhoto({ imageUrl: photoUrl, store: item });
                            }}
                            className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-bold flex items-center gap-1 shadow hover:bg-white cursor-pointer"
                          >
                            <ZoomIn className="w-3.5 h-3.5 text-red-600" />
                            <span>{t.retailPresence.viewOriginal || '查看原图'}</span>
                          </button>

                          <button
                            onClick={(e) => triggerUpload(item.id, e)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-medium flex items-center gap-1 border border-white/20 hover:bg-slate-900 cursor-pointer"
                          >
                            <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
                            <span>{t.retailPresence.replaceBtn || '更换'}</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Elegant Light-themed Visual Placeholder */
                      <div
                        onClick={(e) => triggerUpload(item.id, e)}
                        className="relative w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold">
                            {t.retailPresence.realProofTag || '现场巡检'}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                            HD
                          </span>
                        </div>

                        {/* Center Graphic */}
                        <div className="text-center py-2">
                          <div className="inline-flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-red-400 transition-colors">
                            <div className="flex items-center justify-center gap-2 mb-1.5">
                              <div className="w-7 h-7 rounded-full bg-blue-700 border-2 border-amber-300 flex items-center justify-center text-[8px] font-black text-amber-200 shadow-2xs">
                                IMPERIAL
                              </div>
                              <div className="w-6 h-6 rounded bg-red-600 text-white font-bold text-[8px] flex items-center justify-center shadow-2xs">
                                Tefeeo
                              </div>
                            </div>
                            <div className="text-[11px] font-bold text-slate-800">
                              IMPERIAL ✕ Tefeeo
                            </div>
                            <div className="text-[10px] text-red-600 font-medium mt-1 flex items-center gap-1">
                              <UploadCloud className="w-3 h-3 text-red-600" />
                              <span>{t.retailPresence.uploadBtn || '上传现场实拍原图'}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-slate-500 border-t border-slate-200/80 pt-1.5">
                          <span className="flex items-center gap-1 truncate font-medium">
                            <Store className="w-3 h-3 text-red-600" />
                            {item.channelCategory}
                          </span>
                          <span className="text-blue-600 font-semibold flex items-center gap-1">
                            <Camera className="w-3 h-3" />
                            {currentLang === 'zh' ? '可上传原图' : 'Upload photo'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Store Name & Location */}
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors leading-snug">
                    {item.storeName}
                  </h4>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>

                  <p className="text-xs text-slate-600 flex items-center gap-1.5 mb-3 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.date}</span>
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-600 line-clamp-2 border-t border-slate-100 pt-3">
                    {item.highlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Store Detailed Highlight Banner */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-600 text-xs font-bold border border-red-200">
                  {t.retailPresence.currentSelected || '当前选中巡店档案'}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {selectedItem.date}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {selectedItem.storeName}
              </h3>

              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
                {selectedItem.highlight}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  {selectedItem.location}
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  {selectedItem.channelCategory}
                </span>
                <span className="flex items-center gap-1 text-slate-700 font-medium">
                  <Store className="w-3.5 h-3.5 text-slate-400" />
                  {selectedItem.type}
                </span>
              </div>
            </div>

            {/* Verification Guarantee */}
            <div className="shrink-0 p-5 rounded-xl bg-slate-50 border border-slate-200 text-left w-full lg:w-auto">
              <div className="text-xs text-slate-500 mb-1">{t.retailPresence.guaranteeTitle || '渠道履约保障能力'}</div>
              <div className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                {t.distribution.title}
              </div>
              <div className="text-xs text-emerald-700 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.retailPresence.guaranteeDesc || '全国专职督导理货与节日大堆头巡回支持'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxPhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 text-white">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono font-bold">
                    {t.retailPresence.realProofTag || '实拍存证'}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {lightboxPhoto.store.storeName}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {lightboxPhoto.store.date} · {lightboxPhoto.store.location}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => triggerUpload(lightboxPhoto.store.id)}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-medium border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.retailPresence.replaceBtn || '更换'}</span>
                </button>

                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 min-h-[360px] max-h-[70vh] bg-black/90 p-4 flex items-center justify-center overflow-auto">
              <img
                src={lightboxPhoto.imageUrl}
                alt={lightboxPhoto.store.storeName}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.stats?.experience.label || '北京特菲奥国际贸易有限公司'} · {t.retailPresence.title}</span>
              </div>
              <div className="text-slate-500">
                100% Original High-Resolution Display
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
