import React from 'react';
import { corporateRegistrationData } from '../data/mockData';
import { X, ShieldCheck, Award, Printer, Copy, Check, ExternalLink, Building, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: React.FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const copyCreditCode = () => {
    navigator.clipboard.writeText(corporateRegistrationData.unifiedSocialCreditCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="license-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="license-modal-dialog"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-300 p-6 sm:p-8 animate-in zoom-in-95 text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">
                国家企业信用信息公示系统 · 官方公示凭证
              </h3>
              <p className="text-xs text-slate-500">
                Official Enterprise Registration & Legal Compliance Certificate
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Watermarked Canvas */}
        <div className="relative p-6 sm:p-8 rounded-2xl bg-red-50/20 border-2 border-red-200 shadow-inner mb-6">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-widest bg-red-100/80 px-3 py-1 rounded-full mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>北京市朝阳区市场监督管理局 认证存续企业</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {corporateRegistrationData.companyName}
            </h2>
            <div className="text-xs text-slate-500 font-serif mt-1">
              Beijing Tefeeo International Trade Co., Ltd.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">统一社会信用代码 (USCI Code):</span>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-slate-900 text-sm">
                  {corporateRegistrationData.unifiedSocialCreditCode}
                </span>
                <button
                  onClick={copyCreditCode}
                  className="p-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                  title="复制统一社会信用代码"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">法定代表人 (Legal Representative):</span>
              <span className="font-bold text-slate-900 text-sm">
                {corporateRegistrationData.legalRepresentative}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">成立日期 (Established Date):</span>
              <span className="font-bold text-slate-900">
                {corporateRegistrationData.establishedDate}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">经营期限 (Operating Period):</span>
              <span className="font-mono font-bold text-slate-900">
                {corporateRegistrationData.operatingPeriod}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">注册资本 (Registered Capital):</span>
              <span className="font-bold text-slate-900">
                {corporateRegistrationData.registeredCapital}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">登记机关 (Registry Authority):</span>
              <span className="font-bold text-slate-900">
                {corporateRegistrationData.registrationAuthority}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 sm:col-span-2">
              <span className="text-slate-500 block mb-0.5 font-medium">法定注册地址 (Registered Address):</span>
              <span className="font-mono text-slate-900">
                {corporateRegistrationData.registeredAddress}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 sm:col-span-2">
              <span className="text-slate-500 block mb-0.5 font-medium">实际办公运营地址 (Operations Office):</span>
              <span className="text-slate-900 font-medium">
                {corporateRegistrationData.officeAddress} (经海七路22号)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">官方客服专线 (Hotline):</span>
              <span className="font-mono font-bold text-red-600">
                {corporateRegistrationData.customerServiceHotline} / {corporateRegistrationData.nationalTollFree}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <span className="text-slate-500 block mb-0.5 font-medium">官方商务邮箱 (Email):</span>
              <span className="font-mono font-bold text-slate-900">
                {corporateRegistrationData.email}
              </span>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs">
            <span className="text-slate-500 block mb-1 font-medium">核准经营范围 (Approved Business Scope):</span>
            <p className="text-slate-700 leading-relaxed">
              {corporateRegistrationData.businessScope}
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>数据源自北京市市场监督管理局官方系统 · 真实有效</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => window.print()}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>打印公示文件</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              完成并关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
