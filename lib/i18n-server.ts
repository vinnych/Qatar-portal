import { cookies } from 'next/headers';
import { translations, Language } from './i18n-data';

export async function getServerLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value;
  return (locale === 'ar' || locale === 'en') ? locale as Language : 'en';
}

export async function getT() {
  const lang = await getServerLanguage();
  return (key: string): string => {
    return translations[key]?.[lang] || key;
  };
}
