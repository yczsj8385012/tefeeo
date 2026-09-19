import React, { useState } from 'react';
import { ProductItem } from '../types';

interface ProductPackageVisualProps {
  product: ProductItem;
  photoUrl?: string | null;
  className?: string;
  onClickZoom?: () => void;
}

export const ProductPackageVisual: React.FC<ProductPackageVisualProps> = ({
  product,
  photoUrl,
  className = '',
  onClickZoom,
}) => {
  const [imgError, setImgError] = useState(false);
  const activeImage = photoUrl || product.imageUrl;

  // If a real photo is uploaded or configured (dataUrl, static image path or direct url)
  if (activeImage && !imgError) {
    return (
      <div
        className={`relative w-full h-full flex items-center justify-center p-3 bg-gradient-to-b from-slate-50 to-slate-100 group cursor-pointer overflow-hidden ${className}`}
        onClick={onClickZoom}
        title="点击查看高清大图"
      >
        <img
          src={activeImage}
          alt={product.name}
          className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
        <div className="absolute bottom-2 right-2 bg-slate-900/70 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity">
          🔍 点击放大
        </div>
      </div>
    );
  }

  // Fallback: Highly authentic SVG mockups mirroring the user's packaging bags
  switch (product.id) {
    case 'tefeeo-popcorn':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-orange-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Popcorn Double Canister Mock */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-2xl shadow-xl border-2 border-amber-400 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-slate-900 overflow-hidden">
            <div className="bg-amber-600 text-white text-[9px] font-black text-center py-0.5 rounded-md tracking-wider shadow-sm">
              TEFEEO · 美式球形爆米花
            </div>
            
            <div className="text-center my-auto">
              <div className="text-3xl">🍿</div>
              <div className="text-xs font-black text-amber-950 leading-tight mt-1">
                焦糖 / 奶油双罐装
              </div>
              <div className="text-[8px] text-amber-800 font-bold mt-0.5">
                280g*2 双罐分享装
              </div>
              <div className="inline-block mt-1 bg-amber-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full">
                影院级颗粒饱满
              </div>
            </div>

            <div className="border-t border-amber-400/80 pt-1 text-center text-[7px] text-amber-900 font-bold">
              净含量: 560g (280g*2)
            </div>
          </div>
        </div>
      );

    case 'tefeeo-milk-soda-crackers':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50 to-blue-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Milk Soda Crackers 750g Bag */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-800 rounded-t-lg rounded-b-2xl shadow-xl border border-blue-400/50 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-white">
            <div className="text-center">
              <div className="text-[10px] font-black tracking-wider">Tefeeo 特菲奥</div>
              <div className="text-xs font-black text-amber-300 mt-0.5">海盐鲜乳苏打饼干</div>
            </div>

            <div className="bg-blue-950/80 border border-blue-400/30 rounded p-1 text-center my-auto">
              <div className="text-[8px] font-bold text-cyan-200">鲜牛乳含量 ≥ 7%</div>
              <div className="text-[6px] text-blue-200 mt-0.5">天然海盐 · 0反式脂肪酸</div>
              <div className="text-2xl mt-1">🥛 🍪</div>
            </div>

            <div className="border-t border-blue-400/30 pt-1 flex justify-between text-[7px] text-blue-200">
              <span className="font-bold text-white">750g 大容量家庭装</span>
              <span>独立小包</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-sweet-potato-chips':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-orange-50 to-amber-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Sweet Potato Chips 168g Bag */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#ea580c] via-[#c2410c] to-[#9a3412] rounded-t-xl rounded-b-2xl shadow-xl border border-orange-400 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-white">
            <div className="text-center">
              <div className="text-[10px] font-black tracking-widest text-amber-200">TEFEEO</div>
              <div className="text-xs font-black text-white mt-0.5">原切红薯片</div>
              <div className="text-[7px] font-medium text-amber-100">SWEET POTATO CHIPS</div>
            </div>

            <div className="text-center my-auto">
              <div className="text-3xl">🍠 😎</div>
              <div className="text-[8px] font-bold text-amber-200 mt-1">
                整只蜜薯原切 · VF低温
              </div>
            </div>

            <div className="border-t border-orange-400/40 pt-1 flex justify-between text-[7px] text-orange-200">
              <span className="font-bold text-white">净含量: 168g</span>
              <span>充气锁鲜</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-yam-chips':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-slate-100 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Five Black Yam Chips */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#2e1065] via-[#3b0764] to-[#1e1b4b] rounded-t-xl rounded-b-2xl shadow-xl border border-purple-400/40 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-white">
            <div className="text-center">
              <div className="text-[9px] font-black tracking-widest text-amber-300">Tefeeo 特菲奥</div>
              <div className="text-xs font-black text-purple-200 mt-0.5">五黑山药片</div>
              <div className="text-[7px] text-amber-200">汉源贡椒 · 花椒味</div>
            </div>

            <div className="bg-purple-950/70 border border-purple-500/30 rounded p-1 text-center my-auto">
              <div className="text-[7px] text-purple-200">黑芝麻·黑豆·黑米·黑枸杞·黑桑葚</div>
              <div className="text-xl mt-0.5">🌿 🍠</div>
            </div>

            <div className="border-t border-purple-400/30 pt-1 flex justify-between text-[7px] text-purple-200">
              <span className="font-bold text-white">净含量: 318g</span>
              <span>大袋经济装</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-organic-chestnuts':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-emerald-50 to-teal-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Organic Chestnuts */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#064e3b] via-[#065f46] to-[#047857] rounded-t-xl rounded-b-2xl shadow-xl border border-emerald-400/50 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-white">
            <div className="text-center">
              <div className="text-[9px] font-black tracking-widest text-amber-300">Tefeeo 特菲奥</div>
              <div className="text-xs font-black text-emerald-100 mt-0.5">有机蒸板栗仁</div>
              <div className="text-[7px] text-amber-200">燕山板栗 · 免剥即食</div>
            </div>

            <div className="text-center my-auto">
              <div className="text-3xl">🌰</div>
              <div className="inline-block bg-amber-400 text-emerald-950 text-[7px] font-black px-1.5 py-0.5 rounded-full mt-1">
                中国有机认证
              </div>
            </div>

            <div className="border-t border-emerald-400/30 pt-1 flex justify-between text-[7px] text-emerald-200">
              <span className="font-bold text-white">净含量: 100g</span>
              <span>0添加香精防腐剂</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-hawthorn-burger':
    case 'tefeeo-hawthorn-rolls':
    case 'tefeeo-hawthorn-slices':
    case 'tefeeo-hawthorn-strips':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-rose-50 to-red-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Hawthorn Bag */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#991b1b] via-[#b91c1c] to-[#7f1d1d] rounded-t-xl rounded-b-2xl shadow-xl border border-rose-400/40 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-white">
            <div className="text-center">
              <div className="text-[9px] font-black tracking-widest text-amber-300">Tefeeo 特菲奥</div>
              <div className="text-xs font-black text-rose-100 mt-0.5">{product.name}</div>
            </div>

            <div className="text-center my-auto">
              <div className="text-3xl">🍒</div>
              <div className="text-[7px] text-amber-200 mt-1 font-bold">
                100% 承德鲜山楂原果打浆
              </div>
            </div>

            <div className="border-t border-rose-400/30 pt-1 flex justify-between text-[7px] text-rose-200">
              <span className="font-bold text-white">{product.specification || '精致便携装'}</span>
              <span>酸甜开胃</span>
            </div>
          </div>
        </div>
      );
    case 'tefeeo-shrimp-chips-blue':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-sky-50 to-blue-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Blue Bag Representation */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#1d4ed8] via-[#1e40af] to-[#1e3a8a] rounded-t-xl rounded-b-2xl shadow-xl border border-blue-400/30 flex flex-col justify-between p-2.5 text-white transform hover:scale-105 transition-transform">
            {/* Top Handle Slot */}
            <div className="w-10 h-3 bg-slate-200/90 rounded-full mx-auto shadow-inner" />
            
            {/* Brand & English Title */}
            <div className="text-center mt-1">
              <div className="text-[11px] font-black tracking-wider flex items-center justify-center gap-1">
                <span>)</span>
                <span className="font-sans">Tefeeo</span>
                <span>(</span>
              </div>
              <div className="text-[10px] font-black tracking-tighter text-amber-300 leading-none mt-0.5">
                SHRIMP SLICES
              </div>
              <div className="text-[8px] italic font-serif text-amber-200 leading-none">
                Chips
              </div>
            </div>

            {/* Chinese & Korean Title */}
            <div className="text-center my-0.5">
              <div className="text-sm font-black text-cyan-300 tracking-wider">
                大虾片
              </div>
              <div className="text-[7px] font-medium text-white/90">
                저민 새우 요리
              </div>
            </div>

            {/* Shrimp stamp & chips graphic */}
            <div className="relative flex items-center justify-between px-1 py-1">
              {/* Circular 30% Badge */}
              <div className="w-9 h-9 rounded-full border border-dashed border-white/80 bg-blue-900/80 flex flex-col items-center justify-center text-center p-0.5 shadow-sm">
                <span className="text-[6px] text-white/80 leading-none">虾含量</span>
                <span className="text-[8px] font-black text-amber-300 leading-none">≥30%</span>
                <span className="text-[6px] font-bold text-cyan-200 leading-none">原虾味</span>
              </div>

              {/* Realistic Shrimp & Chips Mock */}
              <div className="text-right">
                <span className="text-xl">🦐</span>
                <div className="flex gap-0.5 -mt-1 justify-end">
                  <span className="inline-block w-3 h-2 bg-amber-100 rounded-full shadow-xs" />
                  <span className="inline-block w-3.5 h-2.5 bg-amber-200 rounded-full shadow-xs" />
                </div>
              </div>
            </div>

            {/* Bottom Net Weight & Spec */}
            <div className="text-[7px] text-blue-200/90 border-t border-blue-400/30 pt-1 flex justify-between items-center">
              <span className="font-bold text-white">净含量: 240g</span>
              <span className="text-[6px]">含油膨化</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-shrimp-chips-red':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-rose-50 to-red-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Red/Wine Bag Representation */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#881337] via-[#991b1b] to-[#7f1d1d] rounded-t-xl rounded-b-2xl shadow-xl border border-rose-400/30 flex flex-col justify-between p-2.5 text-white transform hover:scale-105 transition-transform">
            {/* Top Handle Slot */}
            <div className="w-10 h-3 bg-slate-200/90 rounded-full mx-auto shadow-inner" />
            
            {/* Brand & English Title */}
            <div className="text-center mt-1">
              <div className="text-[11px] font-black tracking-wider flex items-center justify-center gap-1">
                <span>)</span>
                <span className="font-sans">Tefeeo</span>
                <span>(</span>
              </div>
              <div className="text-[10px] font-black tracking-tighter text-amber-300 leading-none mt-0.5">
                SHRIMP SLICES
              </div>
              <div className="text-[8px] italic font-serif text-amber-200 leading-none">
                Chips
              </div>
            </div>

            {/* Chinese & Korean Title */}
            <div className="text-center my-0.5">
              <div className="text-sm font-black text-cyan-300 tracking-wider">
                大虾片
              </div>
              <div className="text-[7px] font-medium text-white/90">
                저민 새우 요리
              </div>
            </div>

            {/* Tomato & Shrimp stamp */}
            <div className="relative flex items-center justify-between px-1 py-1">
              <div className="w-9 h-9 rounded-full border border-dashed border-white/80 bg-red-950/80 flex flex-col items-center justify-center text-center p-0.5 shadow-sm">
                <span className="text-[6px] text-white/80 leading-none">虾含量</span>
                <span className="text-[8px] font-black text-amber-300 leading-none">≥30%</span>
                <span className="text-[6px] font-bold text-rose-200 leading-none">番茄味</span>
              </div>

              {/* Tomato & Chips Mock */}
              <div className="text-right">
                <span className="text-xl">🍅</span>
                <div className="flex gap-0.5 -mt-1 justify-end">
                  <span className="inline-block w-3 h-2 bg-amber-100 rounded-full shadow-xs" />
                  <span className="inline-block w-3.5 h-2 bg-amber-200 rounded-full shadow-xs" />
                </div>
              </div>
            </div>

            {/* Bottom Net Weight & Spec */}
            <div className="text-[7px] text-rose-200/90 border-t border-rose-400/30 pt-1 flex justify-between items-center">
              <span className="font-bold text-white">净含量: 240g</span>
              <span className="text-[6px]">独立充气</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-egg-yolk-rice-crisps':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-yellow-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Yellow Standup Pouch */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#eab308] via-[#ca8a04] to-[#1e1e1e] rounded-t-lg rounded-b-xl shadow-xl border border-amber-300/40 flex flex-col justify-between overflow-hidden transform hover:scale-105 transition-transform text-slate-900">
            {/* Top Zipper Notch Area */}
            <div className="pt-2 px-2.5 text-center">
              <div className="text-[10px] font-black tracking-widest text-slate-900 flex items-center justify-center gap-0.5">
                <span>)</span>
                <span>Tefeeo 特菲奥</span>
                <span>(</span>
              </div>
              <div className="text-xs font-black tracking-tight text-slate-950 mt-1 leading-tight">
                蟹香蛋黄味
              </div>
              <div className="text-sm font-black tracking-wider text-slate-950 leading-none">
                糯米锅巴
              </div>
              <div className="text-[6px] font-bold text-slate-800 tracking-tighter mt-0.5">
                双面厚涂 · 整粒糯米
              </div>
            </div>

            {/* Egg yolk on golden rice crisps mock */}
            <div className="relative px-2 py-1 flex items-center justify-center">
              <div className="relative">
                {/* Rice crisps stack */}
                <div className="w-14 h-9 bg-amber-400 border border-amber-500 rounded shadow-md transform rotate-2 flex items-center justify-center">
                  {/* Salted Egg Yolk Sphere */}
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-300 shadow-md flex items-center justify-center -mt-2">
                    <div className="w-2 h-2 rounded-full bg-white/60 blur-[0.5px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Black bottom section */}
            <div className="bg-slate-950 text-white p-2 flex justify-between items-center text-[7px]">
              <span className="text-amber-400 font-bold">真实添加咸鸭蛋黄</span>
              <span className="text-white font-mono">净含量: 225克</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-hazelnut-cocoa-wafer':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-stone-50 to-orange-100/50 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* White Cocoa Bag */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#fdfbf7] via-[#f5ede3] to-[#ebdcd0] rounded-t-lg rounded-b-xl shadow-xl border border-stone-300 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-stone-900">
            {/* Top Brand */}
            <div className="text-center">
              <div className="text-[10px] font-black tracking-widest flex items-center justify-center gap-0.5">
                <span>)</span>
                <span>Tefeeo 特菲奥</span>
                <span>(</span>
              </div>
              <div className="text-xs font-black text-amber-950 mt-1 leading-tight tracking-tight">
                榛子可可威化饼干
              </div>
            </div>

            {/* 3 Formula Stats Bar */}
            <div className="bg-[#78350f] text-white rounded px-1 py-0.5 grid grid-cols-3 text-center text-[6px] leading-tight my-1">
              <div>
                <span className="font-bold text-amber-300">≥7%</span>
                <span className="block text-[5px] text-stone-300">可可粉</span>
              </div>
              <div className="border-x border-amber-600/50">
                <span className="font-bold text-amber-300">≥8%</span>
                <span className="block text-[5px] text-stone-300">新西兰乳粉</span>
              </div>
              <div>
                <span className="font-bold text-amber-300">≥5%</span>
                <span className="block text-[5px] text-stone-300">榛子酱</span>
              </div>
            </div>

            {/* Wafer biscuit illustration mock */}
            <div className="relative py-1 flex items-center justify-center">
              <div className="relative w-12 h-10 bg-[#d97706] rounded border border-amber-800 shadow flex flex-col justify-evenly px-0.5">
                <div className="h-0.5 bg-[#451a03] rounded-full" />
                <div className="h-0.5 bg-[#451a03] rounded-full" />
                <div className="h-0.5 bg-[#451a03] rounded-full" />
              </div>
              <span className="absolute -top-1 right-3 text-sm">🍫</span>
            </div>

            {/* Bottom info */}
            <div className="border-t border-stone-300/80 pt-1 flex justify-between text-[7px] text-stone-700 font-semibold">
              <span>四层酥脆薄饼</span>
              <span className="text-amber-950 font-bold">净含量: 238克</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-jasmine-tea-wafer':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-emerald-50 to-teal-100/50 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Mint Green Jasmine Tea Pouch */}
          <div className="relative w-36 h-48 bg-gradient-to-b from-[#f0fdf4] via-[#e6f7ec] to-[#d1fae5] rounded-t-lg rounded-b-xl shadow-xl border border-emerald-300 flex flex-col justify-between p-2.5 transform hover:scale-105 transition-transform text-emerald-950">
            {/* Top Brand */}
            <div className="text-center">
              <div className="text-[10px] font-black tracking-widest flex items-center justify-center gap-0.5 text-emerald-900">
                <span>)</span>
                <span>Tefeeo 特菲奥</span>
                <span>(</span>
              </div>
              <div className="text-xs font-black text-emerald-950 mt-1 leading-tight tracking-tight">
                茉莉绝弦威化饼干
              </div>
            </div>

            {/* 3 Formula Stats Bar */}
            <div className="bg-[#065f46] text-white rounded px-1 py-0.5 grid grid-cols-3 text-center text-[6px] leading-tight my-1">
              <div>
                <span className="font-bold text-emerald-200">≥2%</span>
                <span className="block text-[5px] text-emerald-300">茉莉茶粉</span>
              </div>
              <div className="border-x border-emerald-700">
                <span className="font-bold text-emerald-200">≥8%</span>
                <span className="block text-[5px] text-emerald-300">新西兰乳粉</span>
              </div>
              <div>
                <span className="font-bold text-emerald-200">≥2%</span>
                <span className="block text-[5px] text-emerald-300">抹茶粉</span>
              </div>
            </div>

            {/* Green matcha wafer mock */}
            <div className="relative py-1 flex items-center justify-center">
              <div className="relative w-12 h-10 bg-[#fde047] rounded border border-emerald-600 shadow flex flex-col justify-evenly px-0.5">
                <div className="h-0.5 bg-[#059669] rounded-full" />
                <div className="h-0.5 bg-[#059669] rounded-full" />
                <div className="h-0.5 bg-[#059669] rounded-full" />
              </div>
              <span className="absolute -top-1 right-3 text-sm">🍵</span>
            </div>

            {/* Bottom info */}
            <div className="border-t border-emerald-300/80 pt-1 flex justify-between text-[7px] text-emerald-800 font-semibold">
              <span>新中式茶点</span>
              <span className="text-emerald-950 font-bold">净含量: 238克</span>
            </div>
          </div>
        </div>
      );

    case 'tefeeo-popcorn':
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-amber-50 to-orange-100/60 overflow-hidden cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          {/* Popcorn Transparent Canister */}
          <div className="relative w-32 h-48 bg-gradient-to-b from-white/90 via-amber-100/80 to-amber-200/90 rounded-2xl shadow-xl border-2 border-amber-300/60 flex flex-col justify-between p-2 transform hover:scale-105 transition-transform text-slate-900 overflow-hidden">
            <div className="bg-amber-500 text-white text-[8px] font-black text-center py-0.5 rounded-md tracking-wider">
              TEFEEO POPCORN
            </div>
            
            {/* Clustered Popcorn kernels inside tub */}
            <div className="text-center my-auto">
              <div className="text-2xl">🍿</div>
              <div className="text-[11px] font-black text-amber-950 leading-tight mt-1">
                美式球形爆米花
              </div>
              <div className="text-[7px] text-amber-800 font-medium">
                焦糖浓郁 / 饱满挂糖
              </div>
              <div className="inline-block mt-1 bg-amber-500/20 text-amber-900 text-[6px] font-bold px-1.5 py-0.5 rounded">
                邯郸美乐城在架实拍
              </div>
            </div>

            <div className="border-t border-amber-300 pt-1 text-center text-[7px] text-amber-900 font-bold">
              净含量: 160g / 透明高桶装
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div
          className={`relative w-full h-full flex items-center justify-center p-4 bg-gradient-to-b from-slate-50 to-slate-100 text-slate-700 cursor-pointer ${className}`}
          onClick={onClickZoom}
        >
          <div className="text-center p-4 rounded-xl border border-dashed border-slate-300 bg-white/70 max-w-[80%]">
            <span className="text-2xl mb-1 block">📦</span>
            <div className="text-xs font-bold text-slate-800 line-clamp-1">{product.name}</div>
            <div className="text-[10px] text-slate-500 mt-0.5 font-mono">{product.specification || '标准零售装'}</div>
          </div>
        </div>
      );
  }
};
