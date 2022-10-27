import { useRouter } from 'next/router';
import en from '@locales/en';
import vi from '@locales/vi';

const useTranslations = () => {
  const { locale } = useRouter();
  const translation = locale === 'vi' ? vi : en;
  return translation;
};

export default useTranslations;
