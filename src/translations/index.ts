import { Language, LanguageOption, TranslationStrings } from '../types';
import { zh } from './zh';
import { en } from './en';
import { vi } from './vi';
import { ja } from './ja';
import { ko } from './ko';
import { ar } from './ar';
import { th } from './th';

export const languageOptions: LanguageOption[] = [
  { code: 'zh', label: '简体中文', nativeName: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'vi', label: 'Tiếng Việt', nativeName: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
  { code: 'ja', label: '日本語', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ko', label: '한국어', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'ar', label: 'العربية', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'th', label: 'ไทย', nativeName: 'ไทย', flag: '🇹🇭', dir: 'ltr' },
];

export const translations: Record<Language, TranslationStrings> = {
  zh,
  en,
  vi,
  ja,
  ko,
  ar,
  th,
};
