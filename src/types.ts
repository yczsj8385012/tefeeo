export type Language = 'zh' | 'en' | 'vi' | 'ja' | 'ko' | 'ar' | 'th';

export type ActivePageView = 'home' | 'products' | 'retail' | 'services' | 'about';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export interface BusinessPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  tag: string;
  badge: string;
  targetRegions?: string;
}

export interface DistributionChannel {
  id: string;
  name: string;
  category: string;
  reach: string;
  partners: string[];
  description: string;
  growth: string;
}

export interface RetailStorePresence {
  id: string;
  storeName: string;
  location: string;
  date: string;
  type: string;
  highlight: string;
  channelCategory: string;
  shelfTag: string;
  imageUrl?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  nameEn?: string;
  brand: '特菲奥 Tefeeo' | 'IMPERIAL 帝国' | 'Nairn\'s' | 'McVitie\'s';
  brandType: 'proprietary_brand' | 'imported_agency';
  category: string;
  origin: string;
  specification?: string;
  ingredientsHighlight?: string;
  highlight: string;
  channels: string[];
  targetMarkets?: string[];
  badge?: string;
  colorScheme: 'red' | 'blue' | 'amber' | 'emerald' | 'purple' | 'gold';
  imageUrl?: string;
}

export interface CorporateInfo {
  companyName: string;
  shortName: string;
  legalRepresentative: string;
  establishedDate: string;
  unifiedSocialCreditCode: string;
  organizationCode: string;
  registrationNumber: string;
  registeredAddress: string;
  officeAddress: string;
  customerServiceHotline: string;
  nationalTollFree: string;
  email: string;
  registeredCapital: string;
  operatingPeriod: string;
  registrationAuthority: string;
  businessScope: string;
  status: string;
}

export interface TranslationStrings {
  nav: {
    home: string;
    about: string;
    services: string;
    distribution: string;
    retailPresence: string;
    products: string;
    b2bHub: string;
    contact: string;
    partnerBtn: string;
  };
  hero: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      experience: { value: string; label: string };
      coverage: { value: string; label: string };
      channels: { value: string; label: string };
      efficiency: { value: string; label: string };
    };
    trustBadge: string;
  };
  pillars: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: BusinessPillar[];
  };
  distribution: {
    sectionTag: string;
    title: string;
    subtitle: string;
    coverageTitle: string;
    coverageDesc: string;
    metrics: {
      retailers: string;
      tierCoverage: string;
      logisticsHubs: string;
      ecommercePlatforms: string;
    };
    channels: DistributionChannel[];
    channelMatrixTitle?: string;
    applyChannelBtn?: string;
    targetReachLabel?: string;
    terminalsLabel?: string;
    warehousingTitle?: string;
    warehousingSubtitle?: string;
    warehousingDesc?: string;
    hubs?: {
      city: string;
      role: string;
      warehouse: string;
    }[];
  };
  simulator?: {
    badge: string;
    title: string;
    subtitle: string;
    step1Category: string;
    step2Origin: string;
    step3Strategy: string;
    categories: {
      food_beverage: string;
      beauty_care: string;
      stationery_office: string;
      household_goods: string;
    };
    origins: {
      europe: string;
      japan_korea: string;
      southeast_asia: string;
      middle_east: string;
      americas: string;
      china_local: string;
    };
    strategies: {
      omni_channel: string;
      membership_hyper: string;
      cvs_online: string;
    };
    trustNote: string;
    resultBadge: string;
    resultTitle: string;
    timelineLabel: string;
    timelineSub: string;
    reachLabel: string;
    reachSub: string;
    channelsLabel: string;
    moqLabel: string;
    applyBtn: string;
  };
  retailPresence: {
    sectionTag: string;
    title: string;
    subtitle: string;
    verifiedBadge: string;
    uploadManage?: string;
    uploadHint?: string;
    containMode?: string;
    coverMode?: string;
    uploadBtn?: string;
    replaceBtn?: string;
    viewFull?: string;
    liveStatus?: string;
    auditBadge?: string;
    kaInspection?: string;
    selectedArchive?: string;
    currentSelected?: string;
    onShelfStatus?: string;
    realProofTag?: string;
    viewOriginal?: string;
    guaranteeTitle?: string;
    guaranteeDesc?: string;
    guaranteeSub?: string;
  };
  products: {
    sectionTag: string;
    title: string;
    subtitle: string;
    allTab: string;
    proprietaryTab: string;
    importedTab: string;
    inquireSample: string;
    exportTag: string;
    searchPlaceholder?: string;
    allCategories?: string;
    viewSpecs?: string;
    specLabel?: string;
    ingredientsLabel?: string;
    originLabel?: string;
    targetMarketsLabel?: string;
    channelsLabel?: string;
    inStock?: string;
    replacePhoto?: string;
    uploadPhoto?: string;
    viewFull?: string;
    replace?: string;
    specPrefix?: string;
    realPhotoProof?: string;
    clickToUpload?: string;
    autoFitDesc?: string;
    selectFile?: string;
    officialProof?: string;
    proprietaryProof?: string;
    containMode?: string;
    coverMode?: string;
    exportBackup?: string;
    resetPhotos?: string;
    photosSavedCount?: string;
    photoManageTitle?: string;
    photoManageDesc?: string;
    noProductsFound?: string;
    itemsFoundSuffix?: string;
    photoArchiveTitle?: string;
    photoUpdatedToast?: string;
  };
  subpages?: {
    productsTitle: string;
    productsDesc: string;
    retailTitle: string;
    retailDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    aboutTitle: string;
    aboutDesc: string;
  };
  common?: {
    backToHome: string;
    viewAllProducts: string;
    hotlineLabel: string;
    gaccBadge: string;
    creditCodeLabel: string;
    globalTrade: string;
    officialInquiry: string;
    viewCreditRecord: string;
    origin: string;
    specification: string;
    ingredients: string;
    targetMarkets: string;
    channels: string;
    clear: string;
    close?: string;
  };
  process: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
    banner?: {
      tag: string;
      title: string;
      desc: string;
      cta: string;
    };
  };
  credentials: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewLicense: string;
    verifiedByGov: string;
    labels: {
      creditCode: string;
      estDate: string;
      legalRep: string;
      headquarters: string;
      regCapital: string;
      status: string;
      scope: string;
    };
  };
  b2bInquiry: {
    sectionTag: string;
    title: string;
    subtitle: string;
    form: {
      companyName: string;
      contactPerson: string;
      email: string;
      phone: string;
      country: string;
      interestType: string;
      interestOptions: {
        importAgency: string;
        tefeeoExport: string;
        distribution: string;
        wholesale: string;
      };
      productCategory: string;
      message: string;
      submitBtn: string;
      successTitle: string;
      successDesc: string;
    };
  };
  footer: {
    companyTagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    address: string;
    rights: string;
    creditCodeLabel: string;
  };
}
