import React from 'react';
import { Language } from '../types';
import { translations, languageOptions } from '../translations';
import { corporateRegistrationData } from '../data/mockData';
import { ShieldCheck, FileText, CheckCircle2, Building, ExternalLink, Calendar, MapPin, Hash, UserCheck, Phone, Mail } from 'lucide-react';

interface CompanyCredentialsProps {
  currentLang: Language;
  onOpenLicenseModal: () => void;
}

export const CompanyCredentials: React.FC<CompanyCredentialsProps> = ({
  currentLang,
  onOpenLicenseModal,
}) => {
  const t = translations[currentLang];
  const isRtl = languageOptions.find((l) => l.code === currentLang)?.dir === 'rtl';

  return (
    <section
      id="company-credentials"
      className="py-24 bg-slate-100/70 text-slate-900 border-b border-slate-200"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-md mb-3 border border-emerald-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.credentials.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.credentials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.credentials.subtitle}
          </p>
        </div>

        {/* Credentials Grid Card */}
        <div className="bg-white rounded-3xl border border-slate-300 shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  国家企业信用信息公示系统审核存续企业 · 开幕存续中
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {corporateRegistrationData.companyName}
              </h3>
              <p className="text-xs text-slate-400 font-medium">
                Beijing Tefeeo International Trade Co., Ltd.
              </p>
            </div>

            <button
              onClick={onOpenLicenseModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer border border-red-400/30"
            >
              <FileText className="w-4 h-4" />
              <span>{t.credentials.viewLicense}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Credit Code */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                  <Hash className="w-3.5 h-3.5 text-red-600" />
                  <span>{t.credentials.labels.creditCode}</span>
                </div>
                <div className="text-sm font-mono font-bold text-slate-900">
                  {corporateRegistrationData.unifiedSocialCreditCode}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  全国统一社会信用代码 / 组织机构代码: {corporateRegistrationData.organizationCode}
                </div>
              </div>

              {/* Est Date */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                  <Calendar className="w-3.5 h-3.5 text-red-600" />
                  <span>{t.credentials.labels.estDate}</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {corporateRegistrationData.establishedDate}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  {corporateRegistrationData.operatingPeriod}
                </div>
              </div>

              {/* Legal Rep */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                  <UserCheck className="w-3.5 h-3.5 text-red-600" />
                  <span>{t.credentials.labels.legalRep}</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {corporateRegistrationData.legalRepresentative}
                </div>
                <div className="text-[11px] text-emerald-600 font-medium mt-1">
                  法定代表人 · 执行董事 (高李军)
                </div>
              </div>

              {/* Reg Capital */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                  <Building className="w-3.5 h-3.5 text-red-600" />
                  <span>{t.credentials.labels.regCapital}</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {corporateRegistrationData.registeredCapital}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  注册号: {corporateRegistrationData.registrationNumber}
                </div>
              </div>

              {/* Authority */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                  <span>法定登记主管机关</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {corporateRegistrationData.registrationAuthority}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  国家市场监督管理总局公示系统在册存续
                </div>
              </div>

              {/* Customer Hotline */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-1">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  <span>客服与贸易专线</span>
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono">
                  {corporateRegistrationData.customerServiceHotline}
                </div>
                <div className="text-[11px] text-red-600 font-mono mt-1">
                  全国免费电话: {corporateRegistrationData.nationalTollFree}
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>法定注册地址:</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-mono">
                  {corporateRegistrationData.registeredAddress}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                  <Building className="w-4 h-4 text-blue-600" />
                  <span>实际办公运营地址:</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {corporateRegistrationData.officeAddress} (经海七路22号)
                </p>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                  <Mail className="w-3 h-3" />
                  <span>官方商务邮箱: {corporateRegistrationData.email}</span>
                </div>
              </div>
            </div>

            {/* Scope of Business */}
            <div className="p-5 rounded-2xl bg-red-50/40 border border-red-200">
              <div className="text-xs font-bold text-red-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>法定核准经营范围 (具备食品进出口及大宗贸易完整资质)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {corporateRegistrationData.businessScope}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
